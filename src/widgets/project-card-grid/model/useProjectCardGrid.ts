import type { Project } from "@/entities/project"

export function useProjectCardGrid(projects: Project[]) {
  return {
    projects,
  }
}
