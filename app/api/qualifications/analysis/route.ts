import { listQualifications } from "@/services/qualification.service";
import { NextResponse } from "next/server";

const roman =
  "M{0,4}(CM|CD|D?C{0,3})" +
  "(XC|XL|L?X{0,3})" +
  "(IX|IV|V?I{0,3})";

const titlePattern = new RegExp(
  "^" +
  "Certificado\\s+" +
  "(Vocacional|Ocupacional)" +
  "\\s+de\\s+Nível\\s+" +
  `(${ roman })` +
  "\\s+em\\s+" +
  ".+" +
  "$",
  "i",
);

const forbiddenNameParts =
  /\b(vocacional|ocupacional|nível|certificado|CV|CO)\b/i;

const cvWithNumberRegex = /\bCV|CO\s*\d+/i;

function isWrongName(q: { name: string | null, title: string | null }) {
  const name = q.name?.trim();
  const title = q.title?.trim();

  if (!name) return true;

  if (title && name === title) return true;

  const nameLower = name.toLowerCase();

  if (forbiddenNameParts.test(name)) {
    return (name === "certificado a" || name === "certificado b" || name === "certificado c");
  }

  if (cvWithNumberRegex.test(name)) return true;

  if (nameLower.includes("certificado vocacional")) return true;
  if (nameLower.includes("certificado ocupacional")) return true;

  return false;
}

function isWrongTitle(q: { name: string | null, title: string | null }) {
  const title = q.title?.trim();

  if (!title) return true;

  return !titlePattern.test(title);
}

export async function GET() {
  const qualifications = await listQualifications();
  const wrongNames = qualifications.filter(isWrongName);
  const wrongTitles = qualifications.filter(isWrongTitle);

  const results = await Promise.all(
    qualifications.map(async qualification => {
      const startedAt = Date.now();

      try {
        const response = await fetch(qualification.specUrl, {
          headers: {
            Range: "bytes=0-256",
          },
        });

        const contentType = response.headers.get("content-type");

        const buffer = await response.arrayBuffer();

        const signature = Buffer.from(buffer)
          .subarray(0, 4)
          .toString();

        const isPdfContentType =
          contentType?.includes("application/pdf") ?? false;

        const isRealPdf = signature === "%PDF";

        const url = new URL(qualification.specUrl);

        return {
          qualification,

          ok: response.ok,

          status: response.status,

          responseTime: Date.now() - startedAt,

          contentType,

          contentLength: buffer.byteLength,

          protocol: url.protocol.replace(":", ""),

          domain: url.hostname,

          isPdfContentType,

          isRealPdf,

          isBroken:
            !response.ok ||
            !isPdfContentType ||
            !isRealPdf,
        };
      } catch (error) {
        return {
          qualification,

          ok: false,

          status: 0,

          responseTime: Date.now() - startedAt,

          contentType: null,

          contentLength: 0,

          protocol: "unknown",

          domain: "unknown",

          isPdfContentType: false,

          isRealPdf: false,

          isBroken: true,

          error:
            error instanceof Error
              ? error.message
              : "Unknown error",
        };
      }
    }),
  );

  const unknownCertificates = qualifications.filter(qualification => {
    const certificate = qualification.certificate?.toLocaleLowerCase().trim();
    if (!certificate) return true;
    return !(certificate === 'vocacional' || certificate === 'ocupacional');
  })

  const brokenLinkQualifications = results.filter(
    result => result.isBroken,
  );

  const unnamedQualifications = qualifications.filter(
    qualification => !qualification.name,
  );

  const duplicatedUrls = Object.entries(
    qualifications.reduce<Record<string, number>>(
      (acc, qualification) => {
        acc[qualification.specUrl] =
          (acc[qualification.specUrl] || 0) + 1;

        return acc;
      },
      {},
    ),
  ).filter(([, count]) => count > 1);

  const counts = qualifications.reduce<Record<string, number>>(
    (acc, qualification) => {
      if (!qualification.name || !qualification.level || !qualification.certificate) {
        return acc;
      }

      const key = `${ qualification.name }:${ qualification.level }:${ qualification.certificate }`;

      acc[key] = (acc[key] ?? 0) + 1;

      return acc;
    },
    {},
  );

  const duplicatedQualifications = qualifications.filter(
    (qualification) => {
      if (!qualification.name || !qualification.level) {
        return false;
      }

      const key = `${ qualification.name }:${ qualification.level }:${ qualification.certificate }`;

      return counts[key] > 1;
    },
  );

  const statusCodes = results.reduce<Record<number, number>>(
    (acc, result) => {
      acc[result.status] = (acc[result.status] || 0) + 1;

      return acc;
    },
    {},
  );

  const domains = results.reduce<Record<string, number>>(
    (acc, result) => {
      acc[result.domain] = (acc[result.domain] || 0) + 1;

      return acc;
    },
    {},
  );

  const averageResponseTime =
    results.reduce(
      (total, result) => total + result.responseTime,
      0,
    ) / results.length;

  const averageFileSize =
    results.reduce(
      (total, result) => total + result.contentLength,
      0,
    ) / results.length;

  const pdfContentTypeFailures = results.filter(
    result => !result.isPdfContentType,
  );

  const corruptedPdfQualifications = results.filter(
    result => !result.isRealPdf,
  );

  return NextResponse.json({
    stats: {
      totalQualifications: qualifications.length,
      unknownCertificates: {
        total: unknownCertificates.length,
        percentage:
          (unknownCertificates.length /
            qualifications.length) *
          100
      },

      brokenLinks: {
        total: brokenLinkQualifications.length,
        percentage:
          (brokenLinkQualifications.length /
            qualifications.length) *
          100,
      },

      unnamedQualifications: {
        total: unnamedQualifications.length,
        percentage:
          (unnamedQualifications.length /
            qualifications.length) *
          100,
      },

      wrongTitles: {
        total: wrongTitles.length,
        percentage: (wrongTitles.length / qualifications.length) * 100,
      },

      wrongNames: {
        total: wrongNames.length,
        percentage: (wrongNames.length / qualifications.length) * 100,
      },

      duplicatedUrls: duplicatedUrls.length,

      duplicatedQualifications: {
        total: duplicatedQualifications.length,
        percentage: (duplicatedQualifications.length / qualifications.length) * 100,
      },

      invalidPdfContentType: {
        total: pdfContentTypeFailures.length,
        percentage:
          (pdfContentTypeFailures.length /
            qualifications.length) *
          100,
      },

      corruptedPdfs: {
        total: corruptedPdfQualifications.length,
        percentage:
          (corruptedPdfQualifications.length /
            qualifications.length) *
          100,
      },

      protocols: {
        http: results.filter(
          result => result.protocol === "http",
        ).length,

        https: results.filter(
          result => result.protocol === "https",
        ).length,
      },

      averageResponseTime,

      averageFileSize,

      statusCodes,

      domains,
    },
    brokenLinkQualifications,
    unnamedQualifications,
    duplicatedUrls,
    duplicatedQualifications,
    wrongNames,
    wrongTitles,
    unknownCertificates,
    invalidPdfQualifications: pdfContentTypeFailures,
    corruptedPdfQualifications,
  });
}