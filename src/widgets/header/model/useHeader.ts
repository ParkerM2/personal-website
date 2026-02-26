import { useState } from "react"
import { navigationItems } from "@/shared/config"

export function useHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return {
    isMenuOpen,
    setIsMenuOpen,
    navigationItems,
  }
}
