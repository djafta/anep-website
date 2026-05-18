'use server';

import React from "react";
import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { IndependentModule } from "@/lib/types";

export async function CnqpModules() {
  const modules: IndependentModule[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/modules/independents`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        modules.map((module) => (
          <Link key={ module.publicId } className={ "w-full h-full flex" }
                href={ `/cnqp/modules/${ module.publicId }` }>
            <Card className="w-full  hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
              <CardContent className="flex flex-col justify-between">
                <div className={ "flex items-center" }>
                  <h3 className="text-md text-gray-900 mb-2">{ module.name }</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        )) }
    </div>
  );
}
