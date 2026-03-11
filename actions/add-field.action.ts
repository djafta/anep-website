"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addFieldAction(state: unknown, formData: FormData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    redirect("/admin");
  }

  const payload = {
    name: String(formData.get("name") || "").trim(),
    description: String(formData.get("description") || "").trim() || undefined,
    code: String(formData.get("code") || "").trim().toUpperCase(),
    sortOrder: formData.get("sortOrder") ? Number(formData.get("sortOrder")) : undefined,
    icon: String(formData.get("icon") || "").trim() || undefined,
  };

  const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: cookieStore.toString(),
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return {
      success: false,
      payload: await response.json()
    }
  }

  return {
    success: true,
    payload: await response.json()
  }
}