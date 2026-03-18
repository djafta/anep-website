import { Field, Subfield } from "@/lib/types";

type Props = {
  subfield: Subfield;
  field: Field
};

export function SubfieldView({ subfield, field }: Props) {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* Identity */ }
      <div className="flex items-center gap-3 pb-4 border-b border-black/[0.07]">
        <div className="min-w-0">
          <h1 className="text-base font-semibold tracking-tight truncate leading-snug">
            { subfield.name }
          </h1>
          <p className="text-[0.68rem] uppercase tracking-widest opacity-40 mt-0.5">
            Código: { subfield.code }
          </p>
        </div>
      </div>

      {/* Grid */ }
      <div className="grid grid-cols-2 gap-5 flex-1">

        <div className="flex flex-col gap-1 rounded-lg bg-black/[0.04] px-4 py-3">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Posição
          </span>
          <span className="text-2xl font-semibold tracking-tight leading-none mt-0.5">
            { subfield.sortOrder }
          </span>
        </div>

        <div className="flex flex-col gap-1 rounded-lg bg-black/[0.04] px-4 py-3">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Qualificações
          </span>
          <span className="text-2xl font-semibold tracking-tight leading-none mt-0.5">
            { subfield.qualifications }
          </span>
        </div>

        <div className="col-span-2 flex flex-col gap-1 rounded-lg bg-black/[0.04] px-4 py-3">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Campo
          </span>
          <span className="font-mono text-xs opacity-60 break-all leading-relaxed">
            { field.name }
          </span>
        </div>

        <div className="col-span-2 flex flex-col gap-1 rounded-lg bg-black/[0.04] px-4 py-3 flex-1">
          <span className="text-[0.62rem] font-medium uppercase tracking-widest opacity-40">
            Descrição
          </span>
          <span className={ `text-sm leading-relaxed ${ !subfield.description ? "opacity-25 italic" : "opacity-80" }` }>
            { subfield.description?.length === 0 ? "Sem descrição disponível" : subfield.description }
          </span>
        </div>

      </div>
    </div>
  );
}