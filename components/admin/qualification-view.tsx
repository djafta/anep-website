"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Pencil } from "lucide-react";
import { DeleteQualificationDialog } from "@/components/admin/delete-qualification-dialog";
import Link from "next/link";

export type Qualification = {
  publicId: string;
  name: string;
  code: string;
  description: string;
  sortOrder: number;
  specUrl: string;
  level: number | null;
  certificate: string | null;
  title: string;
};

interface Props {
  qualification: Qualification;
}

function Field({
                 label,
                 children,
               }: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <div className="text-xs text-muted-foreground">{ label }</div>
      <div className="text-sm font-medium">{ children || "—" }</div>
    </div>
  );
}

export function QualificationView({ qualification }: Props) {
  return (
    <div className="w-full space-y-8">
      {/* Header */ }
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">{ qualification.title }</h1>
        </div>

        <div className="flex gap-2">
          <Link href={ `/admin/qualifications/${ qualification.publicId }/edit` }>
            <Button
              size="icon"
              variant="ghost"
            >
              <Pencil className="text-primary h-4 w-4"/>
            </Button>
          </Link>

          <DeleteQualificationDialog qualificationPublicId={ qualification.publicId }/>
        </div>
      </div>

      {/* Metadata */ }
      <div className="grid gap-8 md:grid-cols-3">
        <Field label="Código">
          <span className="font-mono">{ qualification.code }</span>
        </Field>

        <Field label="Nível">
          { qualification.level ? (
            <Badge variant="secondary">Level { qualification.level }</Badge>
          ) : null }
        </Field>

        <Field label="Certificado">
          { qualification.certificate ? (
            <Badge>{ qualification.certificate }</Badge>
          ) : null }
        </Field>

        <Field label="Ordem">{ qualification.sortOrder }</Field>

        <Field label="Especificação">
          { qualification.specUrl ? (
            <a
              href={ qualification.specUrl }
              target="_blank"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Abrir documento
              <ExternalLink className="h-3 w-3"/>
            </a>
          ) : null }
        </Field>
      </div>

      <Field label="Nome">{ qualification.name }</Field>

      {/* Description */ }
      <div className="max-w-4xl space-y-1">
        <div className="text-xs text-muted-foreground">Descrição</div>
        <div className="text-sm text-muted-foreground text-justify">
          { qualification.description || "—" }
        </div>
      </div>
    </div>
  );
}