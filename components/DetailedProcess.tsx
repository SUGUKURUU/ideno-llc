"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Video,
  Edit3,
  Share2,
  BarChart3,
  Lightbulb,
  Zap,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const phases = [
  {
    phase: "01",
    icon: Target,
    title: "ヒアリング・戦略立案",
    duration: "1~2週間",
    description: "経営者のビジョン、企業の強み、ターゲット層を深掘り。競合分析も実施し、最適な戦略を設計します。",
    deliverables: [
      "事業分析ドキュメント",
      "ターゲットペルソナ定義",
      "競合分析レポート",
      "SNS戦略書（半年～1年ロードマップ）",
      "コンテンツカレンダー初版",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    phase: "02",
    icon: Video,
    title: "撮影・取材",
    duration: "月1回以上",
    description: "プロのカメラマンが貴社に訪問。代表インタビュー、商品・サービス紹介、職場風景など多角的に素材を撮影します。",
    deliverables: [
      "4K高画質撮影",
      "複数シーンの素材確保",
      "代表インタビュー映像",
      "B-roll（背景映像）",
      "テキスト・音声データ",
    ],
    color: "from-purple-500 to-pink-600",
  },
  {
    phase: "03",
    icon: Edit3,
    title: "動画編集・コンテンツ制作",
    duration: "継続的",
    description: "ショート動画特化の編集技術。視聴者の心を掴む構成、BGM、テロップで、最後まで見たくなる動画に仕上げます。",
    deliverables: [
      "Instagram Reels（1~2本/週）",
      "TikTok（2~3本/週）",
      "YouTube Shorts（1本/週）",
      "LinkedIn記事（2~3本/月）",
      "キャプション・ハッシュタグ作成",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    phase: "04",
    icon: Share2,
    title: "投稿・エンゲージメント対応",
    duration: "毎日実施",
    description: "最適なタイミングで各プラットフォームに投稿。コメント返信、DMフォローアップで、ファンコミュニティを構築します。",
    deliverables: [
      "毎日定時投稿",
      "コメント・DM返信",
      "フォロワー管理",
      "トレンドハッシュタグ活用",
      "コミュニティ育成",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    phase: "05",
    icon: BarChart3,
    title: "データ分析・レポート",
    duration: "月1回",
    description: "インプレッション、フォロワー増加、エンゲージメント率を詳細分析。何が成功して何が失敗したかを可視化します。",
    deliverables: [
      "月次分析レポート",
      "KPI達成度レポート",
      "投稿パフォーマンス分析",
      "競合ベンチマーク比較",
      "今月のハイライト",
    ],
    color: "from-indigo-500 to-blue-600",
  },
  {
    phase: "06",
    icon: Lightbulb,
    title: "改善提案・最適化",
    duration: "継続的",
    description: "データを基に、来月以降の施策を提案。アルゴリズム更新、トレンド変化に対応し、成果を伸ばし続けます。",
    deliverables: [
      "翌月戦略提案",
      "施策の追加・改善",
      "新プラットフォーム対応検討",
      "A/Bテスト設計",
      "成長施策の立案",
    ],
    color: "from-yellow-500 to-orange-500",
  },
];

const timeline = [
  { month: "1ヶ月目", milestone: "ブランド理解・コンテンツ本格化", icon: Lightbulb },
  { month: "3ヶ月目", milestone: "トレンド把握・最適化開始", icon: Zap },
  { month: "6ヶ月目", milestone: "フォロワー2~3倍に。成果可視化", icon: Users },
  { month: "12ヶ月目", milestone: "3~4倍成長。採用・売上に直結", icon: Target },
];

export default function DetailedProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[rgba(196,163,90,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">
            Service Process
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          運用プロセス
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">詳細</span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-white/40 text-base max-w-2xl mb-16"
        >
          初期ヒアリングから月次改善まで、すべてのステップで企業の成長を支援します。
          各段階での実装内容と、期待される成果をご紹介します。
        </motion.p>

        {/* Service phases */}
        <div className="space-y-6 mb-24">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                custom={i + 3}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                className="group rounded-lg border border-white/[0.08] hover:border-[rgba(196,163,90,0.2)] overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <div className={`p-8 lg:p-10 bg-gradient-to-r ${phase.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-sm font-medium mb-1">{phase.phase}</div>
                        <h3 className="text-white font-bold text-xl lg:text-2xl">{phase.title}</h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-white/80 text-sm mb-1">期間</div>
                      <div className="text-white font-semibold">{phase.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 bg-[#080808]">
                  <p className="text-white/60 text-base leading-relaxed mb-8">{phase.description}</p>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-white/80 text-sm font-medium uppercase tracking-wider mb-4">成果物・実装項目</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A35A] mt-2 flex-shrink-0" />
                          <span className="text-white/50 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          custom={9}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">成果の進捗目安</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.month}
                  custom={i}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="p-6 rounded-lg border border-white/[0.08] hover:border-[rgba(196,163,90,0.2)] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-[#C4A35A]" />
                    <span className="text-white font-semibold">{item.month}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.milestone}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={10}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="p-10 rounded-lg border border-[rgba(196,163,90,0.2)] bg-[rgba(196,163,90,0.02)] text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-3">詳しいプロセスを知りたい方へ</h3>
          <p className="text-white/40 text-base mb-6 max-w-2xl mx-auto">
            実際のプロジェクト例、タイムライン、成功事例をご紹介する個別ミーティングをセッティングできます。
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300"
          >
            個別相談を予約する
          </button>
        </motion.div>
      </div>
    </section>
  );
}
