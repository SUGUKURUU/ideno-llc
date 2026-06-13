"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function WebHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0a0906] to-[#080808]" />

      {/* Geometric art */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block pointer-events-none">
        <svg viewBox="0 0 600 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <rect x="280" y="200" width="220" height="160" rx="4" stroke="rgba(196,163,90,0.12)" strokeWidth="0.5" fill="none" />
          <rect x="295" y="215" width="190" height="130" rx="2" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" fill="rgba(196,163,90,0.015)" />
          <rect x="310" y="230" width="160" height="10" rx="2" fill="rgba(255,255,255,0.05)" />
          <rect x="310" y="248" width="120" height="6" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="310" y="265" width="160" height="50" rx="2" fill="rgba(196,163,90,0.04)" />
          <rect x="310" y="323" width="80" height="6" rx="2" fill="rgba(255,255,255,0.04)" />
          <circle cx="420" cy="450" r="200" stroke="rgba(196,163,90,0.05)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="140" stroke="rgba(196,163,90,0.07)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="80" stroke="rgba(196,163,90,0.09)" strokeWidth="0.5" />
          <line x1="150" y1="0" x2="600" y2="900" stroke="rgba(196,163,90,0.03)" strokeWidth="0.5" />
          <path d="M 520 160 L 560 160 L 560 200" stroke="rgba(196,163,90,0.2)" strokeWidth="0.75" fill="none" />
          <path d="M 290 690 L 250 690 L 250 650" stroke="rgba(196,163,90,0.15)" strokeWidth="0.75" fill="none" />
          <circle cx="420" cy="450" r="3" fill="rgba(196,163,90,0.4)" />
          <circle cx="310" cy="310" r="1.5" fill="rgba(196,163,90,0.2)" />
          <circle cx="540" cy="580" r="2" fill="rgba(196,163,90,0.15)" />
          <defs>
            <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(196,163,90,0.04)" />
              <stop offset="100%" stopColor="rgba(196,163,90,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="420" cy="450" rx="180" ry="220" fill="url(#glow2)" />
        </svg>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.12)] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-36 pb-24 lg:max-w-[55%]">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4 mb-12">
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">ホームページ制作 / Web Production</span>
        </motion.div>

        <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8">
          成果につながる
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">ホームページを。</span>
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl mb-14">
          見た目だけではなく、信頼構築・問い合わせ獲得・採用強化につながるホームページを制作します。
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
          <Link href="/#contact" className="group flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]">
            無料相談する
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" }); }} className="flex items-center gap-2 px-6 py-4 border border-white/[0.1] text-white/45 hover:text-white/70 hover:border-white/20 text-sm tracking-wide transition-all duration-300">
            <Calculator size={14} />
            見積もり依頼
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.15)] to-transparent" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(196,163,90,0.3)]" />
      </motion.div>
    </section>
  );
}
