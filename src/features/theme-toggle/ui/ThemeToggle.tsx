import { Sun, Moon, Monitor } from "lucide-react"
import { IconButton } from "@/shared/ui"
import { useThemeToggle } from "../model/useThemeToggle"

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeToggle()

  const icon =
    theme === "light" ? (
      <Sun className="h-5 w-5" />
    ) : theme === "dark" ? (
      <Moon className="h-5 w-5" />
    ) : (
      <Monitor className="h-5 w-5" />
    )

  return (
    <IconButton
      icon={icon}
      label="Toggle theme"
      onClick={toggleTheme}
    />
  )
}
