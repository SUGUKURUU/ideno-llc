'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    icon: '📱',
    title: 'SNSをやってるけど反応がない',
    description: 'フォロワーが増えない、いいねがもらえない...',
  },
  {
    icon: '🌐',
    title: 'HPを作ったけど問い合わせが来ない',
    description: 'サイトはあるのに、営業につながらない...',
  },
  {
    icon: '🤷',
    title: '会社のことをもっと知ってほしい',
    description: 'いい商品・サービスなのに、認知されていない...',
  },
  {
    icon: '👥',
    title: '採用がうまくいっていない',
    description: 'いい人材が集まらない、面接が少ない...',
  },
  {
    icon: '⚔️',
    title: '競合に負けてる気がする',
    description: '市場での存在感がない、差別化できていない...',
  },
  {
    icon: '❓',
    title: 'デジタル発信を始めたいがどうすればいいか分からない',
    description: 'SNS、HP、ブランディング...何から始めるべき？',
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

export default function LpProblems() {
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
            こんなお悩みありませんか？
          </h2>
          <p className="text-gray-600 text-lg">
            ほとんどの企業が抱える、デジタル発信の課題。
          </p>
        </motion.div>

        {/* 問題カード */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border-2 border-orange-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {problem.description}
              </p>
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
          <p className="text-xl text-gray-700 font-semibold">
            🎯 実は、この課題は
            <span className="text-orange-500"> 解決できます</span>
          </p>
          <p className="text-gray-600 mt-3">
            適切な戦略と実行があれば、ほとんどの企業が成果を出しています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
