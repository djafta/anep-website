import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function QualificationsDashboardHeader() {
  return (
    <PageHeader
      title={ "Adicionar qualificação" }
      description="Crie uma nova qualificação para ser associada a campos e sub-campos personalizados, permitindo que você defina critérios específicos para cada qualificação.">
      <div>
        <Button asChild variant={ 'ghost' }>
          <Link href={ "/admin/qualifications" }>
            <ArrowLeft className={ "w-5 h-5" }/> Voltar
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}