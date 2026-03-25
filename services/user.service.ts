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
      passwordHash: true,
    }
  })
}

export const createUserSchema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string().min(1, { message: "INVALID_NAME" }),
  email: z.email({ message: "INVALID_EMAIL" }),
  password: z.string().min(6, { message: "INVALID_PASSWORD" }),
});

export async function createUser(data: z.infer<typeof createUserSchema>) {
  const passwordHash = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      publicId: data.publicId,
      name: data.name,
      email: data.email,
      passwordHash: passwordHash,
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
      role: true
    }
  })
}
