import React from "react";

import { CnqpFields } from "@/components/cnqp-fields";
import Image from "next/image";
import { StatsCard } from "@/components/stats-card";
import { BriefcaseBusiness, Component, Star } from "lucide-react";
import { CnqpModules } from "@/components/cnqp-modules";

const generalStats = [
  { number: "14", label: "Campos", icon: Star },
  { number: "206", label: "Qualificações Registradas", icon: BriefcaseBusiness },
  { number: "22", label: "Módulos Independentes", icon: Component },
];

export default async function CnqpPage() {
  return (
    <div className="pt-12 flex-1 bg-white">
      <section className="pb-0 bg-neutral-100">
        <header
          className="relative min-h-screen max-w-7xl px-4 mx-auto grid md:grid-cols-2 md:py-10 items-center justify-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary pt-10">Catálogo Nacional de Qualificações
              Profissionais</h1>
            <p className="text-md mb-8 max-w-2xl text-gray-600 text-justify">
              O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
              profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa disponível no
              país, no Subsistema de Educação Profissional.
            </p>
          </div>
          <div className="flex justify-end items-center py-16 my-auto bg-neutral-100">
            <div className="group [perspective:2000px]">
              <div className="
                relative
                transition-all duration-500 ease-out
                transform-gpu
                [transform-style:preserve-3d]
                rotate-y-[-25deg]
                group-hover:rotate-y-[-12deg]
              ">
                {/* Capa */ }
                <Image
                  src="/cnqp-brochure.png"
                  alt="CNQP Brochure"
                  width={ 420 }
                  height={ 500 }
                  className="
                  rounded-md
                  shadow-[40px_40px_60px_rgba(0,0,0,0.35)]
                  transition-all duration-500
                  "
                />

                {/* Sombra interna simulando páginas */ }
                <div className="
                  pointer-events-none
                  absolute inset-0
                  rounded-md
                  bg-gradient-to-r
                  from-black/25 via-transparent to-transparent
                "/>

              </div>
            </div>
          </div>
          <div className="py-20 xl:absolute bottom-0">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                { generalStats.map((stat, index) => (
                  <StatsCard key={ index } description={ stat.label } icon={ stat.icon } number={ stat.number }/>
                )) }
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="py-32 bg-gray-50" id="qualifications">
            <div className="max-w-7xl mx-auto px-4">
              <div className={ 'flex items-center justify-between' }>
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-4">Campos de Qualificações</h2>
                  <p className="text-gray-600 max-w-2xl text-justify">
                    Os campos do CNQP representam grandes áreas profissionais que organizam as qualificações de acordo
                    com sectores de actividade e competências específicas. Cada campo reúne cursos e formações
                    relacionadas a um mesmo domínio, facilitando a identificação do percurso formativo mais adequado aos
                    interesses, talentos e objectivos profissionais do formando.
                  </p>
                </div>
              </div>
              <CnqpFields/>
            </div>
            <div className="py-32 bg-gray-50" id="modules">
              <div className="max-w-7xl mx-auto px-4">
                <div className={ 'flex items-center justify-between' }>
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Módulos Independentes</h2>
                    <p className="text-gray-600 max-w-2xl text-justify">
                      <strong>Módulo independente</strong> é um conjunto de resultados de aprendizagem que conferem
                      competências que
                      podem ser adquiridas, avaliadas e usadas no mercado de trabalho ou na sociedade para a prestação
                      de um serviço, produção de um artefacto, melhoria pessoal ou uma combinação dos factores citados.
                      Diferem dos restantes por não estarem registados e agregados a uma qualificação específica.
                    </p>
                  </div>
                </div>
                <CnqpModules/>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
