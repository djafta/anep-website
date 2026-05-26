import { z } from "zod";
import { v7 as uuid } from "uuid";
import { prisma } from "@/lib/prisma";
import { minioClient } from '@/lib/minio';
import { getAuthUser } from "@/lib/auth-user";

export const createQualificationSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  level: z.number({ message: "INVALID_LEVEL" }).min(1, { error: 'INVALID_LEVEL' }).max(10, { error: 'INVALID_LEVEL' }),
  title: z.string({ message: "INVALID_TITLE" }),
  certificate: z.string({ message: "INVALID_CERTIFICATE" }),
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

async function updateQualificationSpec(file: File, currentSpecUrl: string) {
  await deleteQualificationSpec(currentSpecUrl);
  return await uploadQualificationSpec(file);
}

export const updateQualificationSchema = z.object({
  publicId: z.string({ error: "INVALID_QUALIFICATION_ID" }),
  name: z.string({ message: "INVALID_NAME" }).optional(),
  code: z.string({ message: "INVALID_CODE" }).optional(),
  level: z.number({ message: "INVALID_LEVEL" }).min(1, { error: 'INVALID_LEVEL' }).max(10, { error: 'INVALID_LEVEL' }).optional(),
  title: z.string({ message: "INVALID_TITLE" }).optional(),
  certificate: z.string({ message: "INVALID_CERTIFICATE" }).optional(),
  description: z.string().optional(),
  subfieldPublicId: z.string({ message: "INVALID_FIELD_ID" }).optional(),
  sortOrder: z.number().optional().default(0).optional(),
})

export async function updateQualification(data: z.infer<typeof updateQualificationSchema>, file: File) {
  const qualification = await prisma.qualification.findUniqueOrThrow({
    where: { publicId: data.publicId },
    include: {
      subfield: true
    }
  })
  const subfield = await prisma.subfield.findUniqueOrThrow({
    where: {
      publicId: data.subfieldPublicId
    }
  })

  const specUrl = file?.size > 0 ? await updateQualificationSpec(file, qualification.specUrl) : qualification.specUrl;
  const user = await getAuthUser();

  return prisma.qualification.update({
    where: { publicId: data.publicId },
    data: {
      publicId: data.publicId,
      name: data.name,
      code: data.code,
      description: data.description,
      sortOrder: data.sortOrder,
      level: data.level,
      certificate: data.certificate,
      title: data.title,
      specUrl,
      subfieldId: subfield.id || qualification.subfield.id,
      userId: user!.id,
    },
  })
}

async function deleteQualificationSpec(specUrl: string) {
  const objectName = specUrl.split('/').pop();
  if (objectName) {
    await minioClient.removeObject(process.env.MINIO_BUCKET!, objectName);
  }
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

  const user = await getAuthUser();

  if (!user) {
    throw new Error("UNAUTHORIZED");
  }

  return prisma.qualification.create({
    data: {
      publicId: data.publicId,
      name: data.name,
      code: data.code,
      description: data.description,
      sortOrder: data.sortOrder,
      level: data.level,
      certificate: data.certificate,
      title: data.title,
      specUrl,
      subfieldId,
      userId: user.id,
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
      title: true,
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
  const qualification = await prisma.qualification.findUniqueOrThrow({
    where: { publicId },
    include: {
      subfield: true
    }
  })

  return {
    publicId: qualification.publicId,
    title: qualification.title,
    name: qualification.name,
    code: qualification.code,
    description: qualification.description,
    sortOrder: qualification.sortOrder,
    specUrl: qualification.specUrl,
    level: qualification.level,
    certificate: qualification.certificate,
    subfieldPublicId: qualification.subfield.publicId
  }
}

export async function removeQualification(publicId: string) {
  const qualification = await findQualification(publicId);
  if (qualification) {
    await deleteQualificationSpec(qualification.specUrl);
    await prisma.qualification.delete({ where: { publicId } })
  }
}