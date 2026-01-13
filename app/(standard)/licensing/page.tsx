"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  CheckCircle,
  Clipboard,
  Clock,
  FileText,
  Shield,
  Users,
} from "lucide-react";

import { LicensingProcessCarousel } from "@/components/licensing-process-carousel";

export default function LicenciamentoAcreditacaoPage() {
  const licenseTypes = [
    {
      title: "Instituições Públicas",
      icon: <Building className="w-8 h-8 text-[#003B71]" />,
      description: "Instituições de Educação Profissional geridas pelo Estado.",
    },
    {
      title: "Instituições Semi-Públicas",
      icon: <Users className="w-8 h-8 text-[#003B71]" />,
      description: "Instituições com gestão mista entre Estado e entidades privadas.",
    },
    {
      title: "Instituições Privadas",
      icon: <Award className="w-8 h-8 text-[#003B71]" />,
      description: "Instituições geridas por entidades privadas, nacionais ou estrangeiras.",
    },
  ];

  const creationSteps = [
    {
      title: "Solicitação",
      description:
        "Submeta o requerimento redigido ao ministro de tutela, junto com outra documentação necessário (Artigo 10).",
      icon: <Clipboard className="w-6 h-6 text-[#003B71]" />,
    },
    {
      title: "Avaliação",
      description: "A ANEP analisará sua solicitação e poderá solicitar informações adicionais.",
      icon: <FileText className="w-6 h-6 text-[#003B71]" />,
    },
    {
      title: "Aprovação",
      description: `Após aprovação da tutela, receberá a transcrição do despacho de criação. <span class="font-bold">O despacho de criação não autoriza a instituição criada a funcionar.</span>`,
      icon: <CheckCircle className="w-6 h-6 text-[#003B71]" />,
    },
  ];

  const licensingSteps = [
    {
      title: "Solicitação",
      description:
        "Submeta o requerimento redigido ao ministro de tutela, junto com outra documentação necessário (Artigos 14 e 28).",
      icon: <Clipboard className="w-6 h-6 text-[#003B71]" />,
    },
    {
      title: "Avaliação",
      description: "A ANEP analisará sua solicitação e poderá solicitar informações adicionais.",
      icon: <FileText className="w-6 h-6 text-[#003B71]" />,
    },
    {
      title: "Vistoria",
      description: "Uma equipe multidisciplinar realizará uma vistoria às instalações.",
      icon: <Users className="w-6 h-6 text-[#003B71]" />,
    },
    {
      title: "Aprovação",
      description: "Após aprovação, receberá o Alvará e o Certificado de Acreditação.",
      icon: <CheckCircle className="w-6 h-6 text-[#003B71]" />,
    },
    {
      title: "Início das Operações",
      description: "Comece a operar sua instituição de acordo com as normas estabelecidas.",
      icon: <Building className="w-6 h-6 text-[#003B71]" />,
    },
  ];

  const requirements = [
    {
      title: "Instalações",
      icon: <Building className="w-12 h-12 text-[#003B71]" />,
      description: "Estrutura física adequada para o ensino profissional",
      items: [
        "Salas de aula modernas e bem equipadas",
        "Laboratórios especializados",
        "Áreas de convivência e estudo",
        "Acessibilidade para todos os usuários",
      ],
    },
    {
      title: "Formadores",
      icon: <Users className="w-12 h-12 text-[#003B71]" />,
      description: "Profissionais qualificados e comprometidos",
      items: [
        "Formadores com experiência na área",
        "Programa de desenvolvimento contínuo",
        "Avaliação periódica de desempenho",
        "Proporção adequada de alunos por professor",
      ],
    },
    {
      title: "Gestão de Informação",
      icon: <FileText className="w-12 h-12 text-[#003B71]" />,
      description: "Sistemas eficientes de gestão acadêmica",
      items: [
        "Sistema Eletrônico de Gestão da Informação (SEGI-EP)",
        "Registro e controle acadêmico digital",
        "Emissão segura de certificados",
        "Proteção de dados dos alunos e funcionários",
      ],
    },
    {
      title: "Saúde e Segurança",
      icon: <Shield className="w-12 h-12 text-[#003B71]" />,
      description: "Ambiente seguro e saudável para todos",
      items: [
        "Plano de emergência e evacuação",
        "Equipamentos de segurança em dia",
        "Treinamento em primeiros socorros",
        "Políticas de saúde ocupacional",
      ],
    },
    {
      title: "Documentação",
      icon: <BookOpen className="w-12 h-12 text-[#003B71]" />,
      description: "Registros e licenças atualizados",
      items: [
        "Alvará de funcionamento válido",
        "Certificado de Acreditação da ANEP",
        "Projeto Pedagógico atualizado",
        "Regimento Interno e normas institucionais",
      ],
    },
    {
      title: "Operação e Manutenção",
      icon: <Briefcase className="w-12 h-12 text-[#003B71]" />,
      description: "Gestão eficiente e sustentável",
      items: [
        "Plano estratégico de longo prazo",
        "Manutenção preventiva de equipamentos",
        "Gestão financeira transparente",
        "Programa de melhoria contínua",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="overflow-hidden">
        <section className="relative py-36 bg-gradient-to-r from-[#003B71] to-[#0056a4]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-4 text-center text-white z-10 relative"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Licenciamento</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Garanta a excelência e o reconhecimento oficial da sua instituição de educação profissional através do
              licenciamento da ANEP.
            </p>
          </motion.div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-20" />
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold text-center mb-16">Tipos de Instituições</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {licenseTypes.map((type, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="flex gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">{type.icon}</div>
                      <div className="flex flex-col">
                        <p className="text-xl font-semibold">{type.title}</p>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <p className="text-gray-600">{type.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 ">
          <div className=" mx-auto max-w-7xl flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center mb-16">Processo de Licenciamento</h2>
            <LicensingProcessCarousel />
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-24 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#003B71]">Requisitos Essenciais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                animate={{ opacity: 1, y: 0 }}
                className="flex w-full flex-col"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">{req.icon}</div>
                    <h3 className="text-2xl font-semibold text-[#003B71]">{req.title}</h3>
                  </div>
                  <p className="text-gray-600">{req.description}</p>
                </div>
                <div className="bg-white rounded-lg  p-8 border-gray-200">
                  <ul className="space-y-4">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Prazos Importantes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white shadow-lg">
                  <CardBody>
                    <Clock className="w-12 h-12 text-[#003B71] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Depósito do Pedido</h3>
                    <p className="text-gray-600">Até 18 meses após a autorização de criação da instituição</p>
                  </CardBody>
                </Card>
                <Card className="bg-white shadow-lg">
                  <CardBody>
                    <Clock className="w-12 h-12 text-[#003B71] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Conclusão do Processo</h3>
                    <p className="text-gray-600">6 meses a partir da data de depósito do processo</p>
                  </CardBody>
                </Card>
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
              <h2 className="text-4xl font-bold mb-8">Pronto para Começar?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Inicie o processo de licenciamento e acreditação da sua instituição de educação profissional hoje. Nossa
                equipe está pronta para guiá-lo em cada etapa do processo.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  className={"bg-primary text-primary-foreground"}
                  size="lg"
                  startContent={<FileText className="mr-2" />}
                  variant="solid"
                >
                  Baixar Guia de Licenciamento
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
