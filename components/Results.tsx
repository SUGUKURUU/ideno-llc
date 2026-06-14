"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Heart, Share2, MessageSquare, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const industries = [
  { name: "製造業", count: "28社" },
  { name: "人材採用", count: "21社" },
  { name: "医療・薬剤", count: "18社" },
  { name: "不動産", count: "16社" },
  { name: "飲食・小売", count: "12社" },
  { name: "その他サービス", count: "5社" },
];

const caseStudies = [
  {
    title: "B2B製造業",
    before: { followers: "1.2K", monthly_reach: "3.5K" },
    after: { followers: "4.8K", monthly_reach: "28K" },
    growth: "4.0x",
    timeline: "12ヶ月",
    highlight: "採用応募が月3件→月12件へ",
  },
  {
    title: "医療サービス",
    before: { followers: "800", monthly_reach: "2.1K" },
    after: { followers: "5.2K", monthly_reach: "35K" },
    growth: "6.5x",
    timeline: "12ヶ月",
    highlight: "新規患者獲得が大幅増。紹介率も向上",
  },
  {
    title: "人材採用・教育",
    before: { followers: "650", monthly_reach: "1.8K" },
    after: { followers: "3.1K", monthly_reach: "18K" },
    growth: "3.1x",
    timeline: "9ヶ月",
    highlight: "採用コスト削減。候補者の質向上",
  },
];

const platforms = [
  { name: "Instagram", icon: Heart, color: "from-pink-500 to-purple-600", stats: "フォロワー平均 3.5x増加" },
  { name: "TikTok", icon: Share2, color: "from-black to-purple-600", stats: "平均リーチ 15x増加" },
  { name: "LinkedIn", icon: Users, color: "from-blue-500 to-blue-700", stats: "プロフェッショナルネットワーク構築" },
  { name: "YouTube", icon: Eye, color: "from-red-500 to-red-700", stats: "動画完視聴率 平均68%" },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[rgba(196,163,90,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Real Results</span>
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          100社以上が実感した
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">
            成果の数字
          </span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-white/40 text-base max-w-2xl mb-16"
        >
          業界・規模を問わず、多くの企業がSNS運用代行を通じて
          採用強化、認知拡大、ブランド構築を実現しています。
        </motion.p>

        {/* Industries grid */}
        <div className="mb-24">
          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="mb-8"
          >
            <h3 className="text-white/60 text-sm font-medium tracking-wider uppercase mb-6">支援業種</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="p-6 rounded-lg border border-white/[0.08] hover:border-[rgba(196,163,90,0.2)] transition-colors duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{ind.name}</span>
                  <span className="text-[#C4A35A] text-sm font-semibold">{ind.count}</span>
                </div>
                <div className="mt-3 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C4A35A] to-[rgba(196,163,90,0.6)] rounded-full"
                    style={{ width: `${(parseInt(ind.count) / 28) * 100}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case studies */}
        <div className="mb-24">
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="mb-8"
          >
            <h3 className="text-white/60 text-sm font-medium tracking-wider uppercase">実績事例（ビフォーアフター）</h3>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                custom={i + 1}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="p-8 border border-white/[0.08] hover:border-[rgba(196,163,90,0.2)] transition-all duration-300 group"
              >
                {/* Title */}
                <h4 className="text-white font-semibold text-lg mb-6">{study.title}</h4>

                {/* Growth metric */}
                <div className="mb-8 p-4 bg-[rgba(196,163,90,0.05)] rounded-lg border border-[rgba(196,163,90,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-[#C4A35A]" />
                    <span className="text-white/60 text-sm">フォロワー成長</span>
                  </div>
                  <div className="text-3xl font-bold text-[#C4A35A] mb-1">{study.growth}</div>
                  <div className="text-white/40 text-xs">{study.timeline}での実績</div>
                </div>

                {/* Before/After */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-white/50 text-xs font-medium mb-2">運用前</div>
                    <div className="space-y-1">
                      <div className="text-white/40 text-sm">
                        フォロワー: <span className="text-white/60">{study.before.followers}</span>
                      </div>
                      <div className="text-white/40 text-sm">
                        月間リーチ: <span className="text-white/60">{study.before.monthly_reach}</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div>
                    <div className="text-white/50 text-xs font-medium mb-2">運用後（目標達成）</div>
                    <div className="space-y-1">
                      <div className="text-white/40 text-sm">
                        フォロワー: <span className="text-[#C4A35A] font-semibold">{study.after.followers}</span>
                      </div>
                      <div className="text-white/40 text-sm">
                        月間リーチ: <span className="text-[#C4A35A] font-semibold">{study.after.monthly_reach}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlight */}
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-white/[0.06]">
                  <div className="text-white/60 text-xs font-medium mb-1">成果</div>
                  <div className="text-white/70 text-sm leading-relaxed">{study.highlight}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Platform performance */}
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            className="mb-8"
          >
            <h3 className="text-white/60 text-sm font-medium tracking-wider uppercase">プラットフォーム別実績</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.name}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="group p-6 rounded-lg border border-white/[0.08] hover:border-[rgba(196,163,90,0.2)] transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${platform.color} opacity-80 group-hover:opacity-100 transition-opacity mb-4`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2">{platform.name}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{platform.stats}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
