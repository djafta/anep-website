// app/fnep/page.tsx
// Next.js 14+ · Tailwind CSS · sem shadcn/ui components — design editorial fluido
// npm install lucide-react

import { Banknote, Building2, Globe, GraduationCap, Landmark, ShieldCheck, TrendingUp, Users, } from "lucide-react"

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      {/* soft radial glow */ }
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-primary/5 blur-[120px]"/>
      </div>

      <h1
        className="relative mx-auto max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.02] tracking-tight text-foreground">
        Fundo Nacional de{ " " }
        <em className="not-italic text-primary">Educação<br/>Profissional</em>
      </h1>

      <p className="relative mx-auto mt-8 max-w-lg text-xl text-muted-foreground leading-relaxed font-light">
        O mecanismo que financia a formação técnica e profissional
        em todo o território moçambicano.
      </p>

      {/* floating numbers */ }
      <div className="relative mt-20 grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-4">
        { [
          { value: "0,65%", label: "Contribuição mensal" },
          { value: "Lei 26/22", label: "Base legal" },
          { value: "11", label: "Províncias" },
          { value: "34+", label: "IEP apoiadas" },
        ].map((s) => (
          <div key={ s.label }>
            <p className="text-[2.5rem] font-bold leading-none tracking-tight text-foreground">
              { s.value }
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{ s.label }</p>
          </div>
        )) }
      </div>
    </section>
  )
}

// ─── WHAT IS ──────────────────────────────────────────────────────────────────

