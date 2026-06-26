import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero.png";

export const GlassAvatar = ({
  className,
  size = "w-28 h-28",
}: {
  className?: string;
  size?: string;
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("relative flex items-center justify-center mb-6", className)}
    >
      {/* 1. 浮动与物理回弹容器 */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="relative group cursor-pointer"
      >
        {/* 2. 背景金色霓虹渐变发光环 (旋转 + 呼吸微缩放) */}
        <div
          className={cn(
            "absolute -inset-2.5 rounded-full blur-xl opacity-60 group-hover:opacity-85 transition-opacity duration-500",
            "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-300",
            "animate-rotate-gradient pointer-events-none"
          )}
        />
        
        {/* 3. 液态流态形状裁剪层 (Liquid Morph + Glass border) */}
        <div
          className={cn(
            "relative overflow-hidden border-2 border-amber-500/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
            "backdrop-blur-md bg-neutral-950/40 select-none",
            "animate-liquid-morph transition-colors duration-500 group-hover:border-amber-400/70",
            size
          )}
        >
          {/* 4. 头像图片与反光层 */}
          {!imgFailed ? (
            <img
              src={heroImg}
              alt="党俊源"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover select-none pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-amber-950/60 to-yellow-950/60 text-amber-200 font-bold text-3xl font-mono">
              党
            </div>
          )}

          {/* 5. 玻璃切面高光扫过效果 (Sheen) */}
          <div
            className={cn(
              "absolute inset-0 w-[200%] h-full pointer-events-none z-10",
              "bg-gradient-to-r from-transparent via-amber-400/15 to-transparent",
              "animate-glass-sheen"
            )}
          />

          {/* 6. 悬停暗色微渐变层 */}
          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-500 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};
