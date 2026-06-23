import { SecondaryNav } from "@/components/secondary-nav";
import { redirect } from "next/navigation";
import React, { type ReactNode } from "react";
import { cookies } from "next/headers";
import { User } from "@/lib/types";


export type DashboardLayoutProps = {
  children: ReactNode;
  header?: ReactNode;
}

const CNQPLinks = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Campos', href: '/admin/fields' },
  { label: 'Sub-campos', href: '/admin/subfields' },
  { label: 'Qualificações', href: '/admin/qualifications' },
  { label: "Módulos Independentes", href: "/admin/modules/independents" },
]

const GalleryLinks = [
  { label: 'Galeria', href: '/admin/gallery' },
]

const DGTSIDLinks = [
  { label: 'Utilizadores', href: '/admin/users' }
]

export default async function AdminDashboardLayout({ children, header }: DashboardLayoutProps) {
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

  function getRolesForUser(user: User) {

    if (user.role === 'ADMIN') {
      return [...CNQPLinks, ...GalleryLinks, ...DGTSIDLinks];
    }

    const links: { label: string, href: string }[] = [];

    if (user.scopes.includes('create:qualifications')) {
      links.push(...CNQPLinks)
    }

    if (user.scopes.includes('create:figure')) {
      links.push(...GalleryLinks)
    }

    return links;
  }


  return (
    <div className={ 'flex flex-col flex-1 w-full mt-12 bg-gray-50' }>
      <div className={ "sticky lg:top-4 bg-gray-50 z-40" }>
        { header }
      </div>
      <div className={ 'grid md:grid-cols-[20rem_1fr] flex-1 w-full max-w-7xl mx-auto px-4 gap-4' }>
        <SecondaryNav links={ getRolesForUser(user) }/>
        <div className={ 'flex-1 flex' }>
          { children }
        </div>
      </div>
    </div>
  )
}