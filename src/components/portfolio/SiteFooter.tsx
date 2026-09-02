import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="shell flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with care.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          Back to top
          <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
