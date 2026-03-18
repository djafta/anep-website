import * as React from "react";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronRight, ExternalLink, Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Field } from "@/lib/types";


interface InstitutionLink {
  href: string;
  title: string;
  description: string;
}

const IES: readonly InstitutionLink[] = [
  {
    href: "/higher-education/public",
    title: "Públicas",
    description:
      "Instituições de Ensino Superior pertencentes ao Estado, financiadas pelo orçamento público e supervisionadas pelo Governo.",
  },
  {
    href: "/higher-education/private",
    title: "Privadas",
    description:
      "Instituições de Ensino Superior pertencentes a entidades privadas, nacionais ou estrangeiras, autorizadas e reguladas pelo Estado.",
  },
] as const;

const IEPS: readonly InstitutionLink[] = [
  {
    href: "/institutions/public",
    title: "Públicas",
    description:
      "Instituições de Educação Profissional pertencentes e geridas pelo Estado, financiadas pelo orçamento público.",
  },
  {
    href: "/institutions/mix",
    title: "Mistas",
    description:
      "Instituições de Educação Profissional com gestão partilhada entre o sector público e privado, incluindo parcerias público-privadas.",
  },
  {
    href: "/institutions/private",
    title: "Privadas",
    description:
      "Instituições de Educação Profissional pertencentes a entidades privadas, nacionais ou estrangeiras, devidamente acreditadas pela ANEP.",
  }
] as const;

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="group relative flex h-full items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
      { children }
    </li>
  );
}

function DropdownTrigger({
                           children,
                           ...props
                         }: LinkProps & { children: React.ReactNode }) {
  return (
    <Link
      className="flex items-center gap-2 bg-transparent text-sm"
      { ...props }
    >
      { children }
    </Link>
  );
}

interface DropdownContentProps {
  children: React.ReactNode;
}

function DropdownContent({ children }: DropdownContentProps) {
  return (
    <aside
      className="
        fixed left-0 top-12 z-50 w-full
        invisible opacity-0
        group-hover:visible group-hover:opacity-100
        bg-white shadow text-gray-900
        duration-300
      "
    >
      { children }
    </aside>
  );
}

export type HeaderProps = {
  theme?: "light" | "dark";
}

