import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function DashboardHeader() {
  return (
    <PageHeader
      title={ "Análises das Qualificações" }
      description="Use a análise das qualificações para avaliar a saúde do website com relação às qualificações.">
      <div>
        <Button asChild>
          <Link href={ "/admin/fields/new" }>
            <Plus className={ "w-5 h-5" }/> Adicionar campo
          </Link>
        </Button>
      </div>
    </PageHeader>
  )
}