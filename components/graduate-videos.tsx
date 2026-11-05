"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Cpu, Play, Sprout, Wrench, X, Zap } from "lucide-react";

export type GraduateVideo = {
  /** Curso: Electricidade, Mecânica, TICs, Agricultura */
  course: string;
  /** Ícone mostrado quando não há poster */
  icon: "zap" | "wrench" | "cpu" | "sprout";
  /** Ficheiro de vídeo (ex.: /videos/electricidade.mp4, dentro de /public) */
  src?: string;
  /** Alternativa ao ficheiro: ID do vídeo no YouTube */
  youtubeId?: string;
  /** Imagem de capa (ex.: /videos/electricidade.jpg). Opcional */
  poster?: string;
  /** Nome da graduada. Opcional */
  name?: string;
  /** Instituição ou província. Opcional */
  detail?: string;
};

const ICONS = { zap: Zap, wrench: Wrench, cpu: Cpu, sprout: Sprout };

export function GraduateVideos({ videos }: { videos: GraduateVideo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const current = active !== null ? videos[active] : null;

  return (
    <>
      <ul className="grid gap-x-10 gap-y-14 sm:grid-cols-2">
        {videos.map((v, i) => {
          const Icon = ICONS[v.icon];
          return (
            <li key={v.course}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver vídeo: ${v.course}`}
                className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17396e]"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#17396e]">
                  {v.poster ? (
                    <Image
                      src={v.poster}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1d4585] to-[#0f2a55]">
                      <Icon
                        className="absolute -bottom-8 -right-6 h-44 w-44 text-white/10"
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#17396e] shadow-lg transition duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <Icon
                    className="mt-1 h-5 w-5 flex-none text-[#17396e] dark:text-blue-300"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{v.course}</h3>
                    {(v.name || v.detail) && (
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {[v.name, v.detail].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Leitor em janela modal: o vídeo só existe enquanto a janela está aberta */}
      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActive(null);
        }}
        aria-label={current ? `Vídeo: ${current.course}` : "Vídeo"}
        className="m-auto w-[calc(100%-2rem)] max-w-4xl overflow-visible bg-transparent p-0 backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fechar vídeo"
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              {current.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0`}
                  title={`Vídeo: ${current.course}`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full"
                  src={current.src}
                  poster={current.poster}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>

            <p className="mt-4 text-sm text-white/80">
              <span className="font-medium text-white">{current.course}</span>
              {(current.name || current.detail) && (
                <> · {[current.name, current.detail].filter(Boolean).join(" · ")}</>
              )}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}