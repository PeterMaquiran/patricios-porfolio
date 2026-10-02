import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-32">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            Projetos em destaque
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Casos reais. Soluções práticas.
          </h2>
          <a
            href="#contacto"
            className="mt-8 inline-flex h-11 items-center rounded-full border border-[var(--cta-ghost-border)] bg-[var(--cta-ghost-bg)] px-5 text-[14px] text-[var(--cta-ghost-fg)] transition-colors hover:border-[var(--cta-ghost-hover-border)] hover:bg-[var(--cta-ghost-hover-bg)]"
          >
            Falar sobre um projeto
          </a>
        </div>

        <ol className="flex flex-col gap-4 lg:col-span-8">
          {projects.map((project) => (
            <li
              key={project.index}
              className="glass grid gap-3 rounded-3xl px-6 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6 sm:px-8"
            >
              <span className="font-mono text-[12px] text-faint">
                {project.index}
              </span>
              <div>
                <h3 className="text-[26px] font-semibold leading-tight tracking-[-0.03em] sm:text-[30px]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-secondary">
                  {project.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="chip rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
