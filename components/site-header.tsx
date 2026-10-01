"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    nav.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex flex-col transition-colors duration-300 ${
        open
          ? "bottom-0 bg-[#f5f5f7]"
          : scrolled
            ? "border-b border-black/10 bg-[#f5f5f7]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-[#f5f5f7]/60 backdrop-blur-md"
      }`}
    >
      <div className="relative mx-auto flex h-14 w-full max-w-[1160px] shrink-0 items-center justify-between px-6 lg:px-8">
        <a href="#top" className="relative z-10 flex items-baseline gap-2.5">
          <span className="text-[15px] font-semibold tracking-tight">
            Patrício Luís
          </span>
          <span className="hidden text-[12px] text-muted xl:inline">
            Engenheiro de redes
          </span>
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex"
          aria-label="Secções"
        >
          {nav.map((item) => {
            const active = current === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={`text-[13px] transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden h-8 items-center rounded-full bg-ink px-3.5 text-[13px] text-white transition-colors hover:bg-[#2b2b2e] lg:inline-flex"
          >
            Vamos falar
          </a>
          <button
            type="button"
            className="inline-flex h-8 items-center rounded-full px-3 text-[13px] text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 pt-4 pb-8 lg:hidden"
          aria-label="Secções"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-t border-black/10">
                <a
                  href={item.href}
                  className="block py-3.5 text-[28px] font-semibold tracking-tight"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] text-white"
          >
            Vamos falar
          </a>
        </nav>
      ) : null}
    </header>
  );
}
