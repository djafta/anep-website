import { User } from "@/lib/types";
import { cookies } from "next/headers";
import { ChangeUserPasswordForm } from "@/components/admin/users/change-user-password.form";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const user: User = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users/${ id }`, {
    cache: "no-store",
    credentials: "include",
    headers: {
      cookie: cookieStore.toString(),
    }
  }).then(response => response.json());

  return (
    <div className={ 'flex flex-col gap-4 flex-1' }>
      <div className="space-y-4 text-sm">
        <h2 className="font-semibold text-lg">{ user.name }</h2>
        <p className="font-medium">{ user.email }</p>

        <div>
          <p className="text-muted-foreground">Perfil</p>
          <Badge>{ user.role }</Badge>
        </div>
      </div>
      <Separator/>
      <ChangeUserPasswordForm publicId={ id }/>
    </div>
  )
}