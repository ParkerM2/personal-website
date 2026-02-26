import { createFileRoute } from "@tanstack/react-router"
import { DemoDetailPage } from "@/pages/demo-detail"

export const Route = createFileRoute("/demos/$demoSlug")({
  component: DemoDetailPage,
})
