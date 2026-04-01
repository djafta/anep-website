import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { v7 as uuid } from "uuid";

export const createFieldSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  description: z.string().optional(),
  sortOrder: z.number().optional().default(0),
});

export type CreateSubfieldInput = z.infer<typeof createFieldSchema>;

export async function createSubfield(
  data: CreateSubfieldInput,
  fieldPublicId: string
) {
  const field = await prisma.field.findUnique({
    where: { publicId: fieldPublicId },
  });

  if (!field) {
    throw new Error("FIELD_NOT_FOUND");
  }

  return prisma.subfield.create({
    data: { ...data, fieldId: field.id },
  });
}

export async function listSubfields(fieldPublicId?: string) {
  let where = undefined;

  if (fieldPublicId) {
    const field = await prisma.field.findUnique({
      where: { publicId: fieldPublicId, deletedAt: null },
    });
    if (!field) {
      throw new Error("FIELD_NOT_FOUND");
    }
    where = { fieldId: field.id, deletedAt: null };
  }

  const subfields = await prisma.subfield.findMany({
    where,
    select: {
      publicId: true,
      name: true,
      code: true,
      description: true,
      sortOrder: true,
      _count: {
        select: { qualifications: true },
      }
    },
    orderBy: { sortOrder: "asc" },
  })

  return subfields.map((subfield) => ({
    publicId: subfield.publicId,
    name: subfield.name,
    code: subfield.code,
    description: subfield.description,
    sortOrder: subfield.sortOrder,
    fieldPublicId,
    qualifications: subfield._count.qualifications
  }));
}


export async function findSubfield(publicId: string) {

  const subfield = await prisma.subfield.findUniqueOrThrow({
    where: {
      publicId,
      deletedAt: null
    },
    select: {
      publicId: true,
      name: true,
      code: true,
      description: true,
      sortOrder: true,
      _count: {
        select: { qualifications: true },
      },
      field: {
        select: { publicId: true },
      }
    }
  })

  return {
    publicId: subfield.publicId,
    name: subfield.name,
    code: subfield.code,
    description: subfield.description,
    sortOrder: subfield.sortOrder,
    fieldPublicId: subfield.field.publicId,
    qualifications: subfield._count.qualifications
  };
}

export async function removeSubfield(publicId: string) {
  await prisma.subfield.update({
    data: { deletedAt: new Date() },
    where: { publicId }
  })
}