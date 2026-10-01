import { contact } from "@/lib/content";

const details = [
  { label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
  { label: "Telefone", value: contact.phone },
  { label: "Local", value: contact.location },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-ink text-white">
      <div className="mx-auto grid max-w-[1160px] gap-16 px-6 py-24 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
            Contacto
          </p>
          <h2 className="mt-4 text-[clamp(2.6rem,6vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
            Vamos conversar?
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
            Estou sempre aberto a novas oportunidades, projetos e parcerias.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-10 inline-block text-[clamp(1.35rem,2.5vw,1.85rem)] tracking-tight text-white underline decoration-white/25 underline-offset-8 transition-colors hover:decoration-white"
          >
            {contact.email}
          </a>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:col-span-5">
          <ul className="border-t border-white/15">
            {details.map((item) => (
              <li
                key={item.label}
                className="flex items-baseline justify-between gap-6 border-b border-white/15 py-4"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-right text-[15px] hover:text-white/70"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-right text-[15px]">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
          <blockquote className="max-w-[16em] text-[28px] font-semibold leading-tight tracking-[-0.03em] text-white/90">
            “Tecnologia é mais poderosa quando conecta pessoas.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
