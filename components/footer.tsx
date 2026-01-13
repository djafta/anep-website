import { Link } from "@heroui/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className={"py-10 flex items-center gap-2"}>
          <Image alt="ANEP Logo" className="w-8" height={1000} src="/logo-min.png" width={1000} />
          <ChevronRight className={"stroke-1 text-3xl"} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-900">Sobre</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Missão e Visão
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Estrutura Organizacional
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Legislação
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-900">Serviços</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Formação Profissional
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Certificação
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="/licensing">
                  Licenciamento
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-gray-900"
                  href="https://validar.anep.gov.mz"
                  target={"_blank"}
                >
                  Validação de identidades
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-900">Recursos</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Publicações
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="#">
                  Eventos
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-900" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6 text-gray-900">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Mail className="mr-2 h-5 w-5" /> info@anep.gov.mz
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="mr-2 h-5 w-5" />
                +258 21 320 344
              </li>
              <li className="flex items-center text-gray-600">
                <MapPin className="mr-2 h-5 w-5" /> Maputo, Moçambique
              </li>
            </ul>
          </div>
        </div>
        <div className="py-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Autoridade Nacional de Educação Profissional (ANEP). Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
