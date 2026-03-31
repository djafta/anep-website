import { Field, Qualification, Subfield } from "@/lib/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { QualificationsTable } from "@/components/admin/qualifications-table";

export default async function AdminQualificationsPage() {
  const fields: Field[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields`, {
    cache: "no-store",
  }).then(response => response.json());

  return (
    <div className={ 'w-full py-4' }>
      {
        fields.map(async (field) => {
          const subfields: Subfield[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/fields/${ field.publicId }/subfields`, {
            cache: "no-store",
          }).then(response => response.json());

          return (
            <div className={ 'pb-20' } key={ field.publicId }>
              <div className={ 'bg-primary text-white px-4 py-2' }>
                <h2 className={ 'text-sm' }>{ field.name }</h2>
              </div>
              <Separator/>

              <Accordion
                type="single" collapsible
              >
                {
                  subfields.map(async (subfield) => {

                    const qualifications: Qualification[] = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications?subfieldPublicId=${ subfield.publicId }`, {
                      cache: "no-store",
                    }).then(response => response.json());

                    return (
                      <AccordionItem key={ subfield.publicId } value={ subfield.publicId }>
                        <AccordionTrigger>{ subfield.name }</AccordionTrigger>
                        <AccordionContent className={'grid grid-cols-1 gap-4'}>
                          <QualificationsTable data={ qualifications }/>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })
                }
              </Accordion>
            </div>
          )
        })
      }
    </div>
  )
}