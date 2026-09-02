import { useCallback, useEffect, useState } from "react";
import { Asterisk, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-reveal";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((n) => n.id);

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggle } = useTheme();

  const handleActive = useCallback((id: string) => setActive(id), []);
  useActiveSection(sectionIds, handleActive);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <nav className="shell flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-1.5"
          aria-label={`${profile.name} — back to top`}
        >
          <Asterisk className="size-5 text-primary" />
          <span className="font-display text-sm font-bold tracking-[0.18em]">{profile.short}</span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative px-3 py-2 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-foreground",
                active === item.id && "text-foreground",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-primary transition-transform",
                  active === item.id && "scale-x-100",
                )}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-md border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="shell flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
