import { InstitutionsSection } from "@/components/institutions/institutions-section";
import { Institution } from "@/components/institutions/types";

const professionalEducationInstitutions: Institution[] = [
  {
    id: "itimp",
    name: "Maputo Industrial Technical Institute",
    location: "Maputo",
    type: "professional-education",
    accreditations: [
      {
        qualification: "Industrial Electricity Technician",
        level: 3,
        certificate: "B",
      },
      {
        qualification: "Electrical Installations",
        level: 2,
        certificate: "C",
      },
    ],
  },
];

const higherEducationInstitutions: Institution[] = [
  {
    id: "utm",
    name: "Technical University of Mozambique",
    location: "Maputo",
    type: "higher-education",
    accreditations: [
      {
        qualification: "Computer Engineering",
        level: 5,
        certificate: "A",
      },
    ],
  },
];

export default function InstitutionsPage() {
  return (
    <main className="py-32">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        <header className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Instituições Acreditadas
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Accreditation granted by ANEP is specific to each institution,
            qualification, level and certificate, in accordance with the
            National Professional Education System.
          </p>
        </header>

        <InstitutionsSection
          id={ "iep" }
          title="Instituições de Educação Professional"
          description="Institutions accredited by ANEP to deliver professional qualifications, training modules and RCA examinations."
          institutions={ professionalEducationInstitutions }
        />

        <InstitutionsSection
          id={ "ies" }
          title="Instituições de Ensino Superior"
          description="Higher Education Institutions accredited by ANEP to deliver qualifications leading to Certificates A, B and C."
          institutions={ higherEducationInstitutions }
        />
      </div>
    </main>
  );
}
