'use client';

import { motion } from 'framer-motion';

const comparisonData = [
  {
    category: '認知拡大',
    sns: 5,
    website: 4,
    branding: 5,
  },
  {
    category: '問い合わせ増加',
    sns: 4,
    website: 5,
    branding: 3,
  },
  {
    category: '採用強化',
    sns: 3,
    website: 4,
    branding: 5,
  },
  {
    category: '信頼構築',
    sns: 4,
    website: 4,
    branding: 5,
  },
  {
    category: 'コスト効率',
    sns: 5,
    website: 3,
    branding: 4,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? '⭐' : '☆'} />
      ))}
    </div>
  );
};

export default function LpComparison() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-blue-50 to-white">
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
            3つのサービスの効果比較
          </h2>
          <p className="text-gray-600 text-lg">
            各サービスの特性を一覧で比較できます。
          </p>
        </motion.div>

        {/* 比較表 */}
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="min-w-full bg-white rounded-3xl border-2 border-gray-200 overflow-hidden">
            <table className="w-full">
              {/* ヘッダー */}
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  <th className="px-6 py-4 text-left font-bold text-lg">
                    効果指標
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-lg">
                    📱 SNS運用
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-lg">
                    🌐 HP制作
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-lg">
                    👑 社長ブランディング
                  </th>
                </tr>
              </thead>

              {/* ボディ */}
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 font-bold text-gray-800 border-r border-gray-200">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">
                      <div className="flex justify-center">
                        <StarRating rating={row.sns} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-r border-gray-200">
                      <div className="flex justify-center">
                        <StarRating rating={row.website} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <StarRating rating={row.branding} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 説明 */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
            <h3 className="font-bold text-gray-800 mb-3">📱 SNS運用が活躍</h3>
            <p className="text-gray-700 text-sm">
              短期的な認知拡大と、継続的な顧客接点に最適。日々の情報発信で、ブランド力を高められます。
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
            <h3 className="font-bold text-gray-800 mb-3">🌐 HP制作が活躍</h3>
            <p className="text-gray-700 text-sm">
              問い合わせの窓口として、もっともコンバージョンが高い。会社の基盤として必須です。
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200">
            <h3 className="font-bold text-gray-800 mb-3">👑 ブランディングが活躍</h3>
            <p className="text-gray-700 text-sm">
              採用強化、信頼構築において最高の効果。社長の個人ブランドが企業価値を高めます。
            </p>
          </div>
        </motion.div>

        {/* ボトムメッセージ */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold text-gray-800">
            💪 組み合わせると、相乗効果で成果が加速します！
          </p>
        </motion.div>
      </div>
    </section>
  );
}
