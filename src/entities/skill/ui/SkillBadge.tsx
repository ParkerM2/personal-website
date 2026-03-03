import type { Skill } from "../model/types"

interface SkillBadgeProps {
  skill: Skill
  className?: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return <div className="p-4 text-fg-secondary">[SkillBadge placeholder: {skill.name}]</div>
}
