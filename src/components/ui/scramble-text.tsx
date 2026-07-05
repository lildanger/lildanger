import { useState, useEffect, useRef } from "react";

const GLITCH_CHARS = "010101/*#@$[]{}-_+=<>!?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ScrambleTextProps {
  words: string[];
}

export const ScrambleText = ({ words }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(words[0]);
  const indexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const cycleWords = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      scramble(words[indexRef.current]);
    }, 4200); // 每 4.2 秒切换一次，给阅读和解密留下足够时间

    return () => {
      clearInterval(cycleWords);
      if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
    };
  }, [words]);

  const scramble = (targetWord: string) => {
    let frame = 0;
    const maxFrames = 35; // 动画总共持续 35 帧 (约 500-600ms)
    
    const tick = () => {
      if (frame >= maxFrames) {
        setDisplayText(targetWord);
        return;
      }

      const progress = frame / maxFrames;
      // 随着进度推移，逐渐锁定/解密左侧更多的真实字符
      const revealCount = Math.floor(targetWord.length * progress);

      const scrambled = targetWord
        .split("")
        .map((char, i) => {
          if (i < revealCount) {
            return targetWord[i]; // 已解码的真实字符
          }
          // 在 10% 概率下偶尔闪烁真实字符，增加不规则数字故障的真实感
          return Math.random() < 0.1 ? char : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      setDisplayText(scrambled);
      frame++;
      intervalRef.current = requestAnimationFrame(tick);
    };

    if (intervalRef.current) cancelAnimationFrame(intervalRef.current);
    intervalRef.current = requestAnimationFrame(tick);
  };

  return (
    <span className="font-semibold text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.35)] text-center w-full block">
      {displayText}
    </span>
  );
};
