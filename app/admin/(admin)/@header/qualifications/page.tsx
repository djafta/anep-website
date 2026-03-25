import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function QualificationsDashboardHeader() {
  return (
    <PageHeader
      title={ "Qualificações" }
      description="Gerencie as qualificações, permitindo que você adicione, edite ou remova qualificações conforme necessário.">
      <div>
        <Button asChild>
          <Link href={ "/admin/qualifications/new" }>
            <Plus className={ "w-5 h-5" }/> Adicionar qualificação
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}