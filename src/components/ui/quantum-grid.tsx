import { motion } from "framer-motion";

export const QuantumGrid = () => {
  const gridSize = 48; // 网格线间距

  // 100% 声明式定义微粒属性，让 Framer Motion 托管其 GPU 硬件加速动画
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    initialX: `${Math.random() * 100}%`,
    initialY: `${Math.random() * 100}%`,
    // 生成闭环或镜像的不规则多维平滑移动路径
    animateX: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, 0],
    animateY: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, 0],
    duration: Math.random() * 20 + 25, // 25s 到 45s 的缓慢流动
    size: Math.random() * 2 + 0.8, // 极细悬浮量子微粒
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 声明式 SVG 光栅网格 —— 纯 React/SVG 结构 */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.012]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="quantum-pattern" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
            <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" stroke="#f59e0b" strokeWidth="1" />
          </pattern>
        </defs>
        {/* 利用 Framer Motion 声明式控制网格线的整体微弱呼吸起伏 */}
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#quantum-pattern)"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* 声明式 React 粒子群 —— 由 Framer Motion 开启 translate3d 硬件加速 */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-400/40 shadow-[0_0_6px_#f59e0b]"
          style={{
            width: p.size,
            height: p.size,
            left: p.initialX,
            top: p.initialY,
          }}
          animate={{
            x: p.animateX,
            y: p.animateY,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "mirror", // 镜像往返，确保边缘过渡自然
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
