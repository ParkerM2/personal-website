import { useQuery } from "@tanstack/react-query"
import { projectQueryOptions } from "@/entities/project"

export function useHomePage() {
  const { data: featuredProjects, isLoading } = useQuery(
    projectQueryOptions.featured(),
  )

  return {
    featuredProjects: featuredProjects ?? [],
    isLoading,
  }
}
