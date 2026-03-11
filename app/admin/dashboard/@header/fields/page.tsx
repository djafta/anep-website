import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function DashboardHeader() {
  return (
    <PageHeader
      title={ "Campos" }
      description="Gerencie os campos personalizados para as qualificações, permitindo que você adicione, edite ou remova campos conforme necessário.">
      <div>
        <Button asChild>
          <Link href={ "/admin/dashboard/fields/new" }>
            <Plus className={ "w-5 h-5" }/> Adicionar campo
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}