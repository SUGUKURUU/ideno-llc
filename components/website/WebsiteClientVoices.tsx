"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "精密部品製造メーカー",
    name: "山田太郎",
    title: "営業部長",
    rating: 5,
    text: "単にきれいなサイトではなく、営業資料としての実用性を考えてくれました。制作後、BtoB向けの問い合わせが大幅に増え、営業効率が劇的に向上。定期的なコンサルティングも非常に助かっています。",
    industry: "製造業"
  },
  {
    company: "プログラミング教室",
    name: "鈴木美咲",
    title: "代表",
    rating: 5,
    text: "保護者の安心感を買う設計が秀逸。生徒の成功事例が視覚的に伝わり、無料体験の申し込みが4倍以上に増加しました。何度も改善提案をいただき、本当にビジネスを理解してくれているパートナーです。",
    industry: "教育"
  },
  {
    company: "高級レストラン",
    name: "鈴木健一",
    title: "オーナー",
    rating: 5,
    text: "高級感を損なわないデザインと使いやすさが両立された素晴らしいサイト。当店のこだわりが的確に伝わるようになり、予約申し込みが大幅に増えました。SEO対策もおかげで検索流入も増加中です。",
    industry: "飲食店"
  },
  {
    company: "不動産仲介会社",
    name: "田中花子",
    title: "営業部長",
    rating: 5,
    text: "物件検索の快適性と高度な画像表示により、内見効率が大きく改善。成約率も向上し、営業チーム全体の成果が上がっています。ヒアリングから実装まで、丁寧で信頼できる対応をいただきました。",
    industry: "不動産"
  },
  {
    company: "システム開発企業",
    name: "佐藤健太",
    title: "HR担当者",
    rating: 5,
    text: "採用サイトのリデザインで応募件数が9倍に増加。エンジニア向けのテクニカルコンテンツと企業文化の両方が上手に融合されていました。質の高い応募が集まり、採用効率も大幅に改善できました。",
    industry: "採用サイト"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function WebsiteClientVoices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voices" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(196,163,90,0.015)] via-transparent to-[rgba(196,163,90,0.01)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Testimonials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            お客様の声
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">多くのクライアントから喜びの声</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-[#080808]/50 border border-[rgba(196,163,90,0.08)] group-hover:border-[rgba(196,163,90,0.2)] rounded-lg p-8 lg:p-10 transition-all duration-500 h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[#C4A35A] text-[#C4A35A]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div className="h-px bg-[rgba(196,163,90,0.1)] mb-6 group-hover:bg-[rgba(196,163,90,0.2)] transition-colors duration-300" />

                {/* Author Info */}
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-white/40 text-xs mb-3">
                    {testimonial.company} · {testimonial.title}
                  </p>
                  <div className="inline-block px-3 py-1 bg-[rgba(196,163,90,0.08)] rounded-full text-[#C4A35A] text-xs font-medium group-hover:bg-[rgba(196,163,90,0.12)] transition-colors duration-300">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-20 h-px w-32 bg-gradient-to-r from-[#C4A35A] to-transparent mx-auto"
        />
      </div>
    </section>
  );
}
