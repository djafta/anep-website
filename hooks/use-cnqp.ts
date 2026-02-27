import { useMemo } from "react";
import cnqp from "@/cnqp.json";

type Qualification = {
  name: string;
  code: string;
  title: string;
  level: string;
}

type Subfield = {
  name: string;
  code: string;
  qualifications: Qualification[];
}

type Field = {
  name: string;
  code: string;
  subfields: Subfield[];
}

export function useCnqp() {
  const fields = useMemo(() => {
    return cnqp.map((field) => ({
      name: field.name,
      code: field.code,
      subfields: field.subfields.map((subfield) => ({
        name: subfield.name,
        code: subfield.code,
        qualifications: 'qualifications' in subfield && Array.isArray(subfield.qualifications) ? subfield.qualifications.map((qualification) => ({
          name: qualification.name,
          code: qualification.code,
          title: qualification.title,
          level: qualification.level,
        })) : [],
      })),
    }));
  }, []);

  const qualificationIndex = useMemo(() => {
    const map: Map<string, {
      field: Field;
      subfield: Subfield;
      qualification: Qualification;
    }> = new Map();

    for (const field of fields) {
      for (const subfield of field.subfields) {
        for (const qualification of subfield.qualifications) {
          map.set(qualification.code, {
            field,
            subfield,
            qualification,
          });
        }
      }
    }

    return map;
  }, [fields]);

  function getQualificationByCode(code: string) {
    return qualificationIndex.get(code) || null;
  }

  return {
    fields,
    getQualificationByCode,
  };
}