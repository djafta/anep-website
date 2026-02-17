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
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <span className="text-4xl font-bold mb-8">Conselho de Direcção</span>
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
              <AvatarImage src={ '/images/directors/principal.png' }
                           alt={ 'Uilson Timane Avatar' } className="size-20 md:size-28"/>
              <AvatarFallback/>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary">{ 'Uilson Timane' }</h3>
              <p className="text-md text-secondary font-semibold">{ 'Director Geral' }</p>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <ul
            className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            { directors.map((item) => (
              <li key={ item.title + item.area }
                  className="w-full flex flex-col items-center gap-4 md:gap-5 shadow-lg rounded-2xl py-10 px-4 border hover:shadow-secondary transition-all duration-300">
                <Avatar className={ 'size-20 md:size-28' }>
                  <AvatarImage src={ item.avatarUrl } alt={ item.name } className="size-20 md:size-28"/>
                  <AvatarFallback/>
                </Avatar>
                <div className="text-center w-full">
                  <h3 className="text-lg font-semibold">{ item.name }</h3>
                  <p className="text-sm text-secondary font-semibold my-2">{ item.title }</p>
                  <Separator className={ 'w-full my-3' }/>
                  <p className="text-sm text-primary font-semibold">{ item.area }</p>
                </div>
              </li>
            )) }
          </ul>
        </div>
        <div>
          <h2 className="mt-12 text-display-sm font-semibold text-primary md:text-display-md mb-5">Departamentos</h2>
          <ul
            className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            { departments.map((item) => (
              <li key={ item.code }
                  className="relative overflow-hidden w-full h-full flex flex-col gap-4 md:gap-5 shadow-md rounded-full py-10 px-4 border hover:shadow-primary transition-all duration-300 group">
                <div className={ 'left-0 top-0 absolute w-full h-full bg-background p-3 flex' }>
                  <span className={'my-auto text-sm text-primary'}>
                  { item.name }
                  </span>
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  );
};
