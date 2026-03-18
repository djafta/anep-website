'use client';

import { Field, FieldDescription, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { addFieldAction } from "@/actions/add-field.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function AddFieldPage() {
  const [state, dispatch, isPending] = React.useActionState(addFieldAction, null);
  const router = useRouter();

  React.useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success("Campo criado com sucesso!")
      router.push('/admin/dashboard/fields');
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
        <Field>
          <FieldLabel>Nome</FieldLabel>
          <Input name="name" placeholder="Agropecúaria" required/>
        </Field>
        <Field>
          <FieldLabel>Descrição</FieldLabel>
          <Textarea name="description" placeholder="Explique o propósito do campo"/>
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
            <Input name="code" placeholder="Ex: DOC01" maxLength={ 5 } required/>
          </Field>
          <Field>
            <FieldLabel>Ordem</FieldLabel>
            <Input name="sortOrder" type="number" placeholder="Posição na lista"/>
          </Field>
        </div>
      </FieldSet>

      {/* Apresentação */ }
      <FieldSet>
        <FieldLegend className="text-lg font-semibold">Apresentação</FieldLegend>
        <FieldDescription>Configurações visuais na interface.</FieldDescription>
        <Field>
          <FieldLabel>Ícone</FieldLabel>
          <Input name="icon" placeholder="Ex: file-text"/>
          <FieldDescription>
            Os ícones usados são da biblioteca <a target={ '_blank' } href={ 'https://lucide.dev/icons' }>Lucide</a>.
            Insira o nome do ícone desejado.
          </FieldDescription>
        </Field>
      </FieldSet>

      <Button type="submit" className="w-full">
        { isPending ? <Spinner/> : "Adicionar Campo" }
      </Button>
    </form>
  )
}