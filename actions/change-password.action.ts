"use server"

import { z } from "zod"
import { cookies } from "next/headers";

const userSchema = z.object({
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  publicId: z.string()
})

export async function changePasswordAction(state: unknown, formData: FormData) {
  const rawData = {
    password: formData.get("password"),
    publicId: formData.get("publicId"),
  }

  const parsed = userSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      success: false,
      errors: z.treeifyError(parsed.error),
    }
  }

  const { password } = parsed.data

  try {
    const cookieStore = await cookies();
    await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users/${ rawData.publicId }`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieStore.toString(),
      },
      body: JSON.stringify({ password }),
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