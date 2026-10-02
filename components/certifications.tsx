import Image from "next/image";
import { certifications, platforms } from "@/lib/content";

export function Certifications() {
  return (
    <section id="certificacoes" className="scroll-mt-16">
      <div className="mx-auto max-w-[1160px] px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Certificações
            </p>
            <h2 className="mt-4 max-w-[12em] text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Aprendizagem contínua
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-secondary md:text-right">
            Cisco, Fortinet, Juniper, Huawei e CompTIA. Nove credenciais, um
            percurso em redes e segurança.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {certifications.map((item) => (
            <li
              key={item.src}
              className="glass flex flex-col rounded-3xl px-4 py-6 sm:px-6 sm:py-8"
            >
              <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              <p className="mt-6 text-center text-xl font-medium tracking-tight">
                {item.name}
              </p>
              <p className="mt-1 text-center text-[13px] text-muted">
                {item.issuer}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-20 border-t border-line pt-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Ferramentas e tecnologias
          </p>
          <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-[-0.03em]">
            Plataformas que utilizo
          </h3>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {platforms.map((platform) => (
              <li
                key={platform.name}
                className="chip flex flex-col items-center rounded-3xl px-3 py-5 text-center"
              >
                <span className="flex h-14 w-full items-center justify-center">
                  <img
                    src={platform.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-auto max-h-12 max-w-[7.5rem] object-contain"
                  />
                </span>
                <span className="mt-3 text-xl font-medium tracking-tight text-foreground">
                  {platform.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
