import { BookOpen, Download, GraduationCap } from "lucide-react";
import Link from "next/link";
import { IndependentModule } from "@/lib/types";

export default async function QualificationPage({ params }: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = await params;

  const module: IndependentModule = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents/${ moduleId }`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className="pt-12 min-h-screen bg-zinc-50">
      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-sm text-zinc-500 mb-4">
            <Link href="/" className="hover:text-primary">Início</Link> /{ " " }
            <Link href={"/cnqp"} className="hover:text-primary">CNQP</Link> /{ " " }
            <Link href={ `/modules/${ moduleId }` } className="hover:text-primary">
              { module.name }
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-6 w-6"/>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 leading-tight max-w-3xl">
                { module.name }
              </h1>

              <p className="text-zinc-600 max-w-2xl">

              </p>

              <div className="text-sm text-zinc-500">
                Código do módulo:{ " " }
                <span className="font-medium text-zinc-700">
                  { module.code }
                </span>
              </div>
            </div>

            {/* Download Button */ }
            <div>
              <a
                href={ module.specUrl }
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

      <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4 text-primary">
              <BookOpen className="h-6 w-6"/>
              <h2 className="text-2xl font-semibold text-zinc-800">
                Sobre o Módulo
              </h2>
            </div>

            <p className="text-zinc-600 leading-relaxed text-justify">
              { module.description }
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-800 mb-4">
            Informações Gerais
          </h3>

          {/* CTA Final */ }
          <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">
              Deseja obter mais detalhes?
            </h3>

            <p className="text-zinc-600 mb-6">
              Faça o download da especificação completa do módulo em formato PDF.
            </p>

            <a
              href={ module.specUrl }
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              <Download className="h-5 w-5"/>
              Baixar Especificação
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}