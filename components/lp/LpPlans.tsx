'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'スタート',
    price: '¥30,000',
    period: '/月',
    description: 'SNS運用のみで、まずは始めたい企業向け',
    features: [
      '✓ SNS投稿：月4回',
      '✓ フォロワー・いいねの分析',
      '✓ 月1回のレポート',
      '✗ HP制作は含まない',
      '✗ 社長ブランディングは含まない',
    ],
    color: 'from-blue-50 to-cyan-50',
    border: 'border-blue-300',
    highlighted: false,
  },
  {
    name: 'スタンダード',
    price: '¥80,000',
    period: '/月',
    description: 'SNS + HPで、基盤を整えたい企業向け（最も人気）',
    features: [
      '✓ SNS投稿：月8回',
      '✓ HPリニューアル（初回のみ）',
      '✓ HP保守・更新',
      '✓ フォロワー・問い合わせ分析',
      '✓ 月1回のレポート＆改善提案',
    ],
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-400',
    highlighted: true,
  },
  {
    name: 'プロフェッショナル',
    price: '¥150,000',
    period: '/月',
    description: '全サービス対応。最大成果を目指す企業向け',
    features: [
      '✓ SNS投稿：月12回',
      '✓ HP全面制作・保守',
      '✓ 社長ブランディング支援',
      '✓ 動画制作（月1本）',
      '✓ 週1回のコンサルティング',
    ],
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-400',
    highlighted: false,
  },
  {
    name: 'カスタム',
    price: 'お見積り',
    period: '',
    description: '企業の課題に合わせて、完全カスタマイズ',
    features: [
      '✓ 現状分析・課題抽出',
      '✓ オーダーメイドプラン設計',
      '✓ 予算に合わせた施策選択',
      '✓ 長期的なコンサルティング',
      '✓ 成果保証サポート',
    ],
    color: 'from-purple-50 to-pink-50',
    border: 'border-purple-400',
    highlighted: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function LpPlans() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            シンプルなプランから選べます
          </h2>
          <p className="text-gray-600 text-lg">
            予算や目的に合わせて、ぴったりなプランが見つかります。
          </p>
        </motion.div>

        {/* プランカード */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-3xl border-2 ${plan.border} hover:shadow-2xl transition-all duration-300 ${
                plan.highlighted ? 'lg:scale-105 lg:z-10' : ''
              }`}
            >
              {/* 人気マーク */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  🌟 最も人気
                </div>
              )}

              {/* プラン名 */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.name}
              </h3>

              {/* 説明 */}
              <p className="text-sm text-gray-700 mb-6">{plan.description}</p>

              {/* 価格 */}
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-800">
                  {plan.price}
                </div>
                <p className="text-gray-600 text-sm">{plan.period}</p>
              </div>

              {/* 機能リスト */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li
                    key={fidx}
                    className={`text-sm ${
                      feature.startsWith('✗')
                        ? 'text-gray-400'
                        : 'text-gray-800 font-semibold'
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA ボタン */}
              <Link
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg'
                    : 'bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-100'
                }`}
              >
                詳しく見る →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ボトムメッセージ */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-4">
            💡 まずは無料相談で、あなたの課題と最適なプランを一緒に考えましょう。
          </p>
          <p className="text-gray-600">
            初期費用は不要。月額料金のみで始められます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
