import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { v7 as uuid } from "uuid";

export const createSubfieldSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  icon: z.string({ message: "INVALID_ICON" }).optional(),
  description: z.string().optional(),
  sortOrder: z.number().optional().default(0),
});

export type CreateFieldInput = z.infer<typeof createSubfieldSchema>;

export async function createField(data: CreateFieldInput,) {
  return prisma.field.create({
    data: data,
  });
}

export async function listFields() {

  const fields = await prisma.field.findMany({
    select: {
      publicId: true,
      name: true,
      code: true,
      icon: true,
      description: true,
      sortOrder: true,
      _count: {
        select: { subfields: true },
      }
    },
    orderBy: { sortOrder: "asc" },
  })

  return fields.map((subfield) => ({
    publicId: subfield.publicId,
    name: subfield.name,
    code: subfield.code,
    icon: subfield.icon,
    description: subfield.description,
    sortOrder: subfield.sortOrder,
    subfields: subfield._count.subfields,
  }));
}


export async function findField(publicId: string) {

  const field = await prisma.field.findUniqueOrThrow({
    where: {
      publicId
    },
    select: {
      publicId: true,
      name: true,
      code: true,
      icon: true,
      description: true,
      sortOrder: true,
      _count: {
        select: { subfields: true },
      }
    }
  })

  return {
    publicId: field.publicId,
    name: field.name,
    code: field.code,
    icon: field.icon,
    description: field.description,
    sortOrder: field.sortOrder,
    subfields: field._count.subfields
  };
}

export async function findFieldBySubfield(subfieldPublicId: string) {
  return (await prisma.subfield.findUniqueOrThrow({
    where: {
      publicId: subfieldPublicId
    },
    include: {
      field: true
    }
  })).field;
}