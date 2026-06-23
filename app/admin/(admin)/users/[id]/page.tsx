import { User } from "@/lib/types";
import { cookies } from "next/headers";
import { ChangeUserPasswordForm } from "@/components/admin/users/change-user-password.form";
import { Checkbox } from "@/components/ui/checkbox";
import { PERMISSION_GROUPS, ROLES_LABELS } from "@/app/admin/(admin)/users/user-permissions";

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
        <div className={ "rounded-3xl bg-white shadow-xl space-y-4 text-sm p-6 relative" }>
          <h2 className="font-semibold text-3xl">{ user.name }</h2>
          <span className={ 'absolute right-4 top-4 bg-green-700 rounded-full size-2' }/>
          <p className="text-sm px-1 bg-primary rounded-3xl w-fit text-white">{ user.email }</p>
          <p>{ ROLES_LABELS[user.role] }</p>
        </div>

        <div className={ "py-20" }>
          <h2 className={ "my-3 font-semibold text-lg" }>Permissões</h2>

          <div className="rounded-xl flex flex-col gap-4">
            { PERMISSION_GROUPS.map((group) => (
              <div key={ group.label } className="space-y-3">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-foreground">
                    { group.label }
                  </p>
                  <p className="text-xs font-light text-muted-foreground leading-relaxed">
                    { group.desc }
                  </p>
                </div>

                <div className="rounded-xl border border-border/50 divide-y divide-border/40">
                  { group.permissions.map((perm) => {
                    const PermIcon = perm.icon;
                    return (
                      <div
                        key={ perm.value }
                        className="flex items-start gap-4 px-5 py-4"
                      >
                        <div
                          className="h-8 w-8 rounded-lg bg-primary/6 flex items-center justify-center shrink-0 mt-0.5">
                          <PermIcon
                            className="h-3.5 w-3.5 text-primary/50"
                            strokeWidth={ 1.5 }
                          />
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <p className="text-sm font-light text-foreground">
                            { perm.label }
                          </p>
                          <p className="text-xs font-light text-muted-foreground">
                            { perm.desc }
                          </p>
                        </div>
                        <Checkbox
                          name="permissions"
                          value={ perm.value }
                          checked={ user.scopes.includes(perm.value) }
                          className="mt-1 border-border/60 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                      </div>
                    );
                  }) }
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>

      <div className={ "rounded-3xl p-4 my-10 bg-white ring ring-primary" }>
        <ChangeUserPasswordForm publicId={ id }/>
      </div>
    </div>
  )
}