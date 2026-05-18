import { IndependentModule } from "@/lib/types";
import { EditModuleForm } from "@/components/admin/edit-module-form";

export default async function QualificationPage({ params }: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;
  const module: IndependentModule = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents/${ moduleId }`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <EditModuleForm module={ module }/>
  );
}