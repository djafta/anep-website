'use server';

import React from "react";
import Link from "next/link";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { Card, CardContent } from "@/components/ui/card";
import { Field } from "@/lib/types";

export async function CnqpFields() {
  const fields: Field[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        fields.map((field) => (
          <Link key={ field.publicId } className={ "w-full h-full flex" }
                href={ `/cnqp/${ field.publicId }` }>
            <Card className="w-full  hover:shadow-lg hover:ring-1 ring-primary transition-shadow duration-300">
              <CardContent className="flex flex-col justify-between">
                <div className={ "flex items-center gap-4" }>
                  <div className={ "overflow-hidden rounded-full p-3 bg-primary text-white aspect-square w-fit" }>
                    <DynamicIcon name={ field.icon as IconName || 'circle-question-mark' } className="w-6 h-6"/>
                  </div>
                  <h3 className="text-md text-gray-900 mb-2">{ field.name }</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        )) }
    </div>
  );
}
