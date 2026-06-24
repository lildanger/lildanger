import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-3xl transition-shadow duration-150"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target={item.link.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-800/60 dark:bg-neutral-800/40 block rounded-3xl"
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
          <Card>
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
                <div className="flex flex-wrap gap-1.5 mt-4 pt-2 border-t border-neutral-800/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-mono tracking-wider bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-5 overflow-hidden bg-neutral-900/80 border border-neutral-800/80 group-hover:border-neutral-700/60 relative z-20 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-50 h-full">{children}</div>
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
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-2 text-lg group-hover:text-cyan-400 transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
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
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-xs",
        className
      )}
    >
      {children}
    </p>
  );
};
