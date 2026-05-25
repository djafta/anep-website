import { listQualifications } from "@/services/qualification.service";
import { NextResponse } from "next/server";

const roman =
  "M{0,4}(CM|CD|D?C{0,3})" +
  "(XC|XL|L?X{0,3})" +
  "(IX|IV|V?I{0,3})";

const titlePattern = new RegExp(
  `(CV|CO)(${roman}|\\d+)`,
  "i",
);

function isWrongName(q: { name: string | null, title: string | null }) {
  const name = q.name?.trim();
  const title = q.title?.trim();

  if (!name) return true;

  if (title && name === title) return true;

  if (titlePattern.test(name)) return true;

  return false;
}

function isWrongTitle(q: { name: string | null, title: string | null }) {
  const title = q.title?.trim();

  if (!title) return true;

  return !new RegExp(
    `^(CV|CO)(${roman}|\\d+)$`,
    "i",
  ).test(title);
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

  const duplicatedNames = Object.entries(
    qualifications.reduce<Record<string, number>>(
      (acc, qualification) => {
        if (!qualification.name) {
          return acc;
        }

        acc[qualification.name] =
          (acc[qualification.name] || 0) + 1;

        return acc;
      },
      {},
    ),
  ).filter(([, count]) => count > 1);


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

      duplicatedNames: duplicatedNames.length,

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

    duplicatedNames,
    wrongNames,
    wrongTitles,

    invalidPdfQualifications: pdfContentTypeFailures,

    corruptedPdfQualifications,
  });
}