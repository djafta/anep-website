// app/fnep/page.tsx
// Next.js (App Router) + Tailwind CSS + TypeScript
// Server Component. Sem navbar nem footer: use os do seu layout.tsx.

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FNEP – Fundo Nacional de Educação Profissional",
  description:
    "Financiamento partilhado para uma educação profissional de qualidade em Moçambique.",
};

/* ---------- Conteúdo ---------- */

const STATS = [
  { value: "2.060", label: "bolsas para raparigas" },
  { value: "11", label: "instituições beneficiárias" },
  { value: "≈ 33 M", label: "meticais em financiamento" },
  { value: "264", label: "instituições na rede de ETP" },
];

const LEGAL = [
  {
    title: "Lei n.º 23/2014, de 23 de Setembro",
    text: "Lei da Educação Profissional. Define a organização, estruturação e funcionamento do sector e cria a ANEP e o Fundo.",
  },
  {
    title: "Lei n.º 6/2016, de 16 de Junho",
    text: "Altera e republica a Lei da Educação Profissional.",
  },
  {
    title: "Autoridade Nacional de Educação Profissional",
    text: "Administra o FNEP, gere o Quadro Nacional de Qualificações Profissionais e certifica os graduados.",
  },
];

const FINANCES = [
  {
    title: "Bolsas de estudo",
    text: "Matrícula, propinas, material escolar, equipamento de protecção individual, internato, transporte e higiene menstrual.",
  },
  {
    title: "Centros de Referência",
    text: "Transformação de institutos técnico-profissionais em Centros de Referência (PROCREF), com laboratórios e oficinas apetrechados.",
  },
  {
    title: "Parcerias com empresas",
    text: "Comparticipação do empresariado, para que a formação responda ao que o mercado de trabalho realmente precisa.",
  },
  {
    title: "Contratos-programa",
    text: "Financiamento às Instituições de Educação Profissional com metas e resultados acordados.",
  },
];

const TIMELINE = [
  { year: "2006", text: "Início da Reforma da Educação Profissional." },
  { year: "2014", text: "A Lei 23/2014 estabelece a ANEP e o FNEP." },
  { year: "2021", text: "Iniciativa presidencial dos Centros de Referência." },
  { year: "2025", text: "Contratos-programa de bolsas para raparigas." },
];

