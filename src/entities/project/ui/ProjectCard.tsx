import type { Project } from "../model/types"
import { ClayCard } from "@/shared/ui"
import { CardContent, CardHeader, CardTitle } from "@/shared/ui"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <ClayCard className={cn("flex flex-col", className)}>
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="clay-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </ClayCard>
  )
}
