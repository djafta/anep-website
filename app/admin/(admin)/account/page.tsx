import { getAuthUser } from "@/lib/auth-user";
import UserAccountPage from "@/components/admin/user-account-page";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getAuthUser();
  if (!user) {
    return redirect("/admin");
  }
  return (
    <UserAccountPage user={ user }/>
  )
}