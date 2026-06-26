"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const glassButtonVariants = cva(
  cn(
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl cursor-pointer",
    "text-sm font-medium transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:scale-105 active:scale-95",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ),
  {
    variants: {
      variant: {
        default: cn(
          "bg-amber-500/10 backdrop-blur-xl border border-amber-500/35 text-amber-100",
          "shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
          "hover:bg-amber-500/20 hover:border-amber-400/50",
          "before:absolute before:inset-0 before:rounded-xl",
          "before:bg-linear-to-b before:from-amber-400/10 before:to-transparent before:pointer-events-none",
        ),
        primary: cn(
          "bg-linear-to-r from-amber-600 via-yellow-500 to-amber-500",
          "backdrop-blur-xl border border-amber-400/30 text-white",
          "shadow-[0_4px_20px_rgba(245,158,11,0.4)]",
          "hover:shadow-[0_4px_30px_rgba(245,158,11,0.6)]",
          "before:absolute before:inset-0 before:rounded-xl",
          "before:bg-linear-to-b before:from-amber-300/30 before:to-transparent before:pointer-events-none",
        ),
        outline: cn(
          "bg-transparent backdrop-blur-sm border-2 border-amber-500/40 text-amber-200",
          "hover:bg-amber-500/10 hover:border-amber-400/60",
        ),
        ghost: cn("bg-transparent text-amber-300/70", "hover:bg-amber-500/10 hover:text-amber-200"),
        destructive: cn(
          "bg-red-500/30 backdrop-blur-xl border border-red-400/40 text-red-100",
          "shadow-[0_4px_16px_rgba(239,68,68,0.3)]",
          "hover:bg-red-500/40 hover:border-red-400/60",
          "before:absolute before:inset-0 before:rounded-xl",
          "before:bg-linear-to-b before:from-white/10 before:to-transparent before:pointer-events-none",
        ),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  glowEffect?: boolean
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, asChild = false, size, glowEffect = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <div className="relative inline-block">
        {glowEffect && (
          <div className="absolute -inset-1 rounded-xl bg-amber-500/8 blur-lg opacity-40 transition-opacity group-hover:opacity-60 pointer-events-none" />
        )}
        <Comp className={cn(glassButtonVariants({ variant, size, className }))} ref={ref} {...props}>
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Comp>
      </div>
    )
  },
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
