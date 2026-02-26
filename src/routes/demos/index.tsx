import { createFileRoute } from "@tanstack/react-router"
import { DemosPage } from "@/pages/demos"

export const Route = createFileRoute("/demos/")({
  component: DemosPage,
})
