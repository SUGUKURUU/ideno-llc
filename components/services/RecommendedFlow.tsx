"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Megaphone,
  MousePointerClick,
  Mail,
  Handshake,
  Trophy,
  Film,
  ArrowDown,
} from "lucide-react";

const flow = [
  { icon: Megaphone, label: "SNS運用", note: "ショート動画で認知を広げる", accent: "text-emerald-400", ring: "bg-emerald-500/10" },
  { icon: MousePointerClick, label: "ホームページ訪問", note: "興味を持った見込み客が来訪", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Mail, label: "問い合わせ", note: "信頼を得て行動につながる", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Handshake, label: "商談", note: "具体的な提案・すり合わせ", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Trophy, label: "成約", note: "売上・採用の成果へ", accent: "text-white/70", ring: "bg-white/[0.08]" },
  { icon: Film, label: "社長の一日で信頼強化", note: "「人」を伝え、関係を深める", accent: "text-amber-400", ring: "bg-amber-500/10" },
];

export default function RecommendedFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="flow" ref={ref} className="py-24 lg:py-36 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">
            Recommended Flow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            おすすめの活用方法
          </h2>
        </motion.div>

        <div className="flex flex-col items-center">
          {flow.map((stage, i) => {
            const Icon = stage.icon;
            const isLast = i === flow.length - 1;
            return (
              <div key={stage.label} className="w-full flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.13, duration: 0.6 }}
                  className="gradient-border rounded-2xl px-6 py-5 w-full max-w-md flex items-center gap-4 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${stage.ring} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={20} className={stage.accent} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{stage.label}</div>
                    <div className="text-white/40 text-sm">{stage.note}</div>
                  </div>
                  <div className="ml-auto text-white/15 text-xs font-medium tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: i * 0.13 + 0.1, duration: 0.5 }}
                    className="py-2"
                  >
                    <ArrowDown size={18} className="text-white/20" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
