"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Search, Zap, Settings, Mail, Share2 } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "スマホ最適化",
    description: "全ページをモバイルファーストで設計。どの端末でも美しく快適に閲覧できます。",
  },
  {
    icon: Search,
    title: "SEO対策",
    description: "検索エンジンに評価される構造化マークアップと内部対策を標準実装します。",
  },
  {
    icon: Zap,
    title: "高速表示",
    description: "最新のフレームワークと画像最適化で、ストレスのない表示速度を実現します。",
  },
  {
    icon: Settings,
    title: "更新しやすい設計",
    description: "専門知識がなくても、お知らせやブログを自社で更新できる仕組みを構築します。",
  },
  {
    icon: Mail,
    title: "お問い合わせフォーム",
    description: "迷惑メール対策や自動返信を備えた、確実に届くフォームを実装します。",
  },
  {
    icon: Share2,
    title: "SNS連携",
    description: "Instagram・TikTok・YouTubeと連携し、SNSとサイトの相乗効果を生み出します。",
  },
];

export default function WebFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Features</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            すべての制作に
            <br />
            標準で備わる品質
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="gradient-border rounded-2xl p-7 group hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.08] transition-colors duration-300">
                  <Icon size={18} className="text-white/60" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
