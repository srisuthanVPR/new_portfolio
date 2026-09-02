import { timeline } from "@/data/portfolio";

export function Experience() {
  return (
    <div id="experience" className="reveal">
      <h3 className="font-display text-lg font-semibold">Experience & education</h3>
      <ol className="mt-6 space-y-0 border-l border-border pl-6 md:pl-8">
        {timeline.map((item) => (
          <li key={item.title} className="relative pb-10 last:pb-0">
            <span className="absolute top-1.5 -left-[1.65rem] size-3 rounded-full border-2 border-background bg-primary md:-left-[2.15rem]" />
            <p className="font-mono text-xs tracking-wide text-primary">{item.period}</p>
            <h4 className="mt-2 font-display text-lg font-semibold">{item.title}</h4>
            <p className="mt-1 text-sm text-foreground/80">{item.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
