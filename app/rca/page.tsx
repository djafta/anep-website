// app/rca/page.tsx
// Next.js (App Router) + Tailwind CSS + TypeScript
// Server Component. Sem navbar nem footer: use os do seu layout.tsx.

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RCA – Reconhecimento de Competências Adquiridas",
  description:
    "Certificação oficial das competências profissionais adquiridas no trabalho e na vida, fora do sistema formal de ensino.",
};

/* ---------- Conteúdo ---------- */

const STATS = [
  { value: "2021", label: "ano do decreto que operacionaliza o sistema" },
  { value: "25", label: "candidatos certificados no projecto-piloto" },
  { value: "3", label: "centros de formação no piloto" },
  { value: "3", label: "ofícios avaliados: canalização, soldadura e electricidade" },
];

const WHY = [
  {
    title: "Sem documento, sem acesso",
    text: "Muitos técnicos que trabalham todos os dias em casas, oficinas e obras só têm a sua própria palavra. Sem um documento que valide as suas competências, não podem concorrer a contratos públicos nem apresentar referências para trabalhar por conta própria.",
  },
  {
    title: "Uma força de trabalho invisível",
    text: "Quando as competências não são reconhecidas oficialmente, o desenvolvimento formal do país subvaloriza uma parte importante da sua mão-de-obra.",
  },
];

const STEPS = [
  {
    title: "Verificação",
    text: "O candidato apresenta a sua experiência e competências num Centro de Reconhecimento de Competências Adquiridas.",
  },
  {
    title: "Avaliação",
    text: "Facilitadores e avaliadores formados pela ANEP avaliam as competências do candidato, incluindo provas práticas.",
  },
  {
    title: "Certificação",
    text: "As competências validadas são certificadas e podem dar origem à atribuição de créditos no Quadro Nacional de Qualificações Profissionais.",
  },
];

const PILOT = [
  { title: "Centro de Formação Profissional de Electrotecnia", text: "Maputo · IFPELAC" },
  { title: "Centro de Formação Profissional da Machava", text: "IFPELAC" },
  { title: "Centro de Formação Profissional de Águas e Saneamento", text: "Ministério das Obras Públicas, Habitação e Recursos Hídricos" },
];

const RESULTS = [
  { value: "11", label: "canalizadores" },
  { value: "7", label: "soldadores" },
  { value: "7", label: "electricistas" },
];

const ROLES = [
  {
    title: "ANEP",
    text: "Define os requisitos que os centros devem cumprir, forma formadores como facilitadores e avaliadores, elabora os referenciais de RCA e supervisiona a avaliação dos candidatos.",
  },
  {
    title: "Centros de RCA",
    text: "Instituições de formação e empresas acreditadas realizam o processo de reconhecimento, sujeitas às medidas de controlo de qualidade do Regulamento de RCA.",
  },
  {
    title: "Parceiros",
    text: "O piloto contou com o apoio técnico e financeiro da Swisscontact (projecto Skills to Build) e do Conselho Nacional da Juventude na identificação de candidatos.",
  },
];

/* ---------- Auxiliares ---------- */

const muted = "text-slate-600 dark:text-slate-400";
const rule = "border-slate-200 dark:border-slate-800";

function Section({
                   id,
                   title,
                   tone = "base",
                   children,
                 }: {
  id?: string;
  title: string;
  tone?: "base" | "soft";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-24 md:py-36 ${tone === "soft" ? "bg-slate-50/70 dark:bg-slate-900/50" : ""}`}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 dark:text-slate-100 md:sticky md:top-24 md:col-span-4 md:self-start md:text-4xl">
          {title}
        </h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

function Button({
                  href,
                  children,
                  outline = false,
                }: {
  href: string;
  children: ReactNode;
  outline?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-7 py-3.5 text-[15px] font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17396e] ${
        outline
          ? "border border-slate-300 text-slate-800 hover:border-[#17396e] hover:text-[#17396e] dark:border-slate-700 dark:text-slate-200"
          : "bg-[#17396e] text-white hover:bg-[#122d58]"
      }`}
    >
      {children}
    </Link>
  );
}

/* ---------- Página ---------- */

