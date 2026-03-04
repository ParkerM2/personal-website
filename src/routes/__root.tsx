import { lazy, Suspense } from "react"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"

const TanStackRouterDevtools =
  import.meta.env.PROD
    ? () => null
    : lazy(() =>
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  )
}
