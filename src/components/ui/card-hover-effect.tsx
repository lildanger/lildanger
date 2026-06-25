import React, { useState, useEffect } from "react";
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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6",
        className
      )}
    >
      {items.map((item, idx) => {
        const isHovered = hoveredIndex === idx;
        return (
          <a
            href={item.link}
            key={item.link}
            className="relative group block p-1 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-3xl transition-shadow duration-150"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-cyan-500/[0.02] border border-cyan-500/10 block rounded-3xl backdrop-blur-xs"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card isHovered={isHovered}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  {item.icon && (
                    <div className="text-neutral-400 group-hover:text-cyan-400 transition-colors duration-300 text-2xl">
                      {item.icon}
                    </div>
                  )}
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10">
                    {item.tags.map((tag) => (
                      <GlassBadge
                        key={tag}
                        variant="outline"
                        size="sm"
                        className="text-[10px] uppercase font-mono tracking-wider border-white/10 text-neutral-300 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
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

export const Meteors = ({ number }: { number?: number }) => {
  const meteorNumber = number || 12;
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(meteorNumber)].map(() => ({
      top: 0,
      left: Math.floor(Math.random() * 300) - 50 + "px",
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (8 - 2) + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [meteorNumber]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-cyan-400/30 shadow-[0_0_0_1px_#ffffff05] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-cyan-400/20 before:to-transparent"
          )}
          style={style}
        />
      ))}
    </>
  );
};

export const Card = ({
  className,
  children,
  isHovered = false,
}: {
  className?: string;
  children: React.ReactNode;
  isHovered?: boolean;
}) => {
  return (
    <GlassCard
      glowEffect={isHovered}
      className={cn(
        "p-5 bg-white/[0.03] border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden relative",
        className
      )}
    >
      {/* 玻璃切面高光掠光层 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:animate-glass-sheen pointer-events-none z-10" />

      {/* 流星背景 (作为玻璃内的尘埃，透明度下调为 10% 并在 hover 时亮起) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-500">
        <Meteors number={4} />
      </div>

      <div className="relative z-20 h-full">{children}</div>
    </GlassCard>
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
        "text-zinc-100 font-bold tracking-wide mt-2 text-lg group-hover:text-cyan-300 transition-colors duration-300",
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