export async function Header({ theme = "dark" }: HeaderProps) {
  const fields: Field[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    cache: "no-store"
  }).then(response => response.json());

  return (
    <header
      className={ cn(
        "fixed w-full h-12 top-0 z-50 backdrop-blur-xs flex items-center justify-between",
        {
          "bg-primary text-gray-300": theme === "dark",
          "bg-white text-gray-900 border-b": theme === "light"
        },
      ) }>
      <div className="px-4 max-w-7xl w-full h-full mx-auto flex justify-between gap-4">
        {/* Logo */ }
        <div className="my-auto">
          <Image
            alt="ANEP Logo"
            className={ cn("w-8", { "invert brightness-0": theme === "dark" }) }
            height={ 1000 }
            src="/logo-min.png"
            width={ 1000 }
          />
        </div>

        <nav className={ cn(
          "hidden lg:flex bg-transparent  text-sm h-full",
          { "text-gray-300": theme === "dark", "text-gray-900": theme === "light" }
        ) }>
          <ul className="flex items-center gap-8 h-full">
            <NavItem>
              <Link href="/">Início</Link>
            </NavItem>

            <NavItem>
              <Link href="/about">Sobre</Link>
            </NavItem>

            <NavItem>
              <DropdownTrigger href="/cnqp">
                CNQP
                <ChevronDown className="inline-block size-3 ml-2"/>
              </DropdownTrigger>

              <DropdownContent>
                <div className="max-w-7xl mx-auto flex flex-col gap-4 py-6">
                  <div className="p-3">
                    <h2 className="pb-4 text-lg font-semibold text-primary">
                      Catálogo Nacional das Qualificações Profissionais
                    </h2>
                    <p className="text-sm text-muted-foreground text-wrap">
                      O CNQP é um instrumento dinâmico, que contém as competências
                      padrão de todas as qualificações profissionais nacionais,
                      registadas e certificáveis, informando sobre a oferta formativa
                      disponível no país, no Subsistema de Educação Profissional.
                    </p>
                  </div>

                  <Separator/>

                  <h2 className="text-sm px-3 text-muted-foreground">
                    Campos das qualificações
                  </h2>

                  <div className="grid grid-cols-4">
                    { fields.map((field) => (
                      <a
                        key={ field.code }
                        className="w-fit text-sm p-3 hover:bg-muted transition-all duration-300 rounded-xl"
                        href={ `/cnqp/${ field.publicId }` }
                      >
                        { field.name }
                      </a>
                    )) }
                  </div>

                  <Separator/>

                  <div className="flex items-center gap-2 p-3 py-6">
                    <a
                      className="text-sm text-white flex items-center bg-primary px-4 py-2 rounded-3xl"
                      href="/cnqp"
                    >
                      Aprender mais sobre o CNQP
                      <ChevronRight className="size-3 stroke-1 ml-1"/>
                    </a>
                  </div>
                </div>
              </DropdownContent>
            </NavItem>

            <NavItem>
              <DropdownTrigger href="/institutions">
                Instituições
                <ChevronDown className="inline-block size-3 ml-2"/>
              </DropdownTrigger>

              <DropdownContent>
                <div className="flex flex-col justify-center gap-4 max-w-7xl mx-auto py-6 p-1">
                  <div>
                    <h2 className={ 'text-lg font-semibold text-primary p-3' }>Instituições de Educação
                      Profissional</h2>
                    <p className={ 'text-sm text-muted-foreground px-3' }>
                      Instituições de Educação Profissional acreditadas pela ANEP para ministrar qualificações do
                      certificado
                      vocacional e realizar exames de RCA.
                    </p>
                    <ul className={ 'grid grid-cols-3 py-3' }>
                      { IEPS.map((item) => (
                        <li key={ item.href } className="hover:bg-muted w-fit p-3 rounded-lg">
                          <a href={ item.href }>
                            <h3 className="m-0 mb-1 leading-5 text-sm font-medium">
                              { item.title }
                            </h3>
                            <p className="m-0 text-sm leading-5 text-gray-500">
                              { item.description }
                            </p>
                          </a>
                        </li>
                      )) }
                    </ul>
                  </div>
                  <div>
                    <h2 className={ 'text-lg font-semibold text-primary p-3' }>Instituições de Ensino Superior</h2>
                    <p className={ 'text-sm text-muted-foreground px-3' }>
                      Instituições de Ensino Superior acreditadas pela ANEP para ministrar qualificações do certificado
                      A, B e C.
                    </p>
                    <ul className={ 'grid grid-cols-3 py-3' }>
                      { IES.map((item) => (
                        <li key={ item.href } className="hover:bg-muted w-fit p-3 rounded-lg">
                          <a href={ item.href }>
                            <h3 className="m-0 mb-1 leading-5 text-sm font-medium">
                              { item.title }
                            </h3>
                            <p className="m-0 text-sm leading-5 text-gray-500">
                              { item.description }
                            </p>
                          </a>
                        </li>
                      )) }
                    </ul>
                  </div>
                  <div className="flex items-center gap-2 p-3 py-6">
                    <a
                      className="text-sm text-white flex items-center bg-primary px-4 py-2 rounded-3xl"
                      href="/institutions"
                    >
                      Aprender mais sobre as instituições
                      <ChevronRight className="size-3 stroke-1 ml-1"/>
                    </a>
                  </div>
                </div>
              </DropdownContent>
            </NavItem>
            <NavItem>
              <DropdownTrigger href="/institutions">
                FNEP
                <ChevronDown className="inline-block size-3 ml-2"/>
              </DropdownTrigger>

              <DropdownContent>
                <div className="flex flex-col justify-center gap-4 max-w-7xl mx-auto py-6 p-1">
                  <div>
                    <h2 className={ 'text-lg font-semibold text-primary p-3' }>Fundo Nacional de Educação
                      Profissional</h2>
                    <p className={'px-3 text-sm text-muted-foreground'}>
                      O FNEP é o Instrumento público de financiamento do Subsistema de Educação Profissional, gerido
                      pela ANEP. Visa assegurar recursos financeiros para a formação profissional orientada ao mercado
                      de trabalho, no âmbito da Lei n.º 26/2022 (Lei de Educação Profissional)
                    </p>
                  </div>
                  <div className="flex items-center gap-2 p-3 py-6">
                    <a
                      className="text-sm text-white flex items-center bg-primary px-4 py-2 rounded-3xl"
                      href="/fnep"
                    >
                      Aprender mais sobre o FNEP
                      <ChevronRight className="size-3 stroke-1 ml-1"/>
                    </a>
                  </div>
                </div>
              </DropdownContent>
            </NavItem>
          </ul>
        </nav>

        {/* Espaço reservado à direita (pode ser usado depois) */ }
        <div className={ 'flex items-center py-3' }>
          <Link
            className={ cn('hidden lg:block py-1 px-3 rounded-2xl text-sm', {
              'bg-primary text-white': theme === 'light',
              'bg-white text-primary': theme === 'dark'
            }) }
            href={ 'https://validar.anep.gov.mz' }>
            Validar documentos <ExternalLink className={ 'inline size-3' }/>
          </Link>
        </div>

        <Drawer>
          <DrawerTrigger className={ 'lg:hidden' }>
            <Menu/>
          </DrawerTrigger>
          <DrawerContent className={ 'h-3/4' }>
            <DrawerHeader>
              <DrawerTitle>ANEP</DrawerTitle>
            </DrawerHeader>
            <div className={ 'px-4 overflow-y-auto' }>
              <Accordion
                type="single"
                collapsible
                className="max-w-3xl w-full"
              >

                <AccordionItem value={ 'Início' }>
                  <AccordionTrigger>
                    <a href={ '/' } className={ 'w-fit' }>Início</a>
                  </AccordionTrigger>
                  <AccordionContent>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value={ 'Sobre' }>
                  <AccordionTrigger>
                    <a href={ '/about' } className={ 'w-fit' }>Sobre</a>
                  </AccordionTrigger>
                  <AccordionContent>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value={ 'CNQP' }>
                  <AccordionTrigger>
                    <a href={ '/cnqp' } className={ 'w-fit' }>CNQP</a>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className={ 'grid grid-cols-1' }>
                      {
                        fields.map((field: Field) => (
                          <a
                            key={ field.code }
                            className="w-fit text-sm p-3 text-muted-foreground transition-all duration-300 rounded-xl"
                            href={ `/cnqp/${ field.code }` }
                          >
                            { field.name }
                          </a>
                        ))
                      }
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value={ 'Instituições' }>
                  <AccordionTrigger>
                    <a href={ '/institutions' } className={ 'w-fit' }>Instituições</a>
                  </AccordionTrigger>
                  <AccordionContent>
                    <section>
                      <h2 className={ 'p-3' }>
                        de Educação Profissional
                      </h2>
                      <div className={ 'grid grid-cols-1 p-3' }>
                        {
                          IEPS.map((institution: InstitutionLink) => (
                            <a
                              key={ institution.href }
                              className="w-fit text-sm p-3 text-muted-foreground transition-all duration-300 rounded-xl"
                              href={ institution.href }
                            >
                              { institution.title }
                            </a>
                          ))
                        }
                      </div>
                    </section>
                    <section>
                      <h2 className={ 'p-3' }>
                        de Ensino Superior
                      </h2>
                      <div className={ 'grid grid-cols-1 p-3' }>
                        {
                          IES.map((institution: InstitutionLink) => (
                            <a
                              key={ institution.href }
                              className="w-fit text-sm p-3 text-muted-foreground transition-all duration-300 rounded-xl"
                              href={ institution.href }
                            >
                              { institution.title }
                            </a>
                          ))
                        }
                      </div>
                    </section>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
            <div>
              <div className={ 'flex items-center gap-2 p-3 py-6' }>
                <a
                  className={ 'text-sm text-white flex items-center bg-primary px-4 py-2 rounded-3xl' }
                  href={ 'https://validar.anep.gov.mz' }
                >
                  Validar documentos <ExternalLink className={ 'inline mx-2 size-3' }/>
                </a>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}