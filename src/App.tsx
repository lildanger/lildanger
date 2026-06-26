import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Music,
  Mail,
  Home,
  Tv,
  Layers,
  Sliders,
  Cpu,
  Disc,
  Radio,
} from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HoverEffect, Card } from "@/components/ui/card-hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import { GlassAvatar } from "@/components/ui/glass-avatar";
import { GlassBadge } from "@/components/ui/glass-badge";
import { GlassButton } from "@/components/ui/glass-button";
import wechatImg from "@/assets/wechat.png";

// 自定义 GitHub 图标 (因为 lucide-react 移除了品牌图标)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

// 自定义微信图标
const WechatIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z" />
  </svg>
);

// 自定义八卦/太极图标
const BaguaIcon = ({ className }: { className?: string }) => {
  const line1 = 14;
  const line2 = 19;
  const line3 = 24;

  const Solid = ({ y }: { y: number }) => (
    <line x1="41" y1={y} x2="59" y2={y} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  );

  const Broken = ({ y }: { y: number }) => (
    <g>
      <line x1="41" y1={y} x2="48.5" y2={y} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="51.5" y1={y} x2="59" y2={y} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  );

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* 乾 ☰ (0°) */}
      <g transform="rotate(0, 50, 50)">
        <Solid y={line1} />
        <Solid y={line2} />
        <Solid y={line3} />
      </g>
      {/* 兑 ☱ (45°) */}
      <g transform="rotate(45, 50, 50)">
        <Broken y={line1} />
        <Solid y={line2} />
        <Solid y={line3} />
      </g>
      {/* 离 ☲ (90°) */}
      <g transform="rotate(90, 50, 50)">
        <Solid y={line1} />
        <Broken y={line2} />
        <Solid y={line3} />
      </g>
      {/* 震 ☳ (135°) */}
      <g transform="rotate(135, 50, 50)">
        <Broken y={line1} />
        <Broken y={line2} />
        <Solid y={line3} />
      </g>
      {/* 坤 ☷ (180°) */}
      <g transform="rotate(180, 50, 50)">
        <Broken y={line1} />
        <Broken y={line2} />
        <Broken y={line3} />
      </g>
      {/* 艮 ☶ (225°) */}
      <g transform="rotate(225, 50, 50)">
        <Solid y={line1} />
        <Broken y={line2} />
        <Broken y={line3} />
      </g>
      {/* 坎 ☵ (270°) */}
      <g transform="rotate(270, 50, 50)">
        <Broken y={line1} />
        <Solid y={line2} />
        <Broken y={line3} />
      </g>
      {/* 巽 ☴ (315°) */}
      <g transform="rotate(315, 50, 50)">
        <Solid y={line1} />
        <Solid y={line2} />
        <Broken y={line3} />
      </g>

      {/* 太极中心图 */}
      <circle cx="50" cy="50" r="18" fill="white" />
      <path
        d="M 50 32 A 18 18 0 0 0 50 68 A 9 9 0 0 0 50 50 A 9 9 0 0 1 50 32 Z"
        fill="currentColor"
      />
      <circle cx="50" cy="41" r="2.2" fill="white" />
      <circle cx="50" cy="59" r="2.2" fill="currentColor" />
      <circle cx="50" cy="50" r="18.2" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
};

const WORDS = ["我是全栈软件开发者", "我是独立音乐制作人", "我是音频 DSP 探索者", "我是模拟电路极客"];

