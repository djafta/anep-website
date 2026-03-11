'use client';

import { Field, Subfield } from "@/lib/types";

export type SubfieldHeaderProps = {
  field: Field
  subfield: Subfield
}

export function SubfieldHeader({ field, subfield }: SubfieldHeaderProps) {

  return (
    <header className="py-8 bg-muted">
      <div className={ 'max-w-7xl px-4 mx-auto' }>
        <h1 className="text-sm font-bold">{ field.name }</h1>
        <h2 className="text-2xl font-bold text-primary">{ subfield.name }</h2>
      </div>
    </header>
  );
}