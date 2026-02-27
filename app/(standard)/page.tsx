"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Building2, LucideStar, ShieldCheck } from "lucide-react";

import { CnqpFields } from "@/components/cnqp-fields";
import { StatsCard } from "@/components/stats-card";
import Link from "next/link";
import { AboutSection } from "@/components/about/about-section";

const generalStats = [
  { number: "150+", label: "Instituições Acreditadas", icon: Building2 },
  { number: "50.000+", label: "Profissionais Certificados", icon: ShieldCheck },
  { number: "200+", label: "Qualificações Registradas", icon: BriefcaseBusiness },
  { number: "15+", label: "Anos de Excelência", icon: LucideStar },
];

export default function HomePage() {
  return (
    <div>
      <div className={ 'absolute left-0 top-0 w-screen h-screen home-bg -z-10' }/>
      <div className={ 'z-30 backdrop-blur-xs' }>
        <section className="py-32 ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl max-w-2xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Autoridade Nacional da Educação Profissional
              </h1>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-xl">
                Educação Profissional de Excelência: Competências para o trabalho e talento para o desenvolvimento de
                Moçambique
              </p>
              <div className="flex flex-col sm:flex-row justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className={ 'rounded-full shadow-none' }
                >
                  <Link href="/cnqp#qualifications">
                    Explorar Qualificações
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant={ 'outline' }
                  className={ 'rounded-full shadow-none ring-primary ring' }
                  asChild
                >
                  <Link href={ '/about' }>
                    Saiba Mais
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Numbers Section */ }
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              { generalStats.map((stat, index) => (
                <StatsCard key={ index } description={ stat.label } icon={ stat.icon } number={ stat.number }/>
              )) }
            </div>
          </div>
        </section>
      </div>
      <AboutSection/>
      <section className="py-32 bg-gray-50" id="qualifications">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catálogo Nacional das Qualificações Profissionais</h2>
            <p className="text-gray-600 max-w-xl md:pt-5">
              O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
              profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa disponível no
              país, no Subsistema de Educação Profissional.
            </p>
          </div>
          <CnqpFields/>
        </div>
      </section>

      {/* Contact Section */ }
      <section className="py-32 px-4 bg-gray-50" id="contato">
        <div className="max-w-7xl mx-auto px-4 py-10 rounded-2xl shadow-xl bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está disponível para ajudar com suas dúvidas sobre educação profissional, certificações e
              processos de acreditação.
            </p>
            <Button
              className="bg-primary text-white font-medium px-8 h-12 rounded-full"
              size="lg"
              asChild
            >
              <Link href="/contact">
                Fale Connosco
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
