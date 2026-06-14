"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { getPortfolioCaseById, getRelatedCases } from "@/lib/website-portfolio";
import Link from "next/link";

interface RelatedPortfoliosProps {
  currentCaseId: string;
}

export default function RelatedPortfolios({ currentCaseId }: RelatedPortfoliosProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const relatedCases = getRelatedCases(currentCaseId, 3);
  const currentCase = getPortfolioCaseById(currentCaseId);

  if (relatedCases.length === 0 || !currentCase) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.01)] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-[#C4A35A]" />
            <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
              Related Cases
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight"
          >
            関連する実績事例
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/40 text-base lg:text-lg leading-relaxed mt-6"
          >
            同様の課題を解決した他の業種での成功事例をご紹介します。
          </motion.p>
        </div>

        {/* Related Portfolio Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {relatedCases.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={`/services/website/${item.id}`}>
                <div className="relative bg-[#080808]/50 border border-[rgba(196,163,90,0.08)] group-hover:border-[rgba(196,163,90,0.2)] rounded-lg overflow-hidden transition-all duration-500 h-full flex flex-col cursor-pointer">
                  {/* Top Section - Image/Icon Area */}
                  <div className="relative h-40 lg:h-48 bg-gradient-to-br from-[rgba(196,163,90,0.1)] to-[rgba(196,163,90,0.02)] flex items-center justify-center overflow-hidden">
                    <span className="text-6xl lg:text-7xl group-hover:scale-110 transition-transform duration-500">
                      {item.image}
                    </span>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#C4A35A] text-xs font-medium tracking-wider uppercase">
                        {item.category}
                      </span>
                      <span className="text-white/30 text-xs font-medium">
                        {item.industry}
                      </span>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-lg font-semibold text-white mb-6 line-clamp-2 group-hover:text-[#C4A35A] transition-colors duration-300">
                      {item.company}
                    </h3>

                    {/* Before/After Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-[rgba(196,163,90,0.1)]">
                      <div>
                        <p className="text-white/40 text-xs mb-1.5">改善前</p>
                        <p className="text-white font-bold text-sm lg:text-base">
                          {item.beforeMetric}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs mb-1.5">改善後</p>
                        <p className="text-white font-bold text-sm lg:text-base">
                          {item.afterMetric}
                        </p>
                      </div>
                    </div>

                    {/* Improvement Text & Icon */}
                    <div className="flex items-start gap-3 mb-6">
                      <TrendingUp size={16} className="text-[#C4A35A] mt-0.5 flex-shrink-0" />
                      <p className="text-[#C4A35A] font-semibold text-sm leading-tight">
                        {item.improvementText}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 text-xs lg:text-sm leading-relaxed flex-grow mb-6">
                      {item.overview.shortDescription.substring(0, 80)}...
                    </p>

                    {/* CTA Link */}
                    <div className="flex items-center gap-2 text-[#C4A35A] text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300 group/link">
                      詳細を見る
                      <ArrowUpRight
                        size={12}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <p className="text-white/40 text-base lg:text-lg mb-8">
            他にも複数業種での実績があります。
          </p>
          <Link
            href="/services/website"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[rgba(196,163,90,0.1)] text-[#C4A35A] font-semibold text-sm tracking-wide border border-[rgba(196,163,90,0.3)] hover:bg-[rgba(196,163,90,0.2)] hover:border-[rgba(196,163,90,0.5)] transition-all duration-300"
          >
            全ての実績を見る
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
