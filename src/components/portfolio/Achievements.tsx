import { ExternalLink, Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { achievements, codingProfiles } from "@/data/portfolio";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border bg-surface/50 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitions, rankings, and consistent practice"
          description="Hackathon finishes and daily problem solving that keep my fundamentals sharp."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <article
              key={item.label}
              className="reveal panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <Trophy className="size-5 text-primary" />
              <strong className="mt-4 block font-display text-2xl font-semibold">
                {item.value}
              </strong>
              <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
            </article>
          ))}
        </div>

        <h3 className="reveal mt-16 text-center font-display text-xl font-semibold">
          Coding profiles
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {codingProfiles.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="reveal panel group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-semibold">{item.name}</span>
                <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <strong className="mt-3 block text-sm text-primary">{item.stat}</strong>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
