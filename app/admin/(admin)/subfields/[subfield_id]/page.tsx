import { SubfieldView } from "@/components/admin/subfield-view";

export default async function SubfieldPage({ params }: { params: Promise<{ subfield_id: string }>; }) {
  const { subfield_id } = await params;

  const subfield = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/subfields/${ subfield_id }`, {
    next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
  }).then(response => response.json());

  const field = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields?subfieldPublicId=${ subfield_id }`, {
    next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
  }).then(response => response.json());

  return (
    <section className={ 'flex flex-col w-full flex-1' }>
      <SubfieldView subfield={ subfield } field={ field }/>
    </section>
  );
}