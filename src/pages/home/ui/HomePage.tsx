import { HeroSection } from "@/widgets/hero"
import { ProjectCardGrid } from "@/widgets/project-card-grid"
import { useHomePage } from "../model/useHomePage"

export function HomePage() {
  const { featuredProjects, isLoading } = useHomePage()

  return (
    <div>
      <HeroSection />
      {isLoading ? (
        <div className="p-4 text-fg-secondary">[Loading placeholder]</div>
      ) : (
        <ProjectCardGrid projects={featuredProjects} />
      )}
    </div>
  )
}
