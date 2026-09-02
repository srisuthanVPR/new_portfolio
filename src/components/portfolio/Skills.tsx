import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="My expertise"
          title="Technical stack & skills"
          description="A comprehensive overview of the technologies, frameworks, and tools I use to turn ideas into production-ready applications."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="reveal panel flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p>
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${group.level}%` }}
                />
              </div>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between border-b border-border/70 pb-2 text-sm last:border-0 last:pb-0"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="font-mono text-[0.68rem] tracking-wide text-muted-foreground uppercase">
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="reveal mt-10 text-center text-sm text-muted-foreground">
          Always learning and adapting to new industry standards & technologies.
        </p>
      </div>
    </section>
  );
}
