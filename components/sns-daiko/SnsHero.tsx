"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function SnsHero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0a0906] to-[#080808]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric art — right side */}
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

          {/* SNS icons representation */}
          <rect x="350" y="280" width="140" height="120" rx="8" stroke="rgba(196,163,90,0.12)" strokeWidth="0.75" fill="none" />
          <rect x="360" y="290" width="120" height="100" rx="6" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" fill="rgba(196,163,90,0.02)" />

          {/* Lines representing social metrics */}
          <line x1="370" y1="310" x2="460" y2="310" stroke="rgba(196,163,90,0.15)" strokeWidth="1" />
          <line x1="370" y1="325" x2="450" y2="325" stroke="rgba(196,163,90,0.1)" strokeWidth="1" />
          <line x1="370" y1="340" x2="455" y2="340" stroke="rgba(196,163,90,0.12)" strokeWidth="1" />
          <line x1="370" y1="355" x2="445" y2="355" stroke="rgba(196,163,90,0.08)" strokeWidth="1" />

          {/* Activity indicators */}
          <circle cx="380" cy="375" r="3" fill="rgba(196,163,90,0.3)" />
          <circle cx="410" cy="385" r="2.5" fill="rgba(196,163,90,0.2)" />
          <circle cx="440" cy="380" r="2" fill="rgba(196,163,90,0.15)" />

          {/* Diagonal lines */}
          <line x1="100" y1="0" x2="600" y2="900" stroke="rgba(196,163,90,0.04)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="600" y2="600" stroke="rgba(196,163,90,0.04)" strokeWidth="0.5" />

          {/* Horizontal lines */}
          <line x1="0" y1="300" x2="600" y2="300" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1="0" y1="450" x2="600" y2="450" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

          {/* Corner accents */}
          <path d="M 520 170 L 560 170 L 560 210" stroke="rgba(196,163,90,0.25)" strokeWidth="0.75" fill="none" />
          <path d="M 280 710 L 240 710 L 240 670" stroke="rgba(196,163,90,0.2)" strokeWidth="0.75" fill="none" />

          {/* Center gold dot */}
          <circle cx="420" cy="450" r="3" fill="rgba(196,163,90,0.5)" />
          <circle cx="420" cy="450" r="6" stroke="rgba(196,163,90,0.2)" strokeWidth="0.5" fill="none" />
          <circle cx="420" cy="450" r="12" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" fill="none" />

          {/* Floating dots */}
          <circle cx="280" cy="320" r="2" fill="rgba(196,163,90,0.2)" />
          <circle cx="560" cy="580" r="1.5" fill="rgba(196,163,90,0.15)" />
          <circle cx="550" cy="300" r="2.5" fill="rgba(196,163,90,0.12)" />

          {/* Radial glow */}
          <defs>
            <radialGradient id="snsGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(196,163,90,0.04)" />
              <stop offset="100%" stopColor="rgba(196,163,90,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="390" rx="160" ry="200" fill="url(#snsGlow)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
            SNS運用代行
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8 text-balance"
        >
          SNS運用代行で、
          <br />
          企業のSNS活動を
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">完全サポート</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
        >
          投稿代行、アカウント設計、キャンペーン企画から広告運用まで。
          <br className="hidden sm:block" />
          ノウハウ不足、リソース不足、自社運用失敗の企業の課題を解決します。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-[#C4A35A] text-black font-semibold text-base tracking-[0.08em] hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.2)] hover:shadow-[rgba(196,163,90,0.3)]"
          >
            無料相談に申し込む
          </button>
          <button
            onClick={() => document.querySelector("#service")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-white/20 text-white font-semibold text-base tracking-[0.08em] hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            サービス内容を見る
          </button>
        </motion.div>
      </div>
    </section>
  );
}
