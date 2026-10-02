import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="competencias" className="scroll-mt-16">
      <div className="mx-auto max-w-[1160px] px-6 py-24 lg:px-8 lg:py-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Áreas de atuação
        </p>
        <h2 className="mt-4 max-w-[12em] text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
          O que eu faço
        </h2>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.index} className="glass rounded-3xl p-6 sm:p-7">
              <p className="font-mono text-[11px] tracking-[0.16em] text-faint">
                {service.index}
              </p>
              <h3 className="mt-6 text-[20px] font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-secondary">
                {service.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
