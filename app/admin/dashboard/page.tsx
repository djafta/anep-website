import { Stats } from "@/lib/types";
import { EntryCard } from "@/components/entry-card";
import { BadgeCheck } from "lucide-react";

export default async function AdminDashboardPage() {
  const stats: Stats = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/stats`, {
    cache: 'no-store',
  })
    .then(response => response.json())
    .catch(err => console.error(err));

  return (
    <div className={ 'flex-1' }>
      <div className={ 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4' }>
        <EntryCard
          title={ stats.qualifications.toString() }
          description={ 'Qualificações registadas' }
          href={ '/admin/dashboard/qualifications' }
          icon={ <BadgeCheck/> }
        />
        <EntryCard
          title={ stats.fields.toString() }
          description={ 'Campos disponíveis' }
          href={ '/admin/dashboard/fields' }
          icon={ <BadgeCheck/> }
        />
        <EntryCard
          title={ stats.subfields.toString() }
          description={ 'Sub-campos disponíveis' }
          href={ '/admin/dashboard/subfields' }
          icon={ <BadgeCheck/> }
        />
      </div>
    </div>
  )
}