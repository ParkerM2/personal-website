import { Container, SectionLabel, Separator, Skeleton } from "@/shared/ui"
import { HeroSection } from "@/widgets/hero"
import { ProjectCardGrid } from "@/widgets/project-card-grid"
import { ContactCard } from "@/widgets/contact-card"
import { useHomePage } from "../model/useHomePage"

export function HomePage() {
  const { featuredProjects, isLoading } = useHomePage()

  return (
    <Container size="lg">
      <HeroSection />
      <div className="mt-16">
        <SectionLabel label="FEATURED WORK" title="Selected Projects" />
        {isLoading ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-64 w-full" />
          </div>
        ) : (
          <div className="mt-8">
            <ProjectCardGrid projects={featuredProjects} />
          </div>
        )}
      </div>
      <Separator className="my-16" />
      <ContactCard />
    </Container>
  )
}
