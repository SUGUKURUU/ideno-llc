'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    industry: '製造業',
    icon: '🏭',
    before: '月10件',
    after: '月42件',
    multiplier: '4.2倍',
    color: 'from-blue-100 to-blue-50',
  },
  {
    industry: '美容サロン',
    icon: '💇',
    before: '月30件',
    after: '月90件',
    multiplier: '3倍',
    color: 'from-pink-100 to-pink-50',
  },
  {
    industry: 'プログラミング教室',
    icon: '💻',
    before: '月5件',
    after: '月25件',
    multiplier: '5倍',
    color: 'from-purple-100 to-purple-50',
  },
  {
    industry: '医療クリニック',
    icon: '🏥',
    before: '月100人',
    after: '月450人',
    multiplier: '4.5倍',
    color: 'from-red-100 to-red-50',
  },
  {
    industry: '飲食店',
    icon: '🍽️',
    before: '月200人',
    after: '月600人',
    multiplier: '3倍',
    color: 'from-orange-100 to-orange-50',
  },
  {
    industry: '不動産仲介',
    icon: '🏠',
    before: '月5件',
    after: '月20件',
    multiplier: '4倍',
    color: 'from-green-100 to-green-50',
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

export default function LpCaseStudies() {
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
            様々な業種で成功しています
          </h2>
          <p className="text-gray-600 text-lg">
            業種・規模問わず、すべての企業で成果が出ています。
          </p>
        </motion.div>

        {/* 成功事例カード */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cases.map((caseItem, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-gradient-to-br ${caseItem.color} p-8 rounded-2xl border-2 border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              {/* アイコン */}
              <div className="text-5xl mb-4">{caseItem.icon}</div>

              {/* 業種 */}
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {caseItem.industry}
              </h3>

              {/* ビフォーアフター */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">依頼前</span>
                  <span className="text-gray-800 font-bold text-lg">
                    {caseItem.before}
                  </span>
                </div>
                <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">3ヶ月後</span>
                  <span className="text-green-600 font-bold text-lg">
                    {caseItem.after}
                  </span>
                </div>
              </div>

              {/* 増加率 */}
              <div className="bg-white px-4 py-2 rounded-xl inline-block">
                <p className="text-2xl font-bold text-green-600">
                  {caseItem.multiplier}
                </p>
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
          <p className="text-2xl font-bold text-gray-800 mb-4">
            🚀 平均3倍の成果を実現！
          </p>
          <p className="text-gray-600 text-lg">
            これらはすべて、実績のある企業です。
            <br className="hidden md:block" />
            あなたの会社も、同じ成功を手に入れることができます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