export default function RcaPage() {
  return (
    <main className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      {/* Abertura */}
      <header className="bg-gradient-to-b from-slate-50 to-white pb-24 pt-28 dark:from-slate-900 dark:to-slate-950 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[80px]">
            Reconhecimento de Competências Adquiridas
          </h1>
          <p className={`mt-8 max-w-xl text-xl leading-relaxed ${muted}`}>
            O que aprendeu no trabalho e na vida também conta. O RCA avalia e certifica oficialmente as
            competências profissionais adquiridas fora da escola.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="#como-funciona">Como funciona</Button>
            <Button href="#centros" outline>
              Centros de RCA
            </Button>
          </div>

          <dl className={`mt-24 grid grid-cols-2 gap-x-8 gap-y-12 border-t pt-12 md:mt-32 md:grid-cols-4 ${rule}`}>
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-4xl font-light tracking-tight text-[#17396e] dark:text-blue-300 md:text-5xl">
                    {s.value}
                  </span>
                  <span className={`mt-2 block max-w-[14rem] text-sm ${muted}`}>{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* O que é */}
      <Section id="sobre" title="Um sistema para valorizar quem já sabe fazer">
        <div className={`max-w-2xl space-y-7 text-lg leading-8 ${muted}`}>
          <p className="text-xl leading-9 text-slate-800 dark:text-slate-200">
            O Sistema de Reconhecimento de Competências Adquiridas (SRCA) orienta, regula e facilita a
            certificação de competências profissionais obtidas ao longo da vida, no trabalho ou em
            formação não-formal e informal.
          </p>
          <p>
            Faz parte da Reforma da Educação Profissional e foi operacionalizado por decreto do Governo
            aprovado em 17 de Agosto de 2021. Cabe à Autoridade Nacional de Educação Profissional (ANEP)
            conduzir o sistema, no âmbito do Quadro Nacional de Qualificações Profissionais.
          </p>
        </div>
      </Section>

      {/* Frase central: único bloco de cor */}
      <section className="bg-[#17396e] py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-[1.25]">
            Certificar as competências que os cidadãos adquiriram ao longo da vida é uma forma de promover
            justiça social.
          </p>
        </div>
      </section>

      {/* Porquê */}
      <Section title="Porque o RCA é necessário">
        <ul className={`divide-y border-y ${rule} divide-slate-200 dark:divide-slate-800`}>
          {WHY.map((i) => (
            <li key={i.title} className="grid gap-3 py-9 md:grid-cols-5 md:gap-10">
              <h3 className="text-lg font-medium md:col-span-2">{i.title}</h3>
              <p className={`leading-7 md:col-span-3 ${muted}`}>{i.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Como funciona: sequência real */}
      <Section id="como-funciona" title="Como funciona o processo" tone="soft">
        <ol className="relative space-y-12 border-l border-slate-300 pl-8 dark:border-slate-700">
          {STEPS.map((s) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[37px] top-2.5 h-2.5 w-2.5 rounded-full bg-[#17396e] ring-4 ring-slate-50 dark:bg-blue-300 dark:ring-slate-900" />
              <h3 className="text-xl font-medium">{s.title}</h3>
              <p className={`mt-2 max-w-xl leading-7 ${muted}`}>{s.text}</p>
            </li>
          ))}
        </ol>
        <p className={`mt-12 max-w-xl text-sm leading-6 ${muted}`}>
          Os requisitos, documentos e prazos para candidatura dependem do Regulamento de RCA e de cada
          centro. Consulte a ANEP para a informação actualizada.
        </p>
      </Section>

      {/* Piloto */}
      <Section id="centros" title="O projecto-piloto de 2021">
        <div className={`max-w-2xl space-y-6 leading-8 ${muted}`}>
          <p className="text-xl leading-9 text-slate-800 dark:text-slate-200">
            Entre Março e Novembro de 2021, a ANEP e a Swisscontact testaram o sistema em três centros de
            formação, com candidatos que já trabalhavam nas suas oficinas e bairros.
          </p>
        </div>

        <dl className={`mt-14 grid grid-cols-3 gap-8 border-t pt-10 ${rule}`}>
          {RESULTS.map((r) => (
            <div key={r.label}>
              <dd className="text-4xl font-light tracking-tight text-[#17396e] dark:text-blue-300 md:text-5xl">
                {r.value}
              </dd>
              <dt className={`mt-2 text-sm ${muted}`}>{r.label}</dt>
            </div>
          ))}
        </dl>

        <ul className={`mt-14 divide-y border-y ${rule} divide-slate-200 dark:divide-slate-800`}>
          {PILOT.map((c) => (
            <li key={c.title} className="grid gap-2 py-7 md:grid-cols-5 md:gap-10">
              <h3 className="font-medium md:col-span-3">{c.title}</h3>
              <p className={`text-[15px] md:col-span-2 ${muted}`}>{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Quem faz o quê */}
      <Section title="Quem faz o quê" tone="soft">
        <div className="grid gap-12 sm:grid-cols-3">
          {ROLES.map((i) => (
            <div key={i.title} className={`border-t pt-6 ${rule}`}>
              <h3 className="text-lg font-medium">{i.title}</h3>
              <p className={`mt-3 text-[15px] leading-7 ${muted}`}>{i.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Próximos passos */}
      <Section title="Próximos passos">
        <div className={`max-w-2xl space-y-6 leading-8 ${muted}`}>
          <p className="text-xl leading-9 text-slate-800 dark:text-slate-200">
            A ANEP quer divulgar o sistema e o seu regulamento, e incentivar instituições de formação e
            empresas a tornarem-se Centros de RCA certificados.
          </p>
          <p>
            Está prevista a formação de mais facilitadores em diferentes regiões do país. O piloto foi
            presencial, e a avaliação à distância de algumas competências é uma possibilidade futura.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Button href="/contact">Contactar a ANEP</Button>
          <Button href="/news" outline>
            Ver notícias
          </Button>
        </div>
        <p className={`mt-12 max-w-xl text-xs leading-6 ${muted}`}>
          Fontes: ANEP e Swisscontact (entrevistas de 2021 e 2022); apresentação da ANEP no ACQF (Outubro
          de 2021). Informação sujeita a actualização oficial.
        </p>
      </Section>
    </main>
  );
}