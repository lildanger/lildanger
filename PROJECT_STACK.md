# 项目技术栈与结构指南 (Project Stack & Structure Guide)

本项目是独立音乐制作人及全栈软件开发者 **党俊源 (蛋卷)** 的个人品牌作品集网站。全站基于最新的 **Ein UI 官方高保真液态玻璃质感 (Obsidian Glassmorphism)** 规范与 **Tailwind CSS v4** 进行了全方位的视觉重塑，深度融合了硬核数字音频 (DSP) 的极客感与高级物理动效。

---

## 🛠️ 核心技术栈 (Tech Stack)

项目采用了现代前端工具链进行构建，核心依赖和框架版本如下：

### 1. 前端框架与语言
*   **React 19.2.7**：采用最新版本的 React 核心库，全面支持现代并发特性、React Elements 优化与最新的渲染生命周期。
*   **TypeScript 6.0.2**：全站代码采用严格的 TypeScript 强类型规范编写，保证高阶组件与变体属性的类型安全。

### 2. 样式与视觉系统 (Tailwind v4 & PostCSS)
*   **Tailwind CSS 4.3.1**：采用全新的 Tailwind v4 编译器，基于 `@tailwindcss/postcss` (4.3.1) 进行高效率的 CSS 编译，弃用了冗余的 v3 配置，拥有更快的构建速度。
*   **Class Variance Authority (CVA) 0.7.1**：用于创建类型安全的 UI 组件变体 (Variants)，实现了液态玻璃按钮、徽章等多态样式的声明式管理。
*   **Tailwind Merge (3.6.0) & Clsx (2.1.1)**：提供 `cn(...)` 工具函数，用于平滑合并动态 CSS 类名并自动解决 Tailwind 样式冲突。

### 3. 动效与交互 (Framer Motion)
*   **Framer Motion 12.41.0**：驱动首屏文字无缝淡入淡出、卡片扫光动画、移动端菜单展开折叠以及底部 Dock 栏弹性缓动的核心物理动画库。
*   **Lucide React 1.21.0**：精美、统一的极简矢量图标库。

### 4. 质量保证与构建部署
*   **Vite 8.1.0**：底层采用最新的 Vite 8 作为开发服务器与构建工具，具有极速的热更新 (HMR) 响应。
*   **Oxlint 1.69.0**：采用 Rust 编写的超快速 Lint 工具，代替传统的 ESLint，提供瞬间的代码规范校验。
*   **gh-pages 6.3.0**：一键将生产环境静态包发布至 GitHub Pages。

---

## 📂 项目结构目录树 (Project Structure)

```text
lildanger/
├── .agents/               # 智能代理人工作空间与规则配置
├── .github/               # GitHub Actions CI/CD 工作流配置
├── dist/                  # 生产环境打包输出目录 (Build Artifacts)
├── node_modules/          # 项目依赖包
├── public/                # 静态公共资源 (如 favicon、未处理的媒体等)
└── src/                   # 源代码目录
    ├── assets/            # 项目静态媒体资源 (如 Hero 区域大图)
    ├── lib/               # 通用基础工具库
    │   └── utils.ts       # clsx & tailwind-merge 的 cn 样式合并辅助函数
    ├── components/        # 业务组件目录
    │   └── ui/            # Ein UI 官方高保真液态玻璃原子组件
    │       ├── aurora-background.tsx  # 彩色高饱和极光流体背景
    │       ├── card-hover-effect.tsx  # 卡片悬浮扫光与磁吸列表动效
    │       ├── floating-dock.tsx      # 仿 Mac 物理弹性无延迟 Dock 栏
    │       ├── glass-avatar.tsx       # 磨砂液态玻璃微章头像及悬浮动画
    │       ├── glass-badge.tsx        # 官方磨砂玻璃微章组件 (支持多色 variant)
    │       ├── glass-button.tsx       # 官方玻璃按钮 (带有冷白呼吸发光变体)
    │       ├── glass-card.tsx         # 曜石级偏光白反光磨砂卡片组件
    │       └── glass-select.tsx       # 官方液态玻璃下拉选择菜单 (基于 Radix)
    ├── App.tsx            # 全站核心布局与页面组装单页入口
    ├── index.css          # 全局 CSS 样式文件 (包含 Tailwind v4 指令及自定义动画)
    └── main.tsx           # React 应用的主渲染入口
├── package.json           # 项目配置、运行脚本与依赖包管理
├── tsconfig.json          # TypeScript 全局编译器配置
├── vite.config.ts         # Vite 项目构建配置文件
└── PROJECT_STACK.md       # 本技术栈与结构指南文件 (本项目说明)
```

