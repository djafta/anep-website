"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { AtomIcon, BuildingIcon, ChevronRight, CompassIcon, HeartIcon, NetworkIcon, TractorIcon } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/app/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className={"grid-subtle w-screen h-screen absolute"} />
      <Header />
      <main className={"z-30 relative"}>
        <section className="py-32 z-50 bg-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                Autoridade Nacional da Educação Profissional
              </h1>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Promovendo a excelência na educação profissional em Moçambique através de padrões rigorosos, inovação
                contínua e parcerias estratégicas.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  as={Link}
                  className="bg-[#003B71] text-white font-medium hover:bg-[#003B71]/90 px-8 h-12"
                  href="/qualifications"
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
        <section className="py-20 border-y border-gray-200 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Instituições Acreditadas" },
                { number: "50.000+", label: "Profissionais Certificados" },
                { number: "200+", label: "Qualificações Registradas" },
                { number: "15+", label: "Anos de Excelência" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#003B71] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
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
                  A ANEP é responsável por gerir e supervisionar o sistema de educação profissional em Moçambique,
                  garantindo que os programas educacionais atendam às necessidades do mercado de trabalho e promovam o
                  desenvolvimento econômico do país.
                </p>
                <div className="space-y-4">
                  {[
                    "Desenvolvimento de padrões de competência",
                    "Acreditação de instituições de ensino",
                    "Certificação de qualificações profissionais",
                    "Gestão do Fundo Nacional de Educação Profissional",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB81C]" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Qualidade",
                    description: "Garantimos padrões rigorosos em todas as instituições acreditadas.",
                  },
                  {
                    title: "Inovação",
                    description: "Promovemos métodos modernos de ensino e aprendizagem.",
                  },
                  {
                    title: "Acessibilidade",
                    description: "Facilitamos o acesso à educação profissional de qualidade.",
                  },
                  {
                    title: "Empregabilidade",
                    description: "Alinhamos a formação às demandas do mercado.",
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Qualificação</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oferecemos qualificações profissionais em diversas áreas, todas alinhadas com as necessidades do mercado
                e padrões internacionais.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Tecnologia da Informação",
                  description: "Desenvolvimento de software, redes, segurança e análise de dados",
                  icon: NetworkIcon,
                },
                {
                  title: "Engenharia",
                  description: "Civil, mecânica, elétrica e outras especialidades técnicas",
                  icon: AtomIcon,
                },
                {
                  title: "Saúde",
                  description: "Técnicas de enfermagem, laboratório e gestão hospitalar",
                  icon: HeartIcon,
                },
                {
                  title: "Administração",
                  description: "Gestão empresarial, finanças e recursos humanos",
                  icon: BuildingIcon,
                },
                {
                  title: "Turismo",
                  description: "Hotelaria, gastronomia e gestão de eventos",
                  icon: CompassIcon,
                },
                {
                  title: "Agricultura",
                  description: "Técnicas agrícolas, gestão rural e agroindústria",
                  icon: TractorIcon,
                },
              ].map((course) => (
                <Card key={course.title} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardBody className="p-6 flex flex-col justify-between">
                    <div>
                      <course.icon className="w-6 h-6 text-[#003B71] mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    </div>
                    <div className={"flex items-end"}>
                      <Button
                        as={Link}
                        className="bg-white text-[#003B71] font-medium w-fit ps-0"
                        endContent={<ChevronRight className="w-4 h-4" />}
                        href={`/qualifications/${course.title.toLowerCase().replace(" ", "-")}`}
                      >
                        Ver Qualificações
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
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
      </main>
      <Footer />
    </div>
  );
}
