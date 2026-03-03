import { siteConfig } from "@/shared/config"

export interface ProjectCard {
  title: string
  description: string
  techTags: string
  slug: string
}

export interface ArticleCard {
  date: string
  title: string
  description: string
  slug: string
}

const skillTags = ["TypeScript", "React", "Electron", "AI/ML", "Design Systems"]

const projectCards: ProjectCard[] = [
  {
    title: "ADC Desktop",
    description:
      "Electron app for managing autonomous Claude coding agents with real-time task monitoring.",
    techTags: "Electron · React · TypeScript",
    slug: "adc-desktop",
  },
  {
    title: "Workflow Engine",
    description:
      "Multi-agent orchestration for parallel task execution with dependency resolution and QA gates.",
    techTags: "Node.js · AI Agents · Git",
    slug: "workflow-engine",
  },
  {
    title: "Design System",
    description:
      "118-component library with theme variables, responsive breakpoints, and dark/light mode.",
    techTags: "Pencil · Components · Theming",
    slug: "design-system",
  },
  {
    title: "Hub Protocol",
    description:
      "Centralized API for device sync, workspace management, and real-time coordination.",
    techTags: "REST · WebSocket · JWT",
    slug: "hub-protocol",
  },
]

const latestArticles: ArticleCard[] = [
  {
    date: "Feb 2026",
    title: "Building Multi-Agent Workflows That Actually Work",
    description:
      "Lessons from orchestrating parallel coding agents — dependency resolution, QA gates, and crash recovery.",
    slug: "multi-agent-workflows",
  },
  {
    date: "Jan 2026",
    title: "Design Systems at Scale: From Tokens to Components",
    description:
      "How theme variables, responsive breakpoints, and a component library come together in a real project.",
    slug: "design-systems-at-scale",
  },
  {
    date: "Dec 2025",
    title: "Electron + React: Strict TypeScript From Day One",
    description:
      "Why zero-tolerance linting saved weeks of debugging in a 30k-line desktop app.",
    slug: "electron-react-strict-typescript",
  },
]

export function useHomePage() {
  return {
    projectCards,
    latestArticles,
    skillTags,
    siteConfig,
  }
}
