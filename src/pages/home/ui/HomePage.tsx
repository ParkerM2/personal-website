import { Container, Section, Stack } from "@/shared/ui"
import { Skeleton } from "@/components/ui/skeleton"
import { HeroSection } from "@/widgets/hero"
import { ProjectCardGrid } from "@/widgets/project-card-grid"
import { useHomePage } from "../model/useHomePage"

export function HomePage() {
  const { featuredProjects, isLoading } = useHomePage()

  return (
    <Stack spacing="xl">
      <Container>
        <HeroSection />
      </Container>

      <Container>
        <Section spacing="lg">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-2xl" />
              ))}
            </div>
          ) : (
            <ProjectCardGrid projects={featuredProjects} />
          )}
        </Section>
      </Container>
    </Stack>
  )
}
