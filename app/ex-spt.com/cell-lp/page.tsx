"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, X, ArrowRight, TrendingUp } from "lucide-react";

export default function ExSptCellLP() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
                営業活動の先に
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  SNS運用を組み合わせる
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                営業代行では訪問できない層への認知拡大と顧客育成を実現。
                <br />
                新規顧客獲得をさらに加速させるSNS運用代行を追加提案しましょう。
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="#benefits"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  営業メリットを確認 <ArrowRight className="inline ml-2 w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 営業代行との組み合わせ */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              なぜ営業代行 + SNS運用が必要か？
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  営業代行の限界
                </h3>
                <ul className="space-y-3">
                  {[
                    "✗ すべての見込み客に直接訪問できない",
                    "✗ 初回接触のコストが高い",
                    "✗ 訪問前の認知度が低いと成約率が落ちる",
                    "✗ 提案後のフォローアップに時間がかかる",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                  SNS運用で補う
                </h3>
                <ul className="space-y-3">
                  {[
                    "✓ 継続的な認知拡大で初回接触の成功率UP",
                    "✓ 低コストで多数の見込み客にリーチ",
                    "✓ ブランド信頼度の向上で提案がスムーズに",
                    "✓ 24時間の自動営業・顧客育成",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* 相乗効果の図 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-blue-500/30 rounded-lg p-8 text-center"
            >
              <p className="text-gray-300 mb-6">
                <strong>営業代行の訪問成功率</strong>
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-gray-500 text-sm mb-2">認知度なし</p>
                  <p className="text-3xl font-bold text-red-400">15%</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-2">
                    SNS経由で認知
                  </p>
                  <p className="text-4xl font-bold text-cyan-400">45%</p>
                  <p className="text-xs text-green-400 mt-2 font-semibold">
                    3倍UP！
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-2">既存顧客紹介</p>
                  <p className="text-3xl font-bold text-blue-400">60%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 営業メリット */}
        <section id="benefits" className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              営業代行にSNS運用を追加するメリット
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "📈",
                  title: "営業受注率UP",
                  desc: "SNS認知度がある見込み客への営業なら、成約率が3倍に",
                },
                {
                  icon: "🎯",
                  title: "提案チャンス拡大",
                  desc: "訪問できない層への提案が可能に。営業対象を2倍に",
                },
                {
                  icon: "💰",
                  title: "営業コスト削減",
                  desc: "SNS経由の問い合わせで、営業訪問必要な見込み客が減少",
                },
                {
                  icon: "🔄",
                  title: "フォローアップ自動化",
                  desc: "24時間のSNS運用で、営業との接触機会を継続的に創出",
                },
                {
                  icon: "⭐",
                  title: "ブランド価値向上",
                  desc: "SNS発信により、企業イメージが高まり営業効果が加速",
                },
                {
                  icon: "📱",
                  title: "データ連携",
                  desc: "SNS経由のリード情報を営業チームで活用可能",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 料金体系 */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              シンプルな料金体系
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  スタンダードプラン
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  SNS運用基本+営業との連携
                </p>
                <div className="mb-8">
                  <p className="text-gray-400 text-sm">月額</p>
                  <p className="text-4xl font-bold text-cyan-400">10万円</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "毎日のInstagram投稿",
                    "月2本の動画編集",
                    "24時間コメント対応",
                    "月1回の戦略相談",
                    "営業チームへのリード共有",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-lg p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    プレミアムプラン
                  </h3>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    推奨
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6">
                  マルチプラットフォーム+営業最適化
                </p>
                <div className="mb-8">
                  <p className="text-gray-400 text-sm">月額</p>
                  <p className="text-4xl font-bold text-cyan-400">20万円</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Instagram・TikTok・X毎日投稿",
                    "月4本の動画編集",
                    "優先サポート（24時間対応）",
                    "週1回の戦略改善会議",
                    "営業パイプラインの可視化",
                    "専任マネージャー配置",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <Check className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 営業代行との組み合わせプラン */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              営業代行 + SNS運用の相乗効果
            </h2>

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
                        タッチポイント
                      </th>
                      <th className="px-6 py-4 text-center text-gray-300 font-semibold">
                        営業代行のみ
                      </th>
                      <th className="px-6 py-4 text-center text-cyan-400 font-semibold">
                        営業代行 + SNS運用
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { stage: "認知", without: "営業訪問時のみ", with: "日々のSNS + 営業訪問" },
                      {
                        stage: "興味",
                        without: "訪問資料のみ",
                        with: "SNS + メール + 訪問資料",
                      },
                      {
                        stage: "検討",
                        without: "営業フォローのみ",
                        with: "SNS + 営業 + メール自動化",
                      },
                      {
                        stage: "成約",
                        without: "営業力に依存",
                        with: "ブランド信頼度で成約率UP",
                      },
                      {
                        stage: "顧客化後",
                        without: "営業再訪問待ち",
                        with: "24時間のSNS育成継続",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-700 hover:bg-[#2a2a2a]/50 transition"
                      >
                        <td className="px-6 py-4 text-white font-semibold">
                          {row.stage}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-300">
                          {row.without}
                        </td>
                        <td className="px-6 py-4 text-center text-cyan-300 font-semibold">
                          {row.with}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI計算 */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              営業効果の可視化
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 rounded-lg p-8"
            >
              <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-2">営業代行のみ</p>
                  <p className="text-2xl font-bold text-gray-300">月5件成約</p>
                </div>
                <div className="flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">
                    SNS運用追加後
                  </p>
                  <p className="text-3xl font-bold text-cyan-400">月8件成約</p>
                  <p className="text-xs text-green-400 mt-1 font-semibold">
                    60%UP
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">年間効果</p>
                  <p className="text-2xl font-bold text-green-400">+36件</p>
                </div>
              </div>

              <div className="border-t border-blue-500/30 pt-8">
                <p className="text-gray-300 text-center mb-4">
                  <strong>年間投資額：</strong> 120万円（月10万円 × 12ヶ月）
                </p>
                <p className="text-center text-cyan-300 font-bold">
                  追加成約36件 × 100万円（平均案件単価）
                  <br />
                  = 3,600万円の売上増
                  <br />
                  <span className="text-green-400">投資回収率：3,000倍！</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* クライアント事例 */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              営業代行 + SNS運用の成功事例
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  industry: "SaaS企業",
                  before: "月5件のセールス成約",
                  after: "月12件のセールス成約",
                  impact: "+140%",
                  reason: "SNS認知により、提案の成功率が45%から70%に",
                },
                {
                  industry: "コンサルティング企業",
                  before: "営業訪問コスト：1件5万円",
                  after: "営業訪問コスト：1件2万円",
                  impact: "60%削減",
                  reason: "SNS経由の問い合わせが増え、提案数が2倍に",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#1a1a1a] border border-blue-500/30 rounded-lg p-6"
                >
                  <p className="text-cyan-400 font-semibold text-sm mb-4">
                    {item.industry}
                  </p>
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-1">Before</p>
                    <p className="text-white font-semibold">{item.before}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs mb-1">After</p>
                    <p className="text-cyan-300 font-bold text-lg">
                      {item.after}
                    </p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/30 rounded p-3">
                    <p className="text-green-400 font-bold text-sm">
                      {item.impact}
                    </p>
                    <p className="text-gray-300 text-xs mt-1">{item.reason}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA セクション */}
        <section className="py-16 px-6 bg-gradient-to-b from-[#080808] to-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                営業代行の効果を
                <br />
                さらに加速させましょう
              </h2>
              <p className="text-gray-300 mb-8">
                SNS運用代行を組み合わせることで、
                <br />
                営業成約率と効率が大きく向上します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:inquiry@ideno-llc.jp?subject=営業代行+SNS運用の相乗効果プランについて"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  📧 営業効果の詳細を確認
                </a>
                <a
                  href="tel:+81"
                  className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all"
                >
                  📱 相談する
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
