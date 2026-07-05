import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassBadge } from "@/components/ui/glass-badge";

export interface HoverEffectItem {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  tags?: string[];
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverEffectItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 md:py-6 gap-4 md:gap-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const isHovered = hoveredIndex === idx;
        return (
          <a
            href={item.link}
            key={item.link}
            className="relative group block p-0.5 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-2xl transition-shadow duration-150"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-amber-500/[0.03] border border-amber-500/20 block rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card isHovered={isHovered}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    {item.icon && (
                      <div className="text-amber-500/85 group-hover:text-amber-400 transition-colors duration-300 text-xl md:text-2xl group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.35)] shrink-0">
                        {item.icon}
                      </div>
                    )}
                    <CardTitle className="mt-0 text-sm sm:text-base md:text-lg">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-[11px] md:text-xs leading-normal md:leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-amber-500/10">
                    {item.tags.map((tag) => (
                      <GlassBadge
                        key={tag}
                        variant="outline"
                        size="sm"
                        className="text-[9px] md:text-[10px] px-1.5 py-0.5 uppercase font-mono tracking-wider border-amber-500/10 text-amber-300/80 bg-amber-500/[0.02] hover:bg-amber-500/[0.08] transition-colors"
                      >
                        {tag}
                      </GlassBadge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isHovered,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  const [hoveredInternal, setHoveredInternal] = useState(false);
  const activeHover = isHovered !== undefined ? isHovered : hoveredInternal;

  return (
    <div
      onMouseEnter={() => setHoveredInternal(true)}
      onMouseLeave={() => setHoveredInternal(false)}
      className="h-full w-full group"
    >
      <GlassCard
        glowEffect={activeHover}
        className={cn(
          "p-4 md:p-5 group-hover:border-white/20 group-hover:bg-zinc-950/40 group-hover:backdrop-blur-[60px] group-hover:before:from-white/15 group-hover:after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-500 overflow-hidden relative",
          className
        )}
      >
        {/* 玻璃切面金色扫光层 (Hover 时触发) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/[0.03] to-transparent -translate-x-full group-hover:animate-glass-sheen pointer-events-none z-10" />

        <div className="relative z-20 h-full">{children}</div>
      </GlassCard>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-2 text-lg group-hover:text-amber-300 transition-colors duration-300",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-xs font-light",
        className
      )}
    >
      {children}
    </p>
  );
};
