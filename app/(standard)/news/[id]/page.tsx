"use client";

import React from "react";
import { Button, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Calendar, Tag, ThumbsDown, ThumbsUp, User } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "@/styles/globals.css";

export default function NewsArticlePage() {
  const article = {
    title: "ANEP Lança Novo Programa de Certificação para Profissionais de TI",
    date: "15 de Junho, 2024",
    author: "Maria Silva",
    category: "Tecnologia",
    image: "/placeholder.svg",
    content: `
      <p>A Autoridade Nacional de Educação Profissional (ANEP) anunciou hoje o lançamento de um novo programa de certificação para profissionais de Tecnologia da Informação, visando atender à crescente demanda do mercado por habilidades especializadas.</p>
      
      <p>O programa, denominado "TechPro Certification", foi desenvolvido em colaboração com líderes da indústria e especialistas acadêmicos para garantir que as certificações reflitam as necessidades atuais e futuras do setor de TI.</p>
      
      <h2>Principais características do programa:</h2>
      
      <ul>
        <li>Certificações em áreas como Desenvolvimento de Software, Cibersegurança, Inteligência Artificial e Análise de Dados</li>
        <li>Currículo atualizado regularmente para acompanhar as rápidas mudanças tecnológicas</li>
        <li>Combinação de avaliações teóricas e práticas para garantir competência real</li>
        <li>Opções de estudo flexíveis, incluindo cursos online e presenciais</li>
        <li>Parcerias com empresas líderes para oportunidades de estágio e colocação profissional</li>
      </ul>
      
      <p>João Santos, Diretor de Programas da ANEP, comentou sobre a iniciativa: "Com o lançamento do TechPro Certification, estamos dando um passo significativo para fortalecer a força de trabalho de TI em Moçambique. Estas certificações não apenas validarão as habilidades dos profissionais, mas também os prepararão para os desafios futuros do setor."</p>
      
      <p>O programa está previsto para começar no próximo trimestre, com inscrições abrindo no final deste mês. A ANEP também anunciou planos para expandir o programa para outras áreas técnicas no próximo ano, reforçando seu compromisso com a educação profissional de qualidade.</p>
      
      <p>Para mais informações sobre o programa TechPro Certification e como se inscrever, visite o site oficial da ANEP ou entre em contato com um de nossos centros de formação.</p>
    `,
    relatedArticles: [
      {
        title: "Parceria Estratégica para Estágios",
        date: "10 de Junho, 2024",
        link: "/noticias/parceria-estagios",
      },
      {
        title: "Conferência Anual de Educação Profissional",
        date: "5 de Junho, 2024",
        link: "/noticias/conferencia-anual-2024",
      },
      {
        title: "Novo Centro de Formação em Maputo",
        date: "1 de Junho, 2024",
        link: "/noticias/novo-centro-maputo",
      },
      {
        title: "Programa de Mentoria para Jovens Empreendedores",
        date: "28 de Maio, 2024",
        link: "/noticias/programa-mentoria-empreendedores",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto px-4 py-16 max-w-3xl">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
          <Link className="inline-flex items-center text-[#003B71] hover:underline mb-8" href="/news">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Notícias
          </Link>

          <h1 className="text-4xl font-bold mb-6 text-gray-900">{article.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              {article.category}
            </div>
          </div>

          <div className="relative h-[400px] mb-8 overflow-hidden rounded-lg">
            <Image alt={article.title} layout="fill" objectFit="cover" src={article.image} />
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="prose prose-lg max-w-none text-gray-700 text-md"
          />
        </motion.div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Este artigo foi útil?</h2>
          <div className="flex space-x-4">
            <Button
              className="border-gray-300 hover:bg-gray-100 transition-colors"
              startContent={<ThumbsUp className="w-5 h-5" />}
              variant="bordered"
            >
              Sim
            </Button>
            <Button
              className="border-gray-300 hover:bg-gray-100 transition-colors"
              startContent={<ThumbsDown className="w-5 h-5" />}
              variant="bordered"
            >
              Não
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Artigos relacionados</h2>
          <ul className="space-y-2 ps-0 list-none">
            {article.relatedArticles.map((a, index) => (
              <li key={index}>
                <Link className="text-[#003B71] hover:underline" href={a.link}>
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
