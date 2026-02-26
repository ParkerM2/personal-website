import { createFileRoute } from "@tanstack/react-router"
import { BlogPostPage } from "@/pages/blog-post"

export const Route = createFileRoute("/blog/$postSlug")({
  component: BlogPostPage,
})
