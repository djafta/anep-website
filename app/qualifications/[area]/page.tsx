"use client";

import React, { use, useState } from "react";
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@heroui/react";
import { ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";

import { Header } from "@/components/header";
import { Footer } from "@/app/footer";

const areas: { [key: string]: string } = {
  engenharia: "Engenharia",
  saude: "Saúde",
  administracao: "Administração",
  agricultura: "Agricultura",
  turismo: "Turismo",
  "tecnologia-da-informacao": "Tecnologia da Informação",
};

const qualifications = [
  {
    id: 1,
    name: "Técnico em Desenvolvimento de Software",
    category: "Tecnologia da Informação",
    level: "Nível 4",
    duration: "2 anos",
    description: "Desenvolva habilidades em programação, design de software e gestão de projetos de TI.",
  },
  {
    id: 2,
    name: "Engenheiro Civil",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Projete e supervisione a construção de edifícios, pontes, estradas e outras infraestruturas.",
  },
  {
    id: 3,
    name: "Técnico em Enfermagem",
    category: "Saúde",
    level: "Nível 3",
    duration: "18 meses",
    description: "Aprenda a fornecer cuidados essenciais aos pacientes e a apoiar os profissionais de saúde.",
  },
  {
    id: 4,
    name: "Gestor de Recursos Humanos",
    category: "Administração",
    level: "Nível 5",
    duration: "3 anos",
    description: "Desenvolva competências em recrutamento, treinamento e gestão de pessoal.",
  },
  {
    id: 5,
    name: "Guia Turístico",
    category: "Turismo",
    level: "Nível 3",
    duration: "1 ano",
    description: "Aprenda a conduzir tours, compartilhar conhecimentos culturais e garantir experiências memoráveis.",
  },
  {
    id: 6,
    name: "Técnico Agrícola",
    category: "Agricultura",
    level: "Nível 4",
    duration: "2 anos",
    description: "Estude técnicas modernas de cultivo, gestão de safras e tecnologias agrícolas sustentáveis.",
  },

  // --- Tecnologia da Informação ---
  {
    id: 7,
    name: "Administrador de Redes",
    category: "Tecnologia da Informação",
    level: "Nível 4",
    duration: "2 anos",
    description: "Gerencie servidores, redes corporativas e implemente políticas de segurança digital.",
  },
  {
    id: 8,
    name: "Analista de Cibersegurança",
    category: "Tecnologia da Informação",
    level: "Nível 5",
    duration: "3 anos",
    description: "Aprenda a proteger sistemas contra ataques e monitorar vulnerabilidades digitais.",
  },
  {
    id: 9,
    name: "Especialista em Inteligência Artificial",
    category: "Tecnologia da Informação",
    level: "Nível 5",
    duration: "3 anos",
    description: "Desenvolva modelos de aprendizado de máquina e soluções baseadas em IA.",
  },
  {
    id: 10,
    name: "Desenvolvedor de Aplicativos Móveis",
    category: "Tecnologia da Informação",
    level: "Nível 4",
    duration: "2 anos",
    description: "Crie apps para Android e iOS, dominando UX e integração com APIs.",
  },
  {
    id: 11,
    name: "Especialista em Computação em Nuvem",
    category: "Tecnologia da Informação",
    level: "Nível 5",
    duration: "3 anos",
    description: "Implemente e administre soluções baseadas em serviços de nuvem.",
  },

  // --- Engenharia ---
  {
    id: 12,
    name: "Engenheiro Mecânico",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Projete e mantenha sistemas mecânicos, motores e equipamentos industriais.",
  },
  {
    id: 13,
    name: "Engenheiro de Petróleo e Gás",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Explore e desenvolva técnicas de extração e produção de recursos energéticos.",
  },
  {
    id: 14,
    name: "Engenheiro de Software",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Projete, desenvolva e mantenha sistemas e plataformas digitais complexas.",
  },
  {
    id: 15,
    name: "Engenheiro Elétrico",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Trabalhe com geração, distribuição e manutenção de sistemas elétricos.",
  },
  {
    id: 16,
    name: "Engenheiro Ambiental",
    category: "Engenharia",
    level: "Nível 5",
    duration: "5 anos",
    description: "Projete soluções para preservação ambiental e gestão sustentável de recursos.",
  },

  // --- Saúde ---
  {
    id: 17,
    name: "Técnico em Radiologia",
    category: "Saúde",
    level: "Nível 4",
    duration: "2 anos",
    description: "Aprenda a operar equipamentos de imagem médica, como raios-X e tomografia.",
  },
  {
    id: 18,
    name: "Fisioterapeuta",
    category: "Saúde",
    level: "Nível 5",
    duration: "4 anos",
    description: "Desenvolva técnicas de reabilitação física e prevenção de lesões.",
  },
  {
    id: 19,
    name: "Nutricionista",
    category: "Saúde",
    level: "Nível 5",
    duration: "4 anos",
    description: "Crie planos alimentares para promoção da saúde e prevenção de doenças.",
  },
  {
    id: 20,
    name: "Técnico em Análises Clínicas",
    category: "Saúde",
    level: "Nível 4",
    duration: "2 anos",
    description: "Realize exames laboratoriais e auxilie no diagnóstico de doenças.",
  },
  {
    id: 21,
    name: "Psicólogo Clínico",
    category: "Saúde",
    level: "Nível 5",
    duration: "5 anos",
    description: "Estude o comportamento humano e ofereça apoio psicológico a pacientes.",
  },

  // --- Administração ---
  {
    id: 22,
    name: "Gestor de Projetos",
    category: "Administração",
    level: "Nível 5",
    duration: "3 anos",
    description: "Aprenda a planejar, executar e monitorar projetos em diferentes setores.",
  },
  {
    id: 23,
    name: "Gestor Financeiro",
    category: "Administração",
    level: "Nível 5",
    duration: "3 anos",
    description: "Domine estratégias de análise financeira, investimentos e gestão de riscos.",
  },
  {
    id: 24,
    name: "Assistente Administrativo",
    category: "Administração",
    level: "Nível 3",
    duration: "18 meses",
    description: "Desenvolva habilidades em organização, atendimento e apoio operacional.",
  },
  {
    id: 25,
    name: "Gestor de Marketing",
    category: "Administração",
    level: "Nível 5",
    duration: "3 anos",
    description: "Crie e execute estratégias de comunicação e marketing digital.",
  },
  {
    id: 26,
    name: "Gestor de Logística",
    category: "Administração",
    level: "Nível 5",
    duration: "3 anos",
    description: "Planeje e otimize cadeias de suprimentos e processos de distribuição.",
  },

  // --- Turismo ---
  {
    id: 27,
    name: "Agente de Viagens",
    category: "Turismo",
    level: "Nível 3",
    duration: "1 ano",
    description: "Organize pacotes turísticos e ofereça consultoria personalizada a viajantes.",
  },
  {
    id: 28,
    name: "Gestor de Hotelaria",
    category: "Turismo",
    level: "Nível 5",
    duration: "3 anos",
    description: "Gerencie hotéis, resorts e estabelecimentos turísticos.",
  },
  {
    id: 29,
    name: "Técnico em Eventos",
    category: "Turismo",
    level: "Nível 4",
    duration: "2 anos",
    description: "Planeje e execute eventos corporativos, culturais e sociais.",
  },
  {
    id: 30,
    name: "Guia de Ecoturismo",
    category: "Turismo",
    level: "Nível 3",
    duration: "1 ano",
    description: "Conduza turistas em trilhas e áreas naturais, promovendo turismo sustentável.",
  },
  {
    id: 31,
    name: "Sommelier",
    category: "Turismo",
    level: "Nível 4",
    duration: "2 anos",
    description: "Especialize-se em vinhos e harmonizações gastronômicas.",
  },

  // --- Agricultura ---
  {
    id: 32,
    name: "Engenheiro Agrônomo",
    category: "Agricultura",
    level: "Nível 5",
    duration: "5 anos",
    description: "Desenvolva técnicas de cultivo e gestão agrícola sustentável.",
  },
  {
    id: 33,
    name: "Técnico em Zootecnia",
    category: "Agricultura",
    level: "Nível 4",
    duration: "2 anos",
    description: "Trabalhe com nutrição, reprodução e manejo de animais de produção.",
  },
  {
    id: 34,
    name: "Especialista em Irrigação",
    category: "Agricultura",
    level: "Nível 4",
    duration: "2 anos",
    description: "Projete sistemas de irrigação modernos e otimize o uso da água.",
  },
  {
    id: 35,
    name: "Gestor de Agronegócio",
    category: "Agricultura",
    level: "Nível 5",
    duration: "3 anos",
    description: "Planeje cadeias de produção agrícola e estratégias comerciais.",
  },
  {
    id: 36,
    name: "Apicultor Profissional",
    category: "Agricultura",
    level: "Nível 3",
    duration: "18 meses",
    description: "Aprenda técnicas de criação de abelhas e produção de mel.",
  },
];

const levels = ["Nível 3", "Nível 4", "Nível 5"];

export default function QualificationsPage({ params }: { params: Promise<{ area: string }> }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("Todos Níveis");

  const p = use(params);
  const area = areas[p.area];

  const filteredQualifications = qualifications.filter(
    (qual) =>
      qual.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === "Todos Níveis" || qual.level === selectedLevel) &&
      qual.category === area,
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="pb-0 flex-1 px-4">
        <div className={"max-w-7xl mx-auto py-3 "}>
          <h1 className={"text-5xl text-primary"}>{area}</h1>
        </div>
        <div className={"max-w-7xl mx-auto "}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-4 mb-12 justify-start"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              className="max-w-md"
              placeholder="Pesquisar qualificações..."
              startContent={<Search className="text-gray-400" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="border-gray-200 bg-white"
                  endContent={<ChevronDown className="text-small" />}
                  variant="bordered"
                >
                  {selectedLevel}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Níveis"
                selectedKeys={[selectedLevel]}
                selectionMode="single"
                onSelectionChange={(keys) => setSelectedLevel(Array.from(keys)[0] as string)}
              >
                {[
                  ...levels.map((level) => <DropdownItem key={level}>{level}</DropdownItem>),
                  <DropdownItem key={"Todos Níveis"}>Todos Níveis</DropdownItem>,
                ]}
              </DropdownMenu>
            </Dropdown>
          </motion.div>
          <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16"}>
            {filteredQualifications.map((qual, index) => (
              <motion.div
                key={qual.id}
                animate={{ opacity: 1, y: 0 }}
                className={"h-full flex"}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-1 border-[#003B71]">
                  <CardBody className="p-6">
                    <div className="flex justify-between mb-4 gap-1">
                      <h3 className="text-xl font-semibold text-gray-900">{qual.name}</h3>
                      <span
                        className={
                          "self-baseline bg-primary rounded-3xl text-primary-foreground px-2 py-1 text-sm min-w-fit"
                        }
                      >
                        {qual.level}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      <span className="font-medium">Categoria:</span> {qual.category}
                      <br />
                      <span className="font-medium">Nível:</span> {qual.level}
                      <br />
                      <span className="font-medium">Duração:</span> {qual.duration}
                    </p>
                    <p className="text-gray-700 mb-6">{qual.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
