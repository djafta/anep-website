import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { v7 as uuid } from "uuid";
import { hashPassword } from "@/services/password.service";

export async function findUserByEmail(email: string) {

  return prisma.user.findUniqueOrThrow({
    where: { email },
    select: {
      publicId: true,
      id: true,
      name: true,
      email: true,
      role: true,
      scopes: true,
      deletedAt: true,
      blockedAt: true,
    }
  })
}

export async function findUserByPublicId(publicId: string) {
  return prisma.user.findUniqueOrThrow({
    where: { publicId },
    select: {
      publicId: true,
      id: true,
      name: true,
      email: true,
      role: true,
      scopes: true,
      deletedAt: true,
      blockedAt: true,
    }
  })
}

export async function findPasswordHashByEmail(email: string) {
  return prisma.user.findUniqueOrThrow({
    where: { email, deletedAt: null },
    select: {
      passwordHash: true,
    }
  })
}

export const createUserSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string().min(1, { message: "INVALID_NAME" }),
  email: z.email({ message: "INVALID_EMAIL" }),
  password: z.string().min(6, { message: "INVALID_PASSWORD" }),
  scopes: z.string().array().optional().default([]),
});

export async function createUser(data: z.infer<typeof createUserSchema>) {
  const passwordHash = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      publicId: data.publicId,
      name: data.name,
      email: data.email,
      passwordHash: passwordHash,
      scopes: data.scopes,
    },
    select: {
      id: true,
      publicId: true,
      name: true,
      email: true,
      role: true,
    }
  })

}

export async function listUsers() {
  return prisma.user.findMany({
    select: {
      publicId: true,
      id: true,
      name: true,
      email: true,
      role: true,
      scopes: true,
      deletedAt: true,
      blockedAt: true,
    }
  })
}

export const updateUserSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string().min(1, { message: "INVALID_NAME" }).optional(),
  email: z.email({ message: "INVALID_EMAIL" }).optional(),
  password: z.string().min(6, { message: "INVALID_PASSWORD" }).optional(),
  scopes: z.string().array().optional().default([]),
});

export async function updateUser(data: z.infer<typeof updateUserSchema>) {
  const user = await prisma.user.findUniqueOrThrow({ where: { publicId: data.publicId } });

  const passwordHash = data.password ? await hashPassword(data.password) : user.passwordHash
  return prisma.user.update({
    where: { publicId: data.publicId },
    data: {
      name: data.name || user.name,
      email: data.email || user.email,
      passwordHash: passwordHash,
      scopes: data.scopes || [],
    },
  });
}

export async function findUser(publicId: string) { return prisma.user.findUniqueOrThrow({ where: { publicId } }) }