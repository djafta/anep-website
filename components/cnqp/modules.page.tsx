"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Search } from "lucide-react";

export type ModulesPageProps = {
  modules: {
    publicId: string;
    name: string;
  }[]
}

export function ModulesPage({ modules }: ModulesPageProps) {
  const [search, setSearch] = useState("");

  const searchTerm = search.toLowerCase();

  const filteredModules = searchTerm.length === 0 ? modules : modules.filter(module => module.name.toLowerCase().includes(searchTerm));
  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <div className="sticky top-11 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light tracking-tight text-black">Módulos Independentes</h1>
              <p className="mt-1 text-sm font-light text-black/60">
                Autoridade Nacional da Educação Profissional
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-2 w-full max-w-sm lg:max-w-lg pb-2">
            <InputGroup>
              <InputGroupInput onChange={ event => setSearch(event.target.value) } placeholder="Pesquisar..."/>
              <InputGroupAddon>
                <Search/>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-4 mx-auto my-10">
        {
          filteredModules.map((module) => (
            <Link key={ module.publicId } className={ "w-full h-full flex" }
                  href={ `/cnqp/modules/${ module.publicId }` }>
              <Card className="w-full  hover:shadow-lg transition-shadow duration-300 bg-linear-to-r from-primary to-secondary">
                <CardContent className="flex flex-col justify-between">
                  <div className={ "flex items-center" }>
                    <h3 className="text-md text-white mb-2">{ module.name }</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )) }
      </div>
    </section>
  )
}