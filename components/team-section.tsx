import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const directors = [
  {
    name: "Ermelinda Notiço",
    title: "Directora de Divisão",
    area: "Qualificações Profissionais",
    avatarUrl: "/images/directors/cnqp.png",
  },
  {
    name: "Júlio Agibo",
    title: "Director de Divisão",
    area: "Registro e Certificação",
    avatarUrl: "/images/directors/drc.png",
  },
  {
    name: "Alexandra Mangore",
    title: "Directora de Divisão",
    area: "Gestão e Garantia de Qualidade",
    avatarUrl: "/images/directors/dgq.png",
  },
  {
    name: "Fenias Tonela",
    title: "Director de Divisão",
    area: "Desenvolvimento Estratégico e Institucional",
    avatarUrl: "/images/directors/ddei.png",
  },
  {
    name: "Augusto Machunguene",
    title: "Director Nacional de Direção",
    area: "Fundo Nacional de Educação Profissional",
    avatarUrl: "/images/directors/fnep.png",
  },
];

const departments = [
  {
    name: "Gabinete de Auditoria e Controlo Interno",
    code: "GACI"
  },
  {
    name: "Departamento de Administração e Finanças",
    code: "DAF"
  },
  {
    name: "Departamento de Recursos Humanos",
    code: "DRH"
  },
  {
    name: "Departamento de Aquisições",
    code: "DAQ"
  },
  {
    name: "Departamento de Gestão de Tecnologias, Sistemas de Informação e Documentação",
    code: "DGTSID"
  }
]

export const TeamSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Conselho de Direcção
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Profissionais comprometidos com excelência, inovação e qualidade institucional.
          </p>
        </div>

        {/* Director Geral - destaque */}
        <div className="flex justify-center mb-20">
          <div className="group relative flex flex-col items-center bg-card/70 backdrop-blur-xl border rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500">
            <Avatar className="size-32 ring-4 ring-primary/20 group-hover:ring-primary/40 transition">
              <AvatarImage src="/images/directors/principal.png" />
              <AvatarFallback />
            </Avatar>

            <h3 className="mt-6 text-2xl font-bold text-primary">
              Uilson Timane
            </h3>
            <p className="text-primary/70 font-semibold">
              Director Geral
            </p>

            <div className="absolute -z-10 w-60 h-60 bg-primary/10 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Diretores */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mb-24">
          {directors.map((item) => (
            <div
              key={item.title + item.area}
              className="group relative bg-card/70 backdrop-blur-lg border rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Avatar className="mx-auto size-24 ring-2 ring-muted group-hover:ring-primary/40 transition">
                <AvatarImage src={item.avatarUrl} alt={item.name} />
                <AvatarFallback />
              </Avatar>

              <h3 className="mt-6 font-semibold text-lg h-16">
                {item.name}
              </h3>

              <p className="text-sm text-primary font-medium mt-2 h-8">
                {item.title}
              </p>

              <Separator className="my-4 opacity-40" />

              <p className="text-sm text-muted-foreground">
                {item.area}
              </p>

              <div className="absolute -z-10 inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>

        {/* Departamentos */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            Departamentos
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {departments.map((item) => (
              <div
                key={item.code}
                className="group relative border rounded-2xl p-8 bg-card hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="inline-block text-xs font-bold tracking-wider bg-primary text-white px-3 py-1 rounded-full mb-4">
                  {item.code}
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.name}
                </p>

                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/20 transition"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
