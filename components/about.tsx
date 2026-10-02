export function About() {
  return (
    <section id="sobre" className="scroll-mt-16">
      <div className="mx-auto max-w-[1160px] px-6 py-24 lg:px-8 lg:py-36">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          Sobre mim
        </p>
        <h2 className="mt-8 max-w-[11em] text-[clamp(2.4rem,5.4vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
          Redes conectam pessoas, oportunidades e um futuro melhor.
        </h2>
        <div className="glass mt-14 grid gap-10 rounded-3xl p-8 md:grid-cols-2 md:gap-16 md:p-10">
          <p className="text-[17px] leading-relaxed text-secondary">
            Trabalho com redes corporativas do desenho à operação. O critério é
            simples: conectividade fiável, políticas claras e uma rede que a
            equipa consegue manter.
          </p>
          <p className="text-[17px] leading-relaxed text-secondary">
            Atuo em ambientes multivendor — Cisco, Fortinet, Juniper e Huawei —
            entre infraestrutura, segurança e resolução de incidentes. Baseado
            em Angola, também formo a próxima turma de CCNA.
          </p>
        </div>
      </div>
    </section>
  );
}
