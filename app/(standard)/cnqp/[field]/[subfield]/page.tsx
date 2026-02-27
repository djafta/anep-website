import { SubfieldHeader } from "@/components/cnqp/subfield-header";
import { SubfieldQualifications } from "@/components/cnqp/subfield-qualifications";

export default async function CnqpSubfieldPage({ params }: { params: Promise<{ subfield: string, field: string }>; }) {
  const { subfield, field } = await params;

  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <SubfieldHeader fieldCode={ field } subfieldCode={ subfield }/>
      <SubfieldQualifications fieldCode={ field } subfieldCode={ subfield }/>
    </section>
  );
}