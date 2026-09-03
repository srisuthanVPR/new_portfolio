export const profile = {
  name: "Srisuthan V P R",
  short: "SRISUTHAN",
  initials: "SV",
  role: "Software Developer · CSBS Student",
  headline: "Hi, I'm Srisuthan",
  roles: ["Full Stack Dev", "AI Engineer", "MERN Developer", "Cloud DevOps", "Problem Solver"],
  tagline: "Building practical software for problems that deserve better systems.",
  lede: "I design and build production-ready web products — clean interfaces, dependable backends, and AI-assisted workflows that solve real problems.",
  about:
    "I'm Srisuthan, a Computer Science and Business Systems student building modern, scalable and user-friendly web applications.",
  email: "srisuthan.vpr2024csbs@sece.ac.in",
  phone: "+91 93844 00882",
  github: "https://github.com/srisuthanVPR",
  linkedin: "https://www.linkedin.com/in/srisuthan-v-p-r-38b6a7333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  leetcode: "https://leetcode.com/u/sri_suthan/",
  location: "Coimbatore, India",
  availability: "Open to internships and software development roles",
};

export const metrics = [
  { value: "250+", label: "LeetCode problems" },
  { value: "7.83", label: "Current CGPA" },
  { value: "2", label: "Internships" },
  { value: "5", label: "Hackathon finishes" },
];

export const marqueeTech = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "FastAPI",
  "Python",
  "LangChain",
  "TailwindCSS",
  "MySQL",
  "React Native",
];

export type SkillGroup = {
  title: string;
  blurb: string;
  level: number;
  items: { name: string; level: "Expert" | "Advanced" | "Intermediate" }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    blurb: "Responsive, accessible interfaces with modern React tooling.",
    level: 88,
    items: [
      { name: "React.js", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "React Native", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Expert" },
    ],
  },
  {
    title: "Backend & APIs",
    blurb: "Secure REST services, auth flows, and clean server architecture.",
    level: 82,
    items: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "JWT Auth", level: "Advanced" },
    ],
  },
  {
    title: "AI & Agentic Systems",
    blurb: "LLM applications, retrieval pipelines, and autonomous agents.",
    level: 80,
    items: [
      { name: "Agentic AI", level: "Advanced" },
      { name: "LangChain", level: "Advanced" },
      { name: "RAG Pipelines", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Advanced" },
    ],
  },
  {
    title: "Database Systems",
    blurb: "Schema design, offline storage, and vector data stores.",
    level: 78,
    items: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "IndexedDB", level: "Advanced" },
      { name: "ChromaDB", level: "Intermediate" },
    ],
  },
  {
    title: "Languages & CS Core",
    blurb: "Strong fundamentals backed by daily problem solving.",
    level: 84,
    items: [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "DSA", level: "Advanced" },
      { name: "OOPS / DBMS / CN", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Delivery",
    blurb: "Shipping, collaborating, and iterating with the right toolchain.",
    level: 82,
    items: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Postman", level: "Advanced" },
      { name: "Figma", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
    ],
  },
];

export type Project = {
  name: string;
  type: string;
  category: "Full Stack" | "AI" | "IoT";
  icon: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  featured?: boolean;
  link?: string;
  deployedLink?: string;
};

export const projects: Project[] = [
  {
    name: "EassyAcc",
    type: "Offline trading & accounting PWA · May 2026",
    category: "Full Stack",
    icon: "📒",
    problem:
      "Small traders in low-connectivity areas lose sales, ledger, and expense records when cloud-only tools go offline.",
    solution:
      "An offline-first accounting and inventory management PWA with sales, purchases, payments, ledger tracking, expense management, and automated financial calculations backed by IndexedDB.",
    impact: "Keeps books reliable without a constant internet connection.",
    tags: ["React", "Vite", "IndexedDB", "PWA", "Offline-first"],
    featured: true,
    link: "https://github.com/srisuthanVPR/EassyAccount",
    deployedLink: "https://github.com/srisuthanVPR/EassyAccount",
  },
  {
    name: "AI Multilingual Resource Management",
    type: "Agentic AI platform for early childhood education · Feb 2026",
    category: "AI",
    icon: "🧠",
    problem:
      "Educators lack tools that understand multilingual voice, video, and documents to personalize early-childhood learning.",
    solution:
      "An AI-powered platform for multilingual voice, video, and document analysis with predictive analytics and personalized learning insights, built on FastAPI, ChromaDB, LangChain, and Sentence Transformers.",
    impact: "Supports data-driven educational decisions and improves student engagement.",
    tags: ["Python", "FastAPI", "LangChain", "ChromaDB", "RAG"],
    featured: true,
    link: "https://github.com/srisuthanVPR/final-capstone-project-agentic-ai-multi-modal-learning-agent",
  },
  {
    name: "AgriRental",
    type: "Rental marketplace · Bytes Lab internship",
    category: "Full Stack",
    icon: "🚜",
    problem:
      "Farmers and equipment owners need a simpler way to discover, list, and manage agricultural equipment rentals.",
    solution:
      "A scalable MERN web application with user management, equipment listings, availability tracking, and booking workflows.",
    impact: "Connects software design with rural productivity and resource sharing.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/srisuthanVPR/new_Farm",
    deployedLink: "https://new-farm-client.onrender.com/",
  },
  {
    name: "Intelligent Ambulance Signal Control",
    type: "IoT + AI emergency response · Apr 2025",
    category: "IoT",
    icon: "🚑",
    problem:
      "Ambulances lose critical minutes at traffic signals because road systems cannot prioritise emergency vehicles.",
    solution:
      "An intelligent traffic system using IoT, AI, and mobile apps to prioritise ambulances by detecting proximity, sirens, and visuals, enabling real-time signal control.",
    impact: "Reduces emergency response time and supports smart-city infrastructure.",
    tags: ["IoT", "AI", "Traffic control", "Smart city"],
  },
  {
    name: "Email Spam Detection",
    type: "Machine learning service · Algo Tutor internship",
    category: "AI",
    icon: "📮",
    problem: "Inboxes are flooded with low-quality and malicious messages that waste attention.",
    solution:
      "An ML classification pipeline that cleans, vectorises, and scores email content to filter spam with high precision.",
    impact: "Automates filtering and demonstrates end-to-end ML workflow ownership.",
    tags: ["Python", "Scikit-learn", "NLP", "Classification"],
    link: "https://github.com/SECE-24-28/final-capstone-project-agentic-ai-rising_pheonix",
  },
  {
    name: "Food Rescue",
    type: "Real-time food donation & rescue platform · 2026",
    category: "Full Stack",
    icon: "🍱",
    problem:
      "Restaurants, hotels, events, and individuals often have surplus edible food that goes to waste, while nearby people and organizations may need food.",
    solution:
      "A real-time food rescue platform that connects food donors with NGOs, volunteers, and recipients. Donors can list surplus food with quantity, expiry time, and location, while volunteers/NGOs can discover, claim, and coordinate pickups through location-based matching and status tracking.",
    impact:
      "Reduces food waste, improves surplus-food utilization, and enables faster coordination between donors and organizations that can redistribute food.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Real-time tracking",
      "Location-based matching",
      "Role-based access",
      "Cloud deployment",
    ],
    link: "https://github.com/srisuthanVPR/Food_Donation_Platform",
    deployedLink: "https://food-donation-platform-frontend-aai6.onrender.com/",
  },
];

