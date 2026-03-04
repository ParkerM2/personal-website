import { cn } from "@/lib/utils"
import { forwardRef, type HTMLAttributes } from "react"

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("rounded-md border border-border bg-bg-surface", className)}
        {...props}
      />
    )
  }
)

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardHeader({ className, ...props }, ref) {
    return <div ref={ref} className={cn("flex flex-col space-y-1.5 p-4", className)} {...props} />
  }
)

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  function CardTitle({ className, ...props }, ref) {
    return <h3 ref={ref} className={cn("font-display text-base font-semibold text-fg", className)} {...props} />
  }
)

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  function CardDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn("text-sm text-fg-secondary", className)} {...props} />
  }
)

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
  }
)

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardFooter({ className, ...props }, ref) {
    return <div ref={ref} className={cn("flex items-center border-t border-border p-4", className)} {...props} />
  }
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
