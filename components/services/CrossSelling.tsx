"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Share2, Globe, Film, Plus } from "lucide-react";

const items = [
  { icon: Share2, label: "SNS運用", role: "集客" },
  { icon: Globe, label: "ホームページ", role: "信頼・受け皿" },
  { icon: Film, label: "社長の一日", role: "人で差別化" },
];

export default function CrossSelling() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Cross Selling</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            組み合わせることで
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">効果最大化</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.6 }} className="text-white/40 text-base max-w-lg leading-relaxed">
            SNSだけでも、ホームページだけでも不十分です。集客・信頼・成約までを一貫して設計することで成果が高まります。
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-px bg-[rgba(196,163,90,0.08)]">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === items.length - 1;
            return (
              <div key={item.label} className="flex flex-col sm:flex-row items-center flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="bg-[#080808] p-8 w-full text-center hover:bg-[rgba(196,163,90,0.02)] transition-colors duration-300"
                >
                  <div className="w-12 h-12 border border-[rgba(196,163,90,0.2)] flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-[#C4A35A] opacity-70" />
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-white/35 text-sm">{item.role}</div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.1, duration: 0.4 }}
                    className="flex-shrink-0 bg-[#080808] px-3 py-4 sm:py-0"
                  >
                    <Plus size={16} className="text-[rgba(196,163,90,0.3)]" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.6 }} className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(196,163,90,0.2)] text-white/50 text-sm">
            集客 × 信頼 × 差別化 ＝ <span className="text-[#C4A35A] font-semibold">成果の最大化</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
