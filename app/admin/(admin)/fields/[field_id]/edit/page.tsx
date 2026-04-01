import { EditFieldForm } from "@/components/edit-field-form";

export default async function Page({ params }: { params: Promise<{ field_id: string }> }) {
  const { field_id } = await params;

  const field = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }`)
    .then(res => res.json())
    .catch(() => null);

  if (!field) {
    return (
      <div>Field not found</div>
    )
  }

  return (
    <EditFieldForm field={ field }/>
  )
}