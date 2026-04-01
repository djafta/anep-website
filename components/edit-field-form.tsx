"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import * as types from "@/lib/types";
import { updateFieldAction } from "@/actions/update-field.action";

export type EditFieldFormProps = {
  field: types.Field
}

export function EditFieldForm({ field }: EditFieldFormProps) {
  const [state, dispatch, isPending] = React.useActionState(updateFieldAction, null);
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Campo atualizado com sucesso!")
      router.refresh();
    } else {
      toast.error(state.payload.error);
    }
  }, [state]);

  return (
    <form action={ dispatch } className="w-full max-w-2xl space-y-6">
      {/* Informação do Campo */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Informação do Campo</FieldLegend>
        <FieldDescription> Dados principais que identificam o campo no sistema. </FieldDescription>
        <input type={ 'hidden' } name={ 'publicId' } value={ field.publicId }/>
        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input defaultValue={ field.name } name="name" placeholder="Agropecúaria" required/>
        </Field>
        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea defaultValue={ field.description } name="description" placeholder="Explique o propósito do campo"/>
        </Field>
      </FieldSet>

      <FieldSeparator className="my-2"/>

      {/* Identificação Técnica */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Identificação Técnica</FieldLegend>
        <FieldDescription>Informações usadas internamente pelo sistema.</FieldDescription>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel>Código</FieldLabel>
            <Input defaultValue={ field.code } name="code" placeholder="Ex: DOC01" maxLength={ 5 } required/>
          </Field>
          <Field>
            <FieldLabel>Ordem</FieldLabel>
            <Input defaultValue={ field.sortOrder } name="sortOrder" type="number" placeholder="Posição na lista"/>
          </Field>
        </div>
      </FieldSet>

      {/* Apresentação */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Apresentação</FieldLegend>
        <FieldDescription>Configurações visuais na interface.</FieldDescription>
        <Field>
          <FieldLabel>Ícone</FieldLabel>
          <Input defaultValue={ field.icon } name="icon" placeholder="Ex: file-text"/>
        </Field>
      </FieldSet>

      <Button type="submit" className="w-full">
        { isPending ? <Spinner/> : "Atualizar Campo" }
      </Button>
    </form>
  );
}