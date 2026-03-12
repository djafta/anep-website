'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Field } from "@/lib/types";

export type SubfieldsSelectProps = {
  fieldPublicId?: string | null;
  defaultValue?: string;
}

export function SubfieldsSelect({ fieldPublicId, defaultValue }: SubfieldsSelectProps) {
  const [subfields, setSubfields] = useState<Field[]>([]);

  useEffect(() => {
    if (!fieldPublicId) return;
    fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ fieldPublicId }/subfields`, {
      cache: "no-store",
    }).then(response => response.json().then(setSubfields));
  }, [fieldPublicId]);

  return (
    <Select defaultValue={ defaultValue } name={ 'subfieldPublicId' }>
      <SelectTrigger>
        <SelectValue placeholder={ 'Selecionar Subcampo' }/>
      </SelectTrigger>
      <SelectContent>
        {
          subfields.map(field => (
            <SelectItem key={ field.publicId } value={ field.publicId }>
              { field.name }
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}