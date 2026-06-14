"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

export default function SnsCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    "無料ヒアリング（初回1時間）",
    "貴社専用の戦略提案書作成",
    "競合分析レポート",
    "3ヶ月の成果予測",
    "カスタマイズプラン提案",
    "専任コンサルタント配置",
  ];

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="border border-[#C4A35A]/30 bg-[rgba(196,163,90,0.05)] p-12 lg:p-16 rounded-lg"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#C4A35A]" />
              <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
                Next Step
              </span>
              <div className="h-px w-8 bg-[#C4A35A]" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              さあ、一歩を踏み出す
              <br />
              <span className="font-serif-display italic font-light text-[#C4A35A]">その時が来ました</span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              SNS運用で悩み続けるより、プロに任せてビジネスに集中する。
              <br className="hidden sm:block" />
              あなたの企業の成長を、当社がサポートします。
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[rgba(196,163,90,0.03)] border border-[rgba(196,163,90,0.1)] p-8 lg:p-10 rounded-lg mb-10"
          >
            <h3 className="text-white font-semibold text-lg mb-6">
              無料相談で得られるもの
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-[#C4A35A] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/70 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={scrollToContact}
              className="inline-block px-10 py-5 bg-[#C4A35A] text-black font-bold text-lg tracking-[0.1em] hover:bg-[#d4b36a] transition-all duration-300 shadow-xl shadow-[rgba(196,163,90,0.25)] hover:shadow-[rgba(196,163,90,0.35)] mb-6"
            >
              無料相談に申し込む
            </button>
            <p className="text-white/40 text-xs max-w-sm mx-auto">
              クリックして、無料相談申し込みフォームにジャンプしてください。
              <br />
              通常、送信後2営業日以内にご連絡いたします。
            </p>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 pt-10 border-t border-white/[0.06] flex items-center justify-center gap-6 flex-wrap"
          >
            <div className="text-center">
              <div className="text-sm text-white/40 mb-1">実績企業</div>
              <div className="text-lg font-bold text-white">50+</div>
            </div>
            <div className="h-10 w-px bg-white/[0.06]" />
            <div className="text-center">
              <div className="text-sm text-white/40 mb-1">平均成長率</div>
              <div className="text-lg font-bold text-[#C4A35A]">300%+</div>
            </div>
            <div className="h-10 w-px bg-white/[0.06]" />
            <div className="text-center">
              <div className="text-sm text-white/40 mb-1">続行率</div>
              <div className="text-lg font-bold text-white">98%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
