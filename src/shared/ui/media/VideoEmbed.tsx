import type { VideoHTMLAttributes } from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface VideoEmbedProps
  extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "title"> {
  src: string
  poster?: string
  title?: string
}

const VideoEmbed = forwardRef<HTMLVideoElement, VideoEmbedProps>(
  ({ src, poster, title, className, ...props }, ref) => (
    <div className="clay overflow-hidden rounded-2xl">
      <video
        ref={ref}
        src={src}
        poster={poster}
        title={title}
        controls
        className={cn("aspect-video w-full", className)}
        {...props}
      />
    </div>
  ),
)
VideoEmbed.displayName = "VideoEmbed"

export { VideoEmbed }
export type { VideoEmbedProps }
