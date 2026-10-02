"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gallery } from "@/lib/content";

type Shot = (typeof gallery)[number];

export function Training() {
  const [active, setActive] = useState<Shot | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="formacao" className="scroll-mt-16">
      <div className="mx-auto max-w-[1160px] px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Formação
            </p>
            <h2 className="mt-4 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Partilhar conhecimento
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed text-secondary lg:col-span-5">
            Formador de CCNA na Velonet Academy. Fundamentos de redes, IPv4,
            subnetting, switching, routing, OSPF, ACLs e troubleshooting, com
            laboratórios práticos.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {gallery.map((shot) =>
            "poster" in shot && shot.poster ? (
              <figure
                key={shot.src}
                className={`${shot.className} flex flex-col`}
              >
                <button
                  type="button"
                  aria-label={`${shot.caption}. ${shot.detail}`}
                  onClick={() => setActive(shot)}
                  className="group flex h-full min-h-[420px] cursor-zoom-in items-center justify-center overflow-hidden rounded-3xl border border-line bg-[var(--chat-bg)] p-6 shadow-[var(--shadow-card)] backdrop-blur-[48px] sm:p-10"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="media-zoom h-auto max-h-[640px] w-auto max-w-full object-contain"
                  />
                </button>
                <figcaption className="mt-3 px-1">
                  <p className="text-[14px] font-medium">{shot.caption}</p>
                  <p className="text-[13px] text-muted">{shot.detail}</p>
                </figcaption>
              </figure>
            ) : (
              <figure key={shot.src} className={shot.className}>
                <button
                  type="button"
                  onClick={() => setActive(shot)}
                  className="group relative block h-full min-h-[inherit] w-full cursor-zoom-in overflow-hidden rounded-3xl border border-line text-left shadow-[var(--shadow-card)]"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`media-zoom object-cover ${shot.position}`}
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/20 to-transparent p-5 pt-20">
                    <span className="block text-[14px] font-medium text-white">
                      {shot.caption}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-white/75">
                      {shot.detail}
                    </span>
                  </span>
                </button>
              </figure>
            ),
          )}
        </div>
      </div>

      {active
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020617]/88 p-4 backdrop-blur-md sm:p-10"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={() => setActive(null)}
            >
              <button
                ref={closeRef}
                type="button"
                className="absolute top-4 right-4 rounded-full bg-[var(--cta-bg)] px-4 py-2 text-[13px] text-[var(--cta-fg)] transition-colors hover:bg-[var(--cta-hover)]"
                onClick={() => setActive(null)}
              >
                Fechar
              </button>
              <figure
                className="flex max-h-full max-w-5xl flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  className="max-h-[72vh] w-auto max-w-[92vw] rounded-lg object-contain"
                />
                <figcaption id={titleId} className="mt-4 text-center text-white">
                  <p className="text-[15px]">{active.caption}</p>
                  <p className="text-[13px] text-white/70">{active.detail}</p>
                </figcaption>
              </figure>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
