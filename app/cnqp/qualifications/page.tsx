import { Field, Qualification, Subfield } from "@/lib/types";
import React, { cache } from "react";
import Link from "next/link";
import { QualificationCard } from "@/components/cnqp/qualification-card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const getFieldsMap = cache(async () => {
  const fields: Field[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    cache: "no-store",
  }).then(response => response.json());

  return await Promise.all(fields.map(async (field) => {
    const subfields: Subfield[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field.publicId }/subfields`, {
      cache: "no-store",
    }).then(response => response.json())

    const qualifications = await Promise.all(subfields.map(async (subfield) => {
      const qualifications: Qualification[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications?subfieldPublicId=${ subfield.publicId }`, {
        cache: "no-store",
      }).then(response => response.json());

      return {
        ...subfield,
        qualifications,
      }
    }))

    return {
      field: {
        ...field,
        subfields: qualifications
      }
    }
  }))
})

export default async function Page() {
  const fieldsMap = await getFieldsMap();

  return (
    <section className={ 'pt-12 flex flex-col w-full flex-1' }>
      <div className="sticky top-11 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light tracking-tight text-black">Qualificações</h1>
              <p className="mt-1 text-sm font-light text-black/60">
                Autoridade Nacional da Educação Profissional
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto max-w-sm lg:max-w-lg pb-2">

          </div>
        </div>
      </div>
      <div className="max-w-7xl w-full px-4 mx-auto py-8">
        <div className="space-y-4">
          {
            fieldsMap.map(({ field }) => {
              return (
                <div key={ field.publicId }>
                  <h2 className={ "bg-primary text-white px-2 py-4 flex items-center gap-2 shadow-xl rounded-t-4xl rounded-br-4xl" }>
                    <DynamicIcon name={ field.icon as IconName || 'circle-question-mark' } className="w-6 h-6"/>
                    { field.name }
                  </h2>
                  <div className={ "flex flex-col my-10" }>
                    {
                      field.subfields.map((subfield) => (
                        <div key={ subfield.publicId }>
                          <h3>
                            <Badge>
                              { subfield.name }
                            </Badge>
                          </h3>
                          <Separator className={"my-1"}/>
                          <div className={ "grid grid-cols-1 lg:grid-cols-3 gap-4 my-5" }>
                            {
                              subfield.qualifications.map(qualification => (
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
  );
}