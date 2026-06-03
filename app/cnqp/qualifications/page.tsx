import { Field, Qualification, Subfield } from "@/lib/types";
import React, { cache } from "react";
import { QualificationsPage } from "@/components/cnqp/qualifications.page";

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
    <QualificationsPage fieldsMap={ fieldsMap }/>
  );
}