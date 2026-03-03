import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { projectQueryOptions } from "@/entities/project"

const PROJECT_FILTERS = ["All", "TypeScript", "React", "AI/ML", "Node.js"]

export function useProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { data: allProjects, isLoading } = useQuery(projectQueryOptions.all())

  const projects =
    activeFilter === "All"
      ? (allProjects ?? [])
      : (allProjects ?? []).filter((p) => p.tags.includes(activeFilter))

  return {
    projects,
    allProjects: allProjects ?? [],
    filters: PROJECT_FILTERS,
    activeFilter,
    setActiveFilter,
    isLoading,
  }
}
