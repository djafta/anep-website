"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addQualificationAction(state: unknown, formData: FormData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    redirect("/admin");
  }

  const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/`, {
    method: "POST",
    headers: {
      cookie: cookieStore.toString(),
    },
    body: formData
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