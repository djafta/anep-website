import { FieldHeader } from "@/components/cnqp/field-header";
import { FieldSubfields } from "@/components/cnqp/field-subfields";

export default async function CnqpFieldPage({ params }: { params: Promise<{ field_id: string }>; }) {
  const { field_id } = await params;

  const field = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }`, {
    next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
  }).then(response => response.json());

  const subfields = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }/subfields`, {
    next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
  }).then(response => response.json());

  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <FieldHeader field={ field }/>
      <FieldSubfields subfields={ subfields }/>
    </section>
  );
}