const HOW = [
  {
    title: "Mobilização de recursos",
    text: "Dotações do Estado, contribuições do sector empresarial e financiamento de parceiros.",
  },
  {
    title: "Alocação por contrato",
    text: "Instituições acreditadas e programas elegíveis recebem fundos mediante contrato-programa.",
  },
  {
    title: "Qualidade e certificação",
    text: "A ANEP garante a qualidade e certifica os graduados no âmbito do Quadro Nacional de Qualificações.",
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

export default function FnepPage() {
  return (
    <main className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      {/* Abertura */}
      <header className="bg-gradient-to-b from-slate-50 to-white pb-24 pt-28 dark:from-slate-900 dark:to-slate-950 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[80px]">
            Fundo Nacional de Educação Profissional
          </h1>
          <p className={`mt-8 max-w-xl text-xl leading-relaxed ${muted}`}>
            Financiamento partilhado para uma educação profissional de qualidade, ligada ao mercado de
            trabalho e ao desenvolvimento de Moçambique.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="#financia">O que financia</Button>
            <Button href="#base" outline>
              Base legal
            </Button>
          </div>

          <dl className={`mt-24 grid grid-cols-2 gap-y-12 border-t pt-12 md:mt-32 md:grid-cols-4 ${rule}`}>
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

      {/* Sobre */}
      <Section id="sobre" title="Um fundo para sustentar a reforma">
        <div className={`max-w-2xl space-y-7 text-lg leading-8 ${muted}`}>
          <p className="text-xl leading-9 text-slate-800 dark:text-slate-200">
            O FNEP é o mecanismo de financiamento criado no âmbito da Reforma da Educação Profissional, com
            gestão e financiamento partilhados entre o Estado, o sector empresarial e parceiros de
            cooperação.
          </p>
          <p>
            É administrado pela Autoridade Nacional de Educação Profissional (ANEP), órgão regulador e de
            garantia de qualidade do sector. Além do orçamento do Estado, o Fundo conta com a
            comparticipação do empresariado e com parcerias como a do Banco Mundial, através do projecto
            MozSkills.
          </p>
        </div>
      </Section>

      {/* Missão: único bloco de cor da página */}
      <section className="bg-[#17396e] py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-[1.25]">
            Formar cidadãos profissionalmente competentes e empreendedores, e tornar a economia e as
            empresas moçambicanas mais competitivas.
          </p>
        </div>
      </section>

      {/* Base legal */}
      <Section id="base" title="Base legal e institucional">
        <ul className={`divide-y border-y ${rule} divide-slate-200 dark:divide-slate-800`}>
          {LEGAL.map((i) => (
            <li key={i.title} className="grid gap-3 py-9 md:grid-cols-5 md:gap-10">
              <h3 className="text-lg font-medium md:col-span-2">{i.title}</h3>
              <p className={`leading-7 md:col-span-3 ${muted}`}>{i.text}</p>
            </li>
          ))}
        </ul>
        <p className={`mt-8 text-sm ${muted}`}>
          Para o texto integral e regulamentos aplicáveis, consulte o Boletim da República e os documentos
          oficiais da ANEP.
        </p>
      </Section>

      {/* O que financia */}
      <Section id="financia" title="O que o FNEP financia" tone="soft">
        <div className="grid gap-x-16 gap-y-16 sm:grid-cols-2">
          {FINANCES.map((i) => (
            <article key={i.title} className={`border-t pt-6 ${rule}`}>
              <h3 className="text-xl font-medium">{i.title}</h3>
              <p className={`mt-3 leading-7 ${muted}`}>{i.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Destaque */}
      <Section title="Bolsas MozSkills para raparigas">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className={`space-y-6 leading-8 lg:col-span-3 ${muted}`}>
            <p className="text-xl leading-9 text-slate-800 dark:text-slate-200">
              Em parceria com o Banco Mundial, o FNEP assinou contratos-programa para financiar bolsas a
              2.060 raparigas em 11 Instituições de Educação Profissional.
            </p>
            <p>
              São oito Institutos Técnicos Profissionais e três Centros de Formação Profissional, nas
              províncias de Cabo Delgado, Niassa, Nampula, Tete, Manica, Maputo Província e Cidade de
              Maputo.
            </p>
            <p>
              O objectivo é aumentar o acesso e a retenção de raparigas, sobretudo no ramo industrial,
              tradicionalmente frequentado por rapazes.
            </p>
          </div>

          <ol className="relative space-y-10 border-l border-slate-300 pl-8 dark:border-slate-700 lg:col-span-2">
            {TIMELINE.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#17396e] ring-4 ring-white dark:bg-blue-300 dark:ring-slate-950" />
                <span className="text-sm font-medium text-[#17396e] dark:text-blue-300">{m.year}</span>
                <p className={`mt-1 leading-7 ${muted}`}>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Como funciona */}
      <Section title="Gestão e prestação de contas" tone="soft">
        <p className={`mb-14 max-w-xl text-lg leading-8 ${muted}`}>
          Um modelo participativo, regulado pela ANEP e articulado com o Ministério da Educação e Cultura.
        </p>
        <div className="grid gap-12 sm:grid-cols-3">
          {HOW.map((i) => (
            <div key={i.title} className={`border-t pt-6 ${rule}`}>
              <h3 className="text-lg font-medium">{i.title}</h3>
              <p className={`mt-3 text-[15px] leading-7 ${muted}`}>{i.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap gap-3">
          <Button href="/contact">Contactar a ANEP</Button>
          <Button href="/news" outline>
            Ver notícias
          </Button>
        </div>
        <p className={`mt-12 max-w-xl text-xs leading-6 ${muted}`}>
          Fontes: Lei 23/2014 e Lei 6/2016; ANEP; AIM (Maio de 2025); Banco Mundial (MozSkills). Valores e
          dados sujeitos a actualização oficial.
        </p>
      </Section>
    </main>
  );
}