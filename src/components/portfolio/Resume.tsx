import { ArrowDownToLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Experience } from "./Experience";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { resumeBars, resumeHighlights } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Resume() {
  return (
    <section id="resume" className="border-t border-border py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Resume"
          title="Experience, education, and proficiency"
          description="A snapshot of my journey so far — download the full PDF for the complete picture."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Experience />

          <div className="reveal panel h-fit p-7">
            <h3 className="font-display text-lg font-semibold">Proficiency</h3>
            <div className="mt-6 space-y-5">
              {resumeBars.map((bar) => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{bar.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">{bar.value}%</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <dl className="mt-8 space-y-4 border-t border-border pt-6">
              {resumeHighlights.map((h) => (
                <div key={h.label}>
                  <dt className="font-display text-sm font-semibold">{h.label}</dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">{h.detail}</dd>
                </div>
              ))}
            </dl>

            <Button asChild className="mt-8 w-full">
              <a href={resumeAsset.url} download="Srisuthan_VPR_Resume.pdf">
                <ArrowDownToLine className="size-4" />
                Download resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
