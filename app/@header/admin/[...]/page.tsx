import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";
import { UserMenu } from "@/components/user-menu";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AdminHeader() {
  const cookieStore = await cookies();
  const user = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/users/me`, {
    next: { revalidate: 10 },
    headers: {
      cookie: cookieStore.toString(),
    },
  })
    .then(response => response.json())
    .catch(err => {
      return redirect('/admin')
    });

  return (
    <header
      className={ cn(
        "fixed w-full h-12 top-0 z-50 backdrop-blur-xs flex items-center justify-between border-b",
      ) }>
      <div className="px-4 max-w-7xl w-full h-full mx-auto flex justify-between items-center gap-4">
        {/* Logo */ }
        <div className="my-auto">
          <Image
            alt="ANEP Logo"
            className={ cn("w-8") }
            height={ 1000 }
            src="/logo-min.png"
            width={ 1000 }
          />
        </div>
        <div>
          <UserMenu user={ user }/>
        </div>
      </div>
    </header>
  )
}