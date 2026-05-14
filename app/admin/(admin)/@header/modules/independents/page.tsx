import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function DashboardHeader() {
  return (
    <PageHeader
      title={ "Módulos Independentes" }
      description="Gerencie módulos independentes">
      <div>
        <Button asChild>
          <Link href={ "/admin/modules/independents/new" }>
            <Plus className={ "w-5 h-5" }/> Adicionar módulo
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}