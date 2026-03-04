import { Badge } from "@/shared/ui"

const skillGroups = [
  { category: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { category: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
  { category: "AI/ML", skills: ["LLMs", "RAG", "Fine-tuning", "Prompt Engineering"] },
]

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <p className="mb-3 font-mono text-sm uppercase tracking-wide text-fg-muted">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="muted">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
