"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamSection } from "@/components/team-section";
import { FileText } from "lucide-react";

export default function SobrePage() {
  const timelineEvents = [
    {
      year: 2010,
      event: "Fundação da ANEP",
      description: "Estabelecimento da Autoridade Nacional de Educação Profissional",
    },
    {
      year: 2012,
      event: "Lançamento do Quadro Nacional de Qualificações",
      description: "Implementação do primeiro sistema unificado de qualificações",
    },
    {
      year: 2015,
      event: "Expansão Internacional",
      description: "Estabelecimento de parcerias com instituições globais",
    },
    {
      year: 2018,
      event: "Revolução Digital",
      description: "Lançamento da plataforma digital de certificação",
    },
    {
      year: 2021,
      event: "Educação do Futuro",
      description: "Introdução de programas de aprendizagem online e híbrida",
    },
    {
      year: 2024,
      event: "Qualificações para o Amanhã",
      description: "Iniciativa focada em habilidades emergentes e tecnologias futuras",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        <section className="relative h-screen grid grid-cols-2">
          <div
            className="col-span-2 xl:col-start-2 xl:col-span-1 text-white z-10 mr-0 h-full flex justify-center flex-col text-right px-4 bg-gradient-to-r from-transparent to-primary">
            <h1 className="text-6xl font-bold mb-6">Moldando o Futuro da Educação Profissional</h1>
            <p className="text-xl mb-8 mx-auto">
              A ANEP está na vanguarda da inovação educacional, preparando profissionais para os desafios do amanhã.
            </p>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/about-hero.png')] bg-cover bg-center"/>
          </div>
        </section>
        <article className="py-24 px-4 mx-auto max-w-7xl prose text-justify">
          <h1>Quem Somos</h1>
          <p>
            A Autoridade Nacional de Educação Profissional, abreviadamente designada por ANEP, é o órgão Regulador e de
            Garantia de Qualidade de Educação Profissional em Moçambique. A ANEP foi criada através da Lei nº. 23/2014
            de
            23 de Setembro alterada e republicada pela Lei nº. 6/2016 de 16 de Junho, ambas revogadas pela Lei nº
            26/2022
            de 29 de Dezembro.
          </p>
          <p>
            A criação da ANEP é resultado de um amplo processo de consulta nacional que envolveu diversos segmentos da
            sociedade, nomeadamente governos locais, instituições provedoras de educação profissional, sector
            empresarial,
            sindicatos, organizações da sociedade civil, pais e encarregados de educação entre outros.
          </p>
          <p>
            Ao criar e estabelecer a ANEP, o Governo de Moçambique visa, por um lado, dotar o sistema de educação
            profissional de um novo quadro de governação que promove a participação activa do sector privado e de outros
            parceiros sociais na gestão e nos processos de tomada de decisão sobre a educação profissional e, por outro,
            garantir a qualidade do subsistema de educação profissional que integra o Ensino Técnico Profissional e a
            Formação Profissional.
          </p>
          <p>
            Como órgão regulador, compete a ANEP a gestão do Quadro Nacional de Qualificações Profissionais, incluindo a
            aprovação de Qualificações Profissionais e seu registo no respectivo Catálogo Nacional. Na sua actuação como
            órgão de garantia de Qualidade cabe a ANEP a Acreditação dos Provedores de Formação e a Certificação dos
            Formadores, dos Avaliadores e dos Formandos da Educação Profissional.
          </p>
          <p>
            É, ainda, competência da ANEP gerir o Fundo Nacional de Educação Profissional (FNEP) que é um novo mecanismo
            de financiamento da educação profissional que conta com a comparticipação do Sector Produtivo, através de
            uma
            contribuição mensal de 0.65%, calculada com base na folha de salário de cada empresa contribuinte do fundo.
          </p>
        </article>
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div animate={ { opacity: 1, y: 0 } } initial={ { opacity: 0, y: 50 } }
                        transition={ { duration: 0.8 } }>
              <h2 className="text-4xl font-bold text-center mb-12">Nossa Visão</h2>
              <div className={ "pb-10" }>
                <p className={ "italic text-center text-gray-800 max-w-3xl mx-auto" }>
                  {
                    '"Estabelecer um Sistema de Educação Profissional de excelência que responda às crescentes exigências da competitividade global."'
                  }
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="mb-6 inline-block p-4 bg-[#003B71] rounded-full">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={ 2 }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excelência</h3>
                  <p className="text-gray-600">Comprometidos com os mais altos padrões em educação profissional.</p>
                </div>
                <div className="text-center">
                  <div className="mb-6 inline-block p-4 bg-primary rounded-full">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={ 2 }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Inovação</h3>
                  <p className="text-gray-600">Pioneiros em métodos de ensino e tecnologias educacionais avançadas.</p>
                </div>
                <div className="text-center">
                  <div className="mb-6 inline-block p-4 bg-primary rounded-full">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={ 2 }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Impacto Global</h3>
                  <p className="text-gray-600">Formando profissionais preparados para desafios globais.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={ { opacity: 1, y: 0 } }
              className="text-center"
              initial={ { opacity: 0, y: 50 } }
              transition={ { duration: 0.8 } }
            >
              <h2 className="text-4xl font-bold mb-8">Nossa Missão</h2>
              <p className="italic text-center text-gray-800 max-w-3xl mx-auto">
                {
                  '"Regular a educação profissional, com a participação dos parceiros sociais, para o desenvolvimento de um capital humano competitivo."'
                }
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 py-16 max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-[#003B71] rounded-full">
                <FileText className={ 'text-white' }/>
              </div>
              <a
                href={ `${ process.env.NEXT_PUBLIC_STORAGE_URL }/laws/Resolução nr. 72024 aprova o Regulamento Interno da CTQNQ e Resolução nr. 82024 que aprova o Regulmaento de Operacionalizacao do QNQ.pdf` }
                className="text-gray-600 block hover:underline">
                Resolução nr. 72024 aprova o Regulamento Interno da CTQNQ e Resolução nr. 82024 que aprova o
                Regulmaento de Operacionalizacao do QNQ
              </a>
            </div>
            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-primary rounded-full">
                <FileText className={ 'text-white' }/>
              </div>
              <a
                href={ `${ process.env.NEXT_PUBLIC_STORAGE_URL }/laws/Decreto 61 2022 Cria o Quadro Nacional de Qualificacoes QNQ.pdf` }
                className="text-gray-600 block hover:underline">
                Decreto 61 2022 Cria o Quadro Nacional de Qualificacoes QNQ
              </a>
            </div>
            <div className="text-center">
              <div className="mb-6 inline-block p-4 bg-primary rounded-full">
                <FileText className={ 'text-white' }/>
              </div>
              <a
                href={ `${ process.env.NEXT_PUBLIC_STORAGE_URL }/laws/Decreto 31 2017 - Regulamento do Fundo Nacional de Educacao Profissional.pdf` }
                className="text-gray-600 block hover:underline">
                Decreto 31 2017 - Regulamento do Fundo Nacional de Educacao Profissional
              </a>
            </div>
          </div>
        </section>
        <TeamSection/>
        <section className="py-24 px-4 bg-gray-50 hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div animate={ { opacity: 1, y: 0 } } initial={ { opacity: 0, y: 50 } }
                        transition={ { duration: 0.8 } }>
              <h2 className="text-4xl font-bold text-center mb-16">Nossa Jornada</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#003B71]"/>
                { timelineEvents.map((event, index) => (
                  <div key={ index } className={ `mb-12 flex ${ index % 2 === 0 ? "justify-start" : "justify-end" }` }>
                    <motion.div
                      animate={ { opacity: 1, x: 0 } }
                      className={ `w-5/12 ${ index % 2 === 0 ? "text-right pr-8" : "text-left pl-8" }` }
                      initial={ { opacity: 0, x: index % 2 === 0 ? -50 : 50 } }
                      transition={ { duration: 0.5, delay: index * 0.1 } }
                    >
                      <div
                        className={ `bg-white p-6 rounded-lg shadow-lg ${ index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none" }` }
                      >
                        <h3 className="text-xl font-semibold mb-2">{ event.year }</h3>
                        <h4 className="text-lg font-medium mb-2 text-[#003B71]">{ event.event }</h4>
                        <p className="text-gray-600">{ event.description }</p>
                      </div>
                    </motion.div>
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#003B71] rounded-full mt-2 border-4 border-white"/>
                  </div>
                )) }
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-24 px-4 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={ { opacity: 1, y: 0 } }
              className="text-center"
              initial={ { opacity: 0, y: 50 } }
              transition={ { duration: 0.8 } }
            >
              <h2 className="text-4xl font-bold mb-8">Nosso Impacto</h2>
              <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
                A ANEP tem transformado vidas e impulsionado o desenvolvimento econômico através da educação
                profissional de excelência.
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">500+</h3>
                  <p className="text-white">Qualificações Desenvolvidas</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">1000+</h3>
                  <p className="text-white">Instituições Parceiras</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">5000+</h3>
                  <p className="text-white">Empregadores Colaboradores</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-secondary mb-2">1M+</h3>
                  <p className="text-white">Estudantes Beneficiados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
