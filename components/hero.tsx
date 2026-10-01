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
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Bem-vindo ao meu portfólio
          </p>
          <h1 className="mt-5 text-[clamp(3.25rem,7vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.045em]">
            Patrício Luís
          </h1>
          <p className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-tight tracking-[-0.035em] text-[#86868b]">
            Engenheiro de redes.
          </p>
          <p className="mt-8 max-w-[34rem] text-[17px] leading-relaxed text-muted">
            Transformo desafios de conectividade em soluções reais, com foco em
            redes seguras, estáveis e de alto desempenho.
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Networking · Security · Infrastructure · Troubleshooting
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#projetos"
              className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-[14px] text-white transition-colors hover:bg-[#2b2b2e]"
            >
              Ver os meus projetos
            </a>
            <a
              href="#contacto"
              className="text-[14px] text-accent transition-opacity hover:opacity-70"
            >
              Entrar em contacto
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 border-t border-black/10 pt-6">
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

        <div className="relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-[28px] bg-ink lg:mx-0 lg:max-w-none lg:justify-self-end">
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
    </section>
  );
}
