'use client';

import { Input } from "@/components/ui/input";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { IndependentModule } from "@/lib/types";
import { ExternalLink } from "lucide-react";


export type EditModuleFormProps = {
  module: IndependentModule
}

export function EditModuleForm({ module }: EditModuleFormProps) {
  const [isPending, setPending] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setPending(true);
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents/${ module.publicId }`, {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();

      console.log({ result })

      if (response.ok) {
        toast.success("Módulo salvo com sucesso!");
        form.reset();
      } else {
        toast.error(result.error || "Erro ao salvar módulo");
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
          <Input name="title" defaultValue={ module.title } placeholder="Certificado vocacional de nível 4 em..."
                 required/>
        </Field>

        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input name="name" defaultValue={ module.name } placeholder="Enfermagem Geral" required/>
        </Field>

        <Field>
          <FieldLabel>Código</FieldLabel>
          <Input name="code" defaultValue={ module.code } placeholder="Q CCA03431241"/>
        </Field>

        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea name="description" defaultValue={ module.description }
                    placeholder="Descrição detalhada da qualificação"/>
        </Field>

        <Field>
          <FieldLabel>Ordem</FieldLabel>
          <Input name="sortOrder" defaultValue={ module.sortOrder } type="number"
                 placeholder="Posição na lista"/>
        </Field>
      </FieldSet>

      <FieldSeparator className="my-2"/>

      {/* Específico e subfield */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Detalhes Técnicos</FieldLegend>


        <Field>
          <FieldLabel>Documento</FieldLabel>
          <Input name="file" type={ 'file' }/>
          { module.specUrl ? (
            <a
              href={ module.specUrl }
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
          isPending ? <Spinner/> : "Guardar múdulo"
        }
      </Button>
    </form>
  );
}