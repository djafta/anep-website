'use client';

import { Input } from "@/components/ui/input";
import * as React from "react";
import { useEffect } from "react";
import { FieldsSelect } from "@/components/fields-select";
import { SubfieldsSelect } from "@/components/subfields-select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import * as types from "@/lib/types";
import { ExternalLink } from "lucide-react";


export type EditQualificationFormProps = {
  qualification: types.Qualification
}

export function EditQualificationForm({ qualification }: EditQualificationFormProps) {
  const [fieldPublicId, setFieldPublicId] = React.useState<string | null>(null);
  const [isPending, setPending] = React.useState(false);
  const [field, setField] = React.useState<types.Field | null>(null);

  useEffect(() => {
    fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields?subfieldPublicId=${ qualification.subfieldPublicId }`, {
      method: "GET",
    }).then(async response => setField(await response.json()))
  }, [qualification]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setPending(true);
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/${ qualification.publicId }`, {
        method: "PATCH",
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
          <Input name="title" defaultValue={ qualification.title } placeholder="Certificado vocacional de nível 4 em..."
                 required/>
        </Field>

        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input name="name" defaultValue={ qualification.name } placeholder="Enfermagem Geral" required/>
        </Field>

        <Field>
          <FieldLabel>Código</FieldLabel>
          <Input name="code" defaultValue={ qualification.code } placeholder="Q CCA03431241"/>
        </Field>

        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea name="description" defaultValue={ qualification.description }
                    placeholder="Descrição detalhada da qualificação"/>
        </Field>

        <Field>
          <FieldLabel>Nível</FieldLabel>
          <Input name="level" min={ 1 } defaultValue={ qualification.level } type="number" placeholder="3"/>
        </Field>

        <Field>
          <FieldLabel>Ordem</FieldLabel>
          <Input name="sortOrder" defaultValue={ qualification.sortOrder } type="number"
                 placeholder="Posição na lista"/>
        </Field>
      </FieldSet>

      <FieldSeparator className="my-2"/>

      {/* Específico e subfield */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Detalhes Técnicos</FieldLegend>
        <FieldDescription>Relacionamento com sub-campo e certificado.</FieldDescription>

        <Field>
          <FieldLabel>Campo</FieldLabel>
          <FieldsSelect value={ fieldPublicId || field?.publicId } onSelect={ setFieldPublicId }/>
        </Field>
        <Field>
          <FieldLabel>Sub-campo</FieldLabel>
          <SubfieldsSelect defaultValue={ qualification.subfieldPublicId }
                           fieldPublicId={ fieldPublicId || field?.publicId }/>
        </Field>

        <Field>
          <FieldLabel>Certificado</FieldLabel>
          <Input defaultValue={qualification.certificate} name="certificate" placeholder="Ex: Vocacional"/>
        </Field>

        <Field>
          <FieldLabel>Documento</FieldLabel>
          <Input name="file" type={ 'file' }/>
          { qualification.specUrl ? (
            <a
              href={ qualification.specUrl }
              target="_blank"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Abrir documento
              <ExternalLink className="h-3 w-3"/>
            </a>
          ) : null }
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