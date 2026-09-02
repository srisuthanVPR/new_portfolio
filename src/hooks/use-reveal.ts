import { useEffect } from "react";

/** Adds `is-visible` to `.reveal` elements as they scroll into view. */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((node) => observer.observe(node));

    // Re-observe elements added later (e.g. filtered project cards).
    const mutation = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((node) => observer.observe(node));
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    // Safety net: never leave content hidden.
    const failsafe = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((n) => n.classList.add("is-visible"));
    }, 4000);

    return () => {
      window.clearTimeout(failsafe);
      mutation.disconnect();
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}

/** Tracks which section id is currently in view. */
export function useActiveSection(ids: string[], onChange: (id: string) => void) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) onChange(visible.target.id);
      },
      { threshold: [0.2, 0.5], rootMargin: "-20% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, onChange]);
}
