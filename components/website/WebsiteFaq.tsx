"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "ホームページ制作にはどのくらいの期間がかかりますか？",
    answer: "一般的には3~4ヶ月です。要件や規模により前後しますが、ヒアリング・戦略立案(1-2週間) → デザイン(2-3週間) → コーディング(3-4週間) → テスト(1-2週間)の流れで進めます。急いでいる場合はご相談ください。"
  },
  {
    question: "制作費用はいくらですか？",
    answer: "ホームページの規模や要件により異なります。小規模コーポレートサイト(ライト)で約50万円から、複雑なシステム連携やECサイト(エンタープライズ)で100万円以上のものまでございます。無料相談でお見積もりさせていただきます。"
  },
  {
    question: "制作後の保守・更新サポートはありますか？",
    answer: "はい、定期的なコンサルティングと更新支援を含むサポートプランをご用意しています。SEO対策、アクセス分析、コンテンツ更新など、制作後の継続的な改善をサポートします。別途費用となりますが、ぜひご検討ください。"
  },
  {
    question: "既存のホームページがあります。リニューアルも対応していますか？",
    answer: "はい、リニューアルも多数承っています。既存サイトの課題分析から新規デザイン、データの引き継ぎまで、丁寧に対応します。SEO評価を保持したリダイレクト設定も実施いたします。"
  },
  {
    question: "SEO対策は含まれていますか？",
    answer: "基本的なSEO対策（メタタグ設定、ページ高速化、モバイル最適化など）は制作に含まれています。より強力なキーワード対策やコンテンツSEOをご希望の場合は、別途SEO対策サービスをお勧めします。"
  },
  {
    question: "スマホ対応はどのようにされていますか？",
    answer: "すべてのサイトはレスポンシブデザインで、PC・タブレット・スマートフォンで最適に表示されます。スマホユーザーの行動を考慮した設計で、高い成約率を実現しています。"
  },
  {
    question: "ブログやニュース機能は追加できますか？",
    answer: "もちろんです。WordPressなどのCMS(ブログ・更新システム)を導入することで、技術知識なしに記事更新が可能になります。コンテンツマーケティングでのSEO強化にも有効です。"
  },
  {
    question: "お問い合わせフォームやECシステムなど、複雑な機能が必要なのですが対応できますか？",
    answer: "はい、様々なシステム連携に対応しています。お問い合わせフォーム、決済システム、顧客管理システム(CRM)連携など、貴社の要件に応じた機能実装が可能です。詳しくはご相談ください。"
  },
  {
    question: "デザイン案は何案提案していただけますか？",
    answer: "通常は2~3案のデザイン案を提案します。ご感想をいただいた後、修正対応は無制限で対応いたします。最高のデザインが完成するまでサポートさせていただきます。"
  },
  {
    question: "制作中に方向性を変更したくなった場合は対応してくれますか？",
    answer: "はい、制作中のご相談にはいつでも対応します。ただし、大幅な仕様変更の場合は追加費用が発生する可能性があります。事前にご相談いただくことをお勧めします。"
  },
  {
    question: "納品後、自社で更新・管理できますか？",
    answer: "WordPressなどのCMS導入の場合は、簡単な操作ガイドと初期サポートをご提供するため、自社での更新が可能です。HTML直接編集が必要な場合は、保守サポートのご利用をお勧めします。"
  },
  {
    question: "競合他社のサイトを参考にしたいのですが、その旨を伝えても大丈夫ですか？",
    answer: "もちろんです。競合サイトを参考にして「このような雰囲気で」とご要望いただくことはよくあります。その上で、貴社のオリジナリティを活かしたデザイン提案をさせていただきます。"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function WebsiteFaq() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(196,163,90,0.01)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20 lg:mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">FAQ</span>
            <div className="h-px w-8 bg-[#C4A35A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            よくあるご質問
            <br />
            <span className="font-serif-display italic font-light text-[#C4A35A]">12+よくある質問にお答え</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-lg leading-relaxed mt-8"
          >
            ホームページ制作についてのよくあるご質問にお答えしています。その他のご質問はお気軽にお問い合わせください。
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-4 lg:space-y-5"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left bg-[#080808]/50 border border-[rgba(196,163,90,0.08)] group-hover:border-[rgba(196,163,90,0.15)] rounded-lg p-6 lg:p-8 transition-all duration-300 group"
              >
                {/* Question Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base lg:text-lg font-semibold text-white flex-grow leading-relaxed group-hover:text-[#C4A35A] transition-colors duration-300">
                    {item.question}
                  </h3>
                  <div className={`w-6 h-6 flex items-center justify-center flex-shrink-0 rounded-full bg-[rgba(196,163,90,0.1)] group-hover:bg-[rgba(196,163,90,0.2)] transition-all duration-300 ${activeIndex === index ? "rotate-180" : ""}`}>
                    <ChevronDown
                      size={16}
                      className="text-[#C4A35A] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Answer - Hidden by default */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-[rgba(196,163,90,0.1)]"
                  >
                    <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-20 lg:mt-32 text-center"
        >
          <p className="text-white/40 text-base lg:text-lg mb-8">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[rgba(196,163,90,0.15)] text-[#C4A35A] font-semibold text-sm tracking-wide border border-[rgba(196,163,90,0.3)] hover:bg-[rgba(196,163,90,0.25)] hover:border-[rgba(196,163,90,0.5)] transition-all duration-300"
          >
            お問い合わせする
          </a>
        </motion.div>
      </div>
    </section>
  );
}
