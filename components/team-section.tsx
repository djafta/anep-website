import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamSection = [
  {
    name: "Fenias Tonela",
    title: "Director da Divisão do Desenvolvimento Estratégico e Institucional",
    avatarUrl: "",
  },
  {
    name: "Ermelinda Notiço",
    title: "Directora da Divisão das Qualificações Profissionais",
    avatarUrl: "/images/directors/cnqp.png",
  },
  {
    name: "Augusto Machunguene",
    title: "Director da Divisão do Fundo Nacional da Educação Profissional",
    avatarUrl: "/images/directors/fnep.png",
  },
  {
    name: "Alexandra Mangore",
    title: "Directora da Divisão de Garantia de Qualidade",
    avatarUrl: "/images/directors/dgq.png",
  },
  {
    name: "Júlio Agibo",
    title: "Director da Divisão de Registro e Certificação",
    avatarUrl: "/images/directors/drc.png",
  },
];

export const TeamSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span className="text-4xl font-bold mb-8">Nossa Equipe</span>
          <h2 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Conheça a nossa
            direção</h2>
          <p className="mt-4 text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Nossa equipe é composta por profissionais dedicados e experientes, comprometidos em oferecer soluções
            inovadoras e de alta qualidade para nossos clientes. Cada membro traz uma riqueza de conhecimento e paixão
            pelo que faz, garantindo que juntos possamos alcançar resultados excepcionais.
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center gap-4 md:gap-5">
            <Avatar className={ 'size-20 md:size-28' }>
              <AvatarImage src={ '' }
                           alt={ 'Uilson Timane Avatar' } className="size-20 md:size-28"/>
              <AvatarFallback/>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary">{ 'Uilson Timane' }</h3>
              <p className="text-md text-brand-secondary">{ 'Director Geral' }</p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <ul
            className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            { teamSection.map((item) => (
              <li key={ item.title } className="flex flex-col items-center gap-4 md:gap-5">
                <Avatar className={ 'size-20 md:size-28' }>
                  <AvatarImage src={ item.avatarUrl } alt={ item.name } className="size-20 md:size-28"/>
                  <AvatarFallback/>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary">{ item.name }</h3>
                  <p className="text-md text-brand-secondary">{ item.title }</p>
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  );
};
