import { BadgeCheck } from "lucide-react";
import React, { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { HorizontalBarChart } from "@/components/admin/horizonta-bar-chart";
import { Qualification } from "@/lib/types";

const highlightLabel = (
  label: string,
  searchTerms: string[],
) => {
  const terms = searchTerms
    .filter(Boolean)
    .map((term) =>
      term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );

  if (!terms.length) {
    return label;
  }

  const regex = new RegExp(
    `(?<![\\p{L}\\p{N}])(${terms.join("|")})(?![\\p{L}\\p{N}])`,
    "giu",
  );

  return label.split(regex).map((part, i) =>
    terms.some(
      (term) => part.toLowerCase() === term.toLowerCase(),
    ) ? (
      <span
        key={i}
        className="text-white font-semibold bg-destructive rounded-sm"
      >
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
};

export default async function Page() {
  const data = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/analysis`, {
    next: {
      revalidate: process.env.NODE_ENV === 'production' ? 60 : 0,
    }
  }).then(response => response.json());


  return (
    <div className={ "flex flex-col flex-1 pb-10" }>
      <div className={ 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4' }>
        <AnalysisCard
          icon={ <BadgeCheck className={ "w-8 h-8 fill-white stroke-primary" }/> }
          number={ data.stats.totalQualifications }
          description={ 'Total de qualificações' }
        />

        <AnalysisCard
          icon={ <span
            className={ "w-8 h-8 text-white text-lg text-nowrap flex items-center justify-center font-semibold" }
            children={ `${ Math.round(data.stats.brokenLinks.percentage) }%` }/> }
          number={ data.stats.brokenLinks.total }
          description={ `Links quebrados` }
        />

        <AnalysisCard
          icon={ <span
            className={ "w-8 h-8 text-white text-lg text-nowrap flex items-center justify-center font-semibold" }
            children={ `${ Math.round(data.stats.unnamedQualifications.percentage) }%` }/> }
          number={ data.stats.unnamedQualifications.total }
          description={ `Sem nome` }
        />
      </div>
      <div className={ "mt-16 max-w-sm" }>
        <HorizontalBarChart data={ [
          {
            total: data.stats.totalQualifications,
            label: "Qualificações com links válidos",
            count: data.stats.totalQualifications - data.stats.brokenLinks.total
          },
          {
            total: data.stats.totalQualifications,
            label: "Qualificações com links quebrados",
            count: data.stats.brokenLinks.total
          },
          {
            total: data.stats.totalQualifications,
            label: "Qualificações duplicadas",
            count: data.stats.duplicatedQualifications.total
          }
        ] }/>
      </div>
      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Qualificações com links quebrados</CardTitle>
          <CardDescription>
            Lista de itens com links inválidos que precisam de correção.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-6 px-6 py-3 border-b text-sm font-medium">
            <div className={ "col-span-3" }>Título</div>
            <div className={ "hidden lg:block" }>Nível</div>
            <div className={ "hidden lg:block" }>Certificado</div>
            <div className={ "hidden lg:block" }>Código</div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            { data.brokenLinkQualifications.map((broken: any) => (
              <Link
                target="_blank"
                href={ `/admin/qualifications/${ broken.qualification.publicId }` }
                key={ broken.qualification.publicId }
                className="grid lg:grid-cols-6 px-6 py-4 hover:bg-muted/30"
              >
                <div className={ "col-span-3" }>{ broken.qualification.title }</div>
                <div className={ "hidden lg:block" }>{ broken.qualification.level }</div>
                <div className={ "hidden lg:block" }>{ broken.qualification.certificate }</div>
                <div className={ "hidden lg:block" }>{ broken.qualification.code }</div>
              </Link>
            )) }
          </div>
        </CardContent>
      </Card>

      <div className={ "mt-16 max-w-sm" }>
        <HorizontalBarChart data={ [
          {
            total: data.stats.totalQualifications,
            label: "Qualificações com nomes inválidos",
            count: data.stats.wrongNames.total
          }
        ] }/>
      </div>

      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Qualificações com nomes inválidos</CardTitle>
          <CardDescription>
            Estas qualificações podem ter títulos no lugar de nomes. "Certificado Vocacional de Nível V em Mecânica
            Auto" é o título. O nome seria "Mecânica Auto".

            <div className={"mt-2"}>
              Os problemas mais comuns estão destacados a <span className={"bg-destructive text-white p-1 rounded-full"}>vermelho</span>.
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-6 px-6 py-3 border-b text-sm font-medium">
            <div className={ "col-span-3" }>Nome</div>
            <div className={ "hidden lg:block" }>Nível</div>
            <div className={ "hidden lg:block" }>Certificado</div>
            <div className={ "hidden lg:block" }>Código</div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            { data.wrongNames.map((wrong: any) => (
              <Link
                target="_blank"
                href={ `/admin/qualifications/${ wrong.publicId }` }
                key={ wrong.publicId }
                className="grid lg:grid-cols-6 px-6 py-4 hover:bg-muted/30"
              >
                <div className={ "col-span-3 text-destructive" }>{ highlightLabel(wrong.name, ["1", "2", "3", "4", "5", "CV", "CO", "Nivel", "nível", "Certificado", "Vocacional", "Ocupacional"])  }</div>
                <div className={ "hidden lg:block" }>{ wrong.level }</div>
                <div className={ "hidden lg:block" }>{ wrong.certificate }</div>
                <div className={ "hidden lg:block" }>{ wrong.code }</div>
              </Link>
            )) }
          </div>
        </CardContent>
      </Card>

      <div className={ "mt-16 max-w-sm" }>
        <HorizontalBarChart data={ [
          {
            total: data.stats.totalQualifications,
            label: "Qualificações com títulos inválidos",
            count: data.stats.wrongTitles.total
          }
        ] }/>
      </div>

      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Qualificações com títulos inválidos</CardTitle>
          <CardDescription>
            Estas qualificações podem ter nomes no lugar de títulos. "Certificado Vocacional de Nível V em Mecânica
            Auto" é o título. O nome seria "Mecânica Auto".

            <div className={"mt-2"}>
              Os problemas mais comuns estão destacados a <span className={"bg-destructive text-white p-1 rounded-full"}>vermelho</span>.
            </div>
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-6 px-6 py-3 border-b text-sm font-medium">
            <div className={ "col-span-3" }>Título</div>
            <div className={ "hidden lg:block" }>Nível</div>
            <div className={ "hidden lg:block" }>Certificado</div>
            <div className={ "hidden lg:block" }>Código</div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            { data.wrongTitles.map((wrong: any) => (
              <Link
                target="_blank"
                href={ `/admin/qualifications/${ wrong.publicId }` }
                key={ wrong.publicId }
                className="grid lg:grid-cols-6 px-6 py-4 hover:bg-muted/30"
              >
                <div className={ "col-span-3 text-red-400" }>{ highlightLabel(wrong.title, ["1", "2", "3", "4", "5", "CV", "CO", "Nivel", "nível"]) }</div>
                <div className={ "hidden lg:block" }>{ wrong.level }</div>
                <div className={ "hidden lg:block" }>{ wrong.certificate }</div>
                <div className={ "hidden lg:block" }>{ wrong.code }</div>
              </Link>
            )) }
          </div>
        </CardContent>
      </Card>

      <div className={ "mt-16 max-w-sm" }>
        <HorizontalBarChart data={ [
          {
            total: data.stats.totalQualifications,
            label: "Qualificações com certificados desconhecidos",
            count: data.stats.unknownCertificates.total
          }
        ] }/>
      </div>

      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Qualificações com certificados desconhecidos</CardTitle>
          <CardDescription>
            Estas qualificações tem certificados que diferem de Vocacional e Ocupacional.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-6 px-6 py-3 border-b text-sm font-medium">
            <div className={ "col-span-3" }>Título</div>
            <div className={ "hidden lg:block" }>Nível</div>
            <div className={ "hidden lg:block" }>Certificado</div>
            <div className={ "hidden lg:block" }>Código</div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            { data.unknownCertificates.map((unknown: any) => (
              <Link
                target="_blank"
                href={ `/admin/qualifications/${ unknown.publicId }` }
                key={ unknown.publicId }
                className="grid lg:grid-cols-6 px-6 py-4 hover:bg-muted/30"
              >
                <div className={ "col-span-3" }>{ unknown.title }</div>
                <div className={ "hidden lg:block" }>{ unknown.level }</div>
                <div className={ "hidden lg:block text-destructive" }>{ unknown.certificate }</div>
                <div className={ "hidden lg:block" }>{ unknown.code }</div>
              </Link>
            )) }
          </div>
        </CardContent>
      </Card>

      <div className={ "mt-16 max-w-sm" }>
        <HorizontalBarChart data={ [
          {
            total: data.stats.totalQualifications,
            label: "Qualificações com certificados desconhecidos",
            count: data.stats.duplicatedQualifications.total
          }
        ] }/>
      </div>

      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Qualificações duplicadas</CardTitle>
          <CardDescription>
            Ao realizar a análise, foram identificadas as qualificações abaixo com nome, nível e certificado idênticos.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <div className="grid lg:grid-cols-6 px-6 py-3 border-b text-sm font-medium">
            <div className={ "col-span-3" }>Nome</div>
            <div className={ "hidden lg:block" }>Nível</div>
            <div className={ "hidden lg:block" }>Certificado</div>
            <div className={ "hidden lg:block" }>Código</div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            { data.duplicatedQualifications.sort((a: Qualification, b: Qualification) => Number(a.level) - Number(b.level)).map((duplicate: any) => (
              <Link
                target="_blank"
                href={ `/admin/qualifications/${ duplicate.publicId }` }
                key={ duplicate.publicId }
                className="grid lg:grid-cols-6 px-6 py-4 hover:bg-muted/30 odd:text-destructive"
              >
                <div className={ "col-span-3" }>{ duplicate.name }</div>
                <div className={ "hidden lg:block" }>{ duplicate.level }</div>
                <div className={ "hidden lg:block" }>{ duplicate.certificate }</div>
                <div className={ "hidden lg:block" }>{ duplicate.code }</div>
              </Link>
            )) }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


export type StatsCardProps = {
  readonly number: string;
  readonly description: string;
  readonly icon: ReactNode;
};

export function AnalysisCard({ number, icon, description }: StatsCardProps) {
  return (
    <div className={ "flex gap-3 border bg-white shadow p-4 rounded-2xl" }>
      <div className={ "bg-primary text-3xl text-primary w-16 h-16 flex items-center justify-center rounded-full" }>
        { icon }
      </div>
      <div className={ "grid grid-rows-2" }>
        <p className={ "text-primary text-xl font-bold" }>{ number }</p>
        <p className={ "text-sm text-primary" }>{ description }</p>
      </div>
    </div>
  );
}
