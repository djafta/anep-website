import { EditFieldForm } from "@/components/edit-field-form";

export default async function FieldPage({ params }: { params: Promise<{ field_id: string }>; }) {
  const { field_id } = await params;

  const field = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }`, {
    next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
  }).then(response => response.json());

  const subfields = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }/subfields`, {
    next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
  }).then(response => response.json());

  return (
    <section className={ 'flex flex-col w-full flex-1' }>
      <EditFieldForm field={ field }/>
    </section>
  );
}