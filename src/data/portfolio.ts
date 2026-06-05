export const siteConfig = {
  title: "Hi, I'm Rifqi Wahyudi a Backend Developer",
  name: "Rifqi",
  role: "Backend Developer",
  location: "Jakarta, Indonesia",
  email: "rifqiwahyudi16@gmail.com",
  headline:
    "Backend Developer with 3 years building clean, well-structured APIs using Laravel & Express.js",
  bio: "I'm Rifqi, a Backend Developer with 3 years of professional experience building APIs with Laravel and Express.js. I graduated from a Software Engineering vocational school and chose backend because I genuinely enjoy working through logic problems. I'm not the most detail-oriented person by nature — so I build systems that compensate for it. That means global error handlers, consistent API structures, and testing every endpoint twice before I call it done. The goal is always the same: an API that's predictable, easy to integrate, and won't make the frontend team's life harder than it needs to be.",
  availability: "Open for Freelance",
  social: {
    github: "https://github.com/mrw16",
    linkedin: "https://www.linkedin.com/in/rifqi-wahyudi",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    period: "2022 — Present",
    role: "Backend Developer",
    company: "Indo Homecare",
    description:
      "Building and maintaining REST APIs using Laravel and Express.js for internal websites and applications, including bug fixing, routine maintenance, and third-party service integration.",
  },
  {
    period: "2020 — 2021",
    role: "Junior Developer",
    company: "PT Inti Digital Teknologi",
    description:
      "I worked as a Junior Developer at PT Inti Digital Teknologi, a company that provides digital solutions for businesses. I was responsible for developing and maintaining the company's website and web applications.",
  },
];

export const techStack = [
  "Laravel",
  "Express.js",
  "MySQL",
  "Git",
  "CI/CD",
  "AWS",
  "API Documentation",
  "Flutter"
];

export const projects = [
  {
    id: "atlas-dashboard",
    title: "Atlas Dashboard",
    description:
      "A minimalist analytics platform with real-time data visualization and customizable widgets.",
    image: "/projects/atlas.jpg",
    gradient: "from-neutral-900 via-neutral-800 to-neutral-900",
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "lumina-ui",
    title: "Lumina UI",
    description:
      "Open-source component library with accessible primitives and Scandinavian-inspired aesthetics.",
    image: "/projects/lumina.jpg",
    gradient: "from-stone-900 via-neutral-900 to-zinc-900",
    technologies: ["React", "Radix UI", "Storybook"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "flowtask",
    title: "FlowTask",
    description:
      "Collaborative task management app with drag-and-drop boards and team workflows.",
    image: "/projects/flowtask.jpg",
    gradient: "from-zinc-900 via-neutral-900 to-stone-900",
    technologies: ["Next.js", "Prisma", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "nord-commerce",
    title: "Nord Commerce",
    description:
      "Headless e-commerce storefront with optimized checkout and product discovery.",
    image: "/projects/nord.jpg",
    gradient: "from-neutral-950 via-stone-900 to-neutral-900",
    technologies: ["Next.js", "Stripe", "Sanity CMS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "MySQL", icon: "database" },
      { name: "REST APIs", icon: "api" },
      { name: "Express.js", icon: "express" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Figma", icon: "figma" },
      { name: "VPS", icon: "vps" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

export const featuredHighlight = {
  title: "Lumina UI",
  subtitle: "Free & open source component library.",
  href: "#work",
};
