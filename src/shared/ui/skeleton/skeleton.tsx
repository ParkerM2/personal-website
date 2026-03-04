import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type SkeletonProps = HTMLAttributes<HTMLDivElement>

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-bg-elevated", className)}
      {...props}
    />
  )
}

export { Skeleton }
export type { SkeletonProps }
