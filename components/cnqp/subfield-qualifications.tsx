'use client';
import { QualificationCard } from "@/components/cnqp/qualification-card";
import { useCnqp } from "@/hooks/use-cnqp";
import Link from "next/link";

export type Qualification = {
  title: string;
  name: string
  code: string
  level: string;
}

export type SubfieldQualificationsProps = {
  fieldCode: string;
  subfieldCode: string;
}

export function SubfieldQualifications({ fieldCode, subfieldCode }: SubfieldQualificationsProps) {
  const { fields } = useCnqp();

  const field = fields.find(f => f.code === fieldCode);

  if (!field) return null;

  const subfield = field.subfields.find(s => s.code === subfieldCode);

  if (!subfield) return null;

  return (
    <div className="max-w-7xl w-full px-4 mx-auto py-8">
      <h3 className="text-xl font-semibold mb-4">Qualificações</h3>
      <div className="space-y-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        { subfield.qualifications.map(qualification => (
          <Link
            key={ qualification.title }
            href={ `/cnqp/${ field.code }/${ subfield.code }/${ qualification.code }` }>
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
  )

}