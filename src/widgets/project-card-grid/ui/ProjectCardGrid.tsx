import type { Project } from "@/entities/project"
import { ProjectCard } from "@/entities/project"
import { Grid } from "@/shared/ui"
import { useProjectCardGrid } from "../model/useProjectCardGrid"

interface ProjectCardGridProps {
  projects: Project[]
}

export function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  const { projects: displayProjects } = useProjectCardGrid(projects)

  return (
    <Grid cols={3} gap="lg">
      {displayProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </Grid>
  )
}
