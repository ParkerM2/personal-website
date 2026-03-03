import { useQuery } from "@tanstack/react-query"
import { projectQueryOptions } from "@/entities/project"
import { siteConfig } from "@/shared/config"

export interface HeroStat {
  value: string
  label: string
}

export interface InfoCard {
  label: string
  items: { text: string; muted?: boolean }[]
}

export interface TechBadge {
  name: string
  color: string
}

export interface WritingItem {
  title: string
  slug: string
  muted?: boolean
}

const heroStats: HeroStat[] = [
  { value: "5+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "12", label: "Open Source" },
]

const infoCards: InfoCard[] = [
  {
    label: "CURRENTLY",
    items: [
      { text: "Building design systems in Pencil" },
      { text: "Exploring AI-first dev workflows" },
      { text: "Open to collaboration", muted: true },
    ],
  },
  {
    label: "INTERESTS",
    items: [
      { text: "Design systems & component architecture" },
      { text: "AI-assisted development tools" },
      { text: "Open source tooling", muted: true },
    ],
  },
]

const techStack: TechBadge[] = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "Electron", color: "#47848F" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TanStack", color: "#EF4444" },
  { name: "Radix UI", color: "#AB7CFF" },
]

const latestWriting: WritingItem[] = [
  { title: "Building AI-First Dev Workflows", slug: "ai-dev-workflows" },
  {
    title: "Design System Architecture at Scale",
    slug: "building-design-system",
  },
  {
    title: "Electron + React Performance Patterns",
    slug: "typescript-react-patterns",
  },
  {
    title: "Multi-Agent Orchestration Deep Dive",
    slug: "future-web-components",
    muted: true,
  },
]

export function useHomePage() {
  const { data: featuredProjects, isLoading } = useQuery(
    projectQueryOptions.featured(),
  )

  return {
    featuredProjects: featuredProjects ?? [],
    isLoading,
    heroStats,
    infoCards,
    techStack,
    latestWriting,
    siteConfig,
  }
}
