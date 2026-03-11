import { BookOpen, Download, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Field, Qualification, Subfield } from "@/lib/types";

export default async function QualificationPage({ params }: {
  params: Promise<{ subfield_id: string, field_id: string, qualification_id: string }>;
}) {
  const { subfield_id, field_id, qualification_id } = await params;

  const field: Field = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  const subfield: Subfield = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/subfields/${ subfield_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  const qualification: Qualification = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/${ qualification_id }`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className="pt-12 min-h-screen bg-zinc-50">

      {/* HERO */ }
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-12">

          {/* Breadcrumb */ }
          <div className="text-sm text-zinc-500 mb-4">
            <Link href="/public" className="hover:text-primary">Início</Link> /{ " " }
            <Link href={ `/campos/${ field.code }` } className="hover:text-primary">
              { field.name }
            </Link>{ " " }
            / { qualification.name }
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* Info */ }
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-6 w-6"/>
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Nível { qualification.level }
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 leading-tight max-w-3xl">
                { qualification.name }
              </h1>

              <p className="text-zinc-600 max-w-2xl">
                Formação profissional pertencente ao campo de{ " " }
                <strong>{ field.name }</strong>, subcampo{ " " }
                <strong>{ subfield.name }</strong>, orientada para o desenvolvimento
                de competências técnicas e práticas na área de { qualification.name }.
              </p>

              <div className="text-sm text-zinc-500">
                Código da Qualificação:{ " " }
                <span className="font-medium text-zinc-700">
                  { qualification.code }
                </span>
              </div>
            </div>

            {/* Download Button */ }
            <div>
              <a
                href={ qualification.specUrl }
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
              >
                <Download className="h-5 w-5"/>
                Baixar Especificação (PDF)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT */ }
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">

        {/* Sobre o Curso */ }
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <div className="flex items-center gap-3 mb-4 text-primary">
              <BookOpen className="h-6 w-6"/>
              <h2 className="text-2xl font-semibold text-zinc-800">
                Sobre a Qualificação
              </h2>
            </div>

            <p className="text-zinc-600 leading-relaxed">
              O { qualification.name } prepara o formando
              para desempenhar funções de { subfield.name }, desenvolvendo competências
              relacionadas à { field.name }.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-800 mb-4">
              Informações Gerais
            </h3>

            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex justify-between">
                <span>Campo:</span>
                <span className="font-medium text-zinc-800">
                  { field.name }
                </span>
              </li>

              <li className="flex justify-between">
                <span>Subcampo:</span>
                <span className="font-medium text-zinc-800">
                  { subfield.name }
                </span>
              </li>

              <li className="flex justify-between">
                <span>Nível:</span>
                <span className="font-medium text-zinc-800">
                  { qualification.level }
                </span>
              </li>

              <li className="flex justify-between">
                <span>Código:</span>
                <span className="font-medium text-zinc-800">
                  { qualification.code }
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Final */ }
        <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-10">
          <h3 className="text-xl font-semibold text-zinc-800 mb-4">
            Deseja obter mais detalhes?
          </h3>

          <p className="text-zinc-600 mb-6">
            Faça o download da especificação completa da qualificação em formato PDF.
          </p>

          <a
            href={ qualification.specUrl }
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            <Download className="h-5 w-5"/>
            Baixar Especificação
          </a>
        </div>

      </section>
    </div>
  );
}