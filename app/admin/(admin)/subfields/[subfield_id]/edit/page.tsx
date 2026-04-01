import { EditSubfieldForm } from "@/components/admin/subfields/edit-subfield.form";

export default async function Page({ params }: { params: Promise<{ subfield_id: string }> }) {
  const { subfield_id } = await params;

  const subfield = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/subfields/${ subfield_id }`)
    .then(res => res.json())
    .catch(() => null);

  console.log(subfield);

  if (!subfield) {
    return (
      <div>Field not found</div>
    )
  }

  return (
    <EditSubfieldForm subfield={ subfield }/>
  )
}