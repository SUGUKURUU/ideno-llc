'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: '📱',
    title: 'SNS運用代行',
    description: '月〇〇投稿で、フォロワー平均3倍増。問い合わせが自動で増える。',
    benefits: [
      '✓ フォロワー・いいねが増える',
      '✓ 問い合わせが自動で増える',
      '✓ 毎月のレポート＆改善提案',
    ],
    color: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200',
    accentBg: 'bg-blue-100',
    link: '/',
  },
  {
    icon: '🌐',
    title: 'ホームページ制作',
    description: '企業の「顔」を作る。問い合わせが3倍に増えた企業多数。',
    benefits: [
      '✓ 問い合わせ3倍の実績',
      '✓ SEO最適化済み',
      '✓ モバイル完全対応',
    ],
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    accentBg: 'bg-green-100',
    link: '/services/website',
  },
  {
    icon: '👑',
    title: '社長ブランディング',
    description: '社長が発信する。信頼が生まれる。採用が変わる。',
    benefits: [
      '✓ 社長のファンが増える',
      '✓ 信頼が構築される',
      '✓ 採用に強くなる',
    ],
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    accentBg: 'bg-orange-100',
    link: '/services/shacho-no-ichinichi',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function LpServices() {
  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-blue-50"
    >
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
            3つのサービスで、解決します
          </h2>
          <p className="text-gray-600 text-lg">
            企業の課題に応じて、最適なサービスを組み合わせることができます。
          </p>
        </motion.div>

        {/* サービスカード */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-gradient-to-br ${service.color} p-10 rounded-3xl border-2 ${service.border} hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              {/* アイコン */}
              <div className={`text-6xl mb-6 ${service.accentBg} w-24 h-24 rounded-2xl flex items-center justify-center`}>
                {service.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>

              {/* 説明 */}
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* メリット */}
              <div className="space-y-3 mb-8">
                {service.benefits.map((benefit, bidx) => (
                  <p key={bidx} className="text-gray-700 font-semibold text-sm">
                    {benefit}
                  </p>
                ))}
              </div>

              {/* CTA ボタン */}
              <Link
                href={service.link}
                className="inline-block w-full text-center py-3 bg-white text-gray-800 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                詳細はこちら →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ボトムメッセージ */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-blue-100 to-green-100 p-10 rounded-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold text-gray-800 mb-3">
            💡 単体での依頼も、組み合わせるのも自由です。
          </p>
          <p className="text-gray-700">
            予算や目的に合わせて、柔軟にカスタマイズできます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
