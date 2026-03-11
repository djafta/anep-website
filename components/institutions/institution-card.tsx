"use client";

import { useState } from "react";
import { Institution } from "./types";
import { AccreditationsTable } from "./accreditations-table";

export function InstitutionCard({
                                  institution,
                                }: {
  institution: Institution;
}) {
  const [open, setOpen] = useState(false);

  const levels = new Set(institution.accreditations.map(a => a.level));
  const certificates = new Set(
    institution.accreditations.map(a => a.certificate)
  );

  return (
    <article className="rounded-2xl border border-primary bg-white p-6 space-y-6">
      <header className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900">
          { institution.name }
        </h3>
        <p className="text-sm text-gray-600">
          { institution.location }
        </p>
      </header>

      <div className="flex flex-wrap gap-6 text-sm text-gray-700">
    <span>
      <strong>{ institution.accreditations.length }</strong> Qualificações
    </span>
        <span>
    <strong>{ levels.size }</strong> Níveis
    </span>
        <span>
    <strong>{ certificates.size }</strong> Certificados
    </span>
      </div>

      <button
        onClick={ () => setOpen(!open) }
        className="text-sm font-medium text-primary hover:underline"
      >
        { open ? "Esconder qualificações" : "Ver qualificações" }
      </button>

      { open && (
        <AccreditationsTable
          accreditations={ institution.accreditations }
        />
      ) }
    </article>
  );
}
