import { z } from "zod";
import { v7 as uuid } from "uuid";
import { prisma } from "@/lib/prisma";
import { minioClient } from '@/lib/minio';
import { getAuthUser } from "@/lib/auth-user";

export const createModuleSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  title: z.string({ message: "INVALID_TITLE" }),
  description: z.string().optional(),
  sortOrder: z.number().optional().default(0),
})

async function uploadModuleSpec(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const objectName = `cnqp/modules/${ uuid() }-${ file.name.replaceAll(' ', '_') }`;

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

async function updateModuleSpec(file: File, currentSpecUrl: string) {
  await deleteModuleSpec(currentSpecUrl);
  return await uploadModuleSpec(file);
}

export const updateModuleSchema = z.object({
  publicId: z.string({ error: "INVALID_QUALIFICATION_ID" }),
  name: z.string({ message: "INVALID_NAME" }).optional(),
  code: z.string({ message: "INVALID_CODE" }).optional(),
  title: z.string({ message: "INVALID_TITLE" }).optional(),
  certificate: z.string({ message: "INVALID_CERTIFICATE" }).optional(),
  description: z.string().optional(),
  sortOrder: z.number().optional().default(0).optional(),
})

export async function updateModule(data: z.infer<typeof updateModuleSchema>, file: File | null) {
  const module = await prisma.independentModule.findUniqueOrThrow({
    where: { publicId: data.publicId },
  })
  const specUrl = file ? await updateModuleSpec(file, module.specUrl) : module.specUrl;
  const user = await getAuthUser();

  return prisma.independentModule.update({
    where: { publicId: data.publicId },
    data: {
      publicId: data.publicId,
      name: data.name,
      code: data.code,
      description: data.description,
      sortOrder: data.sortOrder,
      title: data.title,
      specUrl,
      userId: user!.id,
    },
  })
}

async function deleteModuleSpec(specUrl: string) {
  const objectName = specUrl.split('/').pop();
  if (objectName) {
    await minioClient.removeObject(process.env.MINIO_BUCKET!, objectName);
  }
}

export async function createModule(
  data: z.infer<typeof createModuleSchema>,
  file: File
) {
  const specUrl = await uploadModuleSpec(file);

  const user = await getAuthUser();

  if (!user) {
    throw new Error("UNAUTHORIZED");
  }

  return prisma.independentModule.create({
    data: {
      publicId: data.publicId,
      name: data.name,
      code: data.code,
      description: data.description,
      sortOrder: data.sortOrder,
      title: data.title,
      specUrl,
      userId: user.id,
    },
  });
}

export async function listModules() {

  return prisma.independentModule.findMany({
    select: {
      publicId: true,
      title: true,
      name: true,
      code: true,
      description: true,
      sortOrder: true,
      specUrl: true,
    },
    orderBy: { sortOrder: "asc" },
  })
}

export async function findModule(publicId: string) {
  const module = await prisma.independentModule.findUniqueOrThrow({
    where: { publicId },
  })

  return {
    publicId: module.publicId,
    title: module.title,
    name: module.name,
    code: module.code,
    description: module.description,
    sortOrder: module.sortOrder,
    specUrl: module.specUrl,
  }
}

export async function removeModule(publicId: string) {
  const module = await findModule(publicId);
  if (module) {
    await deleteModuleSpec(module.specUrl);
    await prisma.independentModule.delete({ where: { publicId } })
  }
}