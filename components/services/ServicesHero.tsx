"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0a0906] to-[#080808]" />

      {/* Geometric decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 500 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="500" cy="350" r="300" stroke="rgba(196,163,90,0.05)" strokeWidth="0.5" />
          <circle cx="500" cy="350" r="200" stroke="rgba(196,163,90,0.07)" strokeWidth="0.5" />
          <circle cx="500" cy="350" r="100" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="500" y2="700" stroke="rgba(196,163,90,0.03)" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="500" y2="500" stroke="rgba(196,163,90,0.03)" strokeWidth="0.5" />
          <circle cx="500" cy="350" r="4" fill="rgba(196,163,90,0.3)" />
          <path d="M 420 180 L 460 180 L 460 220" stroke="rgba(196,163,90,0.2)" strokeWidth="0.75" fill="none" />
        </svg>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.12)] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-36 pb-24">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4 mb-12">
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Services</span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8 max-w-2xl"
        >
          サービス
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">一覧</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl"
        >
          企業の魅力を伝えるための3つのサービスをご用意しています。
          <br />
          認知拡大から信頼構築まで、目的に合わせてお選びください。
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.15)] to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[rgba(196,163,90,0.3)]" />
      </motion.div>
    </section>
  );
}
