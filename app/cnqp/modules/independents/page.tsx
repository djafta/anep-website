import { IndependentModule } from "@/lib/types";
import { ModulesPage } from "@/components/cnqp/modules.page";

export default async function Page() {
  const modules: IndependentModule[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <ModulesPage modules={ modules }/>
  )
}