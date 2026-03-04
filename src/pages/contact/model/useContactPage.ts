import { siteConfig } from "@/shared/config"

export function useContactPage() {
  return {
    email: siteConfig.email,
  }
}
