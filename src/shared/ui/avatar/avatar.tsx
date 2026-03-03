import { cn } from "@/lib/utils"
import type { HTMLAttributes, ImgHTMLAttributes } from "react"

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

function Avatar({ className, size = 40, style, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-bg-elevated border border-border",
        className
      )}
      style={{ width: size, height: size, ...style }}
      {...props}
    />
  )
}

type AvatarImageProps = ImgHTMLAttributes<HTMLImageElement>

function AvatarImage({ className, alt = "", ...props }: AvatarImageProps) {
  return (
    <img
      className={cn("aspect-square h-full w-full object-cover", className)}
      alt={alt}
      {...props}
    />
  )
}

type AvatarFallbackProps = HTMLAttributes<HTMLSpanElement>

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center font-display text-sm font-medium text-fg-secondary",
        className
      )}
      {...props}
    />
  )
}

type AvatarGroupProps = HTMLAttributes<HTMLDivElement>

function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  return (
    <div
      className={cn("flex -space-x-3", className)}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup }
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps, AvatarGroupProps }
