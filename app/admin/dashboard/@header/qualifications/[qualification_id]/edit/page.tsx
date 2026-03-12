import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function EditQualificationDashboardHeader() {
  return (
    <PageHeader
      title={ "Editar Qualificação" }
      description="Edite as informações da qualificação, como nome, código, descrição e outros detalhes relevantes. Certifique-se de salvar as alterações após a edição.">
      <div>
        <Button asChild>
          <Link href={ "/admin/dashboard/qualifications/new" }>
            <Plus className={ "w-5 h-5" }/> Adicionar qualificação
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}