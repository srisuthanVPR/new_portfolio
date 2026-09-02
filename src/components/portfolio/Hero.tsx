import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import profileAsset from "@/assets/profile.jpg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { metrics, profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (done) return setDeleting(true);
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          return;
        }
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      done ? 1600 : deleting ? 45 : 90,
    );

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink pt-28 pb-16 text-ink-foreground md:pt-36 md:pb-24"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" />
      <div
        className="pointer-events-none absolute -top-40 -right-24 size-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 65%)" }}
      />
      <div className="shell relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-ink-foreground/70 uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            {profile.availability}
          </p>

          <h1 className="mt-6 text-4xl leading-[1.05] font-semibold text-balance md:text-6xl">
            {profile.headline}
            <span className="block text-primary">
              {typed}
              <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-primary align-middle text-transparent select-none">
                |
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/70 md:text-lg">
            {profile.lede}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View my work
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
            >
              <a href={resumeAsset.url} download="Srisuthan_VPR_Resume.pdf">
                <ArrowDownToLine className="size-4" />
                Download resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/15 text-ink-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-2xl font-semibold text-primary">{m.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-ink-foreground/60">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[1.75rem] border border-white/10" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            <img
              src={profileAsset.url}
              alt={`${profile.name}, software developer`}
              className="aspect-4/5 w-full object-cover"
              width={640}
              height={800}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <h2 className="font-display text-lg font-semibold text-white">{profile.name}</h2>
              <p className="mt-1 text-sm text-white/70">{profile.role}</p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-white/60">
                <MapPin className="size-3.5" />
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
