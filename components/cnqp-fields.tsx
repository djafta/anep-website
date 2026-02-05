import {
  Briefcase,
  Cog,
  Fish,
  GraduationCap,
  Hammer,
  HeartPulse,
  Hotel,
  Laptop,
  MapIcon,
  MessageSquare,
  Palette,
  Pickaxe,
  TractorIcon,
  Truck,
} from "lucide-react";
import { Link } from "@heroui/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function CnqpFields() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      { [
        {
          title: "Administração e Gestão  (ADG)",
          description: "[Descrição do campo]",
          icon: Briefcase,
          id: "adg",
        },
        {
          title: "Agricultura e Conservação da Natureza (AGR)",
          description: "[Descrição do campo]",
          icon: TractorIcon,
          id: "agr",
        },
        {
          title: "Aquacultura e Pescas (AQP)",
          description: "[Descrição do campo]",
          icon: Fish,
          id: "aqp",
        },
        {
          title: "Comunicação (COM)",
          description: "[Descrição do campo]",
          icon: MessageSquare,
          id: "com",
        },
        {
          title: "Construção Civil e Arquitectura (CCA)",
          description: "[Descrição do campo]",
          icon: Hammer,
          id: "cca",
        },
        {
          title: "Cultura, Artes e Desporto (CAD)",
          description: "[Descrição do campo]",
          icon: Palette,
          id: "cad",
        },
        {
          title: "Educação  (EDU)",
          description: "[Descrição do campo]",
          icon: GraduationCap,
          id: "edu",
        },
        {
          title: "Engenharia e Produção Industrial (EPI)",
          description: "[Descrição do campo]",
          icon: Cog,
          id: "epi",
        },
        {
          title: "Hotelaria e Turismo (HTR)",
          description: "[Descrição do campo]",
          icon: Hotel,
          id: "htr",
        },
        {
          title: "Indústria Extractiva (EXT)",
          description: "[Descrição do campo]",
          icon: Pickaxe,
          id: "ext",
        },
        {
          title: "Planeamento Físico e Ambiente (PFA)",
          description: "[Descrição do campo]",
          icon: MapIcon,
          id: "pfa",
        },
        {
          title: "Saúde e Serviços Sociais (SSS)",
          description: "[Descrição do campo]",
          icon: HeartPulse,
          id: "sss",
        },
        {
          title: "TICs (TIC)",
          description: "[Descrição do campo]",
          icon: Laptop,
          id: "tic",
        },
        {
          title: "Transporte, Navegação e Logística (TNL)",
          description: "[Descrição do campo]",
          icon: Truck,
          id: "tnl",
        },
      ].map((course) => (
        <Link key={ course.id } aria-label={ course.title } className={ "w-full h-full flex" }
              href={ `/cnqp/${ course.id }` }>
          <Card className="w-full  hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col justify-between">
              <div className={ "flex items-center gap-4" }>
                <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                  <course.icon className="w-6 h-6"/>
                </div>
                <h3 className="text-md text-gray-900 mb-2">{ course.title }</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      )) }
    </div>
  );
}
