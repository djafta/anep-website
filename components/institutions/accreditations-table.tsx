"use client";

import { useState } from "react";
import { Accreditation } from "./types";

export function AccreditationsTable({
                                      accreditations,
                                    }: {
  accreditations: Accreditation[];
}) {
  const [query, setQuery] = useState("");

  const filtered = accreditations.filter(a =>
    a.qualification.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search qualification…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full rounded-lg border px-4 py-2 text-sm"
      />

      <div className="max-h-96 overflow-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-gray-50">
          <tr className="text-left text-gray-700">
            <th className="px-4 py-2">Qualification</th>
            <th className="px-4 py-2">Level</th>
            <th className="px-4 py-2">Certificate</th>
          </tr>
          </thead>
          <tbody>
          {filtered.map((a, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{a.qualification}</td>
              <td className="px-4 py-2">Level {a.level}</td>
              <td className="px-4 py-2">Certificate {a.certificate}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500">
        {filtered.length} of {accreditations.length} qualifications
      </p>
    </div>
  );
}
