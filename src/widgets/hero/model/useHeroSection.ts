import { siteConfig } from "@/shared/config"

export function useHeroSection() {
  return {
    title: `Hi, I'm ${siteConfig.name}`,
    subtitle: siteConfig.description,
    ctaLinks: [
      { label: "View Projects", href: "/projects" },
      { label: "Read Blog", href: "/blog" },
    ],
  }
}
