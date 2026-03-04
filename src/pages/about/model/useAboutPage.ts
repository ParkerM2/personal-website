import { siteConfig } from "@/shared/config"

export interface Experience {
  role: string
  company: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    role: "Senior Software Developer",
    company: "Tech Startup",
    period: "2022 — Present",
    description:
      "Leading frontend architecture and building AI-powered developer tools.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "2020 — 2022",
    description:
      "Built responsive web applications and APIs for enterprise clients.",
  },
  {
    role: "Junior Developer",
    company: "Software House",
    period: "2019 — 2020",
    description:
      "Developed features for e-commerce platforms using React and Node.js.",
  },
]

export function useAboutPage() {
  return {
    name: siteConfig.name,
    title: siteConfig.title,
    bio: "I'm a software developer passionate about building tools that make developers' lives easier. With experience spanning frontend architecture, AI integration, and developer tooling, I focus on creating intuitive, performant applications. When I'm not coding, you'll find me exploring the latest in AI and contributing to open source.",
    experiences,
  }
}
