'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Subfield } from "@/lib/types";

export type SubfieldsSelectProps = {
  fieldPublicId?: string | null;
  defaultValue?: string;
}

export function SubfieldsSelect({ fieldPublicId, defaultValue }: SubfieldsSelectProps) {
  const [subfields, setSubfields] = useState<Subfield[]>([]);

  useEffect(() => {
    if (!fieldPublicId) return;
    fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ fieldPublicId }/subfields`, {
      cache: "no-store",
    }).then(response => response.json().then(setSubfields));
  }, [fieldPublicId]);

  return (
    <Select defaultValue={ defaultValue } name={ 'subfieldPublicId' }>
      <SelectTrigger>
        <SelectValue placeholder={ 'Selecionar Sub-campo' }/>
      </SelectTrigger>
      <SelectContent>
        {
          subfields.map(subfield => (
            <SelectItem key={ subfield.publicId } value={ subfield.publicId }>
              { subfield.name }
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}