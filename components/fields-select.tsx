'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Field } from "@/lib/types";

export type FieldsSelectProps = {
  value?: string;
  onSelect?: (fieldPublicId: string) => void;
}

export function FieldsSelect({ onSelect, value }: FieldsSelectProps) {
  const [fields, setFields] = useState<Field[]>([]);
  useEffect(() => {
    if (fields.length > 0) return;

    fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
      cache: "no-store",
    }).then(response => response.json().then(setFields));
  }, []);

  return (
    <Select value={ value } onValueChange={ onSelect ?? onSelect } name={ 'fieldPublicId' }>
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