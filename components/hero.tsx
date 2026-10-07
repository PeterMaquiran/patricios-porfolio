import Image from "next/image";

const facts = [
  { value: "9", label: "Certificações" },
  { value: "4", label: "Fabricantes" },
  { value: "CCNA", label: "Formador" },
];

export function Hero() {
  return (
    <section id="top" className="px-6 pt-14 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-[1160px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Bem-vindo ao meu portfólio
          </p>
          <h1 className="mt-5 text-[clamp(3.25rem,7vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.045em]">
            Patrício Luís
          </h1>
          <p className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-tight tracking-[-0.035em] text-muted">
            Engenheiro de redes.
          </p>
          <p className="mt-8 max-w-[34rem] text-[17px] leading-relaxed text-secondary">
            Transformo desafios de conectividade em soluções reais, com foco em
            redes seguras, estáveis e de alto desempenho.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            Networking · Security · Infrastructure · Troubleshooting
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="inline-flex h-11 items-center rounded-full bg-[var(--cta-bg)] px-5 text-[14px] text-[var(--cta-fg)] transition-colors hover:bg-[var(--cta-hover)]"
            >
              Ver os meus projetos
            </a>
            <a
              href="#contacto"
              className="inline-flex h-11 items-center rounded-full border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-5 text-[14px] text-[var(--cta-ghost-fg)] transition-colors hover:border-[var(--cta-ghost-hover-border)] hover:bg-[var(--cta-ghost-hover-bg)]"
            >
              Entrar em contacto
            </a>
          </div>

          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 border-t border-line pt-6 text-center lg:mx-0 lg:text-left">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dd className="text-[28px] font-semibold tracking-tight">
                  {fact.value}
                </dd>
                <dt className="mt-1 text-[13px] text-muted">{fact.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative isolate mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,var(--card-glow),transparent_70%)] blur-3xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-[#0f172a] shadow-[var(--shadow-card)]">
            <Image
              src="/media/portrait.jpeg"
              alt="Retrato de Patrício Luís, de braços cruzados, com fato escuro."
              fill
              priority
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
