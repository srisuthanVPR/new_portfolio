import { GraduationCap, Sparkles, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import profileAsset from "@/assets/profile.jpg.asset.json";
import { profile, services } from "@/data/portfolio";

const highlights = [
  {
    Icon: GraduationCap,
    title: "Education",
    detail: "B.Tech CSBS, Sri Eshwar College of Engineering · CGPA 7.83",
  },
  {
    Icon: Sparkles,
    title: "Focus",
    detail: "Full-stack development, agentic AI, and offline-first products",
  },
  {
    Icon: Target,
    title: "Goal",
    detail: "Internships and roles where I can ship products that matter",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="About me"
          title="A developer shaped by curiosity, practice, and real-world constraints."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="reveal relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 rounded-[1.75rem] border border-primary/40"
              aria-hidden
            />
            <img
              src={profileAsset.url}
              alt={`${profile.name} working on software projects`}
              loading="lazy"
              className="relative aspect-4/5 w-full rounded-3xl border border-border object-cover"
              width={640}
              height={800}
            />
          </div>

          <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              My journey into technology started with the satisfaction of solving small programming
              problems and grew into a deeper interest in building systems people actually use. As a
              CSBS student I enjoy the space where engineering discipline meets business context:
              understanding the problem, designing the workflow, and turning ideas into reliable
              software.
            </p>
            <p>
              Hackathons pushed me beyond syntax. They taught me how to divide work, validate an
              idea quickly, present a solution clearly, and keep improving inside a tight time
              window. Whether it is agentic AI for education, emergency traffic control, or
              offline-first accounting, I look for projects where technology reduces friction and
              creates measurable value.
            </p>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {highlights.map(({ Icon, title, detail }) => (
                <div key={title} className="panel p-4">
                  <Icon className="size-5 text-primary" />
                  <p className="mt-3 font-display text-sm font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="reveal panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <span className="font-mono text-xs text-primary">
                0{i + 1} / {String(services.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
