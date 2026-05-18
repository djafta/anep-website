"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, Pencil } from "lucide-react";
import Link from "next/link";
import { IndependentModule } from "@/lib/types";
import { DeleteModuleDialog } from "@/components/admin/delete-module-dialog";

interface Props {
  module: IndependentModule;
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

export function ModuleView({ module }: Props) {
  return (
    <div className="w-full space-y-8">
      {/* Header */ }
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">{ module.title }</h1>
        </div>

        <div className="flex gap-2">
          <Link href={ `/admin/modules/independents/${ module.publicId }/edit` }>
            <Button
              size="icon"
              variant="ghost"
            >
              <Pencil className="text-primary h-4 w-4"/>
            </Button>
          </Link>

          <DeleteModuleDialog moduleId={ module.publicId }/>
        </div>
      </div>

      {/* Metadata */ }
      <div className="grid gap-8 md:grid-cols-3">
        <Field label="Código">
          <span className="font-mono">{ module.code }</span>
        </Field>

        <Field label="Ordem">{ module.sortOrder }</Field>

        <Field label="Especificação">
          { module.specUrl ? (
            <a
              href={ module.specUrl }
              target="_blank"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Abrir documento
              <ExternalLink className="h-3 w-3"/>
            </a>
          ) : null }
        </Field>
      </div>

      <Field label="Nome">{ module.name }</Field>

      {/* Description */ }
      <div className="max-w-4xl space-y-1">
        <div className="text-xs text-muted-foreground">Descrição</div>
        <div className="text-sm text-muted-foreground text-justify">
          { module.description || "—" }
        </div>
      </div>
    </div>
  );
}