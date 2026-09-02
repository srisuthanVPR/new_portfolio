import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Hero } from "@/components/portfolio/Hero";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { useReveal } from "@/hooks/use-reveal";
import { profile } from "@/data/portfolio";

const title = "Srisuthan V P R — Full-Stack & AI Developer Portfolio";
const description =
  "Portfolio of Srisuthan V P R, a CSBS student and full-stack developer building MERN, agentic AI and IoT products. Projects, skills, resume and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Software Developer",
          email: `mailto:${profile.email}`,
          url: profile.github,
          sameAs: [profile.github, profile.linkedin, profile.leetcode],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
