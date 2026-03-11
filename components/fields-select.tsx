'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Field } from "@/lib/types";

export type FieldsSelectProps = {
  onSelect?: (fieldPublicId: string) => void;
}

export function FieldsSelect({ onSelect }: FieldsSelectProps) {
  const [fields, setFields] = useState<Field[]>([]);
  useEffect(() => {
    fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
      cache: "no-store",
    }).then(response => response.json().then(setFields));
  }, []);

  return (
    <Select onValueChange={ onSelect ?? onSelect } name={ 'fieldPublicId' }>
      <SelectTrigger>
        <SelectValue placeholder={ 'Selecionar Campo' }/>
      </SelectTrigger>
      <SelectContent>
        {
          fields.map(field => (
            <SelectItem key={ field.publicId } value={ field.publicId }>
              { field.name }
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}