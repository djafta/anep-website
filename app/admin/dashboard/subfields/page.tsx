'use server';

import { Field, Subfield } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function FieldsPage() {
  const fields: Field[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className={ 'flex-1 flex flex-col' }>
      <div>

      </div>
      <div className={ 'flex-1 flex flex-col gap-6 py-4' }>
        {
          fields.map(async (field) => {
            const subfields: Subfield[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${field.publicId}/subfields`, {
              cache: "no-store",
            }).then(response => response.json());

            return (
              <div key={ field.publicId } className={ "flex flex-col gap-4" }>
                <h2 className={ "text-sm text-muted-foreground" }>{ field.name }</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {
                    subfields.map((subfield) => (
                      <Link key={ subfield.publicId } className={ "w-full h-full flex" }
                            href={ `/admin/dashboard/subfields/${ subfield.publicId }` }>
                        <Card className="w-full hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
                          <CardContent className="flex flex-col justify-between">
                            <div className={ "flex items-center gap-4" }>
                              <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                                { subfield.code }
                              </div>
                              <h3 className="text-md text-gray-900 mb-2">{ subfield.name }</h3>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )) }
                </div>
                <Separator/>
              </div>
            )
          })
        }
        <Link className={ "w-fit h-fit flex" } href={ `/admin/dashboard/subfields/new` }>
          <Card className="w-full hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
            <CardContent className="flex flex-col justify-between">
              <div className={ "flex items-center gap-4" }>
                <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                  <Plus className="w-6 h-6"/>
                </div>
                <h3 className="text-md text-gray-900 mb-2">
                  Adicionar sub-campo
                </h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}