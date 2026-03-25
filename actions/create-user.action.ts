"use server"

import { z } from "zod"

const userSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
})

export async function addUserAction(state: unknown, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const parsed = userSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      success: false,
      errors: z.treeifyError(parsed.error),
    }
  }

  const { name, email, password } = parsed.data

  try {
    await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })

    return {
      success: true,
      message: "Usuário criado com sucesso!",
    }
  } catch (error) {
    return {
      success: false,
      message: "Erro ao criar usuário",
    }
  }
}