"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function WebHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-white/[0.025] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-32 pb-24">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs tracking-widest uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ホームページ制作 / Web Production
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight text-balance mb-8"
        >
          成果につながる
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
            ホームページを。
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-white/50 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 text-balance"
        >
          見た目だけではなく、
          <br className="hidden sm:block" />
          信頼構築・問い合わせ獲得・採用強化につながるホームページを制作します。
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/#contact"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10"
          >
            無料相談する
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </Link>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium text-sm tracking-wide transition-all duration-200"
          >
            <Calculator size={16} />
            見積もり依頼
          </a>
        </motion.div>
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
