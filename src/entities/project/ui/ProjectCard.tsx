import type { Project } from "../model/types"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
} from "@/shared/ui"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={className}>
      <div className="h-40 rounded-t-md bg-gradient-to-br from-accent/20 to-bg-elevated" />
      <CardContent className="pt-4">
        <p className="text-base font-semibold text-fg">{project.title}</p>
        <p className="mt-1 line-clamp-2 text-sm text-fg-secondary">
          {project.description}
        </p>
        {project.tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="muted">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
      {(project.githubUrl !== "" || project.demoUrl !== "") ? (
        <CardFooter className="gap-2">
          {project.githubUrl !== "" ? (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="mr-1.5 h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          ) : null}
          {project.demoUrl !== "" ? (
            <Button variant="ghost" size="sm" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  )
}
