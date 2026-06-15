'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LpHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="bg-gradient-to-b from-blue-50 via-green-50 to-white pt-20 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* メインメッセージ */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          >
            あなたの会社、
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              発信できていますか？
            </span>
          </motion.h1>

          {/* サブメッセージ */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            SNS、HP、社長ブランディング。
            <br className="hidden md:block" />
            3つのサービスで、会社の魅力を世界へ。
          </motion.p>

          {/* イラストエリア（簡潔なSVG） */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80">
              <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* 背景サークル */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="#E8F4F8"
                  opacity="0.5"
                />

                {/* スマートフォン */}
                <g transform="translate(80, 100)">
                  <rect
                    x="0"
                    y="0"
                    width="90"
                    height="150"
                    rx="8"
                    fill="#333"
                  />
                  <rect
                    x="5"
                    y="8"
                    width="80"
                    height="135"
                    rx="4"
                    fill="#E8F4F8"
                  />
                  <rect
                    x="15"
                    y="25"
                    width="60"
                    height="40"
                    rx="3"
                    fill="#4A90E2"
                  />
                  <circle
                    cx="45"
                    cy="80"
                    r="8"
                    fill="#FF6B35"
                  />
                  <rect
                    x="15"
                    y="100"
                    width="60"
                    height="20"
                    rx="3"
                    fill="#00C853"
                  />
                </g>

                {/* グラフアイコン */}
                <g transform="translate(220, 120)">
                  <rect
                    x="0"
                    y="30"
                    width="20"
                    height="70"
                    fill="#4A90E2"
                    opacity="0.7"
                  />
                  <rect
                    x="25"
                    y="10"
                    width="20"
                    height="90"
                    fill="#00C853"
                    opacity="0.7"
                  />
                  <rect
                    x="50"
                    y="0"
                    width="20"
                    height="100"
                    fill="#FF6B35"
                    opacity="0.7"
                  />
                  <polyline
                    points="10,30 35,10 60,0"
                    stroke="#FFB84D"
                    strokeWidth="2"
                    fill="none"
                  />
                </g>

                {/* 星（成功のしるし） */}
                <g transform="translate(150, 60)">
                  <polygon
                    points="0,-12 3,-3 12,-1 5,5 7,14 0,9 -7,14 -5,5 -12,-1 -3,-3"
                    fill="#FFB84D"
                  />
                </g>
                <g transform="translate(320, 150)">
                  <polygon
                    points="0,-8 2,-2 8,-1 3,3 5,9 0,6 -5,9 -3,3 -8,-1 -2,-2"
                    fill="#4CAF50"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* CTA ボタン */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              📞 まずは無料相談
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white border-2 border-green-500 text-green-600 font-bold rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-300"
            >
              📋 サービス詳細を見る
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-sm text-gray-600"
          >
            <p className="mb-3">✨ 100社以上の企業に選ばれています</p>
            <div className="flex justify-center gap-6 text-gray-500 text-xs md:text-sm">
              <span>🏢 製造業</span>
              <span>🎨 美容サロン</span>
              <span>🏥 医療クリニック</span>
              <span>🍽️ 飲食店</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
