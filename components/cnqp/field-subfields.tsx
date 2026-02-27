'use client';

import { useCnqp } from "@/hooks/use-cnqp";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function FieldSubfields({ code }: { code: string }) {
  const { fields } = useCnqp();

  const field = fields.find(f => f.code === code);

  if (!field) return null;

  return (
    <header className="py-8">
      <div className={ 'max-w-7xl px-4 mx-auto grid grid-cols-3 gap-4' }>
        {
          field.subfields.map(subfield => (
            <Link key={ subfield.code } href={ `/cnqp/${ field.code }/${ subfield.code }` }>
              <div className="relative p-4 rounded-md bg-white border hover:bg-muted cursor-pointer transition-all duration-300">
                <h2 className="text-lg font-semibold">{ subfield.name }</h2>
                <p className="absolute right-0 top-0 p-3 text-xs text-muted-foreground">{ subfield.qualifications.length } Qualificações</p>
                <Badge className={ 'rounded-full' }>{ subfield.code.toUpperCase() }</Badge>
              </div>
            </Link>
          ))
        }
      </div>
    </header>
  );
}