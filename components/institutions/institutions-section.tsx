import { Institution } from "./types";
import { InstitutionCard } from "./institution-card";

interface InstitutionsSectionProps {
  id?: string;
  title: string;
  description: string;
  institutions: Institution[];
}

export function InstitutionsSection({
                                      id,
                                      title,
                                      description,
                                      institutions,
                                    }: InstitutionsSectionProps) {
  return (
    <section className="space-y-10" id={ id }>
      <header className="max-w-4xl space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          { title }
        </h2>

        <p className="text-gray-600 leading-relaxed">
          { description }
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        { institutions.map(institution => (
          <InstitutionCard
            key={ institution.id }
            institution={ institution }
          />
        )) }
      </div>
    </section>
  );
}
