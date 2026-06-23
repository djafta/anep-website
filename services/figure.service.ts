import { minioClient } from "@/lib/minio";
import { z } from "zod";
import { v7 as uuid } from "uuid";
import { prisma } from "@/lib/prisma";

export const createFigureSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  title: z.string(),
  description: z.string(),
  sortOrder: z.number().optional().default(0),
  publish: z.string().optional(),
  categories: z.string().optional(),
})

export async function uploadFigure(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const objectName = `gallery/${ file.name.replaceAll(' ', '_') }`;

  await minioClient.putObject(
    process.env.MINIO_BUCKET!,
    objectName,
    buffer,
    buffer.length,
    {
      "Content-Type": file.type,
    }
  );

  return `${ process.env.MINIO_PUBLIC_URL }/${ process.env.MINIO_BUCKET }/${ objectName }`;
}

export async function createFigure({ data, file }: { data: z.infer<typeof createFigureSchema>, file: File }) {
  if (file.length <= 0) {
    throw new Error("FILE_UPLOAD_FAILED");
  }

  const url = await uploadFigure(file);

  return prisma.figure.create({
    data: {
      publicId: data.publicId,
      title: data.title,
      description: data.description,
      sortOrder: data.sortOrder,
      publishedAt: data.publish === 'true' ? new Date().toISOString() : null,
      categories: data.categories,
      url
    }
  });
}

export async function publishFigure({ publicId }: { publicId: string }) {
  await prisma.figure.update({
    data: {
      publishedAt: new Date().toISOString()
    },
    where: {
      publicId
    }
  })
}

export async function unpublishFigure({ publicId }: { publicId: string }) {
  await prisma.figure.update({
    data: {
      publishedAt: null
    },
    where: {
      publicId
    }
  })
}

export async function deleteFigure({ publicId }: { publicId: string }) {
  await prisma.figure.update({
    data: {
      deletedAt: new Date().toISOString()
    },
    where: {
      publicId
    }
  })
}
