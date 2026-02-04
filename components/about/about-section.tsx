import { MissionStatement } from "./mission-statement";
import { ValuesGrid } from "./values-grid";

export function AboutSection() {
  return (
    <section className="py-32" id="sobre">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          <MissionStatement
            title="Nossa Missão"
            text="Regular a educação profissional, com a participação de parceiros sociais, para o desenvolvimento de um capital humano competitivo."
          />

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
    </section>
  );
}
