import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassBadge } from "@/components/ui/glass-badge";
import GlareHover from "@/components/reactbits/GlareHover/GlareHover";

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
            key={item.title}
            className="relative group block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-2xl transition-transform duration-200 active:scale-[0.99]"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
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
      className="h-full w-full group rounded-2xl overflow-hidden"
    >
      {/* 整卡金箔偏光扫光：ReactBits GlareHover（随悬停顺滑掠过整张黑曜石玻璃卡） */}
      <GlareHover
        width="100%"
        height="100%"
        background="transparent"
        borderRadius="1rem"
        borderColor="transparent"
        glareColor="#fbbf24"
        glareOpacity={0.16}
        glareAngle={-35}
        glareSize={100}
        softness={0.75}
        variant="sheen"
        mode="hover"
        blendMode="screen"
        transitionDuration={800}
        rimGlint={false}
        className="h-full w-full"
      >
        <GlassCard
          glowEffect={activeHover}
          className={cn(
            "p-5 md:p-6 h-full w-full rounded-2xl border border-white/[0.08] hover:border-amber-400/40 bg-zinc-950/70 hover:bg-zinc-900/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)] transition-all duration-300 relative overflow-hidden",
            className
          )}
        >
          <div className="flex h-full w-full flex-col justify-between relative z-20">{children}</div>
        </GlassCard>
      </GlareHover>
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
