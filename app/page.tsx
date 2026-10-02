import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Training } from "@/components/training";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-[var(--cta-bg)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--cta-fg)]"
      >
        Saltar para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Training />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
