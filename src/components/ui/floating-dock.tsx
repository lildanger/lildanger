import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FloatingDockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-brushed-black-gold border border-amber-500/25 backdrop-blur-lg px-4 pb-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: FloatingDockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 800,
    damping: 40,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 800,
    damping: 40,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 800,
    damping: 40,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 800,
    damping: 40,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a 
      href={href} 
      target={href.startsWith("http") ? "_blank" : undefined} 
      rel="noopener noreferrer"
      aria-label={title}
      className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 transition-shadow duration-150"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-full bg-brushed-black-gold hover:bg-brushed-gold border border-amber-500/20 hover:border-amber-400/50 shadow-[0_4px_12px_rgba(0,0,0,0.4)] backdrop-blur-md cursor-pointer transition-all duration-300 group/dock-item"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -2, x: "-50%" }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 px-2 py-0.5 rounded-lg bg-brushed-black-gold border border-amber-500/25 text-amber-200 text-xs whitespace-pre shadow-lg z-50 pointer-events-none"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-amber-300 group-hover/dock-item:text-neutral-950 transition-colors duration-300"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav-menu"
            initial={{ opacity: 0, scale: 0.98, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -4, transition: { duration: 0.05 } }}
            transition={{ duration: 0.05, ease: "linear" }}
            className="absolute top-14 left-0 flex flex-col gap-3 items-start z-50"
          >
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={item.title}
                className="flex items-center gap-3 px-3 py-2 rounded-xl bg-brushed-black-gold border border-amber-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 transition-shadow duration-75 z-50 relative group/mobile-item"
              >
                <div className="h-10 w-10 rounded-full bg-brushed-black-gold group-hover/mobile-item:bg-brushed-gold border border-amber-500/20 group-hover/mobile-item:border-amber-400/40 group-hover/mobile-item:text-neutral-950 flex items-center justify-center text-amber-300 transition-all duration-150" aria-hidden="true">
                  {item.icon}
                </div>
                <span className="text-xs font-medium pr-2">{item.title}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
        className="h-12 w-12 rounded-full bg-brushed-black-gold border border-amber-500/20 text-amber-200 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:bg-brushed-gold hover:text-neutral-950 flex items-center justify-center transition-all duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 z-50 relative"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </div>
  );
};
