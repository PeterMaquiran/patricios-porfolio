import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-16 bg-paper">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-32">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Projetos em destaque
          </p>
          <h2 className="mt-4 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Casos reais. Soluções práticas.
          </h2>
          <a
            href="#contacto"
            className="mt-8 inline-flex text-[14px] text-accent hover:opacity-70"
          >
            Falar sobre um projeto
          </a>
        </div>

        <ol className="lg:col-span-8">
          {projects.map((project) => (
            <li
              key={project.index}
              className="grid gap-3 border-t border-black/10 py-9 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
            >
              <span className="font-mono text-[12px] text-muted">
                {project.index}
              </span>
              <div>
                <h3 className="text-[26px] font-semibold leading-tight tracking-[-0.03em] sm:text-[30px]">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">
                  {project.text}
                </p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {project.tags.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