export default function App() {
  // 项目与网站数据
  const projects = [
    {
      title: "押韵工具 (fuckrapper.online)",
      description: "专为说唱歌手与词创作者打造的在线查询利器。自研的高级拼音与音调检索算法，完美助力灵感创作。支持单押、双押及多音节极速查询。",
      link: "https://fuckrapper.online/",
      icon: <Disc className="h-8 w-8 text-amber-400" />,
      tags: ["Pinyin DSP", "Rhyme Search", "Web App", "Creative Writing"],
    },
    {
      title: "在线起卦",
      description: "用 React + TypeScript 将传统《易经》与现代网页交互深度融合。提供数字、铜钱与时间起卦排盘，简洁优雅的数字玄学交互。",
      link: "https://qigua.fuckrapper.online/",
      icon: <BaguaIcon className="h-8 w-8 text-amber-400" />,
      tags: ["React / TS", "Zhouyi Divination", "Web App", "I Ching"],
    },
    {
      title: "边境开拓者 (Border Pioneer)",
      description: "在 Steam 发售的独立经营游戏，荣登 2025 年国产生态独立游戏销量前十。我负责了游戏内完整的音乐制作、音效制作与声音设计，编写了部分音频触发 logic 与彩蛋代码，并独立完成了 Linux 与 macOS 的平台适配移植与 QA 。",
      link: "https://store.steampowered.com/app/2346410/Border_Pioneer/",
      icon: <Gamepad2 className="h-8 w-8 text-amber-400" />,
      tags: ["2025 销量前十", "音乐与音效制作", "Game Audio", "Linux & Mac QA"],
    },
    {
      title: "网易云音乐人 (蛋卷)",
      description: "独立音乐人，积累 18,000+ 粉丝，参与制作歌曲全网播放量达 2 亿+次。为圣代（《Welcome 2 my HOOD》）、JR FOG（《肥宅水》）、木秦等说唱歌手与艺人提供高水准编曲与混音。",
      link: "https://music.163.com/#/artist?id=1079143",
      icon: <Music className="h-8 w-8 text-amber-400" />,
      tags: ["2亿+播放", "1.8万+粉丝", "编曲 / 混音", "母带", "声学处理", "现场PA", "调音"],
    },
    {
      title: "Bilibili频道",
      description: "分享游戏音频设计、编曲幕后、DSP 算法以及硬件模拟合成器电路仿真。用硬核技术与律动连接极客与乐迷。",
      link: "https://space.bilibili.com/2727",
      icon: <Tv className="h-8 w-8 text-amber-400" />,
      tags: ["Vlog", "Tutorials", "Audio Tech", "Hardware Synths"],
    },
  ];

  // 音频技术 & 专业领域数据
  const techCards = [
    {
      title: "数字信号处理 (DSP) 与算法",
      description: "深入音频 DSP 算法、滤波器设计，有 C++/JavaScript 编写 VST/AU 音频插件的开发经验，熟练使用 Pure Data 与 Max 4 Live 进行实时音频和信号数据流的处理。",
      link: "#tech",
      icon: <Cpu className="h-6 w-6 text-amber-400" />,
      tags: ["DSP", "C++ / JS", "VST Plugins", "Pure Data / Max"],
    },
    {
      title: "混音 & 母带工程 (Mixing & Mastering)",
      description: "10 年独立音乐制作经验，精通 Pro Tools、Ableton Live、FL Studio 等常见宿主软件。提供出版级分轨混音，曾获《中国说唱》第一季音乐制作人组季军。",
      link: "#tech",
      icon: <Sliders className="h-6 w-6 text-amber-400" />,
      tags: ["Pro Tools", "EQ & Compression", "Mixing & Mastering", "China Rap 3rd"],
    },
    {
      title: "合成器与模拟电路 (Synths & Analog Circuits)",
      description: "熟悉减法合成、FM合成等原理，精通模拟电路板设计与信号链仿真，具备独立设计与制作硬件模拟合成器（EuroRack）的经验。",
      link: "#tech",
      icon: <Radio className="h-6 w-6 text-amber-400" />,
      tags: ["Analog Circuits", "Modular Synths", "EuroRack Hardware", "PCB Design"],
    },
    {
      title: "建筑声学与录音棚设计",
      description: "掌握扎实的建筑声学与空间声场反射理论。具备录音棚声学装修与建声设计经验，曾精准定位并解决录音棚中 125Hz 处鼻音过重的驻波难题。",
      link: "#tech",
      icon: <Layers className="h-6 w-6 text-amber-400" />,
      tags: ["Acoustics", "Room Modes", "Studio Design", "Acoustic Tuning"],
    },
    {
      title: "全栈式编程实力 (Fullstack Developer)",
      description: "毕业于计算机科学与技术专业，具备 10 年以上软件开发和架构经验。擅长将高性能编程技术（C++、Rust、React）与音频物理特性、DSP 算法无缝融合。",
      link: "#tech",
      icon: <GithubIcon className="h-6 w-6 text-amber-400" />,
      tags: ["Computer Science", "C++ / Rust", "React / Web", "Custom Audio Tools"],
    },
    {
      title: "编曲与声音设计 (Arranging & Sound Design)",
      description: "为独立游戏制作沉浸式声景设计和动态音乐伴奏，并为芒果 TV《说唱听我的》、平安保险、爱国者等提供定制化商业广告配乐的作曲及编曲服务。",
      link: "#tech",
      icon: <Disc className="h-6 w-6 text-amber-400" />,
      tags: ["Commercial OST", "Soundscapes", "Beatmaking", "Dynamic Audio"],
    },
  ];

  // Dock 栏链接数据
  const dockItems = [
    {
      title: "主页",
      icon: <Home className="h-full w-full text-amber-300" />,
      href: "#home",
    },
    {
      title: "作品/网站",
      icon: <Gamepad2 className="h-full w-full text-amber-300" />,
      href: "#projects",
    },
    {
      title: "技术领域",
      icon: <Sliders className="h-full w-full text-amber-300" />,
      href: "#tech",
    },
    {
      title: "GitHub",
      icon: <GithubIcon className="h-full w-full text-amber-300" />,
      href: "https://github.com/lildanger",
    },
    {
      title: "押韵工具",
      icon: <Disc className="h-full w-full text-amber-400" />,
      href: "https://fuckrapper.online/",
    },
    {
      title: "周易起卦",
      icon: <BaguaIcon className="h-full w-full text-amber-400" />,
      href: "https://qigua.fuckrapper.online/",
    },
    {
      title: "网易云音乐",
      icon: <Music className="h-full w-full text-amber-400" />,
      href: "https://music.163.com/#/artist?id=1079143",
    },
    {
      title: "Bilibili",
      icon: <Tv className="h-full w-full text-amber-400" />,
      href: "https://space.bilibili.com/2727",
    },
  ];

  // 业务合作报价单数据
  const pricingCards = [
    {
      title: "音乐编曲与制作",
      price: "¥ 6000",
      unit: "起 / 首",
      note: "商业授权",
      icon: <Music className="h-6 w-6 text-amber-400" />,
      features: [
        "独立游戏主题曲与场景配乐定制",
        "出版级说唱 (Hip-Hop) 伴奏定制",
        "流行与电音等多种风格 Beat 编写",
        "品牌与商业广告定制配乐作曲",
      ],
    },
    {
      title: "分轨混音",
      price: "¥ 100",
      unit: "起 / 轨",
      note: "功能轨整合计费",
      icon: <Sliders className="h-6 w-6 text-amber-400" />,
      features: [
        "按轨道功能属性整合计费 (极致性价比)",
        "同角色多轨人声 (如 Vox 1/2/3) 仅算一轨",
        "人声与伴奏精细对齐、音修 (Melodyne)",
        "模拟染色与动态精细雕琢，免费赠送母带",
      ],
    },
    {
      title: "声音设计与音效",
      price: "¥ 150",
      unit: "起 / 个",
      note: "整案特惠",
      icon: <Radio className="h-6 w-6 text-amber-400" />,
      features: [
        "独立游戏全站音效与环境音定制",
        "交互式音频系统设计 (FMOD / Wwise)",
        "硬核独创合成器与物理拟音拟真",
        "游戏音频资源整包优化与平台适配",
      ],
    },
    {
      title: "全栈开发",
      price: "按需定制",
      note: "提供免费方案评估",
      icon: <Cpu className="h-6 w-6 text-amber-400" />,
      features: [
        "音频 DSP 算法设计与 C++/JS 编写",
        "定制化 VST / VST3 / AU 插件开发",
        "高性能 React / TS 全栈软件外包",
        "合成器模拟电路仿真与 PCB 咨询",
      ],
    },
  ];

  const [currentRole, setCurrentRole] = useState(WORDS[0]);
  const [showWechatModal, setShowWechatModal] = useState(false);

  // 自动轮播当前角色定位
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => {
        const currentIndex = WORDS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % WORDS.length;
        return WORDS[nextIndex];
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black font-sans antialiased text-neutral-200 selection:bg-amber-500/30 selection:text-amber-200">
      {/* 背景网格纹理 */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      {/* Hero Section - 极光背景包裹，移动端采用自适应高度与内边距以保证紧凑 */}
      <section id="home" className="relative w-full">
        <AuroraBackground className="h-auto min-h-screen py-12 md:h-[100vh] md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl"
          >
            {/* 液态玻璃头像 (移动端尺寸微调缩紧) */}
            <GlassAvatar size="w-20 h-20 md:w-28 md:h-28" className="mb-4 md:mb-6" />
            {/* 炫酷的徽章 */}
            <GlassBadge
              variant="primary"
              className="inline-flex items-center gap-2 mb-4 md:mb-6 font-mono text-xs uppercase tracking-widest border-amber-400/20 bg-amber-500/[0.05] backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Half Compiler, Half Drum Machine
            </GlassBadge>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
              党俊源
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-neutral-400 mt-1 md:mt-2 tracking-widest">
              蛋卷
            </h2>

            {/* 独立角色名字纯文字轮播 */}
            <div className="mt-4 md:mt-8 flex items-center justify-center text-lg sm:text-xl text-neutral-300 font-light h-10 select-none overflow-hidden relative w-full text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="font-semibold text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.35)] text-center w-full"
                >
                  {currentRole}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-neutral-400 max-w-2xl font-light leading-relaxed">
              自幼写下第一行代码，与律动共振十余年。
              在数字世界里，我是全栈开发者与音频 DSP 探索者；在声音的世界里，我是全网 2 亿+播放量的独立音乐人、混音师与游戏音频总监。
              致力于将 C++/Rust、电声电路仿真与硬核 Hip-Hop/EDM 融为一体。
            </p>

            {/* 技能标签速览 */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2.5 mt-4 md:mt-8 max-w-xl font-mono">
              <GlassBadge variant="outline" size="sm" className="bg-amber-500/[0.02] border-amber-500/10 text-amber-300/80 hover:bg-amber-500/[0.08] hover:text-amber-200 transition-colors">音频 DSP 算法</GlassBadge>
              <GlassBadge variant="outline" size="sm" className="bg-amber-500/[0.02] border-amber-500/10 text-amber-300/80 hover:bg-amber-500/[0.08] hover:text-amber-200 transition-colors">独立音乐人/混音</GlassBadge>
              <GlassBadge variant="outline" size="sm" className="bg-amber-500/[0.02] border-amber-500/10 text-amber-300/80 hover:bg-amber-500/[0.08] hover:text-amber-200 transition-colors">模拟合成器硬件</GlassBadge>
              <GlassBadge variant="outline" size="sm" className="bg-amber-500/[0.02] border-amber-500/10 text-amber-300/80 hover:bg-amber-500/[0.08] hover:text-amber-200 transition-colors">游戏音乐音效</GlassBadge>
              <GlassBadge variant="outline" size="sm" className="bg-amber-500/[0.02] border-amber-500/10 text-amber-300/80 hover:bg-amber-500/[0.08] hover:text-amber-200 transition-colors">全栈软件工程</GlassBadge>
            </div>

            {/* 下滑提示 (移动端隐藏以防多余留白) */}
            <a
              href="#projects"
              className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-neutral-500 font-mono text-[10px] uppercase tracking-widest cursor-pointer select-none hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded p-1"
              aria-label="向下滚动探索作品与创建项目"
            >
              <span>Scroll to explore</span>
              <div className="w-1 h-8 rounded bg-neutral-800 overflow-hidden relative" aria-hidden="true">
                <motion.div
                  animate={{
                    y: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="w-full h-1/2 bg-amber-500 absolute top-0"
                ></motion.div>
              </div>
            </a>
          </motion.div>
        </AuroraBackground>
      </section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 md:py-24 px-4 max-w-6xl mx-auto relative z-10"
      >
        <div className="flex flex-col items-start gap-2 mb-6 md:mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-500 uppercase tracking-widest">
            <Gamepad2 className="h-4 w-4 text-amber-400" />
            Works & Creations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            核心作品与平台
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg">
            这是我主要的发布平台、独立网站及音乐作品。鼠标悬停在卡片上可查看详细信息，点击即可跳转。
          </p>
        </div>

        <HoverEffect items={projects} />
      </motion.section>

      {/* Tech & Skills Section */}
      <motion.section
        id="tech"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 md:py-24 px-4 max-w-6xl mx-auto relative z-10 border-t border-neutral-900/80"
      >
        <div className="flex flex-col items-start gap-2 mb-6 md:mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-500 uppercase tracking-widest">
            <Sliders className="h-4 w-4 text-amber-400" />
            Audio Tech & Domain Knowledge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            音频技术与专业研究领域
          </h2>
          <p className="text-sm text-neutral-400 max-w-lg">
            自幼编程，拥有 10+ 年制作经验，涵盖软件、算法、硬核声学及硬件仿真等前沿领域。
          </p>
        </div>

        <HoverEffect items={techCards} className="py-2" />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-12 md:py-24 px-4 max-w-4xl mx-auto text-center relative z-10 border-t border-neutral-900/80"
      >
        <div className="flex flex-col items-center gap-4 mb-8">
          <GlassBadge
            variant="primary"
            className="inline-flex items-center gap-1.5 px-3 py-1 border-amber-400/20 bg-amber-500/[0.05] font-mono text-xs text-amber-400 uppercase tracking-widest"
          >
            <Mail className="h-3 w-3 text-amber-400" />
            Get In Touch
          </GlassBadge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            欢迎技术交流与业务合作
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl leading-relaxed mt-2 font-light">
            如果您在混音、母带、编曲、声学、DAW 使用，或者在音频算法、模拟电路仿真等方向有探讨意向，或者寻求游戏音乐音效外包合作，欢迎随时通过以下方式与我取得联系。
          </p>
        </div>

        {/* 业务合作报价单 (高级液态玻璃排版 - 四列自适应) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mt-6 mb-10 text-left relative z-20">
          {pricingCards.map((card) => (
            <Card key={card.title} className="p-4 flex flex-col justify-between border-amber-500/10 hover:border-amber-500/25 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-amber-400 shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-zinc-100 font-bold text-xs sm:text-sm md:text-base tracking-wide">
                    {card.title}
                  </h3>
                </div>
                <div className="mb-3 pt-0.5 flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-amber-400 font-bold font-sans text-xl md:text-2xl tracking-tight">
                    {card.price}
                  </span>
                  {card.unit && (
                    <span className="text-zinc-400 text-[10px] md:text-xs font-light whitespace-nowrap">
                      {card.unit}
                    </span>
                  )}
                  {card.note && (
                    <span className="text-amber-400/80 text-[10px] bg-amber-500/[0.05] border border-amber-500/10 px-1.5 py-0.5 rounded font-mono scale-95 origin-left">
                      {card.note}
                    </span>
                  )}
                </div>
                <ul className="space-y-1.5 text-[11px] md:text-xs text-zinc-400 font-light border-t border-amber-500/10 pt-3">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400/60 shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mt-8 font-mono text-sm w-full max-w-md mx-auto px-2">
          <GlassButton
            variant="brushed-green"
            size="lg"
            glowEffect={false}
            className="flex-1 sm:flex-none w-auto h-10 sm:h-12 px-3 sm:px-6 text-xs sm:text-base"
            onClick={() => setShowWechatModal(true)}
          >
            <WechatIcon className="h-4 w-4 text-neutral-950" />
            WeChat
          </GlassButton>
          <GlassButton
            asChild
            variant="brushed-gold"
            size="lg"
            glowEffect={false}
            className="flex-1 sm:flex-none w-auto h-10 sm:h-12 px-3 sm:px-6 text-xs sm:text-base"
          >
            <a href="mailto:danger0498009@gmail.com" className="flex items-center gap-2 text-neutral-950">
              <Mail className="h-4 w-4 text-neutral-950" aria-hidden="true" />
              E-Mail
            </a>
          </GlassButton>
          <GlassButton
            asChild
            variant="brushed-black-gold"
            size="lg"
            glowEffect={false}
            className="flex-1 sm:flex-none w-auto h-10 sm:h-12 px-3 sm:px-6 text-xs sm:text-base"
          >
            <a
              href="https://github.com/lildanger"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-200"
            >
              <GithubIcon className="h-4 w-4 text-amber-300" />
              GitHub
            </a>
          </GlassButton>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 text-center text-xs text-neutral-600 font-mono border-t border-neutral-950 pb-24 md:pb-28">
        <p>© {new Date().getFullYear()} LILDANGER. Built with Vite, React & Framer Motion.</p>
        <p className="mt-1 text-[10px] text-neutral-700">Code with beat, drum, and science.</p>
      </footer>

      {/* Top Left Floating Navigation Dock */}
      <div className="fixed top-6 left-6 z-50">
        <FloatingDock items={dockItems} />
      </div>

      {/* 微信二维码 Modal 弹窗 */}
      <AnimatePresence>
        {showWechatModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* 半透明背景遮罩 (移除毛玻璃以优化移动端渲染卡顿，并改为 fixed 确保完全覆盖) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWechatModal(false)}
              className="fixed inset-0 bg-black/90 cursor-pointer"
            />

            {/* 弹窗主体 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 w-full max-w-sm overflow-hidden rounded-2xl border border-amber-500/20 bg-brushed-black-gold p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            >
              {/* 金色发光背景光晕 */}
              <div className="absolute -inset-10 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

              {/* 头部信息 */}
              <div className="flex flex-col items-center gap-2 mb-4 relative z-10">
                <div className="h-10 w-10 rounded-xl bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-400">
                  <WechatIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">微信扫码联系我</h3>
                <p className="text-xs text-amber-200/60 font-mono">Scan QR Code to Add WeChat</p>
              </div>

              {/* 二维码图片容器 */}
              <div className="relative z-10 mx-auto aspect-square w-64 overflow-hidden rounded-xl border border-amber-500/10 bg-black/40 p-2 shadow-inner">
                <img
                  src={wechatImg}
                  alt="微信二维码"
                  className="h-full w-full object-contain rounded-lg select-none"
                  draggable={false}
                />
              </div>

              {/* 关闭按钮 */}
              <button
                onClick={() => setShowWechatModal(false)}
                className="mt-6 w-full rounded-xl border border-amber-500/20 bg-amber-500/5 py-2.5 font-mono text-xs font-semibold text-amber-200 transition-all hover:bg-amber-500/15 hover:border-amber-400/40 active:scale-95 cursor-pointer"
              >
                CLOSE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
