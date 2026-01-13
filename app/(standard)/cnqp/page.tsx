"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { CnqpFields } from "@/components/cnqp-fields";

const featuredQualifications = [
  {
    id: 1,
    name: "Técnico em Inteligência Artificial",
    category: "Tecnologia da Informação",
    image: "/placeholder.svg",
    description: "Qualificação do Mês: Explore o futuro da tecnologia com nossa nova formação em IA.",
  },
  {
    id: 2,
    name: "Especialista em Energias Renováveis",
    category: "Engenharia",
    image: "/placeholder.svg",
    description: "Nova Qualificação: Contribua para um futuro sustentável com esta formação inovadora.",
  },
  {
    id: 3,
    name: "Técnico em Saúde Digital",
    category: "Saúde",
    image: "/placeholder.svg",
    description: "Mais Procurada: Combine cuidados de saúde com tecnologia nesta qualificação em alta demanda.",
  },
];

export default function QualificationsPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const nextCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % featuredQualifications.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + featuredQualifications.length) % featuredQualifications.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="pb-0">
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#003B71] to-[#0056a4]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white z-10"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-6">Catálogo Nacional das Qualificações Profissionais</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
              profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa disponível no
              país, no Subsistema de Educação Profissional.
            </p>
          </motion.div>
        </section>
        <div>
          <section className="py-32 bg-gray-50" id="qualifications">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Campos de Qualificações</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">[Descrição dos campos]</p>
              </div>
              <CnqpFields />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
