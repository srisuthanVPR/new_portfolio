import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("reveal max-w-2xl", centered && "mx-auto text-center", className)}>
      <p className="eyebrow">
        <span className="h-px w-6 bg-primary" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-balance md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
