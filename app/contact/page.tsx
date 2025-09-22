import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Header } from "@/components/header";
import { Footer } from "@/app/footer";

const contacts = {
  phone: "+258 21 484 030",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-12rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-semibold mb-12">Entrar em contacto</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Fale connosco</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Escolha uma opção abaixo para entrar em contacto com a equipe de suporte da ANEP.
            </p>
            <div className="space-y-6">
              <Link
                className="flex items-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300"
                href="/chat"
              >
                <Mail className="text-blue-500 mr-6" size={24} />
                <div>
                  <h3 className="font-semibold">Enviar uma mensagem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Obtenha suporte online</p>
                </div>
              </Link>
              <Link
                className="flex items-center p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300"
                href={`tel:${contacts.phone}`}
              >
                <Phone className="text-blue-500 mr-6" size={24} />
                <div>
                  <h3 className="font-semibold">Ligar para ANEP</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Fale com um representante</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Informações de contacto</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-blue-500 mr-6 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p className="text-gray-600 leading-relaxed">Av. 24 Mao Tsé Tung, nº 72</p>
                  <p className="text-gray-600 leading-relaxed">Maputo, Moçambique</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-blue-500 mr-6 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Telefone</h3>
                  <p className="text-gray-600 leading-relaxed">{contacts.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-blue-500 mr-6 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">E-mail</h3>
                  <p className="text-gray-600 leading-relaxed">info@anep.gov.mz</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-blue-500 mr-6 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold">Horário de atendimento</h3>
                  <p className="text-gray-600 leading-relaxed">Segunda a Sexta: 7:30 - 15:30</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-gray-50 p-10 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Perguntas frequentes</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Antes de entrar em contacto, consulte nossas perguntas frequentes para encontrar respostas rápidas para suas
            dúvidas.
          </p>
          <Link className="text-blue-500 hover:underline font-medium" href="/suporte/faq">
            Ver perguntas frequentes
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