function WhatIs() {
  return (
    <section className="border-t border-border/50 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">

          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              O que é
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Um fundo criado para qualificar Moçambique
            </h2>
          </div>

          <div className="space-y-10">
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              O <strong className="font-semibold text-foreground">FNEP</strong> é o instrumento
              central do Sistema Nacional de Educação Profissional. Foi concebido para reunir,
              gerir e distribuir recursos financeiros de forma coordenada e transparente,
              garantindo que as acções de formação técnica e profissional acontecem
              em todo o país.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Gerido pela <strong className="font-semibold text-foreground">Autoridade Nacional
              de Educação Profissional (ANEP)</strong>, o Fundo conecta o Estado,
              as empresas, os trabalhadores e os parceiros internacionais num esforço
              comum de capacitar os cidadãos moçambicanos para o mercado de trabalho.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Foi criado pela <strong className="font-semibold text-foreground">Lei n.º 26/2022,
              de 29 de Dezembro</strong> — a Lei de Educação Profissional da República
              de Moçambique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "As empresas contribuem",
      desc: "Todas as empresas públicas e privadas registadas em Moçambique declaram a folha de salários e contribuem mensalmente com 0,65% do seu valor total, através da plataforma e-FRN integrada com o INSS.",
    },
    {
      num: "02",
      title: "Os recursos são geridos",
      desc: "A ANEP recolhe, regista e gere todos os recursos — contribuições empresariais, dotações do Orçamento do Estado e apoios de parceiros internacionais — numa plataforma digital dedicada.",
    },
    {
      num: "03",
      title: "As IEP candidatam-se",
      desc: "As Instituições de Educação Profissional acreditadas pela ANEP submetem candidaturas de financiamento para programas de formação alinhados com as necessidades reais do mercado de trabalho.",
    },
    {
      num: "04",
      title: "As formações acontecem",
      desc: "Com o financiamento aprovado, as IEP executam os programas. A ANEP monitoriza a qualidade e avalia o impacto no emprego e na empregabilidade dos cidadãos formados.",
    },
  ]

  return (
    <section className="border-t border-border/50 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-screen-xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Como funciona
        </p>
        <h2
          className="mb-20 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          Do pagamento à formação
        </h2>

        <div className="space-y-0 divide-y divide-border/50">
          { steps.map((s) => (
            <div
              key={ s.num }
              className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-[5rem_1fr_2fr]"
            >
              <span className="text-4xl font-bold text-primary/20 leading-none">
                { s.num }
              </span>
              <h3 className="text-lg font-semibold text-foreground self-start">
                { s.title }
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                { s.desc }
              </p>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

// ─── FINANCING ────────────────────────────────────────────────────────────────

function Financing() {
  return (
    <section className="border-t border-border/50 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Financiamento
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Múltiplas fontes, um único objectivo
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
              O FNEP beneficia de fontes diversificadas, garantindo sustentabilidade
              e independência relativamente a uma única origem de recursos.
            </p>
          </div>

          <div className="space-y-14">
            { [
              {
                icon: <Banknote className="h-6 w-6"/>,
                title: "Orçamento do Estado",
                desc: "O Governo dota o FNEP com verbas do Orçamento Geral do Estado, assegurando o financiamento público base de toda a rede de educação profissional moçambicana.",
              },
              {
                icon: <Building2 className="h-6 w-6"/>,
                title: "Contribuição Empresarial — 0,65%",
                desc: "Empresas públicas e privadas contribuem mensalmente com 0,65% do total da folha de salários, declarada na plataforma e-FRN integrada com o INSS. É a principal fonte de financiamento privado do sistema.",
                accent: true,
              },
              {
                icon: <Globe className="h-6 w-6"/>,
                title: "Parceiros Internacionais",
                desc: "Parceiros de cooperação bilateral e multilateral apoiam o Fundo com recursos financeiros e assistência técnica para o desenvolvimento da educação profissional.",
              },
              {
                icon: <Landmark className="h-6 w-6"/>,
                title: "Outras Fontes",
                desc: "O Regulamento do FNEP prevê a angariação de recursos através de outras fontes diversificadas, incluindo doações, legados e rendimentos gerados pelas actividades do próprio Fundo.",
              },
            ].map((f) => (
              <div
                key={ f.title }
                className={ `flex gap-6 ${ f.accent ? "opacity-100" : "opacity-70 hover:opacity-100 transition-opacity" }` }
              >
                <div className={ `mt-0.5 shrink-0 ${ f.accent ? "text-primary" : "text-muted-foreground" }` }>
                  { f.icon }
                </div>
                <div>
                  <h3 className={ `text-lg font-semibold ${ f.accent ? "text-primary" : "text-foreground" }` }>
                    { f.title }
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    { f.desc }
                  </p>
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── GOVERNANCE ───────────────────────────────────────────────────────────────

function Governance() {
  return (
    <section className="border-t border-border/50 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-screen-xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Governação
        </p>
        <h2
          className="mb-6 max-w-2xl text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          Gerido com todos, para todos
        </h2>
        <p className="mb-20 max-w-xl text-xl text-muted-foreground leading-relaxed font-light">
          O FNEP adopta um modelo tripartido e participativo. As decisões sobre
          a aplicação dos recursos são partilhadas por todos os actores do
          sistema de educação profissional.
        </p>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          { [
            {
              icon: <Landmark className="h-7 w-7"/>,
              title: "Estado",
              desc: "Garante o alinhamento com as políticas públicas de emprego, formação e desenvolvimento económico do país.",
            },
            {
              icon: <Building2 className="h-7 w-7"/>,
              title: "Empregadores",
              desc: "Garantem que os programas de formação respondem às necessidades reais do sector produtivo e do mercado de trabalho.",
            },
            {
              icon: <Users className="h-7 w-7"/>,
              title: "Trabalhadores",
              desc: "Representados pelos sindicatos, asseguram a voz dos trabalhadores nas decisões sobre os recursos do Fundo.",
            },
            {
              icon: <ShieldCheck className="h-7 w-7"/>,
              title: "Sociedade Civil",
              desc: "Promove a transparência, a responsabilização social e os interesses das comunidades na gestão do Fundo.",
            },
          ].map((a) => (
            <div key={ a.title }>
              <div className="mb-5 text-primary">{ a.icon }</div>
              <h3 className="text-lg font-semibold text-foreground">{ a.title }</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ a.desc }</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  )
}

// ─── WHO BENEFITS ─────────────────────────────────────────────────────────────

function WhoBenefits() {
  return (
    <section className="border-t border-border/50 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          <div className="lg:sticky lg:top-24">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Beneficiários
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Quem beneficia do FNEP?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
              O Fundo cria valor para toda a cadeia — dos formandos às empresas,
              das comunidades à economia nacional.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-border/50">
            { [
              {
                icon: <GraduationCap className="h-5 w-5"/>,
                title: "Formandos e Jovens",
                desc: "Cidadãos que frequentam cursos técnico-profissionais em IEP acreditadas têm acesso a formação de qualidade, melhorando as suas perspectivas de emprego e rendimento.",
              },
              {
                icon: <Landmark className="h-5 w-5"/>,
                title: "Centros de Formação",
                desc: "As IEP acreditadas pela ANEP podem solicitar financiamento para os seus programas, expandindo a capacidade e qualidade da oferta formativa.",
              },
              {
                icon: <Building2 className="h-5 w-5"/>,
                title: "Empresas e Empregadores",
                desc: "O sector empresarial beneficia de mão-de-obra mais qualificada e adaptada às suas necessidades reais, aumentando a produtividade.",
              },
              {
                icon: <Users className="h-5 w-5"/>,
                title: "Comunidades Locais",
                desc: "As comunidades em todo o país beneficiam do desenvolvimento de competências, criação de emprego e empreendedorismo impulsionado pela formação.",
              },
              {
                icon: <TrendingUp className="h-5 w-5"/>,
                title: "Economia Nacional",
                desc: "A qualificação da força de trabalho contribui para o aumento da produtividade e para a posição competitiva de Moçambique na integração regional africana.",
              },
            ].map((g) => (
              <div key={ g.title } className="flex gap-6 py-8">
                <div className="mt-0.5 shrink-0 text-primary">{ g.icon }</div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{ g.title }</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ g.desc }</p>
                </div>
              </div>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CLOSING ──────────────────────────────────────────────────────────────────

function Closing() {
  return (
    <section className="border-t border-border/50 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Enquadramento
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-foreground">
            Um sistema integrado de qualificação nacional
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-xl text-muted-foreground leading-relaxed font-light">
            A plataforma do FNEP está integrada com o sistema{ " " }
            <strong className="font-medium text-foreground">e-FRN do INSS</strong>, o
            que permite recolher automaticamente informações sobre empregadores e
            trabalhadores, tornando o processo de contribuição simples e eficiente.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-xl text-muted-foreground leading-relaxed font-light">
            A gestão do Fundo é assegurada pela{ " " }
            <strong className="font-medium text-foreground">ANEP</strong> em articulação
            com todos os parceiros sociais, com prestação de contas pública e regular,
            orientada por resultados mensuráveis na empregabilidade dos cidadãos.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            { [
              "Lei n.º 26/2022",
              "ANEP",
              "IEP Acreditadas",
              "e-FRN · INSS",
              "Tripartismo",
              "Formação Técnica",
              "Empregabilidade",
              "Desenvolvimento Nacional",
            ].map((t) => (
              <span
                key={ t }
                className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
              >
                { t }
              </span>
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FNEPPage() {
  return (
    <div className="bg-background min-h-screen text-foreground antialiased">
      <Hero/>
      <WhatIs/>
      <HowItWorks/>
      <Financing/>
      <Governance/>
      <WhoBenefits/>
      <Closing/>
    </div>
  )
}