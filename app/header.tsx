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
import { Button } from "@heroui/button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar className=" px-0 z-50" height={60} maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link href={"/"}>
            <Image alt="ANEP Logo" height={15} src="/logo-min.png" width={30} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-10" justify="center">
        <NavbarItem>
          <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/about">
            Sobre
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/licensing">
            Licenciamento
          </Link>
        </NavbarItem>
        <NavbarItem className={"group h-full items-center flex relative text-gray-600 hover:text-primary"}>
          <Link className="text-sm font-medium" href="/qualifications">
            Qualificações
          </Link>
          <aside
            className={
              "absolute w-sm top-full invisible opacity-0 translate-y-2 -translate-x-1/2 duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-background px-2 py-3 border-t-2 border-t-primary text-gray-600 shadow-lg rounded-b"
            }
          >
            <div>
              <h2 className={"text-md font-bold p-3"}>Áreas de qualificações</h2>
            </div>
            <div className={"grid grid-cols-1"}>
              <Link
                className={"text-sm p-3 hover:bg-primary/20 transition-all duration-300 rounded"}
                href={"/qualifications/tecnologia-da-informacao"}
              >
                Tecnologia da Informação
              </Link>
              <Link
                className={"text-sm p-3 hover:bg-primary/20 transition-all duration-300 rounded"}
                href={"/qualifications/engenharia"}
              >
                Engenharia
              </Link>
              <Link
                className={"text-sm p-3 hover:bg-primary/20 transition-all duration-300 rounded"}
                href={"/qualifications/saude"}
              >
                Saúde
              </Link>
              <Link
                className={"text-sm p-3 hover:bg-primary/20 transition-all duration-300 rounded"}
                href={"/qualifications/administracao"}
              >
                Administração
              </Link>
              <Link
                className={"text-sm p-3 hover:bg-primary/20 transition-all duration-300 rounded"}
                href={"/qualifications/turismo"}
              >
                Turismo
              </Link>
              <Link
                className={"text-sm p-3 hover:bg-primary/20 transition-all duration-300 rounded"}
                href={"/qualifications/agricultura"}
              >
                Agricultura
              </Link>
            </div>
          </aside>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-600 hover:text-gray-900 text-sm font-medium" href="/news">
            Notícias
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            href="/sign-in"
            variant="light"
          >
            Entrar
          </Button>
        </NavbarItem>
        <NavbarItem className={"hidden md:flex"}>
          <Button
            as={Link}
            className="bg-[#003B71]  text-white px-4 py-2 rounded-full text-sm font-medium"
            href="/sign-up"
          >
            Criar conta
          </Button>
        </NavbarItem>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} className="md:hidden" />
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
        <NavbarMenuItem>
          <Link className="w-full text-gray-600 hover:text-gray-900" href="/sign-in">
            Entrar
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
