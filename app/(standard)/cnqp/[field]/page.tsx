import { FieldHeader } from "@/components/cnqp/field-header";
import { FieldSubfields } from "@/components/cnqp/field-subfields";

export default async function CnqpFieldPage({ params }: { params: Promise<{ field: string }>; }) {
  const { field } = await params;

  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <FieldHeader code={ field }/>
      <FieldSubfields code={ field }/>
    </section>
  );
}