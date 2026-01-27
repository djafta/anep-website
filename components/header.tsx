"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import { useCnqp } from "@/hooks/use-cnqp";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className=" px-0 z-50" height={ 60 } maxWidth="full" onMenuOpenChange={ setIsMenuOpen }>
      <NavbarContent>
        <NavbarBrand>
          <Link className={ "relative h-full w-48 group" } href={ "/" }>
            <div className={ "absolute top-0 flex items-center w-full h-full  transition-opacity duration-300" }>
              <ChevronLeft className={ "stroke-1" }/> Início
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <HeaderLinks/>
      <NavbarContent justify="end">
        <NavbarMenuToggle aria-label={ isMenuOpen ? "Fechar menu" : "Abrir menu" } className="md:hidden"/>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full text-gray-600 hover:text-gray-900" href="/about">
            Sobre
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-gray-600 hover:text-gray-900" href="/licensing">
            Licenciamento
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-gray-600 hover:text-gray-900" href="/qualifications">
            Qualificações
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-gray-600 hover:text-gray-900" href="/news">
            Notícias
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export function HeaderLinks() {
  const { fields } = useCnqp();

  return (
    <NavbarContent className="hidden md:flex gap-10" justify="center">
      <NavbarItem>
        <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/about">
          Sobre
        </Link>
      </NavbarItem>
      <NavbarItem className={ "group h-full items-center flex relative text-gray-600 hover:text-primary" }>
        <Link className="text-sm font-medium flex items-center gap-2" href="/cnqp">
          CNQP
          <ChevronDown className={ "size-3" }/>
        </Link>
        <aside
          className={
            "fixed left-0 w-screen top-full invisible opacity-0 translate-y-2 duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-background px-2 py-3 border-t-2 border-t-primary text-gray-600 shadow-lg rounded-b"
          }
        >
          <div className={ 'mx-auto w-full max-w-7xl flex flex-col gap-4 p-4' }>
            <div className={ 'p-3' }>
              <h2 className={ 'pb-2 text-md font-semibold' }>Catálogo Nacional das Qualificações Profissionais</h2>
              <p className={ 'text-sm text-muted-foreground text-wrap' }>
                O CNQP é um instrumento dinâmico, que contém as competências padrão de todas as qualificações
                profissionais nacionais, registadas e certificáveis, informando sobre a oferta formativa disponível no
                país, no Subsistema de Educação Profissional
              </p>
            </div>
            <Separator/>
            <h2 className={ "text-sm px-3 text-muted-foreground" }>Campos das qualificações</h2>
            <div className={ "grid grid-cols-3" }>
              { fields.map((field) => (
                <Link
                  key={ field.code }
                  className={ "text-sm p-3 hover:bg-primary hover:text-white transition-all duration-300 rounded" }
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
        </aside>
      </NavbarItem>
      <NavbarItem>
        <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/institutions">
          Instituições
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/licensing">
          Licenciamento
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/news">
          Notícias
        </Link>
      </NavbarItem>
    </NavbarContent>
  );
}
