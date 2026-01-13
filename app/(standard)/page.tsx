"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { BriefcaseBusiness, Building2, LucideStar, ShieldCheck } from "lucide-react";

import { CnqpFields } from "@/components/cnqp-fields";
import { StatsCard } from "@/components/stats-card";

const generalStats = [
  { number: "150+", label: "Instituições Acreditadas", icon: Building2 },
  { number: "50.000+", label: "Profissionais Certificados", icon: ShieldCheck },
  { number: "200+", label: "Qualificações Registradas", icon: BriefcaseBusiness },
  { number: "15+", label: "Anos de Excelência", icon: LucideStar },
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-no-repeat">
      <section className="py-32 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl max-w-2xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Autoridade Nacional da Educação Profissional
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">[Frase apelativa]</p>
            <div className="flex flex-col sm:flex-row justify-start gap-4">
              <Button
                as={Link}
                className="bg-[#003B71] text-white font-medium hover:bg-[#003B71]/90 px-8 h-12"
                href="/cnqp#qualifications"
                size="lg"
              >
                Explorar Qualificações
              </Button>
              <Button
                as={Link}
                className="bg-white text-gray-900 border-2 border-gray-200 font-medium hover:bg-gray-50 px-8 h-12"
                href="/about"
                size="lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {generalStats.map((stat, index) => (
              <StatsCard key={index} description={stat.label} icon={stat.icon} number={stat.number} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32" id="sobre">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <span className={"font-bold text-3xl text-secondary font-serif"}>{'"'}</span>
                Regular a educação profissional, com a participaçãode parceiros sociais,para on desenvolvimento de um
                capital humano competitivo.
                <span className={"font-bold text-3xl text-secondary font-serif"}>{'"'}</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Qualidade",
                  description: "[Descrição do valor qualidade]",
                },
                {
                  title: "Inclusão",
                  description: "[Descrição do valor inclusão]",
                },
                {
                  title: "Parceria",
                  description: "[Descrição do valor parceria]",
                },
                {
                  title: "Competência",
                  description: "[Descrição do valor competência]",
                },
                {
                  title: "Integridade",
                  description: "[Descrição do valor integridade]",
                },
                {
                  title: "Inovação",
                  description: "[Descrição do valor inovação]",
                },
              ].map((item) => (
                <Card key={item.title} className="bg-gray-50 border-none">
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-32 bg-gray-50" id="qualifications">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Catálogo Nacional das Qualificações Profissionais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              [Texto introdutório sobre o CNQP e sua importância para a educação profissional em Moçambique.]
            </p>
          </div>
          <CnqpFields />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32" id="servicos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços para apoiar o desenvolvimento da educação profissional em
              Moçambique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Registro e Certificação",
                description:
                  "Sistema integrado de registro e certificação de qualificações profissionais, garantindo reconhecimento nacional e internacional.",
                features: [
                  "Registro de qualificações",
                  "Certificação de competências",
                  "Validação de diplomas",
                  "Sistema de equivalências",
                ],
              },
              {
                title: "Garantia de Qualidade",
                description:
                  "Processos rigorosos de avaliação e monitoramento para assegurar a excelência na educação profissional.",
                features: [
                  "Acreditação institucional",
                  "Avaliação de programas",
                  "Auditoria de qualidade",
                  "Monitoramento contínuo",
                ],
              },
              {
                title: "Fundo Nacional da EP",
                description:
                  "Gestão e distribuição de recursos para o desenvolvimento e melhoria contínua da educação profissional.",
                features: [
                  "Financiamento de projetos",
                  "Bolsas de estudo",
                  "Apoio à pesquisa",
                  "Infraestrutura educacional",
                ],
              },
              {
                title: "Licenciamento e Acreditação",
                description:
                  "Gestão e distribuição de recursos para o desenvolvimento e melhoria contínua da educação profissional.",
                features: [
                  "Financiamento de projetos",
                  "Bolsas de estudo",
                  "Apoio à pesquisa",
                  "Infraestrutura educacional",
                ],
              },
            ].map((service) => (
              <Card key={service.title} className="bg-white">
                <CardBody className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFB81C]" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50" id="contato">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Nossa equipe está disponível para ajudar com suas dúvidas sobre educação profissional, certificações e
              processos de acreditação.
            </p>
            <Button
              as={Link}
              className="bg-[#003B71] text-white font-medium hover:bg-[#003B71]/90 px-8 h-12"
              href="/contact"
              size="lg"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
