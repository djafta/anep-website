'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOutAction() {
  const cookiesStore = await cookies();
  cookiesStore.delete("access_token");
  return redirect("/admin");
}