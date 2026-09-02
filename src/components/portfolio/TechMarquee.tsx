import { marqueeTech } from "@/data/portfolio";

export function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech];

  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="marquee-track flex w-max items-center gap-10 px-5" aria-hidden>
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-display text-sm font-semibold tracking-[0.16em] whitespace-nowrap text-muted-foreground uppercase"
          >
            {tech}
            <span className="ml-10 text-primary">✦</span>
          </span>
        ))}
      </div>
      <span className="sr-only">Technologies: {marqueeTech.join(", ")}</span>
    </div>
  );
}
