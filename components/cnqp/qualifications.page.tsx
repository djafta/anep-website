"use client";

import { Field, Qualification, Subfield } from "@/lib/types";
import React, { useState } from "react";
import Link from "next/link";
import { QualificationCard } from "@/components/cnqp/qualification-card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { Badge } from "@/components/ui/badge";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Search } from "lucide-react";

export type QualificationsPageProps = {
  fieldsMap: {
    field: Field & {
      subfields: (Subfield & {
        qualifications: Qualification[]
      })[]
    }
  }[]
}

export function QualificationsPage({ fieldsMap }: QualificationsPageProps) {
  const [search, setSearch] = useState("");

  const searchTerm = search.toLowerCase();

  const filteredMap = search.length === 0
    ? fieldsMap
    : fieldsMap
      .map(({ field }) => {
        const fieldMatch = field.name.toLowerCase().includes(searchTerm);

        const subfields = field.subfields
          .map(subfield => {
            const subfieldMatch = subfield.name.toLowerCase().includes(searchTerm);

            const qualifications = subfield.qualifications.filter(
              qualification =>
                qualification.name.toLowerCase().includes(searchTerm)
            );

            // Se o field ou subfield fizer match,
            // mantém todas as qualificações
            if (fieldMatch || subfieldMatch) {
              return subfield;
            }

            // Caso contrário, mantém apenas as qualificações que fizeram match
            if (qualifications.length > 0) {
              return {
                ...subfield,
                qualifications,
              };
            }

            return null;
          })
          .filter(Boolean);

        if (fieldMatch || subfields.length > 0) {
          return {
            field: {
              ...field,
              subfields,
            },
          };
        }

        return null;
      })
      .filter(Boolean);

  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <div className="sticky top-11 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light tracking-tight text-black">Qualificações</h1>
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
      <div className="max-w-7xl w-full px-4 mx-auto py-8">
        <div className="space-y-4">
          {
            filteredMap.filter(m => m !== null).map(({ field }) => {
              return (
                <div key={ field.publicId }>
                  <h2
                    className={ "bg-primary text-white px-2 py-4 flex items-center gap-2 shadow-xl rounded-t-4xl rounded-br-4xl" }>
                    <DynamicIcon name={ field.icon as IconName || 'circle-question-mark' } className="w-6 h-6"/>
                    { field.name }
                  </h2>
                  <div className={ "flex flex-col my-10" }>
                    {
                      field.subfields.filter(subfield => subfield !== null && subfield.qualifications.length > 0).map((subfield) => (
                        <div key={ subfield?.publicId }>
                          <h3 className={ "flex items-center max-w-7xl" }>
                            <Badge>
                              { subfield?.name }
                            </Badge>
                            <div className={ "my-1 w-full h-px bg-primary" }/>
                          </h3>
                          <div className={ "grid grid-cols-1 lg:grid-cols-3 gap-4 my-5" }>
                            {
                              subfield?.qualifications.map(qualification => (
                                <Link
                                  className={ 'h-full' }
                                  key={ qualification.publicId }
                                  href={ `/cnqp/${ field.publicId }/${ subfield.publicId }/${ qualification.publicId }` }>
                                  <QualificationCard
                                    name={ qualification.name }
                                    title={ qualification.code }
                                    code={ qualification.code }
                                    level={ qualification.level }
                                  />
                                </Link>
                              ))
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}