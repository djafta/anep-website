import publicInstitutionsByProvince from "@/public-institutions-by-province.json"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AccreditedInstitutions } from "@/components/institutions/accredited-institutions";
import { ArrowRight } from "lucide-react";

export default async function InstitutionsPage({ searchParams }: { searchParams: Promise<{ province?: string }> }) {
  const institutions = Object.keys(publicInstitutionsByProvince);
  const { province } = await searchParams;

  if (province) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          <header className="max-w-4xl space-y-6">
            <h1 className="text-3xl font-bold text-primary">
              Instituições Públicas Acreditadas na Província de
              <span className={ 'block pt-2' }>
              { province }
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">

            </p>
          </header>

          <main>
            <AccreditedInstitutions
              institutions={ (publicInstitutionsByProvince as Record<string, string[]>)[province] }
            />
          </main>

        </div>
      </section>
    )
  }

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        <header className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold text-primary">
            Instituições Acreditadas
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">

          </p>
        </header>

        <main>
          <div className={ 'grid grid-cols-4 gap-8' }>
            {
              institutions.map(province => (
                <Link
                  key={ province }
                  href={ `/institutions?province=${ province }` }
                  className={ cn('shadow p-3 rounded-2xl ring-1 bg-primary text-white ring-primary hover:bg-primary/90') }
                >
                  <p className={ 'p-2' }>
                    { province }
                  </p>
                  <div className={ 'px-2 flex justify-between' }>
                    <p className={ 'text-xs' }>
                      { (publicInstitutionsByProvince as Record<string, string[]>)[province].length } instituições
                    </p>
                    <span>
                      <ArrowRight className={ 'size-4' }/>
                    </span>
                  </div>
                </Link>
              ))
            }
          </div>
        </main>

      </div>
    </section>
  );
}
