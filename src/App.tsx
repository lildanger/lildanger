import { motion } from "framer-motion";
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
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";

// 自定义 GitHub 图标 (因为 lucide-react 移除了品牌图标)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    className={className}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
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

export default function App() {
  // 项目与网站数据
  const projects = [
    {
      title: "押韵工具 (fuckrapper.online)",
      description: "专为说唱歌手、填词人及文学创作人设计的在线押韵词汇查询工具。支持单押、双押及多种高级音调搜索，完美助力歌词灵感创作。",
      link: "https://fuckrapper.online/",
      icon: <Disc className="h-8 w-8 text-amber-400" />,
      tags: ["Rapping", "Rhyme Tool", "Web App", "Creative Writing"],
    },
    {
      title: "在线起卦",
      description: "传统《易经》与现代化交互的完美结合。提供数字、铜钱、时间等便捷起卦与排盘工具，界面简洁美观，便于学习与排盘交流。",
      link: "https://qigua.fuckrapper.online/",
      icon: <BaguaIcon className="h-8 w-8 text-purple-400" />,
      tags: ["I Ching", "Divination", "Web App", "Zhouyi"],
    },
    {
      title: "边境开拓者 (Border Pioneer)",
      description: "在 Steam 发售的独立经营开拓游戏。我负责了游戏内完整的音乐创作与音效制作，以及QA和跨平台移植。",
      link: "https://store.steampowered.com/app/2346410/Border_Pioneer/",
      icon: <Gamepad2 className="h-8 w-8 text-emerald-400" />,
      tags: ["Steam", "Game OST", "Sound Effects", "Game Audio"],
    },
    {
      title: "网易云音乐人",
      description: "我的音乐创作基地，入驻并积累了 17,485+ 粉丝。主要发布 Hip-hop、EDM 等各类拥有强劲鼓点 (Drum Beats) 的电子风格乐曲，拥有 10+ 年的乐曲制作经验。",
      link: "https://music.163.com/#/artist?id=1079143",
      icon: <Music className="h-8 w-8 text-rose-400" />,
      tags: ["17485+ Fans", "Beatmaking", "Hip-hop", "EDM", "10+ Years"],
    },
    {
      title: "Bilibili频道",
      description: "在这里分享我的游戏音乐和音效制作经验、编曲幕后，以及音频算法、硬件电路和编程相关的一手技术讲解日常。",
      link: "https://space.bilibili.com/2727",
      icon: <Tv className="h-8 w-8 text-cyan-400" />,
      tags: ["Vlog", "Tutorials", "Community", "Audio Tech"],
    },
  ];

  // 音频技术 & 专业领域数据
  const techCards = [
    {
      title: "数字信号处理 (DSP) 与算法",
      description: "深入研究音频 DSP 算法、滤波器设计、音频插件开发及数字音频特效算法，致力于将数学与物理模型转化为声音艺术。",
      link: "#tech",
      icon: <Cpu className="h-6 w-6 text-purple-400" />,
      tags: ["DSP", "C++", "Audio Plugins", "Algorithms"],
    },
    {
      title: "混音 & 母带工程 (Mixing & Mastering)",
      description: "拥有多年的声音塑造与声学工程经验。从多轨混音的精细均衡、压缩处理，到母带链条上的响度优化与频响校正，提供专业级的声音输出。",
      link: "#tech",
      icon: <Sliders className="h-6 w-6 text-cyan-400" />,
      tags: ["EQ", "Compression", "Loudness", "Mastering"],
    },
    {
      title: "合成器与模拟电路 (Synths & Analog Circuits)",
      description: "不仅是合成器的使用者，更是其背后电子学原理的探索者。研究减法合成、FM合成等原理，熟悉模拟电路板设计与硬件信号链仿真。",
      link: "#tech",
      icon: <Radio className="h-6 w-6 text-amber-400" />,
      tags: ["Analog Circuits", "Modular Synths", "EuroRack"],
    },
    {
      title: "声学与数字工作站 (Acoustics & DAWs)",
      description: "熟练操作各类数字音频工作站 (DAW)，对录音室声学建声、声场测算、监听校准以及物理声学反射有深厚的理论基础与实践能力。",
      link: "#tech",
      icon: <Layers className="h-6 w-6 text-emerald-400" />,
      tags: ["Acoustics", "Reaper", "Ableton Live", "Cubase"],
    },
    {
      title: "全栈式编程实力 (Fullstack Coding)",
      description: "自幼开始编写代码，具备 10 年以上的软件开发和架构经验。能将高性能编程技术与音频物理学无缝融合，创造定制化的音频工具与软件。",
      link: "#tech",
      icon: <GithubIcon className="h-6 w-6 text-blue-400" />,
      tags: ["C++", "Rust", "Web / Fullstack", "React"],
    },
    {
      title: "编曲与声音设计 (Arranging & Sound Design)",
      description: "结合游戏音乐音效与音乐制作经验，为游戏、影像等提供沉浸式声景设计和动态音乐伴奏，深谙声音在叙事中的情感表达。",
      link: "#tech",
      icon: <Disc className="h-6 w-6 text-rose-400" />,
      tags: ["MIDI", "Soundscapes", "OST", "Arrangement"],
    },
  ];

  // Dock 栏链接数据
  const dockItems = [
    {
      title: "主页",
      icon: <Home className="h-full w-full text-neutral-300" />,
      href: "#home",
    },
    {
      title: "作品/网站",
      icon: <Gamepad2 className="h-full w-full text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "技术领域",
      icon: <Sliders className="h-full w-full text-neutral-300" />,
      href: "#tech",
    },
    {
      title: "GitHub",
      icon: <GithubIcon className="h-full w-full text-neutral-300" />,
      href: "https://github.com/lildanger",
    },
    {
      title: "押韵工具",
      icon: <Disc className="h-full w-full text-amber-400" />,
      href: "https://fuckrapper.online/",
    },
    {
      title: "周易起卦",
      icon: <BaguaIcon className="h-full w-full text-purple-400" />,
      href: "https://qigua.fuckrapper.online/",
    },
    {
      title: "网易云音乐",
      icon: <Music className="h-full w-full text-rose-400" />,
      href: "https://music.163.com/#/artist?id=1079143",
    },
    {
      title: "Bilibili",
      icon: <Tv className="h-full w-full text-cyan-400" />,
      href: "https://space.bilibili.com/2727",
    },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-950 font-sans antialiased text-neutral-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 背景网格纹理 */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

      {/* Hero Section - 极光背景包裹 */}
      <section id="home" className="relative h-screen w-full">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center px-4 max-w-4xl"
          >
            {/* 炫酷的徽章 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-sm text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Portfolio Homepage
            </motion.div>

            {/* 主标题 */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 select-none">
              蛋卷
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-mono text-neutral-400 mt-2 tracking-widest">
              lildanger
            </h2>

            {/* 描述信息 */}
            <p className="mt-8 text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
              <span className="text-cyan-400 font-medium">Coding since childhood.</span> 10+ years music producing.
            </p>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
              热爱强劲的鼓点与节奏，专注于 Hip-hop、EDM 等电子乐制作；
              同时进行游戏音乐和音效制作，热衷于将高性能代码、DSP 算法与声学电路仿真融为一体。
            </p>

            {/* 技能标签速览 */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-md font-mono text-xs">
              <span className="px-3 py-1 rounded bg-neutral-900/60 border border-neutral-800 text-neutral-300">游戏音乐音效</span>
              <span className="px-3 py-1 rounded bg-neutral-900/60 border border-neutral-800 text-neutral-300">编曲制作</span>
              <span className="px-3 py-1 rounded bg-neutral-900/60 border border-neutral-800 text-neutral-300">混音/母带</span>
              <span className="px-3 py-1 rounded bg-neutral-900/60 border border-neutral-800 text-neutral-300">音频 DSP</span>
              <span className="px-3 py-1 rounded bg-neutral-900/60 border border-neutral-800 text-neutral-300">模拟电路</span>
            </div>

            {/* 下滑提示 */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 font-mono text-[10px] uppercase tracking-widest cursor-pointer select-none">
              <span>Scroll to explore</span>
              <div className="w-1 h-8 rounded bg-neutral-800 overflow-hidden relative">
                <motion.div
                  animate={{
                    y: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="w-full h-1/2 bg-cyan-500 absolute top-0"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest">
            <Gamepad2 className="h-4 w-4" />
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
      </section>

      {/* Tech & Skills Section */}
      <section id="tech" className="py-24 px-4 max-w-6xl mx-auto relative z-10 border-t border-neutral-900/80">
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-purple-400 uppercase tracking-widest">
            <Sliders className="h-4 w-4" />
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 max-w-4xl mx-auto text-center relative z-10 border-t border-neutral-900/80">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <Mail className="h-3 w-3" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            欢迎技术交流与业务合作
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl leading-relaxed mt-2">
            如果您在混音、母带、编曲、声学、DAW 使用，或者在音频算法、模拟电路仿真等方向有探讨意向，或者寻求游戏音乐音效外包合作，欢迎随时通过以下方式与我取得联系。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 font-mono text-sm">
          <a
            href="mailto:danger0498009@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 text-neutral-200 transition duration-200 shadow-lg"
          >
            <Mail className="h-4 w-4 text-cyan-400" />
            发送电子邮件 (Mail)
          </a>
          <a
            href="https://github.com/lildanger"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 text-neutral-200 transition duration-200 shadow-lg"
          >
            <GithubIcon className="h-4 w-4 text-purple-400" />
            关注 GitHub 账号
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-xs text-neutral-600 font-mono border-t border-neutral-950 pb-28">
        <p>© {new Date().getFullYear()} 蛋卷 (lildanger). Built with Vite, React & Framer Motion.</p>
        <p className="mt-1 text-[10px] text-neutral-700">Code with beat, drum, and science.</p>
      </footer>

      {/* Bottom Floating Navigation Dock */}
      <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] md:bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full md:w-auto flex justify-center">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}