export const projectFilters = ["All", "Full Stack", "AI", "IoT"] as const;

export const timeline = [
  {
    period: "2026",
    title: "Agentic AI Intern",
    org: "Algo Tutor",
    detail:
      "Built intelligent AI-driven solutions and autonomous agent workflows; developed an ML-based Email Spam Detection system to classify and filter spam emails.",
  },
  {
    period: "2025",
    title: "MERN Stack Intern",
    org: "Bytes Lab · Remote",
    detail:
      "Developed AgriRental, a scalable platform for renting agricultural equipment with listings, bookings, and user management using modern web technologies and backend integration.",
  },
  {
    period: "2024 — 2028",
    title: "B.Tech, Computer Science and Business Systems",
    org: "Sri Eshwar College of Engineering · CGPA 7.83",
    detail:
      "Coursework and projects that combine software engineering fundamentals with business problem framing.",
  },
];

export const achievements = [
  { value: "Top 12", label: "Guidewire Hackathon, all-India · 2026" },
  { value: "5th / 50", label: "ZeroDay Inter-College Hackathon · 2026" },
  { value: "2nd Runner Up", label: "Coding Relay, CIT Coimbatore · 2026" },
  { value: "Finalist", label: "Paper Presentation, KPR Institute · 2025" },
  { value: "5th / 300+", label: "Freshathon · 2025" },
  { value: "250+", label: "LeetCode problems, global rank 8.5L" },
];

export const certifications = [
  { name: "Prompt Engineering", org: "LinkedIn", year: "2026" },
  { name: "Claude Code in Action", org: "LinkedIn", year: "2026" },
  { name: "AWS Partition", org: "AWS", year: "July 15, 2026" },
  { name: "Fundamentals of Deep Learning", org: "NVIDIA", year: "2026" },
  { name: "AWS Certified Cloud Practitioner", org: "LinkedIn", year: "2026" },
  { name: "Prompt Engineering with ChatGPT", org: "LinkedIn", year: "2026" },
  { name: "SQL intermediate", org: "Hackerrank", year: "2026" },
];

export const codingProfiles = [
  {
    name: "LeetCode",
    stat: "250+ solved",
    detail: "Global rank 8,53,721 — algorithmic thinking and interview preparation.",
    href: profile.leetcode,
  },
  {
    name: "GitHub",
    stat: "srisuthanVPR",
    detail: "Project repositories, experimentation, and full-stack learning.",
    href: profile.github,
  },
  {
    name: "LinkedIn",
    stat: "Srisuthan V P R",
    detail: "Professional profile, internships, and certifications.",
    href: profile.linkedin,
  },
];

export const resumeHighlights = [
  { label: "B.Tech CSBS", detail: "Sri Eshwar College of Engineering" },
  { label: "Full Stack + AI", detail: "MERN, FastAPI, agentic workflows" },
  { label: "5 Projects", detail: "Shipped across web, AI, and IoT" },
];

export const resumeBars = [
  { label: "Frontend", value: 88 },
  { label: "Backend", value: 82 },
  { label: "AI & ML", value: 80 },
  { label: "Problem solving", value: 85 },
];

export const services = [
  {
    title: "Frontend Developer",
    detail: "Responsive, user-friendly interfaces using React.js, React Native and Tailwind CSS.",
  },
  {
    title: "Backend Developer",
    detail: "Secure, scalable server-side applications with Node.js, Express.js and FastAPI.",
  },
  {
    title: "AI Application Developer",
    detail: "Agentic and RAG-based systems using LangChain, LLMs and vector databases.",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];
