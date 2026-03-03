import type { Skill } from "../model/types"
import { Badge } from "@/shared/ui"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  skill: Skill
  className?: string
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <Badge variant="muted" className={cn(className)}>
      {skill.name}
    </Badge>
  )
}
