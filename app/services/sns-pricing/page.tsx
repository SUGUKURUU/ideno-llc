"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "ベーシック",
    priceMin: 50000,
    priceMax: 150000,
    description: "SNS運用をはじめたい企業に",
    featured: false,
    features: [
      "月12投稿（選択したプラットフォーム）",
      "投稿内容の企画・作成",
      "基本的なコメント対応",
      "月1回のレポート提出",
      "初期設定・戦略設計",
    ],
    deliveryTime: "月2～3営業日以内",
    support: "メール対応（営業日）",
    minContract: "3ヶ月",
    platforms: ["Instagram", "TikTok", "Twitter"],
  },
  {
    name: "スタンダード",
    priceMin: 200000,
    priceMax: 500000,
    description: "本格的に成果を出したい企業に",
    featured: true,
    features: [
      "月20投稿（複数プラットフォーム対応）",
      "投稿+コンテンツ制作（画像・動画編集）",
      "キャンペーン企画・運用",
      "フォロワー増加施策",
      "月2回のレポート・改善提案",
      "ハッシュタグ戦略・分析",
      "優先サポート対応",
      "初期設定・戦略設計",
    ],
    deliveryTime: "翌営業日以内",
    support: "チャット＆電話対応",
    minContract: "6ヶ月",
    platforms: ["Instagram", "TikTok", "Twitter", "LINE"],
  },
  {
    name: "エンタープライズ",
    priceMin: 500000,
    priceMax: null,
    description: "複数プラットフォーム＋広告運用",
    featured: false,
    features: [
      "月30投稿以上（すべてのプラットフォーム）",
      "コンテンツ制作（撮影・編集・デザイン）",
      "キャンペーン企画・広告運用",
      "インフルエンサー連携",
      "広告予算の最適化・運用",
      "月3回の詳細レポート＆戦略提案",
      "トレンド分析・市場調査",
      "専任コンサルタント配置",
      "24時間体制のサポート",
      "初期設定・戦略設計",
    ],
    deliveryTime: "即日対応（緊急時）",
    support: "専任コンサルタント＋電話",
    minContract: "12ヶ月",
    platforms: ["Instagram", "TikTok", "Twitter", "LINE", "YouTube", "Facebook"],
  },
];

const customOptions = [
  { name: "撮影代行", description: "商品撮影・取材撮影", price: "別途見積" },
  { name: "動画編集", description: "素材から完成品までの編集", price: "3～10分/本" },
  { name: "広告運用", description: "広告出稿・運用・最適化", price: "月10～50万円" },
  { name: "Webサイト制作", description: "ブランドサイト・LP制作", price: "別途見積" },
  { name: "ブランディング", description: "ロゴ・配色・トンマナ設計", price: "別途見積" },
  { name: "SEOコンサル", description: "SEO戦略・キーワード分析", price: "月5～20万円" },
];

