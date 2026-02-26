import type { Project } from "@/entities/project"
import { ProjectCard } from "@/entities/project"
import { Heading, Grid } from "@/shared/ui"
import { useProjectCardGrid } from "../model/useProjectCardGrid"

interface ProjectCardGridProps {
  projects: Project[]
}

export function ProjectCardGrid({ projects }: ProjectCardGridProps) {
  const { projects: displayProjects } = useProjectCardGrid(projects)

  return (
    <div>
      <Heading as="h2" className="mb-8">
        Featured Projects
      </Heading>
      <Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="lg">
        {displayProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Grid>
    </div>
  )
}
