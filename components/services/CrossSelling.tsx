"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Globe, Film, Plus } from "lucide-react";

const items = [
  { icon: Share2, label: "SNS運用", role: "集客", accent: "text-emerald-400", ring: "bg-emerald-500/10" },
  { icon: Globe, label: "ホームページ", role: "信頼・受け皿", accent: "text-sky-400", ring: "bg-sky-500/10" },
  { icon: Film, label: "社長の一日", role: "人で差別化", accent: "text-amber-400", ring: "bg-amber-500/10" },
];

export default function CrossSelling() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Cross Selling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            組み合わせることで
            <br />
            効果最大化
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            SNSだけでも、ホームページだけでも不十分です。
            集客・信頼・成約までを一貫して設計することで成果が高まります。
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === items.length - 1;
            return (
              <div key={item.label} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="gradient-border rounded-2xl p-6 w-full text-center hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.ring} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon size={22} className={item.accent} />
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-white/40 text-sm">{item.role}</div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.1, duration: 0.4 }}
                    className="flex-shrink-0"
                  >
                    <Plus size={18} className="text-white/25" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm">
            集客 × 信頼 × 差別化 ＝ <span className="text-white font-semibold">成果の最大化</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
