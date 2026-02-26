import type { Skill } from "../model/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categoryColorMap: Record<string, string> = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  language: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  ai: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  tools: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
}

interface SkillBadgeProps {
  skill: Skill
  className?: string
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <Badge
      className={cn(
        "clay-sm border-0",
        categoryColorMap[skill.category] ?? "",
        className,
      )}
    >
      {skill.name}
    </Badge>
  )
}
