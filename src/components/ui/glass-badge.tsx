"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassBadgeVariants = cva(
  cn(
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
    "backdrop-blur-xl border transition-all duration-300",
  ),
  {
    variants: {
      variant: {
        default: "bg-neutral-950/40 border-amber-500/15 text-neutral-200",
        primary: cn("bg-linear-to-r from-amber-500/20 to-yellow-500/20", "border-amber-400/30 text-amber-100"),
        success: cn("bg-emerald-500/20 border-emerald-400/30 text-emerald-100"),
        warning: cn("bg-amber-500/20 border-amber-400/30 text-amber-100"),
        destructive: cn("bg-red-500/20 border-red-400/30 text-red-100"),
        outline: "bg-transparent border-amber-500/20 text-amber-300",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface GlassBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassBadgeVariants> {}

function GlassBadge({ className, variant, size, ...props }: GlassBadgeProps) {
  return <div className={cn(glassBadgeVariants({ variant, size }), className)} {...props} />
}

export { GlassBadge, glassBadgeVariants }
