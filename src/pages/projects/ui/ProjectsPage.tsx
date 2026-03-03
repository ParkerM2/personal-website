import { Container, SectionLabel, Skeleton } from "@/shared/ui"
import { ProjectCardGrid } from "@/widgets/project-card-grid"
import { FilterBar } from "@/widgets/filter-bar"
import { useProjectsPage } from "../model/useProjectsPage"

export function ProjectsPage() {
  const { projects, filters, activeFilter, setActiveFilter, isLoading } =
    useProjectsPage()

  return (
    <Container size="lg">
      <SectionLabel label="WORK" title="All Projects" className="py-16" />
      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      {isLoading ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      ) : (
        <div className="mt-8">
          <ProjectCardGrid projects={projects} />
        </div>
      )}
    </Container>
  )
}
