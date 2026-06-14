"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Zap, Users, TrendingUp, Share2, BarChart3 } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "投稿代行",
    description: "毎日のSNS投稿をプロが代行。ターゲットに響くコンテンツを企画・制作・投稿します。最適なタイミングとハッシュタグで拡散を最大化。",
  },
  {
    icon: Zap,
    title: "アカウント設計",
    description: "競合分析、ターゲット設定、ブランドトーン定義など。ゼロから始めるアカウント構築や既存アカウントの最適化をサポート。",
  },
  {
    icon: Users,
    title: "コミュニティ管理",
    description: "フォロワーとのコミュニケーション、コメント対応、メッセージ管理。ファンの育成と信頼構築を図ります。",
  },
  {
    icon: TrendingUp,
    title: "キャンペーン企画",
    description: "認知拡大、フォロワー増加、販売促進など目的に合わせたキャンペーンを企画・実行。トレンドを活かした施策を提案。",
  },
  {
    icon: Share2,
    title: "広告運用",
    description: "SNS広告（Instagram広告、TikTok広告など）の企画、出稿、運用。CVやROASの向上を目指して最適化を続けます。",
  },
  {
    icon: BarChart3,
    title: "分析・レポート",
    description: "毎月のアクセス数、フォロワー推移、エンゲージメント率などを分析。改善すべき点と次の施策を提案します。",
  },
];

export default function SnsService() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="service" ref={ref} className="py-32 lg:py-48 relative">
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
              Service
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            充実した6つの
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">サービス内容</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base max-w-lg"
          >
            投稿から分析まで、SNS運用に必要なすべてのサービスをワンストップで提供します。
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(196,163,90,0.08)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#080808] p-8 lg:p-10 group hover:bg-[rgba(196,163,90,0.02)] transition-all duration-500"
              >
                <div className="w-12 h-12 border border-[rgba(196,163,90,0.15)] flex items-center justify-center mb-6 group-hover:border-[rgba(196,163,90,0.4)] transition-colors duration-300">
                  <Icon size={20} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
