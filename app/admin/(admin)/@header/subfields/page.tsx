import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function SubfieldsDashboardHeader() {
  return (
    <PageHeader
      title={ "Sub-campos" }
      description="Gerencie os sub-campos personalizados para as qualificações, permitindo que você adicione, edite ou remova sub-campos conforme necessário.">
      <div>
        <Button asChild>
          <Link href={ "/admin/subfields/new" }>
            <Plus className={ "w-5 h-5" }/> Adicionar sub-campo
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}