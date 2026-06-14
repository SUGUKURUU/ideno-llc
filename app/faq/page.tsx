"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // サービス概要
  {
    id: "service-1",
    category: "サービス概要",
    question: "SNS運用代行のサービス内容を教えてください。",
    answer:
      "当社のSNS運用代行サービスは、Instagram、TikTok、Twitter、LINEなどのプラットフォームを活用した企業のSNS運用を一括でお任せいただけるサービスです。投稿内容の企画から作成、配信、コメント対応、分析・改善提案まで、SNS運用に必要なすべての業務をサポートいたします。月12投稿～30投稿以上、最小契約期間3～12ヶ月のプランをご用意しています。",
  },
  {
    id: "service-2",
    category: "サービス概要",
    question: "複数のSNSプラットフォームに対応していますか？",
    answer:
      "はい、対応しています。ベーシックプランではInstagram・TikTok・Twitterの3プラットフォーム、スタンダードプランではLINEを含む4プラットフォーム、エンタープライズプランではYouTubeやFacebookを含むすべてのプラットフォームに対応いたします。お客様のターゲット層に応じた最適なプラットフォーム選定もサポートいたします。",
  },
  {
    id: "service-3",
    category: "サービス概要",
    question: "初期設定や戦略設計は別費用ですか？",
    answer:
      "いいえ、すべてのプランに初期設定・戦略設計が含まれています。企業理念やターゲット層の分析、SNS運用の方針決定、アカウント設定、プロフィール作成など、SNS運用開始に必要なすべての準備を無料で行います。戦略なくSNS運用を開始するのではなく、しっかりした基盤の上で運用を進めていきます。",
  },
  {
    id: "service-4",
    category: "サービス概要",
    question: "コンテンツ制作は対応していますか？",
    answer:
      "スタンダードプラン以上であれば、画像編集・動画編集などのコンテンツ制作に対応しています。エンタープライズプランではプロの撮影も含まれます。ベーシックプランの場合でも、追加オプションで撮影・編集サービスをご依頼いただけます。詳しくは料金プランページをご参照ください。",
  },
  {
    id: "service-5",
    category: "サービス概要",
    question: "どのような業種に対応していますか？",
    answer:
      "美容、飲食、小売、製造業、サービス業、不動産、教育、医療など、幅広い業種に対応しています。各業種の特性やターゲット層に合わせたSNS運用戦略を立案いたします。過去の実績例については、お問い合わせいただければご説明いたします。",
  },

  // 料金・契約
  {
    id: "pricing-1",
    category: "料金・契約",
    question: "料金に税金は含まれていますか？",
    answer:
      "表示している料金は税別です。別途消費税がかかります。また、打ち合わせや取材で交通費が必要な場合は実費をいただく場合があります。詳しくはお問い合わせ時にご説明いたします。",
  },
  {
    id: "pricing-2",
    category: "料金・契約",
    question: "最小契約期間はありますか？",
    answer:
      "はい、プランによって異なります。ベーシックプラン：3ヶ月、スタンダードプラン：6ヶ月、エンタープライズプラン：12ヶ月となります。最小契約期間終了後は、月単位での継続・終了が可能です。効果を測定するためにも、ある程度の期間をお勧めしています。",
  },
  {
    id: "pricing-3",
    category: "料金・契約",
    question: "月途中からの契約は可能ですか？",
    answer:
      "はい、可能です。契約開始日を柔軟に設定いただけます。月途中開始の場合は、日割り計算で対応いたします。詳しい料金計算方法はお問い合わせ時にご説明いたします。",
  },
  {
    id: "pricing-4",
    category: "料金・契約",
    question: "長期契約割引はありますか？",
    answer:
      "12ヶ月以上の長期契約をご希望の場合は、特別価格をご提案させていただきます。詳しくはお問い合わせください。",
  },
  {
    id: "pricing-5",
    category: "料金・契約",
    question: "追加投稿費用はいくらですか？",
    answer:
      "プランの最低投稿数を超える追加投稿については、別途費用で対応いたします。投稿内容によって異なりますが、通常1投稿あたり3,000～10,000円です。詳しくはお見積りをさせていただきます。",
  },

  // 効果・期待値
  {
    id: "effect-1",
    category: "効果・期待値",
    question: "どのくらいの期間でフォロワーが増えますか？",
    answer:
      "業種や初期フォロワー数によって異なりますが、通常3～6ヶ月で効果が見られ始めます。継続的で質の高いコンテンツを配信することで、フォロワー数の増加だけでなく、エンゲージメント率（いいね・コメント数）の向上も期待できます。重要なのは『数』ではなく『質』です。",
  },
  {
    id: "effect-2",
    category: "効果・期待値",
    question: "実際の売上向上につながりますか？",
    answer:
      "SNS運用が適切に実施されれば、認知度向上→ウェブサイトアクセス増加→問い合わせ・購買増加という流れが期待できます。ただし、即効性はなく、継続的な運用が必要です。当社ではGoogle AnalyticsやSNS分析ツールを活用して、具体的な成果を数値化してご報告いたします。",
  },
  {
    id: "effect-3",
    category: "効果・期待値",
    question: "効果が出ない場合はどうなりますか？",
    answer:
      "もし3～6ヶ月の運用で期待した成果が出ない場合は、運用戦略の見直しを提案させていただきます。ターゲット設定の変更、投稿時間の最適化、コンテンツ内容の改善など、複数の施策を試みます。常に改善を意識した運用を心がけています。",
  },
  {
    id: "effect-4",
    category: "効果・期待値",
    question: "小規模事業者でも効果は期待できますか？",
    answer:
      "はい、むしろ小規模事業者こそSNS運用の効果が大きいと考えています。地域に根ざしたビジネスや、ニッチな商品であっても、適切なSNS運用により、ターゲット顧客とのダイレクトな繋がりを構築できます。",
  },
  {
    id: "effect-5",
    category: "効果・期待値",
    question: "データ分析・レポートはどのように行いますか？",
    answer:
      "月1回以上の定期レポートで、フォロワー数の推移、エンゲージメント率、ウェブサイトへのアクセス数などを分析。視覚的でわかりやすいグラフ・チャートを用いてご説明します。改善提案も含めた詳細な分析資料をご提供いたします。",
  },

  // 実績例
  {
    id: "case-1",
    category: "実績例",
    question: "過去の実績を教えてください。",
    answer:
      "美容室のInstagram運用で、3ヶ月で350フォロワー→1,200フォロワーへ増加。同時に月間来店数が25%向上しました。飲食店のTikTok運用では、バズった動画で50万再生を超え、その後の来店客増加につながった案例もあります。詳しい実績例はお問い合わせ時にポートフォリオをご確認いただけます。",
  },
  {
    id: "case-2",
    category: "実績例",
    question: "他社との違いは何ですか？",
    answer:
      "当社の特徴は『戦略先行』です。ただ投稿数をこなすのではなく、綿密な市場分析とターゲット設定に基づいて運用を行います。また、社長の『一日』をドキュメンタリー動画化するユニークな施策など、企業ブランディングまで考えた提案が可能です。",
  },
  {
    id: "case-3",
    category: "実績例",
    question: "実績は保証されていますか？",
    answer:
      "SNS運用の成果は多くの要因に左右されるため、成果保証は行っていません。ただし、当社の戦略に基づいた運用を継続いただければ、フォロワーやエンゲージメントの向上は十分期待できます。常に改善施策を実行し、成果向上に努めています。",
  },

  // その他
  {
    id: "other-1",
    category: "その他",
    question: "契約の途中で解除できますか？",
    answer:
      "最小契約期間内での解除には、解除手数料が発生する場合があります。詳しくは契約時の約款をご確認ください。最小契約期間終了後は、いつでも終了可能です。",
  },
  {
    id: "other-2",
    category: "その他",
    question: "現在運用中のアカウントでの引き継ぎは可能ですか？",
    answer:
      "もちろん可能です。既存アカウントの分析→改善戦略の立案→引き継ぎ運用という流れで対応いたします。過去の投稿内容やターゲット設定を分析した上で、最適なプラン・料金をご提案させていただきます。",
  },
  {
    id: "other-3",
    category: "その他",
    question: "打ち合わせはどのように行いますか？",
    answer:
      "初回打ち合わせはオンライン（Zoom、Google Meet等）で対応いたします。取材や撮影が必要な場合は、対面でのご訪問も可能です。定期的な進捗確認もオンラインで実施いたします。",
  },
];

