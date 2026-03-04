import { siteConfig } from "@/shared/config"

/* ── Hero Section ── */

export interface HeroData {
  name: string
  title: string
  aboutItems: string[]
  badge: string
  links: { label: string; href: string }[]
  stats: { value: string; label: string }[]
  avatarUrl: string
}

/* ── Bento Cards (Right side of hero) ── */

export interface BentoCardItem {
  text: string
  description: string
}

export interface BentoCard {
  label: string
  items: BentoCardItem[]
}

export interface GitHubHeatmapSection {
  label: string
  weeks: number
  columns: number
}

export interface GitHubActivityCard {
  label: string
  sections: GitHubHeatmapSection[]
}

/* ── Tech Stack ── */

export interface TechBadge {
  name: string
  color: string
}

/* ── Projects ── */

export interface ProjectCard {
  label: string
  labelColor: "accent" | "muted"
  title: string
  description: string
  tags: string[]
  slug: string
  imageUrl: string
}

/* ── Timeline Articles ── */

export interface TimelineArticle {
  date: string
  title: string
  excerpt: string
  slug: string
}

/* ── Contact ── */

export interface ContactData {
  label: string
  text: string
  email: string
  socials: { label: string; href: string }[]
  responseNote: string
}

/* ── Circle Background ── */

export interface BgCircle {
  size: number
  x: number
  y: number
  color: "grey" | "accent"
  opacity: number
  strokeWidth: number
}

/* ── Data ── */

