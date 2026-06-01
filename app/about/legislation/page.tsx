export const revalidate = 60

import React, { cache } from "react";
import { minioClient } from "@/lib/minio";
import { FileText } from "lucide-react";

const getFiles = cache(async () => {
  const objects = minioClient.listObjects("public", "", true);

  const files: { name: string; etag: string }[] = [];

  await objects.forEach((obj) => {
    if (obj.name?.startsWith("legislations")) {
      files.push(obj);
    }
  });

  return files;
});

export default async function Page() {
  const objects = minioClient.listObjects("public", "", true);
  const files = await getFiles();

  return (
    <main className="flex-1 flex flex-col">
      <div className="sticky top-11 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-light tracking-tight text-black">Legislação</h1>
              <p className="mt-1 text-sm font-light text-black/60">
                Autoridade Nacional da Educação Profissional
              </p>
            </div>
          </div>

          {/* Filters */ }
          <div className="mt-6 flex gap-2 overflow-x-auto max-w-sm lg:max-w-lg pb-2">

          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-12 py-16 max-w-7xl mx-auto">
        {
          files.map((file, i) => {
            return (
              <div key={ file.etag } className="text-center">
                <div className="mb-6 inline-block p-4 bg-[#003B71] rounded-full">
                  <FileText className={ 'text-white' }/>
                </div>
                <a
                  href={ `${ process.env.NEXT_PUBLIC_STORAGE_URL }/${ file.name }` }
                  className="text-gray-600 block hover:underline">
                  { file.name.replace(".pdf", "") }
                </a>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}
