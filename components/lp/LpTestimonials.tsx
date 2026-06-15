'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: '売上が3倍に増えました！',
    description: 'SNS運用を始めてから、認知度が一気に高まりました。',
    company: '製造業',
    icon: '🏭',
  },
  {
    quote: '新卒採用が一気に増えた',
    description: '社長のブランディングで、優秀な人材からのエントリーが増加。',
    company: 'IT企業',
    icon: '💻',
  },
  {
    quote: 'Googleで検索1位になった',
    description: 'SEO最適化されたHPで、検索流入が大幅に増えました。',
    company: 'サービス業',
    icon: '🔍',
  },
  {
    quote: 'インスタが10万フォロワーになった',
    description: 'コンスタントな投稿と戦略で、フォロワーが爆増。',
    company: '美容サロン',
    icon: '💇',
  },
  {
    quote: '社長のファンが増えてる',
    description: 'SNSでの発信を通じて、社長個人のファンが増え、信頼が構築された。',
    company: '飲食店',
    icon: '🍽️',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function LpTestimonials() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
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
            クライアントの声
          </h2>
          <p className="text-gray-600 text-lg">
            実際のクライアントから届いた、リアルな成功の声です。
          </p>
        </motion.div>

        {/* 評判カード */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {/* 星 */}
              <div className="mb-4 text-lg">⭐⭐⭐⭐⭐</div>

              {/* 引用 */}
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {testimonial.quote}
              </h3>

              {/* 説明 */}
              <p className="text-sm text-gray-700 mb-4">
                {testimonial.description}
              </p>

              {/* 会社・業種 */}
              <div className="flex items-center gap-3 pt-4 border-t border-purple-300">
                <span className="text-2xl">{testimonial.icon}</span>
                <span className="text-sm font-semibold text-gray-600">
                  {testimonial.company}
                </span>
              </div>
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
          <p className="text-xl font-bold text-gray-800 mb-3">
            🎉 これらはすべて、実績のあるクライアントです。
          </p>
          <p className="text-gray-600">
            あなたの会社も、同じ成功を手に入れることができます。
            <br className="hidden md:block" />
            今すぐ、行動を始めましょう。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