export default function SnsPricingPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

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
                  Pricing Plans
                </span>
                <div className="h-px w-8 bg-[#C4A35A]" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="font-serif-display italic font-light text-[#C4A35A]">SNS運用代行</span>
                <br />
                料金プラン
              </h1>
              <p className="text-white/50 text-lg max-w-2xl mx-auto">
                企業規模と予算に応じた3段階のプランをご用意。すべてのプランに初期設定・戦略設計が含まれています。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section ref={ref} className="py-16 lg:py-32 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className={`relative h-full flex flex-col ${
                    plan.featured
                      ? "md:scale-105 z-10"
                      : ""
                  }`}
                >
                  {/* Card Border & Background */}
                  <div
                    className={`relative flex-1 p-8 lg:p-10 flex flex-col ${
                      plan.featured
                        ? "border border-[rgba(196,163,90,0.5)] bg-[rgba(196,163,90,0.05)]"
                        : "border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-300"
                    }`}
                  >
                    {/* Top Gradient Line */}
                    {plan.featured && (
                      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
                    )}

                    {/* Featured Badge */}
                    {plan.featured && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#080808] border border-[rgba(196,163,90,0.5)]">
                        <span className="text-[#C4A35A] text-[10px] font-medium tracking-[0.2em] uppercase">
                          推奨プラン
                        </span>
                      </div>
                    )}

                    {/* Plan Header */}
                    <div className="mb-8 pt-4">
                      <div
                        className={`text-[11px] font-medium tracking-[0.2em] uppercase mb-4 ${
                          plan.featured ? "text-[#C4A35A]" : "text-white/40"
                        }`}
                      >
                        {plan.name}
                      </div>
                      <p className="text-white/50 text-sm mb-4">{plan.description}</p>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-white/40 text-sm">月額</span>
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`text-4xl lg:text-5xl font-bold tracking-tight ${
                              plan.featured
                                ? "text-[#C4A35A]"
                                : "text-white"
                            }`}
                          >
                            ¥{(plan.priceMin / 10000).toFixed(1)}
                          </span>
                          <span className="text-white/40 text-sm">万</span>
                          {plan.priceMax && (
                            <>
                              <span className="text-white/40 text-sm">～</span>
                              <span
                                className={`text-4xl lg:text-5xl font-bold tracking-tight ${
                                  plan.featured
                                    ? "text-[#C4A35A]"
                                    : "text-white"
                                }`}
                              >
                                ¥{(plan.priceMax / 10000).toFixed(0)}
                              </span>
                              <span className="text-white/40 text-sm">万</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-white/[0.02] rounded-lg border border-white/[0.05]">
                        <div>
                          <div className="text-[10px] text-white/40 tracking-[0.1em] uppercase mb-2">
                            納期
                          </div>
                          <div className="text-sm text-white/70">{plan.deliveryTime}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-white/40 tracking-[0.1em] uppercase mb-2">
                            サポート
                          </div>
                          <div className="text-sm text-white/70">{plan.support}</div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-[10px] text-white/40 tracking-[0.1em] uppercase mb-2">
                            最小契約期間
                          </div>
                          <div className="text-sm text-white/70">{plan.minContract}</div>
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="mb-8">
                        <div className="text-[10px] text-white/40 tracking-[0.1em] uppercase mb-3">
                          対応プラットフォーム
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plan.platforms.map((platform) => (
                            <div
                              key={platform}
                              className="inline-block px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] text-white/60 text-xs rounded"
                            >
                              {platform}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-10 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div
                            className={`w-4 h-4 flex items-center justify-center flex-shrink-0 mt-1 ${
                              plan.featured
                                ? "text-[#C4A35A]"
                                : "text-white/30"
                            }`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span
                            className={`text-sm leading-relaxed ${
                              plan.featured
                                ? "text-white/70"
                                : "text-white/50"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/#contact"
                      className={`w-full py-4 font-semibold text-sm tracking-wide transition-all duration-300 inline-block text-center ${
                        plan.featured
                          ? "bg-[#C4A35A] text-black hover:bg-[#d4b36a]"
                          : "border border-white/[0.15] text-white hover:border-white/30 hover:bg-white/[0.05]"
                      }`}
                    >
                      このプランで相談する
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center mt-12 text-white/30 text-xs space-y-2"
            >
              <div>※ 料金は税別表示です。別途、交通費実費が発生する場合があります。</div>
              <div>※ 最低投稿数以上の追加投稿に対応いたします（別途費用）。</div>
            </motion.p>
          </div>
        </section>

        {/* Custom Options Section */}
        <section className="py-16 lg:py-32 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
                  Add-on Options
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                カスタムオプション
              </h2>
              <p className="text-white/50">
                基本プランに加えて、オプションサービスをご追加いただけます。ご要望に応じてカスタマイズ可能です。
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customOptions.map((option, i) => (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="p-6 border border-white/[0.08] hover:border-white/[0.15] transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {option.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{option.description}</p>
                  <div className="text-[#C4A35A] font-semibold text-sm">
                    {option.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 lg:py-32 relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
                  Comparison
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                プラン比較表
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.1]">
                    <th className="text-left py-4 px-4 text-white font-semibold text-sm">
                      機能
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold text-sm">
                      ベーシック
                    </th>
                    <th className="text-center py-4 px-4 text-[#C4A35A] font-semibold text-sm">
                      スタンダード
                    </th>
                    <th className="text-center py-4 px-4 text-white font-semibold text-sm">
                      エンタープライズ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "月投稿数", basic: "12", standard: "20", enterprise: "30以上" },
                    { feature: "プラットフォーム対応", basic: "3個まで", standard: "4個まで", enterprise: "すべて" },
                    { feature: "コンテンツ制作", basic: "文章のみ", standard: "画像・動画", enterprise: "撮影・編集" },
                    { feature: "キャンペーン企画", basic: "なし", standard: "月1回", enterprise: "月3回" },
                    { feature: "広告運用", basic: "なし", standard: "なし", enterprise: "対応" },
                    { feature: "レポート頻度", basic: "月1回", standard: "月2回", enterprise: "月3回" },
                    { feature: "改善提案", basic: "なし", standard: "あり", enterprise: "専任対応" },
                    { feature: "サポート", basic: "メール", standard: "チャット＆電話", enterprise: "24時間対応" },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-4 text-white/70 text-sm font-medium">
                        {row.feature}
                      </td>
                      <td className="text-center py-4 px-4 text-white/50 text-sm">
                        {row.basic === "なし" ? (
                          <span className="text-white/25">—</span>
                        ) : (
                          row.basic
                        )}
                      </td>
                      <td className="text-center py-4 px-4 text-white/70 text-sm font-medium">
                        {row.standard === "なし" ? (
                          <span className="text-white/25">—</span>
                        ) : (
                          row.standard
                        )}
                      </td>
                      <td className="text-center py-4 px-4 text-white/70 text-sm">
                        {row.enterprise === "なし" ? (
                          <span className="text-white/25">—</span>
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-16 lg:py-32 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#C4A35A]" />
                <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
                  Questions
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                よくある質問
              </h2>
              <p className="text-white/50 mb-8">
                料金やサービスについてよくいただくご質問にお答えします。
              </p>
              <Link
                href="/faq"
                className="inline-block px-8 py-3 border border-[#C4A35A] text-[#C4A35A] hover:bg-[rgba(196,163,90,0.1)] transition-all duration-300 text-sm font-medium tracking-wide"
              >
                よくある質問へ →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                まずは無料でご相談ください
              </h2>
              <p className="text-white/50 mb-10 max-w-2xl mx-auto">
                ご予算やご要望に応じた最適なプランをご提案させていただきます。お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-block px-10 py-4 bg-[#C4A35A] text-black font-semibold hover:bg-[#d4b36a] transition-all duration-300 text-sm tracking-wide"
                >
                  無料相談フォーム
                </Link>
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
      </main>
      <Footer />
    </>
  );
}
