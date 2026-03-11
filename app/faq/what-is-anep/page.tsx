"use client";

import React from "react";
import { Link, Button } from "@heroui/react";
import { ChevronLeft, ThumbsUp, ThumbsDown } from "lucide-react";
import { motion } from "framer-motion";

const faqDetail = {
  question: "O que é a ANEP?",
  answer: `
    <p>
        A ANEP (Autoridade Nacional de Educação Profissional) é o órgão responsável por regular, supervisionar e promover a educação profissional em nível nacional. Sua missão é garantir que as qualificações profissionais oferecidas em todo o país atendam aos mais altos padrões de qualidade e sejam relevantes às necessidades do mercado de trabalho e do desenvolvimento econômico.
    </p>

    <p>
        Fundada em [ano de fundação], a ANEP tem desempenhado um papel crucial na modernização e padronização do sistema de educação profissional. Suas principais responsabilidades incluem:
    </p>

    <ul>
        <li>
            <strong>Desenvolvimento de Padrões:</strong> 
            Criar e atualizar padrões nacionais para qualificações profissionais, assegurando que reflitam as melhores práticas da indústria e tendências emergentes.
        </li>
        <li>
            <strong>Acreditação:</strong> 
            Avaliar e acreditar instituições de ensino profissional, garantindo que possuam capacidade e recursos para oferecer programas de alta qualidade.
        </li>
        <li>
            <strong>Garantia de Qualidade:</strong> 
            Implementar sistemas robustos para monitorar e melhorar continuamente a oferta de educação profissional no país.
        </li>
        <li>
            <strong>Reconhecimento de Qualificações:</strong> 
            Trabalhar para que as qualificações emitidas sob sua supervisão sejam reconhecidas nacionalmente e, sempre que possível, internacionalmente.
        </li>
        <li>
            <strong>Orientação e Suporte:</strong> 
            Fornecer recursos e orientação para estudantes, profissionais e empregadores sobre carreiras, qualificações e desenvolvimento de habilidades.
        </li>
        <li>
            <strong>Colaboração com a Indústria:</strong> 
            Estabelecer parcerias com empregadores e associações industriais para garantir que as qualificações atendam às reais necessidades do mercado de trabalho.
        </li>
    </ul>

    <p>
        Ao desempenhar essas funções, a ANEP contribui diretamente para a formação de uma força de trabalho qualificada e competitiva, promovendo o crescimento econômico e o desenvolvimento social do país.
    </p>
   `,
  relatedQuestions: [
    {
      question: "Quais são as principais funções da ANEP?",
      link: "/faq/funcoes-anep",
    },
    {
      question: "Como a ANEP beneficia os estudantes e profissionais?",
      link: "/faq/beneficios-anep",
    },
    {
      question: "Qual é a diferença entre os níveis de qualificação?",
      link: "/faq/niveis-qualificacao",
    },
  ],
};

export default function FAQDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={"mx-auto prose prose-lg"}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Link className="text-[#003B71] hover:underline flex items-center mb-6" href="/faq">
            <ChevronLeft className="w-4 h-4 mr-1" /> Voltar para Perguntas Frequentes
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{faqDetail.question}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: faqDetail.answer }}
            className="prose prose-lg max-w-none text-gray-700"
          />
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Esta resposta foi útil?</h2>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perguntas relacionadas</h2>
            <ul className="space-y-2 ps-0 list-none">
              {faqDetail.relatedQuestions.map((q, index) => (
                <li key={index}>
                  <Link className="text-[#003B71] hover:underline" href={q.link}>
                    {q.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-4">
            &copy; 2024 Autoridade Nacional de Educação Profissional (ANEP). Todos os direitos reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <Link className="text-gray-400 hover:text-[#003B71] transition-colors" href="#">
              Termos de Uso
            </Link>
            <Link className="text-gray-400 hover:text-[#003B71] transition-colors" href="#">
              Política de Privacidade
            </Link>
            <Link className="text-gray-400 hover:text-[#003B71] transition-colors" href="#">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
