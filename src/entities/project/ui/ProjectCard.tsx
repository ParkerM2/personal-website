import type { Project } from "../model/types"

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project }: ProjectCardProps) {
  return <div className="p-4 text-fg-secondary">[ProjectCard placeholder: {project.title}]</div>
}
