"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WebsiteHero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(196,163,90,0.08)] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C4A35A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C4A35A]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* 小タイトル */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-6 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
              ホームページ制作
            </span>
            <div className="h-px w-6 bg-[#C4A35A]" />
          </motion.div>

          {/* メインメッセージ */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 md:mb-8">
            企業サイトで、
            <br />
            <span className="italic font-serif-display font-light text-[#C4A35A]">
              成果を出す
            </span>
          </h1>

          {/* サブメッセージ */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            ホームページは「持っているだけ」では成果につながりません。
            <br className="hidden sm:block" />
            UX設計、説得力のあるコピーライティング、セールス導線最適化—
            <br className="hidden sm:block" />
            成果を出すために必要なすべてを実装します。
          </motion.p>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 md:px-10 py-4 md:py-5 bg-[#C4A35A] text-black font-semibold text-sm md:text-base tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.2)]"
            >
              無料相談を申し込む
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="tel:09012345678"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-4 md:py-5 border border-[#C4A35A]/30 text-[#C4A35A] font-semibold text-sm md:text-base tracking-wide hover:border-[#C4A35A]/50 hover:bg-[rgba(196,163,90,0.05)] transition-all duration-300"
            >
              📞 電話で相談
            </Link>
          </motion.div>

          {/* 信頼指標 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-[rgba(196,163,90,0.15)] flex flex-col sm:flex-row justify-center gap-8 md:gap-12 text-center"
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#C4A35A] mb-1">50+</div>
              <p className="text-white/40 text-xs md:text-sm">制作実績</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#C4A35A] mb-1">平均3.5倍</div>
              <p className="text-white/40 text-xs md:text-sm">成果向上</p>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#C4A35A] mb-1">4.8 / 5.0</div>
              <p className="text-white/40 text-xs md:text-sm">クライアント満足度</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
