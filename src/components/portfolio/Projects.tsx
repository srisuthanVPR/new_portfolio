import { useState } from "react";
import { Brain, Cpu, Github, Globe, Layers } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projectFilters, projects, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function categoryIcon(category: Project["category"]) {
  if (category === "AI") return <Brain className="size-5" />;
  if (category === "IoT") return <Cpu className="size-5" />;
  return <Layers className="size-5" />;
}


export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="border-t border-border bg-surface/50 py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="My work"
          title="Featured projects"
          description="Selected work framed as problem, solution, and impact — from offline-first products to agentic AI systems."
        />

        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={cn(
                "rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors",
                filter === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <article
              key={project.name}
              className={cn(
                "reveal panel flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary",
                project.featured && filter === "All" && "md:col-span-2",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="grid size-10 place-items-center rounded-lg bg-secondary text-primary">
                    {categoryIcon(project.category)}
                  </span>
                  <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold md:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{project.type}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} source on GitHub`}
                      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github className="size-4" />
                    </a>
                  )}
                  {project.deployedLink && (
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} live demo`}
                      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Globe className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <dl className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <dt className="inline font-semibold text-foreground">Problem: </dt>
                  <dd className="inline">{project.problem}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-foreground">Solution: </dt>
                  <dd className="inline">{project.solution}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-foreground">Impact: </dt>
                  <dd className="inline">{project.impact}</dd>
                </div>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
