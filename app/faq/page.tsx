"use client";

import React from "react";
import { ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "Sobre a ANEP",
    questions: [
      {
        question: "O que é a ANEP?",
        answer:
          "A ANEP (Autoridade Nacional de Educação Profissional) é o órgão responsável por regular, supervisionar e promover a educação profissional a nível nacional. Nosso objetivo é garantir a qualidade e relevância das qualificações profissionais para atender às necessidades do mercado de trabalho e do desenvolvimento económico e social do país.",
      },
      {
        question: "Quais são as principais funções da ANEP?",
        answer:
          "As principais funções da ANEP incluem: desenvolver e actualizar qualificações profissionais, acreditar instituições de Educação Profissional, supervisionar a oferta das qualificações nas instituições de Educação Profissional, certificar os formandos, formadores e avaliadores de Educação Profissional e assegurar o envolvimento do sector produtivo na Educação Profissional.",
      },
      {
        question: "Como a ANEP beneficia os formandos e profissionais?",
        answer:
          "A ANEP beneficia formandos e profissionais ao garantir que as qualificações sejam reconhecidas nacionalmente, facilitando a mobilidade profissional. Também assegura que as qualificações atendam às necessidades do mercado de trabalho, aumentando as chances de empregabilidade dos graduados.",
      },
    ],
  },
  {
    category: "Qualificações",
    questions: [
      {
        question: "Como posso encontrar qualificações acreditadas pela ANEP?",
        answer:
          "Pode encontrar qualificações acreditadas pela ANEP no Catálogo Nacional de Qualificações Profissionais (CNQP). <a href='/cnqp'>Disponível aqui.</a",
      },
      {
        question: "Qual é a diferença entre os níveis de qualificação?",
        answer:
          "A ANEP utiliza um sistema de 6 níveis de qualificação, variando do Nível 1 (habilidades básicas) ao Nível 6 (qualificações avançadas, equivalentes a graduação). Cada nível representa um aumento na complexidade das habilidades e conhecimentos adquiridos, bem como na autonomia e responsabilidade esperadas no ambiente de trabalho."
      },
      {
        question: "As qualificações da ANEP são reconhecidas internacionalmente?",
        answer:
          "Muitas das qualificações da ANEP são reconhecidas internacionalmente, graças a acordos de reconhecimento mútuo com autoridades de qualificação de outros países. No entanto, é sempre recomendável verificar o reconhecimento específico da qualificação no país onde você pretende trabalhar ou estudar.",
      },
    ],
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="mt-11 flex-1 bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          animate={ { opacity: 1, y: 0 } }
          className="text-4xl font-bold text-gray-900 mb-8 text-center"
          initial={ { opacity: 0, y: -20 } }
          transition={ { duration: 0.5 } }
        >
          Perguntas Frequentes
        </motion.h1>

        <motion.div
          animate={ { opacity: 1, y: 0 } }
          className="max-w-2xl mx-auto mb-12"
          initial={ { opacity: 0, y: 20 } }
          transition={ { duration: 0.5, delay: 0.2 } }
        >
          <Input
            className="w-full"
            placeholder="Pesquisar perguntas..."
            value={ searchTerm }
            onChange={ (e) => setSearchTerm(e.target.value) }
          />
        </motion.div>

        { filteredFAQs.map((category, categoryIndex) => (
          <motion.div
            key={ category.category }
            animate={ { opacity: 1, y: 0 } }
            className="mb-12"
            initial={ { opacity: 0, y: 20 } }
            transition={ { duration: 0.5, delay: 0.2 + categoryIndex * 0.1 } }
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{ category.category }</h2>
            <Accordion type="single" collapsible>
              { category.questions.map((item, index) => (
                <AccordionItem value={ item.question } key={ index } aria-label={ item.question } className="mb-4"
                               title={ item.question }>
                  <AccordionTrigger>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html:item.answer}}/>
                  </AccordionContent>
                </AccordionItem>
              )) }
            </Accordion>
          </motion.div>
        )) }

        { filteredFAQs.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">
            { `Nenhuma pergunta encontrada para "${ searchTerm }". Por favor, tente outra pesquisa ou entre em contato conosco para assistência adicional.` }
          </p>
        ) }

        <motion.div
          animate={ { opacity: 1, y: 0 } }
          className="text-center mt-16"
          initial={ { opacity: 0, y: 20 } }
          transition={ { duration: 0.5, delay: 0.5 } }
        >
          <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 text-sm transition-colors duration-300"
          >
            Entre em Contacto
          </Link>
        </motion.div>
      </main>
    </div>
  );
}