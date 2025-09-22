"use client";

import React from "react";
import { motion } from "framer-motion";

import { Footer } from "@/app/footer";
import { MissionModal } from "@/app/about/mission-modal";
import { Header } from "@/components/header";

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
      <Header />
      <main className="overflow-hidden">
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#003B71] to-[#0056a4]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white z-10"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-6">Moldando o Futuro da Educação Profissional</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              A ANEP está na vanguarda da inovação educacional, preparando profissionais para os desafios do amanhã.
            </p>
            <MissionModal />
          </motion.div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/about-hero.png')] bg-cover bg-center opacity-20" />
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-center mb-12">Nossa Visão</h2>
              <div className={"pb-10"}>
                <p className={"italic text-center text-gray-800 max-w-3xl mx-auto"}>
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
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excelência</h3>
                  <p className="text-gray-600">Comprometidos com os mais altos padrões em educação profissional.</p>
                </div>
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Inovação</h3>
                  <p className="text-gray-600">Pioneiros em métodos de ensino e tecnologias educacionais avançadas.</p>
                </div>
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
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

        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-center mb-16">Nossa Jornada</h2>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#003B71]" />
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`mb-12 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <motion.div
                      animate={{ opacity: 1, x: 0 }}
                      className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div
                        className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"}`}
                      >
                        <h3 className="text-xl font-semibold mb-2">{event.year}</h3>
                        <h4 className="text-lg font-medium mb-2 text-[#003B71]">{event.event}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </motion.div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#003B71] rounded-full mt-2 border-4 border-white" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Nosso Impacto</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                A ANEP tem transformado vidas e impulsionado o desenvolvimento econômico através da educação
                profissional de excelência.
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-[#003B71] mb-2">500+</h3>
                  <p className="text-gray-600">Qualificações Desenvolvidas</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#003B71] mb-2">1000+</h3>
                  <p className="text-gray-600">Instituições Parceiras</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#003B71] mb-2">5000+</h3>
                  <p className="text-gray-600">Empregadores Colaboradores</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#003B71] mb-2">1M+</h3>
                  <p className="text-gray-600">Estudantes Beneficiados</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 bg-[#003B71] text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Nossa Missão</h2>
              <p className="text-md mb-12 mx-auto italic">
                {
                  '"Regular a educação profissional, com a participação dos parceiros sociais, para o desenvolvimento de um capital humano competitivo."'
                }
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
