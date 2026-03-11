import { BadgeCheck } from "lucide-react";

type QualificationCardProps = {
  name: string;
  title: string;
  code: string;
  level: string;
};

export function QualificationCard({ name, title, code, level }: QualificationCardProps) {
  return (
    <div className="group relative w-full h-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">

      {/* Nível */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Nível {level}
        </span>
      </div>

      {/* Ícone */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <BadgeCheck className="h-6 w-6" />
      </div>

      {/* Conteúdo */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-800 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-zinc-500 font-medium">
          {name}
        </p>

        <div className="pt-2 text-xs text-zinc-400 tracking-wide">
          Código: <span className="font-medium text-zinc-600">{code}</span>
        </div>
      </div>

      {/* Hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all group-hover:ring-primary/20" />
    </div>
  );
}