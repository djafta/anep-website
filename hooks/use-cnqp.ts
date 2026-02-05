import cnqp from "@/cnqp.json";

export function useCnqp() {
  const fieldsNames = Array.from(new Set(cnqp.map((o) => o.field))).sort();

  const fields = fieldsNames.map((name) => {
    const qualification = cnqp.find((o) => o.field === name);

    return {
      name,
      code: qualification!.fieldCode.toLowerCase(),
    };
  });

  const qualifications = cnqp.map((o, i) => {
    return {
      id: i,
      name: o.name,
      field: o.field,
      level: Number(o.level),
      fieldCode: o.fieldCode.toLowerCase(),
      certificate: o.certificate,
      url: o.url
    };
  });

  return {
    fields,
    qualifications,
  };
}
