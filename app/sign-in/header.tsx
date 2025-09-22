"use client";

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Image from "next/image";

export function Header() {
  return (
    <Navbar className="py-2 px-0" height={44} maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <Link href={"/"}>
            <Image alt="ANEP Logo" height={15} src="/logo-min.png" width={30} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-[#003B71]  text-white px-4 rounded-full text-sm font-medium" href="/sign-up">
            Criar conta
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