const categories = ["すべて", "サービス概要", "料金・契約", "効果・期待値", "実績例", "その他"];

export default function FAQPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQ =
    selectedCategory === "すべて"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <Header />
      <main className="bg-[#080808] min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
                  FAQ
                </span>
                <div className="h-px w-8 bg-[#C4A35A]" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                よくある質問
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                SNS運用代行サービスについて、よくいただくご質問とその回答をまとめました。
                <br />
                こちらに記載のない質問は、お気軽にお問い合わせください。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 lg:py-12 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setExpandedId(null);
                  }}
                  className={`px-6 py-2.5 transition-all duration-300 text-sm font-medium tracking-wide ${
                    selectedCategory === category
                      ? "bg-[#C4A35A] text-black"
                      : "border border-white/[0.2] text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section ref={ref} className="py-16 lg:py-32 relative">
          <div className="max-w-3xl mx-auto px-6 lg:px-16">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {filteredFAQ.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                    }}
                    className="border border-white/[0.08] overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 lg:px-8 py-6 flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors duration-200 group"
                    >
                      <div className="flex items-start gap-4 text-left flex-1">
                        <span className="text-[#C4A35A] font-bold text-sm flex-shrink-0 mt-1">
                          Q
                        </span>
                        <div className="flex-1">
                          <h3 className="text-base lg:text-lg font-semibold text-white group-hover:text-[#C4A35A] transition-colors duration-200">
                            {item.question}
                          </h3>
                          <span className="text-[10px] text-white/40 tracking-[0.1em] uppercase mt-2 inline-block">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 text-[#C4A35A] mt-1"
                      >
                        <ChevronDown size={20} strokeWidth={1.5} />
                      </motion.div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 py-6 pt-0 border-t border-white/[0.05] bg-white/[0.01]">
                            <div className="flex items-start gap-4">
                              <span className="text-[#C4A35A] font-bold text-sm flex-shrink-0">
                                A
                              </span>
                              <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredFAQ.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-white/50">
                    この カテゴリに関する質問はまだ登録されていません。
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 lg:py-24 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center border border-white/[0.1] p-10 lg:p-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                まだご不明な点がありますか？
              </h2>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                こちらに記載されていないご質問やご不明な点がございましたら、
                <br />
                お気軽にお問い合わせください。
                <br />
                無料相談で詳しくご説明いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-block px-10 py-4 bg-[#C4A35A] text-black font-semibold hover:bg-[#d4b36a] transition-all duration-300 text-sm tracking-wide"
                >
                  無料相談フォーム
                </a>
                <a
                  href="tel:+81-xx-xxxx-xxxx"
                  className="inline-block px-10 py-4 border border-[#C4A35A] text-[#C4A35A] hover:bg-[rgba(196,163,90,0.1)] transition-all duration-300 text-sm font-semibold tracking-wide"
                >
                  お電話でのご相談
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 lg:py-24 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
                関連ページ
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="/services/sns-pricing"
                  className="group p-8 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#C4A35A] transition-colors">
                      料金プラン
                    </h3>
                    <span className="text-[#C4A35A]">→</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    3段階の料金プランと各プランの詳細についてご確認いただけます。
                  </p>
                </a>
                <a
                  href="/services"
                  className="group p-8 border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#C4A35A] transition-colors">
                      サービス一覧
                    </h3>
                    <span className="text-[#C4A35A]">→</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    SNS運用代行以外のサービスもご確認いただけます。
                  </p>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
