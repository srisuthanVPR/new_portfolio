import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Structured learning that backs up the projects — from prompt engineering to modern C++."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="reveal panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <BadgeCheck className="size-5 text-primary" />
              <h3 className="mt-4 font-display text-base font-semibold">{cert.name}</h3>
              <p className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                {cert.org} · {cert.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
