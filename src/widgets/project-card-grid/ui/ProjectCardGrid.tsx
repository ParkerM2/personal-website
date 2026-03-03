import type { Project } from "@/entities/project"
import { ProjectCard } from "@/entities/project"
import { useProjectCardGrid } from "../model/useProjectCardGrid"

interface ProjectCardGridProps {
  projects: Project[]
}

export function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  const { projects: displayProjects } = useProjectCardGrid(projects)

  return (
    <div className="p-4 text-fg-secondary">
      [ProjectCardGrid placeholder]
      {displayProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
