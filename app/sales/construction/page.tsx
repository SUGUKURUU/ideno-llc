"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisonData = [
  {
    category: "初期投資",
    performanceBased: "0円",
    monthly: "10万円",
  },
  {
    category: "月額費用",
    performanceBased: "不確定",
    monthly: "10万円（固定）",
  },
  {
    category: "予算管理",
    performanceBased: "❌ 困難",
    monthly: "✅ 簡単",
  },
  {
    category: "継続的改善",
    performanceBased: "❌ 不足",
    monthly: "✅ あり",
  },
  {
    category: "専任サポート",
    performanceBased: "❌ なし",
    monthly: "✅ あり",
  },
];

export default function ConstructionSalesLP() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTab, setSelectedTab] = useState("comparison");

  return (
    <>
      <Header />
      <main className="bg-[#080808] min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                施工実績を
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  営業資産に変える
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                建設業向けSNS運用代行で、毎月安定した顧客流入を実現。
                <br />
                成果報酬型と月額課金型、どちらが本当にお得か解説します。
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#comparison"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  料金比較を見る <ArrowRight className="inline ml-2 w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 問題提示 */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              建設業が抱える課題
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📸",
                  title: "素晴らしい実績が埋もれている",
                  desc: "完成度の高い施工例も、顧客に知られていない",
                },
                {
                  icon: "👥",
                  title: "SNS運用に人手がない",
                  desc: "本業が忙しく、毎日の投稿に時間を割けない",
                },
                {
                  icon: "📉",
                  title: "安定した問い合わせが減っている",
                  desc: "大型案件に頼りがち。継続的な新規顧客獲得が課題",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 料金比較セクション */}
        <section id="comparison" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              成果報酬型 vs 月額課金型
              <br />
              <span className="text-lg text-gray-400 font-normal mt-4 block">
                どちらが本当にお得か、数字で比較
              </span>
            </h2>

            {/* 年間費用シミュレーション */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 成果報酬型 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  成果報酬型
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="border-b border-gray-700 pb-4">
                    <p className="text-gray-400 text-sm mb-2">請負金額の5%</p>
                    <p className="text-2xl font-bold text-white">
                      月3件 × 300万円 = 900万円売上増
                    </p>
                  </div>
                  <div className="border-b border-gray-700 pb-4">
                    <p className="text-gray-400 text-sm mb-2">年間手数料</p>
                    <p className="text-3xl font-bold text-red-400">
                      540万円
                    </p>
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-300 text-sm font-semibold">
                    ⚠️ 売上が多いほど手数料が膨らむ
                  </p>
                </div>
              </motion.div>

              {/* 月額課金型 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">月額課金型</h3>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    推奨
                  </span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="border-b border-blue-500/30 pb-4">
                    <p className="text-gray-400 text-sm mb-2">月額固定</p>
                    <p className="text-2xl font-bold text-white">月10万円</p>
                  </div>
                  <div className="border-b border-blue-500/30 pb-4">
                    <p className="text-gray-400 text-sm mb-2">年間費用</p>
                    <p className="text-3xl font-bold text-cyan-400">130万円</p>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 text-lg font-bold">
                    年間410万円節減！
                  </p>
                  <p className="text-green-300/70 text-xs mt-1">
                    成果報酬型との差額
                  </p>
                </div>
              </motion.div>
            </div>

            {/* 詳細比較表 */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700 bg-[#0a0a0a]">
                      <th className="px-6 py-4 text-left text-white font-semibold">
                        項目
                      </th>
                      <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                        成果報酬型（5%）
                      </th>
                      <th className="px-6 py-4 text-center text-cyan-400 font-semibold">
                        月額課金型（月10万円）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-700 hover:bg-[#2a2a2a]/50 transition"
                      >
                        <td className="px-6 py-4 text-white font-semibold">
                          {row.category}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300">
                          {row.performanceBased}
                        </td>
                        <td className="px-6 py-4 text-center text-cyan-300">
                          {row.monthly}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-blue-500/10">
                      <td className="px-6 py-4 text-white font-bold">
                        最適な企業
                      </td>
                      <td className="px-6 py-4 text-center text-gray-300 text-sm">
                        初期投資を<br />避けたい企業
                      </td>
                      <td className="px-6 py-4 text-center text-cyan-300 font-bold">
                        安定成長を
                        <br />
                        目指す企業
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* メリット・デメリット */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              月額課金型が選ばれる理由
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-red-500/10 border border-red-500/30 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-red-300 mb-6">
                  ❌ 成果報酬型のリスク
                </h3>
                <ul className="space-y-3">
                  {[
                    "毎月の支出が完全に不確定",
                    "売上が多いほど手数料が膨らむ",
                    "受託側が最適化を怠る傾向",
                    "継続的なサポートが期待できない",
                    "アルゴリズム変化への対応が遅い",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <X className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-green-500/10 border border-green-500/30 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-green-300 mb-6">
                  ✅ 月額課金型のメリット
                </h3>
                <ul className="space-y-3">
                  {[
                    "月額固定で予算管理が簡単",
                    "継続的な改善で成果が加速",
                    "専任マネージャーによるサポート",
                    "アルゴリズム変化に素早く対応",
                    "長期的には圧倒的にお得",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <Check className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROI計算 */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              投資回収シミュレーション
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-lg p-8"
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-gray-400 text-sm mb-2">投資額</p>
                  <p className="text-3xl font-bold text-cyan-400">130万円</p>
                  <p className="text-xs text-gray-500 mt-2">（初期設定+12ヶ月）</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">期待される売上増</p>
                  <p className="text-3xl font-bold text-green-400">1,200万円</p>
                  <p className="text-xs text-gray-500 mt-2">
                    （新規案件月+2件）
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">投資回収率</p>
                  <p className="text-4xl font-bold text-white">923倍</p>
                  <p className="text-xs text-green-400 mt-2 font-semibold">
                    3ヶ月で回収
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500/30">
                <p className="text-gray-300 text-sm mb-4">
                  <strong>Year 2：</strong> 新規案件 月+4件 → 売上増 2,400万円
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Year 3：</strong> 新規案件 月+5件 → 売上増 3,000万円
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* サービス内容 */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              月額課金型のサービス内容
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "📸 毎日のInstagram投稿",
                "🎬 月2〜3本の動画編集",
                "💬 24時間以内のコメント・DM対応",
                "📊 月1回のデータ分析＆戦略相談",
                "🎯 トレンド施策の提案・実行",
                "💼 専任マネージャーサポート",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 flex items-start"
                >
                  <span className="text-2xl mr-4">{item.split(" ")[0]}</span>
                  <span className="text-gray-300">{item.split(" ").slice(1).join(" ")}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                施工実績を活かした
                <br />
                SNS運用を始めましょう
              </h2>
              <p className="text-gray-300 mb-8">
                無料診断で、貴社に最適なプランと
                <br />
                期待される売上増を算出します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:inquiry@ideno-llc.jp?subject=建設業向けSNS運用代行の無料診断希望"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  📧 無料診断を申し込む
                </a>
                <a
                  href="tel:+81"
                  className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all"
                >
                  📱 電話で相談する
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
