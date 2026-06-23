import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <PageHeader
      title={ "Galeria" }
      description="Portal de gerenciamento de galeria de imagens do site.">
      <Button asChild>
        <Link href={"/admin/gallery/new"}>
          <Plus/> Nova imagen
        </Link>
      </Button>
    </PageHeader>
  )
}