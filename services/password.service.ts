import argon2 from "argon2";
import { getAuthUser } from "@/lib/auth-user";
import { prisma } from "@/lib/prisma";

export async function hashPassword(password: string): Promise<string> {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 1024 * 64, //
    timeCost: 3,
    parallelism: 4,
    hashLength: 32
  });
}

export async function verifyPassword(
  hash: string,
  password: string
): Promise<boolean> {
  return argon2.verify(hash, password);
}

interface ChangePasswordOptions {
  currentPassword: string;
  newPassword: string;
}

export async function changeUserPassword(options: ChangePasswordOptions) {
  try {

    const { currentPassword, newPassword } = options;
    const user = await getAuthUser();

    if (!user) {
      throw new Error("UNAUTHORIZED");
    }

    const { passwordHash } = await prisma.user.findUniqueOrThrow({
      where: {
        publicId: user.publicId
      }
    })

    if (!await verifyPassword(passwordHash, currentPassword)) {
      throw new Error("INVALID_PASSWORD");
    }

    await prisma.user.update({
      where: {
        publicId: user.publicId
      },
      data: {
        passwordHash: await hashPassword(newPassword)
      }
    })

    return true;

  } catch {
    return false;
  }
}