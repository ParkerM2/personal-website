import { queryOptions } from "@tanstack/react-query"
import projectsData from "@/shared/data/projects.json"
import type { Project } from "../model/types"

const projects = projectsData as Project[]

export const projectQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: ["projects"],
      queryFn: () => projects,
      staleTime: Infinity,
    }),
  featured: () =>
    queryOptions({
      queryKey: ["projects", "featured"],
      queryFn: () => projects.filter((p) => p.featured),
      staleTime: Infinity,
    }),
  bySlug: (slug: string) =>
    queryOptions({
      queryKey: ["projects", slug],
      queryFn: () => projects.find((p) => p.slug === slug),
      staleTime: Infinity,
    }),
}
