"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const portfolioItems = [
  // 製造業
  {
    category: "製造業",
    categoryId: "manufacturing",
    company: "精密部品製造メーカー",
    industry: "精密加工・製造",
    image: "🏭",
    beforeMetric: "月10件",
    afterMetric: "月42件",
    improvementText: "問い合わせ件数が4.2倍に増加",
    description: "BtoB向けの技術情報サイトをリデザイン。専門性をアピールするコンテンツと導線設計で、営業案件への問い合わせが大幅増加。"
  },
  // サービス業
  {
    category: "サービス業",
    categoryId: "service",
    company: "オフィス清掃サービス",
    industry: "清掃・メンテナンス",
    image: "🧹",
    beforeMetric: "月8件",
    afterMetric: "月38件",
    improvementText: "問い合わせ5倍近くに増加",
    description: "スマホ最適化と明確な価格提示により、地域顧客からの問い合わせが急増。定期契約率も向上。"
  },
  // 医療
  {
    category: "医療",
    categoryId: "medical",
    company: "クリニック",
    industry: "医療機関",
    image: "🏥",
    beforeMetric: "月12件",
    afterMetric: "月55件",
    improvementText: "予約申し込みが4.5倍に増加",
    description: "患者目線での情報設計と予約フローの簡素化で、オンライン予約が大幅増加。医師の信頼構築コンテンツも強化。"
  },
  // 教育
  {
    category: "教育",
    categoryId: "education",
    company: "プログラミング教室",
    industry: "教育・スクール",
    image: "💻",
    beforeMetric: "月6件",
    afterMetric: "月28件",
    improvementText: "問い合わせが4.7倍に増加",
    description: "生徒の成功事例を視覚的に訴求。保護者向けの安心感設計により、無料体験申し込みが急増。"
  },
  // 人材採用
  {
    category: "採用サイト",
    categoryId: "recruitment",
    company: "システム開発企業",
    industry: "IT・システム開発",
    image: "👥",
    beforeMetric: "月2件",
    afterMetric: "月18件",
    improvementText: "応募件数が9倍に増加",
    description: "社内文化や成長機会を魅力的に発信。エンジニア向けのテクニカルコンテンツと融合させ、質の高い応募を獲得。"
  },
  // EC
  {
    category: "EC",
    categoryId: "ecommerce",
    company: "手作り雑貨販売",
    industry: "eコマース",
    image: "🛍️",
    beforeMetric: "月売上\n30万円",
    afterMetric: "月売上\n140万円",
    improvementText: "売上が4.7倍に増加",
    description: "商品ストーリーを前面に出し、高級感あるUX設計。購買心理に基づいたレイアウト最適化で客単価も向上。"
  },
  // 飲食
  {
    category: "飲食店",
    categoryId: "restaurant",
    company: "高級レストラン",
    industry: "飲食店",
    image: "🍽️",
    beforeMetric: "月8件",
    afterMetric: "月35件",
    improvementText: "予約申し込みが4.4倍に増加",
    description: "シェフのこだわりと食体験を表現。高級感を損なわないデザインと使いやすさを両立し、顧客満足度も向上。"
  },
  // 不動産
  {
    category: "不動産",
    categoryId: "realestate",
    company: "不動産仲介会社",
    industry: "不動産",
    image: "🏠",
    beforeMetric: "月15件",
    afterMetric: "月52件",
    improvementText: "物件問い合わせが3.5倍に増加",
    description: "物件検索の快適性を重視した設計。VR・高度な画像表示で内見効率が向上し、成約率もアップ。"
  },
];

const categories = [
  "すべて",
  "製造業",
  "サービス業",
  "医療",
  "教育",
  "採用サイト",
  "EC",
  "飲食店",
  "不動産"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function WebsitePortfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filteredItems = activeCategory === "すべて"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.01)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            実績・ポートフォリオ
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">業種別8+案件</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-lg leading-relaxed mt-8"
          >
            様々な業種で、成果に繋がるホームページを制作。平均で3~4倍の問い合わせ増加を実現しています。
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-20 lg:mb-32"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#C4A35A] text-black border-[#C4A35A]"
                  : "border-[rgba(196,163,90,0.2)] text-white/60 hover:text-white/80 hover:border-[rgba(196,163,90,0.4)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.company}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-[#080808]/50 border border-[rgba(196,163,90,0.08)] group-hover:border-[rgba(196,163,90,0.2)] rounded-lg overflow-hidden transition-all duration-500 h-full flex flex-col">
                {/* Top Section - Image/Icon Area */}
                <div className="relative h-40 lg:h-48 bg-gradient-to-br from-[rgba(196,163,90,0.1)] to-[rgba(196,163,90,0.02)] flex items-center justify-center overflow-hidden">
                  <span className="text-6xl lg:text-7xl group-hover:scale-110 transition-transform duration-500">{item.image}</span>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#C4A35A] text-xs font-medium tracking-wider uppercase">
                      {item.category}
                    </span>
                    <span className="text-white/30 text-xs font-medium">{item.industry}</span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-lg font-semibold text-white mb-6 line-clamp-2">
                    {item.company}
                  </h3>

                  {/* Before/After Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[rgba(196,163,90,0.1)]">
                    <div>
                      <p className="text-white/40 text-xs mb-1.5">改善前</p>
                      <p className="text-white font-bold text-sm lg:text-base">{item.beforeMetric}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-1.5">改善後</p>
                      <p className="text-white font-bold text-sm lg:text-base">{item.afterMetric}</p>
                    </div>
                  </div>

                  {/* Improvement Text & Icon */}
                  <div className="flex items-start gap-3 mb-6">
                    <TrendingUp size={16} className="text-[#C4A35A] mt-0.5 flex-shrink-0" />
                    <p className="text-[#C4A35A] font-semibold text-sm leading-tight">
                      {item.improvementText}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-xs lg:text-sm leading-relaxed flex-grow mb-6">
                    {item.description}
                  </p>

                  {/* CTA Link */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-[#C4A35A] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300 group"
                  >
                    詳細を見る
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 lg:mt-32 text-center"
        >
          <p className="text-white/40 text-base lg:text-lg mb-8">
            他にも多くの業種での実績があります。詳しい事例は無料相談でお聞きします。
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]"
          >
            無料相談を予約する
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
