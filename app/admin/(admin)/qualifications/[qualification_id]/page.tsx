import { Qualification, QualificationView } from "@/components/admin/qualification-view";

export default async function QualificationPage({ params }: {
  params: Promise<{ qualification_id: string }>;
}) {
  const { qualification_id } = await params;
  const qualification: Qualification = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/${ qualification_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <QualificationView qualification={ qualification }/>
  );
}