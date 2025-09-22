"use client";

import React, { useState } from "react";
import { Button, Card, CardBody, Link } from "@heroui/react";
import {
  AtomIcon,
  BuildingIcon,
  ChevronLeft,
  ChevronRight,
  CompassIcon,
  HeartIcon,
  NetworkIcon,
  TractorIcon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Header } from "@/components/header";
import { Footer } from "@/app/footer";

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
      <Header />
      <main className="pb-0">
        <div className={"bg-[#003B71] "}>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-8 text-center hidden"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Explore Nossas Qualificações Profissionais
          </motion.h1>

          <div className="relative overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {featuredQualifications.map((qual, index) => (
                <div key={qual.id} className="w-full flex-shrink-0 relative">
                  <div className="aspect-[16/9] sm:aspect-[21/9] md:aspect-[25/9]">
                    <Image
                      fill
                      alt={qual.name}
                      className="object-cover opacity-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      src={qual.image}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t  to-transparent" />
                  <div
                    className={`absolute bottom-0 ${index % 2 == 0 ? "left-0" : "right-0 text-right"} p-4 text-white w-full`}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{qual.name}</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2">{qual.category}</p>
                    <p className="text-xs sm:text-sm mb-2 line-clamp-2">{qual.description}</p>
                    <Button className="bg-white font-medium  transition-colors text-xs sm:text-sm">
                      <Link className={"text-primary"} href={`/qualifications/${qual.id}`}>
                        Saiba Mais
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <button
              aria-label="Previous slide"
              className="absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 transition-colors rounded-full p-1 sm:p-2"
              onClick={prevCarousel}
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
            </button>
            <button
              aria-label="Next slide"
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 transition-colors rounded-full p-1 sm:p-2"
              onClick={nextCarousel}
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
            </button>
          </div>
        </div>
        <div>
          <section className="py-32 bg-gray-50" id="qualifications">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Qualificação</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Oferecemos qualificações profissionais em diversas áreas, todas alinhadas com as necessidades do
                  mercado e padrões internacionais.
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
