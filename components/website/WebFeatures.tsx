"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Search, Zap, Settings, Mail, Share2 } from "lucide-react";

const features = [
  { icon: Smartphone, title: "スマホ最適化", description: "全ページをモバイルファーストで設計。どの端末でも美しく快適に閲覧できます。" },
  { icon: Search, title: "SEO対策", description: "検索エンジンに評価される構造化マークアップと内部対策を標準実装します。" },
  { icon: Zap, title: "高速表示", description: "最新のフレームワークと画像最適化で、ストレスのない表示速度を実現します。" },
  { icon: Settings, title: "更新しやすい設計", description: "専門知識がなくても、お知らせやブログを自社で更新できる仕組みを構築します。" },
  { icon: Mail, title: "お問い合わせフォーム", description: "迷惑メール対策や自動返信を備えた、確実に届くフォームを実装します。" },
  { icon: Share2, title: "SNS連携", description: "Instagram・TikTok・YouTubeと連携し、SNSとサイトの相乗効果を生み出します。" },
];

export default function WebFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.012)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            すべての制作に
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">標準で備わる品質</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)]">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#080808] p-8 lg:p-10 group hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500"
              >
                <div className="w-10 h-10 border border-[rgba(196,163,90,0.2)] flex items-center justify-center mb-7 group-hover:border-[rgba(196,163,90,0.45)] transition-colors duration-300">
                  <Icon size={17} className="text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
