import { SubfieldHeader } from "@/components/cnqp/subfield-header";
import { Field, Qualification, Subfield } from "@/lib/types";
import Link from "next/link";
import { QualificationCard } from "@/components/cnqp/qualification-card";

export default async function CnqpSubfieldPage({ params }: {
  params: Promise<{ subfield_id: string, field_id: string }>;
}) {
  const { subfield_id, field_id } = await params;

  const field: Field = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  const subfield: Subfield = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/subfields/${ subfield_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  const qualifications: Qualification[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications?subfieldPublicId=${ subfield_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <SubfieldHeader field={ field } subfield={ subfield }/>
      <div className="max-w-7xl w-full px-4 mx-auto py-8">
        <h3 className="text-xl font-semibold mb-4">Qualificações</h3>
        <div className="space-y-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          { qualifications.map(qualification => (
            <Link
              key={ qualification.publicId }
              href={ `/app/cnqp/${ field_id }/${ subfield_id }/${ qualification.publicId }` }>
              <QualificationCard
                name={ qualification.name }
                title={ qualification.code }
                code={ qualification.code }
                level={ qualification.level }
              />
            </Link>
          )) }
        </div>
      </div>
    </section>
  );
}