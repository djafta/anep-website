import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export type User = {
  publicId: string;
  email: string;
  name: string;
}

export async function getAuthUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) return null;

  try {
    return verifyToken(token) as User;
  } catch {
    return null;
  }
}