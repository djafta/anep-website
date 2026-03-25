import { redirect } from "next/navigation";
import { getAuthUser } from "@/lib/auth-user";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const user = await getAuthUser();

  if (!user) {
    return redirect('/admin')
  }

  if (user.role !== 'ADMIN') {
    return redirect('/admin/dashboard')
  }

  return children;
}