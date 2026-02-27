'use client';

import { useCnqp } from "@/hooks/use-cnqp";
import { Badge } from "@/components/ui/badge";

export function FieldHeader({ code }: { code: string }) {
  const { fields } = useCnqp();

  const field = fields.find(f => f.code === code);

  if (!field) return null;

  return (
    <header className="py-8 bg-muted">
      <div className={ 'max-w-7xl px-4 mx-auto' }>
        <h1 className="text-2xl font-bold">{ field.name }</h1>
        <p className={ 'text-sm text-muted-foreground' }>Subcampos: { field.subfields.length }</p>
        <Badge className={'rounded-full'}>{ field.code.toUpperCase() }</Badge>
      </div>
    </header>
  );
}