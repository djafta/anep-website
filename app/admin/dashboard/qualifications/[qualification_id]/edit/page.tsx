import { EditQualificationForm } from "@/components/admin/edit-qualification-form";
import { Qualification } from "@/lib/types";

export default async function EditQualificationPage({ params }: {
  params: Promise<{ qualification_id: string }>;
}) {
  const { qualification_id } = await params;
  const qualification: Qualification = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/${ qualification_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  return <EditQualificationForm qualification={ qualification }/>
}