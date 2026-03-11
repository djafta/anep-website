'use client';

import { Input } from "@/components/ui/input";
import * as React from "react";
import { useState } from "react";
import { FieldsSelect } from "@/components/fields-select";
import { SubfieldsSelect } from "@/components/subfields-select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export function AddQualificationForm() {
  const [fieldPublicId, setFieldPublicId] = useState<string | null>(null);
  const [isPending, setPending] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setPending(true);
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Qualificação salva com sucesso!");
        form.reset();
      } else {
        toast.error(result.error || "Erro ao salvar qualificação");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form encType={ 'multipart/form-data' } onSubmit={ handleSubmit } className="w-full max-w-2xl space-y-6">
      {/* Informação principal */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Informação da Qualificação</FieldLegend>
        <FieldDescription>Dados principais que descrevem a qualificação.</FieldDescription>

        <Field>
          <FieldLabel>Título</FieldLabel>
          <Input name="title" placeholder="Certificado vocacional de nível 4 em..." required/>
        </Field>

        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input name="name" placeholder="Enfermagem Geral" required/>
        </Field>

        <Field>
          <FieldLabel>Código</FieldLabel>
          <Input name="code" placeholder="Q CCA03431241"/>
        </Field>

        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea name="description" placeholder="Descrição detalhada da qualificação"/>
        </Field>

        <Field>
          <FieldLabel>Nível</FieldLabel>
          <Input name="level" type="number" placeholder="3"/>
        </Field>

        <Field>
          <FieldLabel>Ordem</FieldLabel>
          <Input name="sortOrder" type="number" placeholder="Posição na lista"/>
        </Field>
      </FieldSet>

      <FieldSeparator className="my-2"/>

      {/* Específico e subfield */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Detalhes Técnicos</FieldLegend>
        <FieldDescription>Relacionamento com subfield e certificado.</FieldDescription>

        <Field>
          <FieldLabel>Campo</FieldLabel>
          <FieldsSelect onSelect={ setFieldPublicId }/>
        </Field>
        <Field>
          <FieldLabel>Sub-campo</FieldLabel>
          <SubfieldsSelect fieldPublicId={ fieldPublicId }/>
        </Field>

        <Field>
          <FieldLabel>Certificado</FieldLabel>
          <Input name="certificate" placeholder="Ex: Vocacional"/>
        </Field>

        <Field>
          <FieldLabel>Documento</FieldLabel>
          <Input name="file" type={ 'file' }/>
        </Field>
      </FieldSet>

      <Button type="submit" className="w-full">
        {
          isPending ? <Spinner/> : "Guardar qualificação"
        }
      </Button>
    </form>
  );
}