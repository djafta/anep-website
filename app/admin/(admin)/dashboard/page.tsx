import { Stats } from "@/lib/types";
import { EntryCard } from "@/components/entry-card";
import { BadgeCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const stats: Stats = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/stats`, {
    cache: 'no-store',
  })
    .then(response => response.json())
    .catch(err => console.error(err));

  return (
    <div className={ 'flex-1 py-3' }>
      <div className={ 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4' }>
        <EntryCard
          title={ stats.qualifications.toString() }
          description={ 'Qualificações registadas' }
          href={ '/admin/qualifications' }
          icon={ <BadgeCheck/> }
        />
        <EntryCard
          title={ stats.fields.toString() }
          description={ 'Campos disponíveis' }
          href={ '/admin/fields' }
          icon={ <BadgeCheck/> }
        />
        <EntryCard
          title={ stats.subfields.toString() }
          description={ 'Sub-campos disponíveis' }
          href={ '/admin/subfields' }
          icon={ <BadgeCheck/> }
        />
      </div>
      <Separator className={ "my-10" }/>
      <Card>
        <CardHeader>
          <CardTitle>Análise de qualificações</CardTitle>
          <CardDescription>
            A análise das qualificações é uma funcionalidade que lhe permite obter informações mais apurradas das
            qualificações. Essa análise lhe permitirá por exemplo saber quais qualificações tem os links quebrados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className={ "rounded-full px-4" } asChild>
            <Link href={ '/admin/analysis' }>
              Realizar a análise
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}