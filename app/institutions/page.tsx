import publicInstitutionsByProvince from "@/public-institutions-by-province.json"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AccreditedInstitutions } from "@/components/institutions/accredited-institutions";
import { ArrowRight } from "lucide-react";
import { InstitutionsHeader } from "@/components/institutions/institutions-header";

export default async function InstitutionsPage({ searchParams }: { searchParams: Promise<{ province?: string }> }) {
  const institutions = Object.keys(publicInstitutionsByProvince);
  const { province } = await searchParams;

  if (province) {
    return (
      <section className="pt-12 bg-background flex-1">
        <header className="space-y-6 bg-muted py-10 px-4">
          <div className={ 'mx-auto max-w-7xl' }>
            <h1 className="text-3xl font-bold text-primary">
              Instituições públicas e mistas acreditadas em
              <span className={ 'block mt-2 bg-secondary w-fit px-3 rounded-full' }>
              { province }
            </span>
            </h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto px-4 py-10 space-y-24">
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
    <section className="pt-12 bg-background flex-1">
      <InstitutionsHeader/>
      <main className="max-w-7xl mx-auto px-4 py-10 space-y-24">
        <div className={ 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' }>
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
    </section>
  );
}
