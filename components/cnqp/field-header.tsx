'use client';

import { Badge } from "@/components/ui/badge";
import { Field } from "@/lib/types";

export type FieldHeaderProps = {
  field: Field
}

export function FieldHeader({ field }: FieldHeaderProps) {

  return (
    <header className="py-8 bg-muted">
      <div className={ 'max-w-7xl px-4 mx-auto' }>
        <h1 className="text-2xl font-bold">{ field.name }</h1>
        <p className={ 'text-sm text-muted-foreground' }>Sub campos: { field.subfields }</p>
        <Badge className={ 'rounded-full' }>{ field.code.toUpperCase() }</Badge>
      </div>
    </header>
  );
}