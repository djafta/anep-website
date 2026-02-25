import * as React from 'react';
import { useCnqp } from "@/hooks/use-cnqp";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const { fields } = useCnqp();
  return (
    <div
      className={ 'p-2 sticky top-0 z-50 border-b border-px bg-primary backdrop-blur-xs flex items-center justify-between' }>
      <div className={ 'flex items-center gap-4' }>
        <NavigationMenu viewport={ false } className="min-w-max rounded-lg bg-transparent text-white">
          <NavigationMenuList>
            <NavigationMenuItem className={ "mr-5 bg-transparent" }>
              <NavigationMenuLink className={ 'flex flex-row items-center gap-2 flex-nowrap' } href={ "/" }>
                <ChevronLeft className={ "stroke-1" }/> Início
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={ 'flex items-center gap-2' } href={ "/about" }>
                Sobre
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={ 'bg-transparent' }>
                CNQP
              </NavigationMenuTrigger>
              <NavigationMenuContent className={ 'absolute min-w-250' }>
                <div className={ 'flex flex-col gap-4' }>
                  <div className={ 'p-3' }>
                    <h2 className={ 'pb-2 text-md font-semibold text-primary' }>Catálogo Nacional das Qualificações
                      Profissionais</h2>
                    <p className={ 'text-sm text-muted-foreground text-wrap' }>
                      O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
                      profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa
                      disponível
                      no
                      país, no Subsistema de Educação Profissional
                    </p>
                  </div>
                  <Separator/>
                  <h2 className={ "text-sm px-3 text-muted-foreground" }>Campos das qualificações</h2>
                  <div className={ "grid grid-cols-3" }>
                    { fields.map((field) => (
                      <Link
                        key={ field.code }
                        className={ "text-sm p-3 hover:bg-muted transition-all duration-300 rounded-xl" }
                        href={ `/cnqp/${ field.code }` }
                      >
                        { field.name }
                      </Link>
                    )) }
                  </div>
                  <Separator/>
                  <div className={ "flex items-center gap-2 p-3 py-6" }>
                    <Link className={ "text-sm text-primary flex items-center" } href={ "/cnqp" }>
                      Aprender mais sobre o CNQP <ChevronRight className={ "text-xs stroke-1" }/>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={ 'bg-transparent' }>
                Instituições
              </NavigationMenuTrigger>

              <NavigationMenuContent className={ 'min-w-150' }>
                <ul className="flex flex-col justify-center gap-4">
                  { institutionsLinks.map((item) => (
                    <li key={ item.href } className={ 'hover:bg-muted p-3 rounded-lg' }>
                      <Link href={ item.href }>
                        <h3 className="m-0 mb-1 text-base leading-5 font-medium">{ item.title }</h3>
                        <p className="m-0 text-sm leading-5 text-gray-500">{ item.description }</p>
                      </Link>
                    </li>
                  )) }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/licensing">
                Licenciamento
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/news">
                Notícias
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
      </div>
    </div>
  );
}

const institutionsLinks = [
  {
    href: '/institutions#iep',
    title: 'Instituições de Educação Profissional',
    description:
      'Instituições de Educação Profissional Acreditadas pela ANEP para ministrar qualificações, módulos e exames de RCA',
  },
  {
    href: '/institutions#ies',
    title: 'Instituições de Ensino Superior',
    description:
      'Instituições de Ensino Superior Acreditadas pela ANEP para ministrar qualificações que conferem o certificado A, B e C',
  }
] as const;
