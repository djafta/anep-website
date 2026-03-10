'use client';

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Subfield } from "@/lib/types";

export type FieldSubfieldsProps = {
  subfields: Subfield[]
}

export function FieldSubfields({ subfields }: FieldSubfieldsProps) {

  return (
    <header className="py-8">
      <div className={ 'max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' }>
        {
          subfields.map(subfield => (
            <Link key={ subfield.code } href={ `/cnqp/${ subfield.fieldPublicId }/${ subfield.publicId }` }>
              <div
                className="relative p-4 rounded-xl bg-white border hover:bg-muted cursor-pointer transition-all duration-300">
                <span
                  className="block text-right text-xs text-muted-foreground">{subfield.qualifications} Qualificações</span>
                <h2 className="text-md font-semibold h-12">{ subfield.name }</h2>
                <div className={ 'flex items-center justify-between' }>
                  <Badge className={ 'rounded-full' }>{ subfield.code.toUpperCase() }</Badge>
                  <ArrowRight className={ 'size-4 text-primary' }/>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </header>
  );
}