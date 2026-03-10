import { SecondaryNav } from "@/components/secondary-nav";
import { redirect } from "next/navigation";
import React from "react";
import { cookies } from "next/headers";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
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

  if (!user) {
    return redirect('/admin')
  }

  return (
    <div className={ 'flex flex-col flex-1 w-full mt-12' }>
      <div className={ 'py-10 ' }>
        <div className={ 'mx-auto w-full max-w-7xl px-4 text-primary' }>
          <h1 className={ 'font-semibold text-3xl' }>Website Admin</h1>
          <p className={ 'text-sm' }>Gestão do conteúdo do website</p>
          <span className={ 'text-xs' }>{ user?.email }</span>
        </div>
      </div>
      <div className={ 'grid md:grid-cols-[20rem_1fr] flex-1 w-full max-w-7xl mx-auto px-4 gap-4' }>
        <SecondaryNav
          links={ [
            { label: 'Dashboard', href: '/admin/dashboard' },
            { label: 'Campos', href: '/admin/dashboard/fields' },
            { label: 'Sub-campos', href: '/admin/dashboard/subfields' },
          ] }
        />
        <div className={ 'flex-1 flex' }>
          { children }
        </div>
      </div>
    </div>
  )
}