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
        default: "bg-brushed-black-gold border border-amber-500/20 text-neutral-200",
        primary: "bg-brushed-gold border border-amber-400/40 text-neutral-950 font-bold",
        success: cn("bg-emerald-500/20 border-emerald-400/30 text-emerald-100"),
        warning: cn("bg-amber-500/20 border-amber-400/30 text-amber-100"),
        destructive: cn("bg-red-500/20 border-red-400/30 text-red-100"),
        outline: "bg-transparent border border-amber-500/30 text-amber-300 font-medium",
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
