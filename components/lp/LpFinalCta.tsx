'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LpFinalCta() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 relative overflow-hidden">
      {/* 背景デコレーション */}
      <div className="absolute top-10 right-10 text-white opacity-10 text-9xl">
        ✨
      </div>
      <div className="absolute bottom-10 left-10 text-white opacity-10 text-9xl">
        🚀
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* メインメッセージ */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            さあ、会社の発信を
            <br className="hidden md:block" />
            始めましょう。
          </motion.h2>

          {/* サブメッセージ */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white mb-10 opacity-95"
          >
            SNS、HP、社長ブランディング。
            <br className="hidden md:block" />
            3つのサービスで、あなたの会社の魅力を世界へ発信します。
          </motion.p>

          {/* CTA ボタングループ */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="#contact"
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              📞 無料相談する
            </Link>
            <a
              href="/portfolio"
              className="px-10 py-4 bg-blue-400 text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg"
            >
              📂 ポートフォリオを見る
            </a>
            <a
              href="/resources"
              className="px-10 py-4 bg-blue-400 text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg"
            >
              📄 資料請求
            </a>
          </motion.div>

          {/* 補足 */}
          <motion.p
            variants={itemVariants}
            className="text-white opacity-90 text-sm"
          >
            💬 初回相談は完全無料。押し売りはしません。
            <br className="hidden md:block" />
            まずは、課題をお聞かせください。
          </motion.p>

          {/* 信頼バッジ */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center"
          >
            <div>
              <div className="text-3xl font-bold">100+</div>
              <p className="text-sm opacity-80">クライアント</p>
            </div>
            <div>
              <div className="text-3xl font-bold">3倍</div>
              <p className="text-sm opacity-80">平均成果</p>
            </div>
            <div>
              <div className="text-3xl font-bold">3ヶ月</div>
              <p className="text-sm opacity-80">平均実績</p>
            </div>
            <div>
              <div className="text-3xl font-bold">全業種</div>
              <p className="text-sm opacity-80">対応</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
