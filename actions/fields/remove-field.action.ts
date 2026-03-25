'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function removeFieldAction(state: unknown, formData: FormData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  if (!accessToken) {
    redirect("/admin");
  }

  const publicId = formData.get("publicId") as string;

  const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ publicId }`, {
    method: "DELETE",
    headers: {
      cookie: cookieStore.toString(),
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return {
      success: false,
      payload: await response.json()
    }
  }

  return {
    success: true,
  }
}