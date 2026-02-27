'use client';

import { useCnqp } from "@/hooks/use-cnqp";

export function SubfieldHeader({ fieldCode, subfieldCode }: { fieldCode: string, subfieldCode: string }) {
  const { fields } = useCnqp();

  const field = fields.find(f => f.code === fieldCode);

  if (!field) return null;

  const subfield = field.subfields.find(s => s.code === subfieldCode);

  if (!subfield) return null;

  return (
    <header className="py-8 bg-muted">
      <div className={ 'max-w-7xl px-4 mx-auto' }>
        <h1 className="text-sm font-bold">{ field.name }</h1>
        <h2 className="text-2xl font-bold text-primary">{ subfield.name }</h2>
      </div>
    </header>
  );
}