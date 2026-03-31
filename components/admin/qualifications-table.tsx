import Link from "next/link";

type Qualification = {
  publicId: string;
  name: string;
  title: string;
  code: string;
  level: string;
};

type QualificationsTableProps = {
  data: Qualification[];
};

export function QualificationsTable({ data }: QualificationsTableProps) {
  return (
    <div className="w-full rounded-xl border border-zinc-200 bg-white overflow-hidden">

      {/* Header (hidden no mobile) */}
      <div className="hidden md:grid grid-cols-5 bg-zinc-50 text-zinc-500 uppercase text-[11px] tracking-wide">
        <div className="px-4 py-3 col-span-2">Nome</div>
        <div className="px-4 py-3 col-span-2">Código</div>
        <div className="px-4 py-3 text-right">Nível</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-zinc-100">
        {data.map((item) => (
          <Link
            key={item.publicId}
            href={`/admin/qualifications/${item.publicId}`}
            className="group block transition-colors hover:bg-zinc-50 no-underline!"
          >

            {/* Desktop row */}
            <div className="hidden lg:grid grid-cols-5 items-center px-4 py-3 text-sm">

              <div className="text-zinc-600 truncate col-span-2">
                {item.name}
              </div>

              <div className={'col-span-2'}>
                <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                  {item.code}
                </span>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {item.level}
                </span>
              </div>
            </div>

            {/* Mobile card */}
            <div className="lg:hidden px-4 py-4 space-y-2">

              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-zinc-800 leading-snug">
                  {item.title}
                </h3>

                <span className="shrink-0 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                  {item.level}
                </span>
              </div>

              <p className="text-sm text-zinc-600">
                {item.name}
              </p>

              <div className="pt-1">
                <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                  {item.code}
                </span>
              </div>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}