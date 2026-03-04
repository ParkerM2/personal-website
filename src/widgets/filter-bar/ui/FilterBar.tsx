import { Button } from "@/shared/ui"

interface FilterBarProps {
  filters: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter options">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "primary" : "ghost"}
          size="sm"
          onClick={() => onFilterChange(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
