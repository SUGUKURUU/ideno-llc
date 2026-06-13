"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0a0906] to-[#080808]" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Abstract geometric art — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden hidden lg:block pointer-events-none">
        <svg
          viewBox="0 0 600 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Outer ring */}
          <circle cx="420" cy="450" r="320" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="240" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="160" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="80" stroke="rgba(196,163,90,0.14)" strokeWidth="0.5" />

          {/* Diagonal lines */}
          <line x1="100" y1="0" x2="600" y2="900" stroke="rgba(196,163,90,0.04)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="600" y2="600" stroke="rgba(196,163,90,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="200" x2="600" y2="800" stroke="rgba(196,163,90,0.04)" strokeWidth="0.5" />

          {/* Horizontal thin lines */}
          <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="450" x2="600" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="600" x2="600" y2="600" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

          {/* Phone frame — center */}
          <rect x="320" y="250" width="160" height="280" rx="20" stroke="rgba(196,163,90,0.18)" strokeWidth="0.75" fill="none" />
          <rect x="330" y="265" width="140" height="250" rx="14" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" fill="rgba(196,163,90,0.02)" />

          {/* Phone content lines */}
          <rect x="348" y="285" width="104" height="8" rx="4" fill="rgba(255,255,255,0.07)" />
          <rect x="348" y="300" width="72" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
          <rect x="348" y="318" width="104" height="56" rx="6" fill="rgba(196,163,90,0.05)" />
          <rect x="348" y="382" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
          <rect x="348" y="394" width="104" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />
          <rect x="348" y="404" width="88" height="5" rx="2.5" fill="rgba(255,255,255,0.04)" />

          {/* Stats row */}
          <rect x="348" y="420" width="30" height="22" rx="4" fill="rgba(196,163,90,0.08)" />
          <rect x="384" y="420" width="30" height="22" rx="4" fill="rgba(255,255,255,0.04)" />
          <rect x="420" y="420" width="30" height="22" rx="4" fill="rgba(255,255,255,0.04)" />

          {/* Gold dot accent */}
          <circle cx="420" cy="450" r="3" fill="rgba(196,163,90,0.5)" />
          <circle cx="420" cy="450" r="6" stroke="rgba(196,163,90,0.2)" strokeWidth="0.5" fill="none" />
          <circle cx="420" cy="450" r="12" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" fill="none" />

          {/* Corner accent */}
          <path d="M 520 170 L 560 170 L 560 210" stroke="rgba(196,163,90,0.25)" strokeWidth="0.75" fill="none" />
          <path d="M 280 710 L 240 710 L 240 670" stroke="rgba(196,163,90,0.2)" strokeWidth="0.75" fill="none" />

          {/* Floating dots */}
          <circle cx="280" cy="320" r="2" fill="rgba(196,163,90,0.2)" />
          <circle cx="560" cy="580" r="1.5" fill="rgba(196,163,90,0.15)" />
          <circle cx="310" cy="620" r="1" fill="rgba(255,255,255,0.15)" />
          <circle cx="550" cy="300" r="2.5" fill="rgba(196,163,90,0.12)" />

          {/* Radial glow behind phone */}
          <defs>
            <radialGradient id="phoneGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(196,163,90,0.04)" />
              <stop offset="100%" stopColor="rgba(196,163,90,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="390" rx="160" ry="200" fill="url(#phoneGlow)" />
        </svg>
      </div>

      {/* Vertical gold line — left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.15)] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-32 pb-24">
        <div className="lg:max-w-[55%]">

          {/* Label */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
              SNS運用代行 / ショート動画制作
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(3rem,8vw,6.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            SNSを
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">
              会社の資産に。
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-white/45 text-base sm:text-lg leading-relaxed max-w-lg mb-14"
          >
            認知拡大、採用強化、ブランド構築まで。
            <br />
            経営者と企業の魅力を、映像で世界へ発信します。
          </motion.p>

          {/* CTA */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          >
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]"
            >
              無料相談する
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => document.querySelector("#service")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-6 py-4 text-white/50 text-sm tracking-wide hover:text-white/80 transition-colors duration-200"
            >
              サービスを見る
              <ArrowRight size={14} className="opacity-50" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-10 sm:gap-14"
          >
            {[
              { value: "100+", label: "支援実績" },
              { value: "3×", label: "平均フォロワー増加" },
              { value: "98%", label: "継続率" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col">
                {i > 0 && (
                  <div className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.08]" />
                )}
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-white/35 text-[11px] tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.2)] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(196,163,90,0.3)]" />
      </motion.div>
    </section>
  );
}
