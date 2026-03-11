import { ValuesGrid } from "./values-grid";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center" id="sobre">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          <div className={ 'space-y-10' }>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>

              <blockquote className="relative pl-10 text-gray-600 text-lg leading-relaxed">
                <span className="absolute left-0 top-0 text-5xl text-primary font-serif">
                  “
                </span>
                Regular a educação profissional, com a participação de parceiros sociais, para o desenvolvimento de um
                capital humano competitivo.
              </blockquote>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Visão
              </h2>

              <blockquote className="relative pl-10 text-gray-600 text-lg leading-relaxed">
                <span className="absolute left-0 top-0 text-5xl text-primary font-serif">
                  “
                </span>
                Estabelecer um sistema de Educação Profissional de excelência que responda às crescentes exigências da
                competitividade global.
              </blockquote>
            </div>
          </div>

          <div>
            <h3 className={ 'text-right text-gray-600' }>Nossos valores</h3>
            <ValuesGrid
              values={ [
                "Qualidade",
                "Inclusão",
                "Parceria",
                "Competência",
                "Integridade",
                "Inovação",
              ] }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
