"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addSubfieldAction(state: unknown, formData: FormData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    redirect("/admin");
  }

  const payload = {
    name: String(formData.get("name") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    code: String(formData.get("code") || "").trim().toUpperCase(),
    sortOrder: formData.get("sortOrder") ? Number(formData.get("sortOrder")) : 0,
    fieldPublicId: String(formData.get("fieldPublicId") || "").trim(),
  };

  const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ payload.fieldPublicId }/subfields`, {
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