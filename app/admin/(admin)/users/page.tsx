'use server';

import { User } from "@/lib/types";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function UsersPage() {
  const cookieStore = await cookies();
  const users: User[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users`, {
    cache: "no-store",
    credentials: "include",
    headers: {
      cookie: cookieStore.toString(),
    }
  }).then(response => response.json());

  return (
    <div className={ 'flex-1 flex flex-col' }>
      <div className={ "flex flex-col gap-4" }>
        <div className={ 'grid grid-cols-3 text-primary px-2 font-semibold text-sm' }>
          <div>
            Nome
          </div>
          <div>
            Email
          </div>
          <div className={'flex items-center gap-2 justify-end'}>
            Função
          </div>
        </div>
        {
          users.map((user) => (
            <Link href={ `/admin/users/${ user.publicId }` } key={ user.publicId }
                  className={ 'grid grid-cols-3 hover:bg-accent p-2 rounded-md text-sm text-muted-foreground' }>
              <div>{ user.name }</div>
              <div>{ user.email }</div>
              <div className={'flex items-center gap-2 justify-end'}>
                <Badge>
                  { user.role }
                </Badge>
              </div>
            </Link>
          ))
        }
        <Separator/>
      </div>
    </div>
  )
}