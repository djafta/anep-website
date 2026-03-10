import { prisma } from "@/lib/prisma";

export async function findUserByEmail(email: string) {

  return prisma.user.findUniqueOrThrow({
    where: { email },
  })
}