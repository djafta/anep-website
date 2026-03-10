'use client';

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FieldsSelect } from "@/components/fields-select";
import { SubfieldsSelect } from "@/components/subfields-select";

export function AddQualificationForm() {
  const [fieldPublicId, setFieldPublicId] = useState<string | null>(null);

  return (
    <form
      encType="multipart/form-data"
      className={ 'max-w-7xl mx-auto flex flex-col gap-4 p-6' }
      action="/api/qualifications"
      method="POST"
    >
      <FieldsSelect onSelect={ setFieldPublicId }/>
      <SubfieldsSelect fieldPublicId={ fieldPublicId }/>
      <Input type={ 'file' } name={ 'file' }/>
      <Input placeholder={ 'Nome' } type={ 'text' } name={ 'name' }/>
      <Input placeholder={ 'Código' } type={ 'text' } name={ 'code' }/>
      <button type="submit">Submit</button>
    </form>
  )
}