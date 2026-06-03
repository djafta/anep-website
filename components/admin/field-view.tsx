import { Field } from "@/lib/types";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { DeleteFieldDialog } from "@/components/admin/fields/delete-field-dialog";

type Props = {
  field: Field;
};

export function FieldView({ field }: Props) {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* Identity */ }
      <div className="flex items-center gap-3 border-b border-black/[0.07] justify-between">
        <div className={ 'flex gap-3 items-center pb-4 ' }>
          <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-primary text-white">
            <DynamicIcon
              name={ (field.icon as IconName) || "layout-grid" }
              size={ 16 }
              strokeWidth={ 1.75 }
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-base font-semibold tracking-tight truncate leading-snug">
              { field.name }
            </h1>
            <p className="text-[0.68rem] uppercase tracking-widest opacity-40 mt-0.5">
              Código: { field.code }
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={ `/admin/fields/${ field.publicId }/edit` }>
            <Button
              size="icon"
              variant="ghost"
            >
              <Pencil className="text-primary h-4 w-4"/>
            </Button>
          </Link>

          <DeleteFieldDialog fieldPublicId={ field.publicId }/>
        </div>
      </div>

      {/* Grid */ }
      <div className="grid grid-cols-2 gap-5 flex-1">

        <div className="flex flex-col gap-1 rounded-lg px-4 py-3">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Posição
          </span>
          <span className="text-2xl font-semibold tracking-tight leading-none mt-0.5">
            { field.sortOrder }
          </span>
        </div>

        <div className="flex flex-col gap-1 rounded-lg px-4 py-3">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Sub-campos
          </span>
          <span className="text-2xl font-semibold tracking-tight leading-none mt-0.5">
            { field.totalSubfields }
          </span>
        </div>

        <div className="col-span-2 flex flex-col gap-1 rounded-lg bg-black/[0.04] px-4 py-3 flex-1">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Descrição
          </span>
          <span className={ `text-sm leading-relaxed ${ !field.description ? "opacity-25 italic" : "opacity-80" }` }>
            { field.description ?? "Sem descrição disponível" }
          </span>
        </div>

      </div>
    </div>
  );
}