const hero: HeroData = {
  name: "Parker Manning",
  title: "Full-Stack Developer & AI Tooling Builder",
  aboutItems: [
    "Software Engineer at EstateSpace",
    "Building AI-powered developer tools",
    "Based in Jax Beach, FL",
  ],
  badge: "EstateSpace Software Engineer",
  links: [
    { label: "GitHub", href: siteConfig.github },
    { label: "LinkedIn", href: siteConfig.linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}` },
  ],
  stats: [
    { value: "5+", label: "Years Exp." },
    { value: "55+", label: "Repos" },
    { value: "14", label: "Slash Cmds" },
  ],
  avatarUrl: "/avatar.jpg",
}

const currentlyCard: BentoCard = {
  label: "CURRENTLY",
  items: [
    {
      text: "→  Extending claude-workflow plugin",
      description:
        "Official marketplace submission and deeper agent coordination",
    },
    {
      text: "→  Structured progress tracking",
      description:
        "JSONL event systems for terminal-based AI agents with crash recovery",
    },
    {
      text: "→  AI agent control tooling",
      description:
        "Planning gates, QA cycles, scope enforcement, and auditability",
    },
  ],
}

const githubActivity: GitHubActivityCard = {
  label: "GITHUB ACTIVITY",
  sections: [
    { label: "Work  @EstateSpace", weeks: 36, columns: 18 },
    { label: "Personal  @ParkerM2", weeks: 32, columns: 16 },
  ],
}

const interestsCard: BentoCard = {
  label: "INTERESTS",
  items: [
    {
      text: "→  Multi-agent workflow orchestration",
      description:
        "Branch-per-task dev, specialist agents, automated QA cycles",
    },
    {
      text: "→  AI-powered developer tooling",
      description:
        "Claude Code plugins, MCP servers, and structured agent control",
    },
    {
      text: "→  Full-stack desktop apps",
      description:
        "Electron + React cross-platform apps with real-time integrations",
    },
  ],
}

const techStack: TechBadge[] = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "Electron", color: "#47848F" },
  { name: "Vue 3", color: "#42B883" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "TanStack", color: "#EF4444" },
  { name: "Zustand", color: "#764ABC" },
  { name: "Zod", color: "#3068B7" },
  { name: "GitHub Actions", color: "#2088FF" },
  { name: "Vite", color: "#646CFF" },
  { name: "Python", color: "#3776AB" },
]

const projects: ProjectCard[] = [
  {
    label: "FEATURED PROJECT",
    labelColor: "accent",
    title: "claude-workflow",
    description:
      "Multi-agent workflow orchestration plugin for Claude Code with 14 slash commands",
    tags: ["TypeScript", "Claude Code", "Plugin"],
    slug: "create-claude-workflow",
    imageUrl: "/projects/claude-workflow-screenshot.png",
  },
  {
    label: "FEATURED PROJECT",
    labelColor: "accent",
    title: "Agentic Desktop Command",
    description:
      "Full-stack multi-device workspace with Claude Agent Teams and project automation",
    tags: ["Electron", "React", "TypeScript"],
    slug: "agentic-desktop-command",
    imageUrl: "/projects/adc-screenshot.png",
  },
  {
    label: "SIDE PROJECT",
    labelColor: "muted",
    title: "Syrnia Tracker",
    description:
      "Chrome extension for gameplay analytics — fully local in-browser processing",
    tags: ["TypeScript", "Chrome Extension"],
    slug: "syrnia-tracker",
    imageUrl: "/projects/syrnia-tracker-screenshot.png",
  },
]

const timelineArticles: TimelineArticle[] = [
  {
    date: "Sep 2025",
    title: "Why I Switched from Redux to Zustand",
    excerpt:
      "After six months of Redux boilerplate, I discovered Zustand could do the same job in a tenth of...",
    slug: "redux-to-zustand",
  },
  {
    date: "Nov 2025",
    title: "From Zero to Electron: Desktop App",
    excerpt:
      "The web-to-desktop pipeline is not as straightforward as the tutorials suggest. Here is every hard...",
    slug: "zero-to-electron",
  },
  {
    date: "Dec 2025",
    title: "Monolith to Micro-Frontends",
    excerpt:
      "When our CI pipeline hit 45 minutes, we knew something had to change. Module Federation gave us the...",
    slug: "monolith-to-micro-frontends",
  },
  {
    date: "Jan 2026",
    title: "TypeScript Strict Mode Deep Dive",
    excerpt:
      "Most teams enable strict gradually. We went all-in from day one and the type system caught entire...",
    slug: "typescript-strict-mode",
  },
  {
    date: "Jan 2026",
    title: "118-Component Design System",
    excerpt:
      "Every component strict-typed, accessible by default, and themed with CSS custom properties. A deep...",
    slug: "design-system-deep-dive",
  },
  {
    date: "Jan 2026",
    title: "Designing for AI-First Workflows",
    excerpt:
      "Traditional UIs assume human operators. When your primary user is an AI agent, the entire interaction...",
    slug: "ai-first-workflows",
  },
  {
    date: "Mar 2026",
    title: "Multi-Agent Workflow System",
    excerpt:
      "Six Claude agents, six git worktrees, one feature branch. Here is how we orchestrate truly parallel...",
    slug: "multi-agent-workflows",
  },
  {
    date: "Mar 2026",
    title: "Prompt Engineering for Code Agents",
    excerpt:
      "The difference between a good coding agent and a great one often comes down to thirty carefully...",
    slug: "prompt-engineering-agents",
  },
]

const contact: ContactData = {
  label: "GET IN TOUCH",
  text: "Open to collaborating on AI developer\ntooling and agent orchestration systems.",
  email: siteConfig.email,
  socials: [
    { label: "GitHub", href: siteConfig.github },
    { label: "LinkedIn", href: siteConfig.linkedin },
    { label: "Twitter", href: siteConfig.twitter },
  ],
  responseNote: "Usually responds within 24 hours.",
}

/* ── Background Circles ── */

// Small circles (c1-c22)
const smallCircles: BgCircle[] = [
  { size: 28, x: 51, y: 366, color: "grey", opacity: 0.6, strokeWidth: 2 },
  { size: 42, x: 289, y: 24, color: "grey", opacity: 0.5, strokeWidth: 2 },
  { size: 35, x: 502, y: 262, color: "accent", opacity: 0.22, strokeWidth: 1 },
  { size: 55, x: 762, y: 412, color: "grey", opacity: 0.45, strokeWidth: 2 },
  { size: 32, x: 944, y: 44, color: "accent", opacity: 0.25, strokeWidth: 1 },
  { size: 48, x: 1116, y: 386, color: "grey", opacity: 0.475, strokeWidth: 2 },
  { size: 25, x: 1367, y: 207, color: "accent", opacity: 0.23, strokeWidth: 1 },
  { size: 65, x: 167, y: 137, color: "grey", opacity: 0.375, strokeWidth: 2 },
  { size: 40, x: 660, y: 110, color: "accent", opacity: 0.21, strokeWidth: 1 },
  { size: 58, x: 1221, y: 441, color: "grey", opacity: 0.4, strokeWidth: 2 },
]

// Medium circles (a1-a20, b1-b24)
const mediumCircles: BgCircle[] = [
  { size: 50, x: 40, y: 355, color: "grey", opacity: 0.42, strokeWidth: 2 },
  { size: 76, x: 27, y: 342, color: "grey", opacity: 0.265, strokeWidth: 2 },
  { size: 64, x: 278, y: 13, color: "grey", opacity: 0.35, strokeWidth: 2 },
  { size: 90, x: 265, y: 0, color: "grey", opacity: 0.22, strokeWidth: 2 },
  { size: 57, x: 491, y: 251, color: "accent", opacity: 0.154, strokeWidth: 1 },
  { size: 83, x: 478, y: 238, color: "accent", opacity: 0.097, strokeWidth: 1 },
  { size: 77, x: 751, y: 401, color: "grey", opacity: 0.315, strokeWidth: 2 },
  { size: 103, x: 738, y: 388, color: "grey", opacity: 0.198, strokeWidth: 2 },
  { size: 54, x: 933, y: 33, color: "accent", opacity: 0.175, strokeWidth: 1 },
  { size: 80, x: 920, y: 20, color: "accent", opacity: 0.11, strokeWidth: 1 },
  { size: 70, x: 1105, y: 375, color: "grey", opacity: 0.333, strokeWidth: 2 },
  { size: 96, x: 1092, y: 362, color: "grey", opacity: 0.21, strokeWidth: 2 },
  { size: 47, x: 1356, y: 196, color: "accent", opacity: 0.161, strokeWidth: 1 },
  { size: 73, x: 1343, y: 183, color: "accent", opacity: 0.101, strokeWidth: 1 },
  { size: 87, x: 156, y: 126, color: "grey", opacity: 0.263, strokeWidth: 2 },
  { size: 113, x: 143, y: 113, color: "grey", opacity: 0.165, strokeWidth: 2 },
  { size: 62, x: 649, y: 99, color: "accent", opacity: 0.147, strokeWidth: 1 },
  { size: 88, x: 636, y: 86, color: "accent", opacity: 0.092, strokeWidth: 1 },
  { size: 80, x: 1210, y: 430, color: "grey", opacity: 0.28, strokeWidth: 2 },
  { size: 106, x: 1197, y: 417, color: "grey", opacity: 0.175, strokeWidth: 2 },
]

// Large circles (c11-c22, b1-b24)
const largeCircles: BgCircle[] = [
  { size: 220, x: 20, y: 190, color: "grey", opacity: 0.3, strokeWidth: 2 },
  { size: 180, x: 290, y: 70, color: "accent", opacity: 0.14, strokeWidth: 1 },
  { size: 260, x: 470, y: 250, color: "grey", opacity: 0.25, strokeWidth: 2 },
  { size: 200, x: 740, y: 100, color: "accent", opacity: 0.13, strokeWidth: 1 },
  { size: 300, x: 900, y: 200, color: "grey", opacity: 0.2, strokeWidth: 2 },
  { size: 150, x: 1205, y: 5, color: "accent", opacity: 0.15, strokeWidth: 1 },
  { size: 240, x: 130, y: 330, color: "grey", opacity: 0.225, strokeWidth: 2 },
  { size: 170, x: 395, y: -35, color: "accent", opacity: 0.11, strokeWidth: 1 },
  { size: 280, x: 580, y: 160, color: "grey", opacity: 0.175, strokeWidth: 2 },
  { size: 190, x: 905, y: 385, color: "accent", opacity: 0.12, strokeWidth: 1 },
  { size: 320, x: 1190, y: 190, color: "grey", opacity: 0.15, strokeWidth: 2 },
  { size: 210, x: 45, y: -25, color: "accent", opacity: 0.1, strokeWidth: 1 },
]

// Extra-large circles (d1-d16)
const xlargeCircles: BgCircle[] = [
  { size: 500, x: -50, y: 0, color: "grey", opacity: 0.125, strokeWidth: 2 },
  { size: 600, x: 250, y: -100, color: "accent", opacity: 0.04, strokeWidth: 1 },
  { size: 550, x: 625, y: 25, color: "grey", opacity: 0.15, strokeWidth: 2 },
  { size: 480, x: 960, y: -90, color: "accent", opacity: 0.05, strokeWidth: 1 },
  { size: 700, x: 0, y: 50, color: "grey", opacity: 0.075, strokeWidth: 2 },
  { size: 520, x: 490, y: -160, color: "accent", opacity: 0.04, strokeWidth: 1 },
  { size: 450, x: 875, y: 195, color: "grey", opacity: 0.15, strokeWidth: 2 },
  { size: 640, x: 80, y: -220, color: "accent", opacity: 0.03, strokeWidth: 1 },
  { size: 580, x: 710, y: -90, color: "grey", opacity: 0.125, strokeWidth: 2 },
  { size: 400, x: 1150, y: 100, color: "accent", opacity: 0.07, strokeWidth: 1 },
  { size: 1000, x: -200, y: -250, color: "grey", opacity: 0.075, strokeWidth: 2 },
  { size: 1200, x: 120, y: -350, color: "accent", opacity: 0.02, strokeWidth: 1 },
  { size: 900, x: 650, y: -200, color: "grey", opacity: 0.075, strokeWidth: 2 },
  { size: 1100, x: -50, y: -200, color: "accent", opacity: 0.02, strokeWidth: 1 },
  { size: 1400, x: 600, y: -500, color: "grey", opacity: 0.05, strokeWidth: 2 },
  { size: 1300, x: 150, y: -250, color: "accent", opacity: 0.02, strokeWidth: 1 },
]

const bgCircles: BgCircle[] = [
  ...smallCircles,
  ...mediumCircles,
  ...largeCircles,
  ...xlargeCircles,
]

// Medium-layer b circles
const bLayerCircles: BgCircle[] = [
  { size: 242, x: 9, y: 179, color: "grey", opacity: 0.21, strokeWidth: 2 },
  { size: 268, x: -4, y: 166, color: "grey", opacity: 0.133, strokeWidth: 2 },
  { size: 202, x: 279, y: 59, color: "accent", opacity: 0.098, strokeWidth: 1 },
  { size: 228, x: 266, y: 46, color: "accent", opacity: 0.062, strokeWidth: 1 },
  { size: 282, x: 459, y: 239, color: "grey", opacity: 0.175, strokeWidth: 2 },
  { size: 308, x: 446, y: 226, color: "grey", opacity: 0.11, strokeWidth: 2 },
  { size: 222, x: 729, y: 89, color: "accent", opacity: 0.091, strokeWidth: 1 },
  { size: 248, x: 716, y: 76, color: "accent", opacity: 0.057, strokeWidth: 1 },
  { size: 322, x: 889, y: 189, color: "grey", opacity: 0.14, strokeWidth: 2 },
  { size: 348, x: 876, y: 176, color: "grey", opacity: 0.088, strokeWidth: 2 },
  { size: 172, x: 1194, y: -6, color: "accent", opacity: 0.105, strokeWidth: 1 },
  { size: 198, x: 1181, y: -19, color: "accent", opacity: 0.066, strokeWidth: 1 },
  { size: 262, x: 119, y: 319, color: "grey", opacity: 0.158, strokeWidth: 2 },
  { size: 288, x: 106, y: 306, color: "grey", opacity: 0.1, strokeWidth: 2 },
  { size: 192, x: 384, y: -46, color: "accent", opacity: 0.077, strokeWidth: 1 },
  { size: 218, x: 371, y: -59, color: "accent", opacity: 0.048, strokeWidth: 1 },
  { size: 302, x: 569, y: 149, color: "grey", opacity: 0.123, strokeWidth: 2 },
  { size: 328, x: 556, y: 136, color: "grey", opacity: 0.078, strokeWidth: 2 },
  { size: 212, x: 894, y: 374, color: "accent", opacity: 0.084, strokeWidth: 1 },
  { size: 238, x: 881, y: 361, color: "accent", opacity: 0.053, strokeWidth: 1 },
  { size: 342, x: 1179, y: 179, color: "grey", opacity: 0.105, strokeWidth: 2 },
  { size: 368, x: 1166, y: 166, color: "grey", opacity: 0.065, strokeWidth: 2 },
  { size: 232, x: 34, y: -36, color: "accent", opacity: 0.07, strokeWidth: 1 },
  { size: 258, x: 21, y: -49, color: "accent", opacity: 0.044, strokeWidth: 1 },
]

const allBgCircles: BgCircle[] = [...bgCircles, ...bLayerCircles]

export function useHomePage() {
  return {
    hero,
    currentlyCard,
    githubActivity,
    interestsCard,
    techStack,
    projects,
    timelineArticles,
    contact,
    bgCircles: allBgCircles,
  }
}
