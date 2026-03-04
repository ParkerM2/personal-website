import { useThemeToggle } from "../model/useThemeToggle"

export function ThemeToggle() {
  const { toggleTheme } = useThemeToggle()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 text-fg-secondary"
      aria-label="Toggle theme"
    >
      [ThemeToggle placeholder]
    </button>
  )
}
