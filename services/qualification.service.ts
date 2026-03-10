import { z } from "zod";
import { v7 as uuid } from "uuid";
import { prisma } from "@/lib/prisma";
import { minioClient } from '@/lib/minio';

export const createQualificationSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  description: z.string().optional(),
  subfieldPublicId: z.string({ message: "INVALID_FIELD_ID" }),
  sortOrder: z.number().optional().default(0),
})

async function uploadQualificationSpec(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const objectName = `cnqp/qualifications/${ uuid() }-${ file.name.replaceAll(' ', '_') }`;

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

export async function createQualification(
  data: z.infer<typeof createQualificationSchema>,
  file: File
) {
  const specUrl = await uploadQualificationSpec(file);

  const { id: subfieldId } = await prisma.subfield.findUniqueOrThrow({
    where: {
      publicId: data.subfieldPublicId,
    },
  });

  return prisma.qualification.create({
    data: {
      publicId: data.publicId,
      name: data.name,
      code: data.code,
      description: data.description,
      sortOrder: data.sortOrder,
      specUrl,
      subfieldId,
    },
  });
}

export async function listQualifications(subfieldPublicId?: string) {
  let subfieldId;
  if (subfieldPublicId) {
    const subfield = await prisma.subfield.findUnique({
      where: {
        publicId: subfieldPublicId
      }
    })
    subfieldId = subfield?.id;
  }

  const where = subfieldPublicId ? { subfieldId } : undefined;
  return prisma.qualification.findMany({
    where,
    select: {
      publicId: true,
      name: true,
      code: true,
      description: true,
      sortOrder: true,
      specUrl: true,
      level: true,
      certificate: true
    },
    orderBy: { sortOrder: "asc" },
  })
}

export async function findQualification(publicId: string) {
  return prisma.qualification.findUniqueOrThrow({ where: { publicId } })
}