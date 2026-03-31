"use server"

import { z } from "zod"
import { cookies } from "next/headers";

const userSchema = z.object({
  newPassword: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  publicId: z.string()
})

const userChangePasswordSchema = z.object({
  newPassword: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  currentPassword: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

export async function changePasswordAction(state: unknown, formData: FormData) {
  const rawData = {
    password: formData.get("password"),
    publicId: formData.get("publicId"),
    newPassword: formData.get("newPassword"),
    currentPassword: formData.get("currentPassword"),
  }

  if (!rawData.publicId) {
    const parsed = userChangePasswordSchema.safeParse(rawData)

    if (!parsed.success) {
      return {
        success: false,
        errors: z.treeifyError(parsed.error),
      }
    }

    const { currentPassword, newPassword } = parsed.data

    try {
      const cookieStore = await cookies();
      await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users/password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          cookie: cookieStore.toString(),
        },
        body: JSON.stringify({
          currentPassword,
          newPassword
        }),
      })

      return {
        success: true,
        message: "Senha alterada com sucesso!",
      }
    } catch (error) {
      return {
        success: false,
        message: "Erro ao alterar senha",
      }
    }
  }

  const parsed = userSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      success: false,
      errors: z.treeifyError(parsed.error),
    }
  }

  const { newPassword } = parsed.data

  try {
    const cookieStore = await cookies();
    await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users/${ rawData.publicId }`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieStore.toString(),
      },
      body: JSON.stringify({ password: newPassword }),
    })

    return {
      success: true,
      message: "Senha alterada com sucesso!",
    }
  } catch (error) {
    return {
      success: false,
      message: "Erro ao alterar senha",
    }
  }
}