// app/cnqp/page.tsx
// Mesma estrutura, imports e componentes da sua página (CnqpFields, next/image, Link),
// com o visual mais elegante e arejado das páginas FNEP e RCA.

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CnqpFields } from "@/components/cnqp-fields";

const generalStats = [
  { number: "14", label: "Campos" },
  { number: "206", label: "Qualificações Registradas" },
  { number: "22", label: "Módulos Independentes" },
];

const muted = "text-slate-600";
const rule = "border-slate-200";

function Button({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={ href }
      className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      { children }
    </Link>
  );
}

export default async function CnqpPage() {
  return (
    <div className="flex-1 bg-white pt-12 text-slate-900 antialiased">
      {/* Abertura */ }
      <header className="overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:px-10 md:py-32 xl:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-primary md:text-6xl">
              Catálogo Nacional de Qualificações Profissionais
            </h1>
            <p className={ `mt-8 max-w-xl text-lg leading-8 ${ muted }` }>
              O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
              profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa
              disponível no país, no Subsistema de Educação Profissional.
            </p>
            <div className="mt-12">
              <Button href="/cnqp/qualifications">Explorar qualificações</Button>
            </div>
          </div>

          <div className="flex justify-center py-8 xl:justify-end">
            <div className="group [perspective:2000px]">
              <a target={ '_blank' } href={ 'https://content.anep.gov.mz/public/cnqp/magazines/brochure.pdf' }
                 className="relative transform-gpu transition-all duration-500 ease-out [transform-style:preserve-3d] rotate-y-[-22deg] group-hover:rotate-y-[-10deg]">
                {/* Capa */ }
                <Image
                  src="/cnqp-brochure.png"
                  alt="Brochura do CNQP"
                  width={ 420 }
                  height={ 500 }
                  priority
                  className="rounded-md shadow-[30px_30px_60px_rgba(15,27,51,0.22)]"
                />
                {/* Sombra interna simulando a lombada */ }
                <div
                  className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-black/20 via-transparent to-transparent"/>
              </a>
            </div>
          </div>
        </div>

        {/* Números */ }
        <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <dl className={ `grid grid-cols-1 gap-12 border-t pt-12 sm:grid-cols-3 ${ rule }` }>
            { generalStats.map((stat) => (
              <div key={ stat.label }>
                <dt className="sr-only">{ stat.label }</dt>
                <dd>
                  <span className="block text-5xl font-light tracking-tight text-primary">
                    { stat.number }
                  </span>
                  <span className={ `mt-2 block text-sm ${ muted }` }>{ stat.label }</span>
                </dd>
              </div>
            )) }
          </dl>
        </div>
      </header>

      <main>
        {/* Campos de qualificações */ }
        <section id="qualifications" className="py-24 md:py-36">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <h2
                className="text-3xl font-semibold leading-[1.15] tracking-tight text-primary md:col-span-4 md:text-4xl">
                Campos de Qualificações
              </h2>
              <div className="md:col-span-8">
                <p className={ `max-w-2xl text-lg leading-8 ${ muted }` }>
                  Os campos do CNQP representam grandes áreas profissionais que organizam as qualificações de
                  acordo com sectores de actividade e competências específicas. Cada campo reúne cursos e
                  formações relacionadas a um mesmo domínio, facilitando a identificação do percurso formativo
                  mais adequado aos interesses, talentos e objectivos profissionais do formando.
                </p>
                <div className="mt-10">
                  <Button href="/cnqp/qualifications">Explorar qualificações</Button>
                </div>
              </div>
            </div>

            <div className="mt-20 md:mt-28">
              <CnqpFields/>
            </div>
          </div>
        </section>

        {/* Módulos independentes */ }
        <section id="modules" className="bg-slate-50/70 py-24 md:py-36">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 md:gap-16 md:px-10">
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-primary md:col-span-4 md:text-4xl">
              Módulos Independentes
            </h2>
            <div className="md:col-span-8">
              <p className="max-w-2xl text-xl leading-9 text-slate-800">
                Um módulo independente é um conjunto de resultados de aprendizagem que conferem competências
                que podem ser adquiridas, avaliadas e usadas no mercado de trabalho ou na sociedade.
              </p>
              <p className={ `mt-6 max-w-2xl text-lg leading-8 ${ muted }` }>
                Servem para a prestação de um serviço, a produção de um artefacto, a melhoria pessoal, ou uma
                combinação destes factores. Diferem dos restantes por não estarem registados e agregados a
                uma qualificação específica.
              </p>
              <div className="mt-10">
                <Button href="/cnqp/modules/independents">Ver módulos independentes</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}