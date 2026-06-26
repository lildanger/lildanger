"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowEffect?: boolean
  children: React.ReactNode
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glowEffect = true, children, ...props }, ref) => {
    return (
      <div className="relative h-full w-full">
        {glowEffect && (
          <div className="absolute -inset-1.5 rounded-2xl bg-amber-500/5 blur-2xl opacity-60 pointer-events-none" />
        )}
        <div
          ref={ref}
          className={cn(
            "relative rounded-2xl border border-amber-500/20 h-full w-full",
            "bg-brushed-black-gold backdrop-blur-[8px]",
            "shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
            "before:absolute before:inset-0 before:rounded-2xl",
            "before:bg-linear-to-b before:from-amber-400/10 before:to-transparent before:pointer-events-none",
            "after:absolute after:inset-px after:rounded-[calc(1rem-1px)]",
            "after:shadow-[inset_0_1px_1px_rgba(251,191,36,0.12)] after:pointer-events-none",
            className,
          )}
          {...props}
        >
          <div className="relative z-10 h-full">{children}</div>
        </div>
      </div>
    )
  },
)
GlassCard.displayName = "GlassCard"

const GlassCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />,
)
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold text-white leading-none tracking-tight", className)}
      {...props}
    />
  ),
)
GlassCardTitle.displayName = "GlassCardTitle"

const GlassCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-white/60", className)} {...props} />,
)
GlassCardDescription.displayName = "GlassCardDescription"

const GlassCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
GlassCardFooter.displayName = "GlassCardFooter"

export { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardDescription, GlassCardContent, GlassCardFooter }
