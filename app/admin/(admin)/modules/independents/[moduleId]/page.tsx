import { IndependentModule } from "@/lib/types";
import { ModuleView } from "@/components/admin/module-view";

export default async function QualificationPage({ params }: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  const module: IndependentModule = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents/${ moduleId }`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <ModuleView module={ module }/>
  );
}