import { BadgeCheck } from "lucide-react";
import React, { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function Page() {
  const data = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/qualifications/analysis`, {
    next: {
      revalidate: 60,
    }
  }).then(response => response.json());


  return (
    <div className={ "flex flex-col flex-1" }>
      <div className={ 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4' }>
        <AnalysisCard
          icon={ <BadgeCheck className={ "w-8  h-8 fill-white stroke-primary" }/> }
          number={ data.stats.totalQualifications }
          description={ 'Total de qualificações' }
        />

        <AnalysisCard
          icon={ <span
            className={ "w-8  h-8 text-white text-lg text-nowrap flex items-center justify-center font-semibold" }
            children={ `${ Math.round(data.stats.brokenLinks.percentage) }%` }/> }
          number={ data.stats.brokenLinks.total }
          description={ `Links quebrados` }
        />

        <AnalysisCard
          icon={ <span
            className={ "w-8  h-8 text-white text-lg text-nowrap flex items-center justify-center font-semibold" }
            children={ `${ Math.round(data.stats.unnamedQualifications.percentage) }%` }/> }
          number={ data.stats.unnamedQualifications.total }
          description={ `Sem nome` }
        />
      </div>
      <Card className="my-10">
        <CardHeader>
          <CardTitle>Qualificações com links quebrados</CardTitle>
          <CardDescription>
            Lista de itens com links inválidos que precisam de correção.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          {/* Header fixo separado */ }
          <div className="grid grid-cols-5 px-6 py-3 border-b text-sm font-medium bg-muted/40">
            <div className={ "col-span-2" }>Nome</div>
            <div>Nível</div>
            <div>Certificado</div>
            <div></div>
          </div>

          {/* Scroll area */ }
          <div className="max-h-96 overflow-y-auto">
            { data.brokenLinkQualifications.map((broken: any) => (
              <Link
                target="_blank"
                href={ `/admin/qualifications/${ broken.qualification.publicId }` }
                key={ broken.qualification.publicId }
                className="grid grid-cols-5 px-6 py-4 border-b hover:bg-muted/30"
              >
                <div className={ "col-span-2" }>{ broken.qualification.name }</div>
                <div>{ broken.qualification.level }</div>
                <div>{ broken.qualification.certificate }</div>
                <div className="flex items-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Ver métricas
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={"w-96"}>
                      <HttpInspectorCard data={ broken }/>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
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

type HttpCheck = {
  ok: boolean;
  status: number;
  responseTime: number;
  contentType: string;
  contentLength: number;
  protocol: string;
  domain: string;
  isPdfContentType: boolean;
  isRealPdf: boolean;
  isBroken: boolean;
};

export function HttpInspectorCard({ data }: { data: HttpCheck }) {
  return (
    <Card className="w-full max-w-2xl ring-0">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>HTTP Inspection</CardTitle>

          <Badge variant={ data.ok ? "default" : "destructive" }>
            { data.ok ? "OK" : "FAILED" }
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          { data.domain }
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Status line */ }
        <div className="grid grid-cols-3 gap-3">
          <Metric label="Status" value={ data.status }/>
          <Metric label="Response Time" value={ `${ data.responseTime }ms` }/>
          <Metric label="Protocol" value={ data.protocol.toUpperCase() }/>
        </div>

        {/* Content info */ }
        <div className="grid grid-cols-2 gap-3">
          <Metric label="Content-Type" value={ data.contentType }/>
          <Metric label="Size" value={ `${ data.contentLength } bytes` }/>
        </div>

        {/* Flags */ }
        <div className="flex flex-wrap gap-2 pt-2">
          <Flag label="Broken" active={ data.isBroken }/>
          <Flag label="PDF Content-Type" active={ !data.isPdfContentType }/>
          <Flag label="Real PDF" active={ !data.isRealPdf }/>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: any }) {
  return (
    <div className="rounded-md border p-3">
      <p className="text-xs text-muted-foreground">{ label }</p>
      <p className="text-sm font-medium">{ value }</p>
    </div>
  );
}

function Flag({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      className={ `px-2 py-1 text-xs rounded-full border ${
        active
          ? "bg-red-500/10 text-red-600 border-red-200"
          : "bg-green-500/10 text-green-600 border-green-200"
      }` }
    >
      { label }
    </div>
  );
}