---

## 💎 核心 UI 组件设计与机制说明

### 1. 曜石液态玻璃卡片 ([glass-card.tsx](file:///d:/Documents/GitHub/lildanger/src/components/ui/glass-card.tsx))
*   **核心特性**：基于 Ein UI 官方的 Obsidian 风格。
*   **渲染机制**：采用 `backdrop-blur-md` 搭配微弱的 `bg-white/[0.04]`。在卡片边框上，使用极为纤细的 `border-white/10`，并在 Hover 时引入了 `glass-sheen` 对角线高速扫光（利用线性渐变在 X 轴的 translation 过渡），完美还原物理玻璃对光线的折射和扫射质感。

### 2. 物理弹性 Dock 栏 ([floating-dock.tsx](file:///d:/Documents/GitHub/lildanger/src/components/ui/floating-dock.tsx))
*   **核心特性**：仿 Mac OS 原生 Dock 栏。
*   **物理机制**：使用 Framer Motion 的 `useMotionValue` 追踪鼠标水平 X 坐标，配合 `useTransform` 计算出图标与鼠标在 150px 半径内的相对物理距离，并最终通过 `useSpring` 弹性曲线（`stiffness: 150`, `damping: 12`）对图标的 `width` 和 `height` 进行实时无缝缩放，响应极为灵敏。
*   **优化避免冲突**：禁用了容器的 CSS `transition-all`，仅对非几何属性使用 `transition-colors`，防止了 CSS 过渡插值与 Spring JS 帧更新冲突导致的缩放粘连。

### 3. 高饱和彩色极光流体 ([aurora-background.tsx](file:///d:/Documents/GitHub/lildanger/src/components/ui/aurora-background.tsx))
*   **核心特性**：炫酷动感流光背景。
*   **渲染机制**：自定义 CSS `@keyframes aurora` 驱动。多重高对比度渐变色带（亮蓝、亮紫、亮青、亮玫瑰红）在 `-inset-[10px]` 的虚拟画布上以 `mix-blend-difference` 进行慢速多维滚动。同时增加了 `opacity-60` 及 `contrast-[1.25]`，极大地提升了背景极光的可见度，使其能穿透磨砂卡片折射出迷人彩色。

### 4. 绝对居中的无框轮播器 ([App.tsx](file:///d:/Documents/GitHub/lildanger/src/App.tsx))
*   **核心特性**：角色词汇纯文字定时轮播。
*   **优化逻辑**：完全移除了旧版 Badge 的任何边框与背景。在最顶层 Hero `motion.div` 启用 `w-full max-w-4xl` 控制，配合轮播容器 `motion.div` 的 `w-full text-center`，在各种宽度屏幕上实现整行文字的 **100% 绝对物理居中**。采用 `AnimatePresence (mode="wait")` 的先淡出、后挂载并淡入逻辑，完美消除 Layout Shift，实现顺滑流畅的上下滑动过渡。

---

## 🚀 常用开发与构建命令

项目可以使用传统的 `npm` 脚本进行操作：

```bash
# 1. 启动本地 HMR 热重载开发预览服务器
npm run dev

# 2. 对 TypeScript 进行类型检查，并使用 Vite 进行生产包打包 (输出至 dist/)
npm run build

# 3. 运行超快速 Oxlint 对全站代码进行规范校验
npm run lint

# 4. 在本地启动打包后的静态生产包进行预览
npm run preview

# 5. 构建并自动部署当前版本至 GitHub Pages 分支 (gh-pages)
npm run deploy
```
