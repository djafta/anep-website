import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export type AccreditedInstitutionsProps = {
  institutions: string[];
}

export function AccreditedInstitutions({ institutions }: AccreditedInstitutionsProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-3xl w-full"
    >
      {
        institutions.map(institution => (
          <AccordionItem value={ institution } key={ institution }>
            <AccordionTrigger>{ institution }</AccordionTrigger>
            <AccordionContent className={'p-3 bg-accent'}>
              <p>Lamentamos! Ainda não existe conteúdo disponível. Estamos em atualização</p>
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}
