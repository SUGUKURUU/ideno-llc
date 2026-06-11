"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-white/[0.025] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Services
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
            サービス一覧
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-balance"
        >
          企業の魅力を伝えるための3つのサービスをご用意しています。
          <br className="hidden sm:block" />
          認知拡大から信頼構築まで、目的に合わせてお選びください。
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20 animate-pulse" />
      </motion.div>
    </section>
  );
}
