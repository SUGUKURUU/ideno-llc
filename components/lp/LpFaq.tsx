'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'うちの業種に対応してますか？',
    answer:
      'はい、すべての業種に対応しています。製造業、美容サロン、医療クリニック、飲食店、教育、不動産など、あらゆる業種での実績があります。業種特有の課題についても、専門的にサポートします。',
  },
  {
    question: '予算が少ないんですが...',
    answer:
      'ご安心ください。月額3万円からのプランがあります。予算に合わせて、カスタマイズできます。単体サービスからの利用も可能ですので、まずは無料相談で、予算内での最適プランをご提案させていただきます。',
  },
  {
    question: 'どのくらいで効果が出ますか？',
    answer:
      '平均的には3ヶ月で効果が見えてきます。ただし、業種や施策内容によって異なります。最初の1ヶ月で仮説検証し、2ヶ月目以降で加速する、というのが多くのクライアントのパターンです。',
  },
  {
    question: 'SNSだけ、HPだけの依頼もできますか？',
    answer:
      'もちろんです。単体での依頼も、複数の組み合わせもお選びいただけます。「まずはSNSから始めたい」「HPだけリニューアルしたい」といったご要望にも対応しています。',
  },
  {
    question: '実績を見たい',
    answer:
      'ポートフォリオページで、複数の成功事例をご紹介しています。業種別、施策別に事例を掲載していますので、ご参考ください。また、無料相談時に、詳細な事例や成功のポイントについてもお話しします。',
  },
  {
    question: 'どんな人たちが担当してくれますか？',
    answer:
      '社長とマーケティング専門家のチームが担当します。単なる作業者ではなく、ビジネス視点でのアドバイスも含めて、あなたの会社の成長をサポートします。',
  },
];

export default function LpFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* セクションタイトル */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600 text-lg">
            クライアントからよく聞かれる質問と回答です。
          </p>
        </motion.div>

        {/* FAQ アコーディオン */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="w-full px-8 py-6 bg-gradient-to-r from-blue-50 to-green-50 hover:from-blue-100 hover:to-green-100 transition-colors flex items-center justify-between text-left"
              >
                <span className="font-bold text-gray-800 text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl flex-shrink-0"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border-t-2 border-gray-200"
                  >
                    <div className="px-8 py-6 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* 別の質問 */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg">
            他にご質問がありましたら、
            <span className="font-bold"> お気軽にお問い合わせください。</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
