'use server';

import { Field, IndependentModule } from "@/lib/types";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React from "react";
import { Plus } from "lucide-react";

export default async function Page() {
  const modules: IndependentModule[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className={ 'flex-1 flex flex-col' }>
      <div>

      </div>
      <div className={ 'flex-1 flex flex-col gap-6' }>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            modules.map((field) => (
              <Link key={ field.publicId } className={ "w-full h-full flex" }
                    href={ `/admin/modules/independents/${ field.publicId }` }>
                <Card className="w-full hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
                  <CardContent className="flex flex-col justify-between">
                    <div className={ "flex items-center gap-4" }>
                      <h3 className="text-md text-gray-900 mb-2">{ field.name }</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )) }
          <Link className={ "w-full h-full flex" } href={ `/admin/modules/independents/new` }>
            <Card className="w-full hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
              <CardContent className="flex flex-col justify-between">
                <div className={ "flex items-center gap-4" }>
                  <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                    <Plus className="w-6 h-6"/>
                  </div>
                  <h3 className="text-md text-gray-900 mb-2">
                    Adicionar Módulo
                  </h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}