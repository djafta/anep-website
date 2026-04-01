'use client';

import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FieldsSelect } from "@/components/fields-select";
import { Subfield } from "@/lib/types";
import { updateSubfieldAction } from "@/actions/update-subfield.action";

export type EditSubfieldFormProps = {
  subfield: Subfield
}

export function EditSubfieldForm({ subfield }: EditSubfieldFormProps) {
  const [state, dispatch, isPending] = React.useActionState(updateSubfieldAction, null);
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Sub-campo atualizado com sucesso!")
      router.push('/admin/dashboard/subfields');
    } else {
      toast.error(state.payload.error);
    }
  }, [state]);

  return (
    <form action={ dispatch } className="w-full max-w-2xl space-y-6">
      {/* Informação do Campo */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Informação do sub-campo</FieldLegend>
        <FieldDescription> Dados principais que identificam o sub-campo no sistema. </FieldDescription>
        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input defaultValue={ subfield.name } name="name" placeholder="Agropecúaria" required/>
        </Field>
        <Field>
          <FieldLabel>Campo</FieldLabel>
          <FieldsSelect value={ subfield.fieldPublicId }/>
        </Field>
        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea defaultValue={ subfield.description } name="description"
                    placeholder="Explique o propósito do sub-campo"/>
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
            <Input defaultValue={ subfield.code } name="code" placeholder="Ex: DOC01" maxLength={ 5 } required/>
          </Field>
          <Field>
            <FieldLabel>Ordem</FieldLabel>
            <Input defaultValue={ subfield.sortOrder } name="sortOrder" type="number" placeholder="Posição na lista"/>
          </Field>
        </div>
      </FieldSet>

      <Button type="submit" className="w-full">
        { isPending ? <Spinner/> : "Atualizar sub-campo" }
      </Button>
    </form>
  )
}