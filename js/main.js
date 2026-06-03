const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

// --- Theme ---
const storedTheme = localStorage.getItem("portfolio-theme");
if (storedTheme) {
  root.dataset.theme = storedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.dataset.theme = "dark";
}

function updateThemeIcon() {
  if (!themeToggle) return;
  const isDark = root.dataset.theme === "dark";
  themeToggle.innerHTML = isDark
    ? `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21 14.8A8.3 8.3 0 0 1 9.2 3a7.4 7.4 0 1 0 11.8 11.8Z"/></svg>`;
}
updateThemeIcon();

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeIcon();
});

// --- Mobile nav ---
function closeNav() {
  navMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

document.addEventListener("click", (e) => {
  if (navMenu?.classList.contains("is-open") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    closeNav();
  }
});

// --- Resume download: always force direct download ---
const resumeLink = document.querySelector(".resume-link");
if (resumeLink) {
  resumeLink.setAttribute("download", "");
  resumeLink.href = "assets/Srisuthan_Resume.pdf.pdf";
}

// --- Nav active section highlight ---
const navLinks = navMenu?.querySelectorAll("a[href^='#']");
const sections = document.querySelectorAll("main section[id]");

function setActiveNav() {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY + 100 >= sec.offsetTop) current = sec.id;
  });
  navLinks?.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", setActiveNav, { passive: true });
setActiveNav();

// --- Scroll reveal ---
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
