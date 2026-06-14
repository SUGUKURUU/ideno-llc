"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp, CheckCircle } from "lucide-react";
import type { PortfolioCase } from "@/lib/website-portfolio";

interface PortfolioDetailProps {
  portfolioCase: PortfolioCase;
}

export default function PortfolioDetail({ portfolioCase }: PortfolioDetailProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.01)] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <a href="/services/website" className="hover:text-white/60 transition">
              実績・ポートフォリオ
            </a>
            <span>/</span>
            <span>{portfolioCase.category}</span>
            <span>/</span>
            <span className="text-white/60">{portfolioCase.company}</span>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl lg:text-4xl">{portfolioCase.image}</span>
            <span className="text-[#C4A35A] text-xs font-medium tracking-widest uppercase bg-[rgba(196,163,90,0.1)] px-3 py-1 rounded-full">
              {portfolioCase.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {portfolioCase.company}
          </h1>

          {/* Industry */}
          <p className="text-lg text-white/60 mb-8">
            {portfolioCase.industry}
          </p>

          {/* Before/After Metrics */}
          <div className="bg-gradient-to-r from-[rgba(196,163,90,0.1)] to-[rgba(196,163,90,0.02)] border border-[rgba(196,163,90,0.2)] rounded-xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Before */}
              <div>
                <p className="text-white/40 text-sm mb-3 uppercase tracking-wider">改善前</p>
                <p className="text-3xl lg:text-4xl font-bold text-white whitespace-pre-line">
                  {portfolioCase.beforeMetric}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[rgba(196,163,90,0.2)] flex items-center justify-center">
                  <ArrowUpRight className="text-[#C4A35A]" size={24} />
                </div>
              </div>

              {/* After */}
              <div>
                <p className="text-white/40 text-sm mb-3 uppercase tracking-wider">改善後</p>
                <p className="text-3xl lg:text-4xl font-bold text-[#C4A35A] whitespace-pre-line">
                  {portfolioCase.afterMetric}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-[rgba(196,163,90,0.1)]">
              <TrendingUp size={20} className="text-[#C4A35A]" />
              <p className="text-[#C4A35A] font-semibold text-lg">
                {portfolioCase.improvementText}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {portfolioCase.overview.shortDescription}
            </p>
          </div>
        </motion.div>

        {/* Challenges Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#C4A35A]">課題</span>
              <span className="text-white/20">Before</span>
            </h2>
            <p className="text-white/40 text-sm">
              {portfolioCase.challenges.title}
            </p>
          </div>

          <div className="grid gap-4">
            {portfolioCase.challenges.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.05, duration: 0.6 }}
                className="flex gap-4 p-5 lg:p-6 bg-[rgba(196,163,90,0.05)] border border-[rgba(196,163,90,0.1)] rounded-lg hover:border-[rgba(196,163,90,0.2)] transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-[rgba(196,163,90,0.2)] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs text-[#C4A35A] font-bold">{idx + 1}</span>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#C4A35A]">解決策</span>
              <span className="text-white/20">Solution</span>
            </h2>
            <p className="text-white/40 text-sm">
              {portfolioCase.solutions.title}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioCase.solutions.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + idx * 0.05, duration: 0.6 }}
                className="p-6 lg:p-8 bg-gradient-to-br from-[rgba(196,163,90,0.1)] to-[rgba(196,163,90,0.02)] border border-[rgba(196,163,90,0.1)] rounded-lg hover:border-[rgba(196,163,90,0.3)] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle className="text-[#C4A35A] mt-1 flex-shrink-0" size={20} />
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20 lg:mb-28"
        >
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#C4A35A]">成果</span>
              <span className="text-white/20">After</span>
            </h2>
          </div>

          {/* Quantitative Results */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-white mb-8">定量的成果</h3>
            <div className="grid gap-4">
              {portfolioCase.results.quantitative.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + idx * 0.05, duration: 0.6 }}
                  className="p-6 bg-[rgba(196,163,90,0.05)] border border-[rgba(196,163,90,0.1)] rounded-lg"
                >
                  <p className="text-white/60 text-sm mb-3">{result.label}</p>
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div>
                      <p className="text-white/40 text-xs mb-1">改善前</p>
                      <p className="text-white font-bold text-lg">{result.before}</p>
                    </div>
                    <div className="flex justify-center">
                      <ArrowUpRight className="text-[#C4A35A]" size={20} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs mb-1">改善後</p>
                      <p className="text-[#C4A35A] font-bold text-lg">{result.after}</p>
                    </div>
                  </div>
                  <p className="text-[#C4A35A] text-sm font-semibold mt-3">
                    {result.improvement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Qualitative Results */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-8">定性的効果</h3>
            <div className="grid gap-4">
              {portfolioCase.results.qualitative.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + idx * 0.05, duration: 0.6 }}
                  className="flex gap-4 p-5 lg:p-6 bg-gradient-to-r from-[rgba(196,163,90,0.1)] to-transparent border border-[rgba(196,163,90,0.1)] rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C4A35A] mt-2 flex-shrink-0" />
                  <p className="text-white/70 text-base leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Client Voice Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-20 lg:mb-28 p-8 lg:p-12 bg-gradient-to-r from-[rgba(196,163,90,0.15)] to-[rgba(196,163,90,0.05)] border border-[rgba(196,163,90,0.2)] rounded-xl"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>クライアント評価</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <blockquote className="text-white text-lg leading-relaxed mb-6 border-l-4 border-[#C4A35A] pl-6 italic">
                「{portfolioCase.clientVoice.comment}」
              </blockquote>
              <div>
                <p className="text-white font-semibold text-base">
                  {portfolioCase.clientVoice.name}
                </p>
                <p className="text-[#C4A35A] text-sm">
                  {portfolioCase.clientVoice.position}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        {portfolioCase.timeline && portfolioCase.timeline.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mb-20 lg:mb-28"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 flex items-center gap-3">
              <span className="text-[#C4A35A]">プロジェクトタイムライン</span>
            </h2>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C4A35A] to-[rgba(196,163,90,0.2)]" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {portfolioCase.timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1 + idx * 0.1, duration: 0.6 }}
                    className="relative pl-24 lg:pl-32"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 lg:left-6 top-2 w-12 h-12 rounded-full bg-black border-2 border-[#C4A35A] flex items-center justify-center">
                      <span className="text-[#C4A35A] font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {item.phase}
                        </h3>
                        <span className="text-[#C4A35A] text-sm font-medium">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center py-12 lg:py-16"
        >
          <p className="text-white/60 text-base lg:text-lg mb-8">
            このような実績を貴社でも実現できます。
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]"
          >
            無料相談を予約する
            <ArrowUpRight size={16} />
          </a>
        </motion.section>
      </div>
    </section>
  );
}
