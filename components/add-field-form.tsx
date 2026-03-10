"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { toast } from "sonner";
import { addFieldAction } from "@/action/add-field.action";

export function AddFieldForm() {
  const [state, dispatch, isPending] = React.useActionState(addFieldAction, null);

  React.useEffect(() => {
    if (!state) return;

    state.success
      ? toast.success("Campo criado com sucesso!")
      : toast.error(state.payload.error);
  }, [state]);

  return (
    <form action={dispatch} className="w-full max-w-2xl space-y-6">
      {/* Informação do Campo */}
      <FieldSet>
        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input name="name" placeholder="Agropecúaria" required />
        </Field>
        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea name="description" placeholder="Explique o propósito do campo" />
        </Field>
      </FieldSet>

      <FieldSeparator className="my-2" />

      {/* Identificação Técnica */}
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Identificação Técnica</FieldLegend>
        <FieldDescription>Informações usadas internamente pelo sistema.</FieldDescription>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Código</FieldLabel>
            <Input name="code" placeholder="Ex: DOC01" maxLength={5} required />
          </Field>
          <Field>
            <FieldLabel>Ordem</FieldLabel>
            <Input name="sortOrder" type="number" placeholder="Posição na lista" />
          </Field>
        </div>
      </FieldSet>

      {/* Apresentação */}
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Apresentação</FieldLegend>
        <FieldDescription>Configurações visuais na interface.</FieldDescription>
        <Field>
          <FieldLabel>Ícone</FieldLabel>
          <Input name="icon" placeholder="Ex: file-text" />
        </Field>
      </FieldSet>

      <Button type="submit" className="w-full">
        {isPending ? "Criando campo..." : "Adicionar campo"}
      </Button>
    </form>
  );
}