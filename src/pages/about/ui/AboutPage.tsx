import {
  Avatar,
  AvatarFallback,
  Card,
  CardContent,
  Container,
  SectionLabel,
  Separator,
} from "@/shared/ui"
import { SkillsGrid } from "@/widgets/skills-grid"
import { StatsSection } from "@/widgets/stats-section"
import { useAboutPage } from "../model/useAboutPage"

export function AboutPage() {
  const { name, title, bio, experiences } = useAboutPage()

  return (
    <Container size="lg" className="py-16">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
        <Avatar size={120}>
          <AvatarFallback className="text-2xl">P</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-fg">{name}</h1>
          <p className="mt-1 font-mono text-base text-accent">{title}</p>
          <p className="mt-4 max-w-2xl text-fg-secondary">{bio}</p>
        </div>
      </div>

      <StatsSection />

      <Separator className="my-10" />

      <SectionLabel label="SKILLS" title="Technologies & Tools" />
      <div className="mt-8">
        <SkillsGrid />
      </div>

      <Separator className="my-10" />

      <SectionLabel label="EXPERIENCE" title="Work History" />
      <div className="mt-8 flex flex-col gap-4">
        {experiences.map((exp) => (
          <Card key={exp.role + exp.company}>
            <CardContent className="pt-4">
              <p className="font-semibold text-fg">{exp.role}</p>
              <p className="text-fg-secondary">{exp.company}</p>
              <p className="font-mono text-xs text-fg-muted">{exp.period}</p>
              <p className="mt-2 text-sm text-fg-secondary">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
