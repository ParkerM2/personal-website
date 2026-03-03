import { Grid } from "@/shared/ui"

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Client Satisfaction" },
]

export function StatsSection() {
  return (
    <section className="py-16">
      <Grid cols={4} gap="md">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-mono text-3xl font-bold text-accent">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-fg-secondary">{stat.label}</p>
          </div>
        ))}
      </Grid>
    </section>
  )
}
