"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, TrendingUp, Shield, Sparkles, Target } from "lucide-react";

const merits = [
  {
    icon: Lightbulb,
    number: "01",
    title: "自社の負担を大幅に軽減",
    description:
      "日々のSNS運用業務をすべてお任せいただけます。営業や企画など本来業務に集中でき、新規事業開発にもリソースを割くことができます。",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "確実に成果を向上させる",
    description:
      "プロのノウハウに基づいた投稿戦略で、フォロワー増加、エンゲージメント向上、問い合わせ増加が期待できます。データ分析に基づいた継続的な改善を行います。",
  },
  {
    icon: Shield,
    number: "03",
    title: "炎上リスクを大幅に低減",
    description:
      "SNS投稿に伴う炎上リスクや誤った情報発信のリスクを軽減します。プロの視点でチェック、修正を行い、ブランドイメージを守ります。",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "高品質なコンテンツを制作",
    description:
      "プロの撮影・編集技術により、視聴者の心を掴む高品質な動画やテキストを制作します。自社作成では難しい仕上がりを実現。",
  },
  {
    icon: Target,
    number: "05",
    title: "新たなターゲット層の発見",
    description:
      "SNS運用を通じて、想定外のターゲット層からのアプローチを発見できます。新しい顧客セグメントや市場機会への気づきが生まれます。",
  },
];

export default function SnsMerits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="merits" ref={ref} className="py-32 lg:py-48 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
              Merits
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            SNS運用代行の
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">5つのメリット</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            外注することで得られる、驚くべき効果をご紹介します。
          </motion.p>
        </div>

        {/* Merits List */}
        <div className="space-y-6 max-w-4xl">
          {merits.map((merit, i) => {
            const Icon = merit.icon;
            return (
              <motion.div
                key={merit.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="border border-white/[0.06] p-8 lg:p-10 group hover:border-[#C4A35A]/30 hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg border border-[rgba(196,163,90,0.15)] flex items-center justify-center group-hover:border-[#C4A35A]/50 group-hover:bg-[rgba(196,163,90,0.1)] transition-all duration-300">
                      <Icon size={20} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[#C4A35A] text-xs font-medium tracking-[0.2em] opacity-50">
                        {merit.number}
                      </span>
                      <h3 className="text-white font-semibold text-xl">
                        {merit.title}
                      </h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                      {merit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
