"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Sunrise,
  Users,
  Briefcase,
  Sparkles,
  MessageCircle,
  Video,
  Scissors,
  Send,
  Play,
  Youtube,
} from "lucide-react";

// 公開YouTubeチャンネル
const CHANNEL_URL = "https://www.youtube.com/@one-shacho/videos";
// 個別動画を直接埋め込む場合は、ここに YouTube 動画ID（11桁）を追加してください。
// 例: ["dQw4w9WgXcQ", "abc1234DEFG"]
const VIDEO_IDS: string[] = ["8W7Zz2txefw"];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] via-[#0a0906] to-[#080808]" />

      {/* Geometric art */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block pointer-events-none">
        <svg viewBox="0 0 600 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="420" cy="450" r="320" stroke="rgba(196,163,90,0.05)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="220" stroke="rgba(196,163,90,0.07)" strokeWidth="0.5" />
          <circle cx="420" cy="450" r="120" stroke="rgba(196,163,90,0.09)" strokeWidth="0.5" />
          <line x1="150" y1="0" x2="600" y2="900" stroke="rgba(196,163,90,0.03)" strokeWidth="0.5" />
          <path d="M 520 160 L 560 160 L 560 200" stroke="rgba(196,163,90,0.2)" strokeWidth="0.75" fill="none" />
          <circle cx="420" cy="450" r="4" fill="rgba(196,163,90,0.4)" />
          <circle cx="300" cy="300" r="2" fill="rgba(196,163,90,0.2)" />
          <circle cx="540" cy="600" r="1.5" fill="rgba(196,163,90,0.15)" />
        </svg>
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(196,163,90,0.12)] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-36 pb-24 lg:max-w-[55%]">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4 mb-12">
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">密着ドキュメンタリー</span>
        </motion.div>

        <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8">
          経営者のリアルを
          <br />
          <span className="font-serif-display italic font-light text-[#C4A35A]">映像に。</span>
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-white/40 text-base sm:text-lg leading-relaxed max-w-xl mb-14">
          出社から退社まで密着。会社ではなく「人」を伝えるドキュメンタリー動画を制作します。
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-4">
          <Link href="/#contact" className="group flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]">
            無料相談する
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="/services" className="flex items-center gap-2 px-6 py-4 border border-white/[0.1] text-white/45 hover:text-white/70 text-sm tracking-wide transition-all duration-300">
            他のサービスを見る
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.15)] to-transparent" />
    </section>
  );
}

function Concept() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-8 bg-[#C4A35A]" /><span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Concept</span><div className="h-px w-8 bg-[#C4A35A]" /></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-10 leading-tight">
            会社を選ぶ決め手は、
            <br />
            最後は「人」です。
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-6">
            スペックや実績だけでは、人の心は動きません。
            どんな想いで経営しているのか、どんな日常を過ごしているのか——
            その「リアル」こそが、信頼と共感を生みます。
          </p>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            「社長の一日」は、経営者の素顔を映像で切り取り、
            採用・営業・ブランディングのすべてで活きる資産に変えます。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const captures = [
  { icon: Sunrise, title: "出社・朝のルーティン", description: "一日の始まり方に、その人の哲学が表れます。" },
  { icon: MessageCircle, title: "会議・意思決定", description: "判断の瞬間や、チームとの関わり方を捉えます。" },
  { icon: Briefcase, title: "現場・商談", description: "仕事に向き合う真剣な表情をそのまま記録します。" },
  { icon: Users, title: "社員との対話", description: "経営者と社員の自然な関係性を映し出します。" },
  { icon: Sparkles, title: "想い・ビジョン", description: "インタビューで、言葉にならない価値観を引き出します。" },
  { icon: Sunrise, title: "退社・一日の終わり", description: "ありのままの締めくくりで、人柄を印象づけます。" },
];

function Capture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-8 bg-[#C4A35A]" /><span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">What We Film</span><div className="h-px w-8 bg-[#C4A35A]" /></div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            密着で切り取るもの
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-3xl overflow-hidden">
          {captures.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-[#080808] p-8 lg:p-10 group hover:bg-[rgba(196,163,90,0.02)] transition-colors duration-500"
              >
                <div className="w-10 h-10 border border-[rgba(196,163,90,0.2)] flex items-center justify-center mb-6 group-hover:border-[rgba(196,163,90,0.45)] transition-colors duration-300">
                  <Icon size={17} className="text-[#C4A35A] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const useCases = [
  {
    icon: Users,
    title: "採用",
    description: "求職者に「この人と働きたい」と思わせる。経営者の人柄が、応募の決め手になります。",
  },
  {
    icon: Briefcase,
    title: "営業",
    description: "商談前に動画を見てもらうことで信頼を先に獲得。価格競争から抜け出せます。",
  },
  {
    icon: Sparkles,
    title: "ブランディング",
    description: "「人」を前面に出すことで、他社と明確に差別化された企業イメージを構築します。",
  },
];

function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Use Cases</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            3つの活用シーン
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {useCases.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="border border-white/[0.05] p-8 lg:p-10 group hover:border-[rgba(196,163,90,0.2)] transition-all duration-500"
              >
                <div className="w-12 h-12 border border-[rgba(196,163,90,0.15)] flex items-center justify-center mb-6 group-hover:border-[rgba(196,163,90,0.4)] transition-colors duration-300">
                  <Icon size={20} className="text-[#C4A35A] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-4">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const flow = [
  { icon: MessageCircle, title: "ヒアリング", description: "伝えたい人物像・活用目的をすり合わせます。" },
  { icon: Video, title: "密着撮影", description: "1日同行し、自然体の姿をプロが撮影します。" },
  { icon: Scissors, title: "編集", description: "ストーリー性のある1本の動画に仕上げます。" },
  { icon: Send, title: "納品・活用", description: "用途別に最適化し、SNS・採用・営業に展開します。" },
];

function Flow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-36 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">Workflow</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            制作の流れ
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-white/[0.03] via-white/[0.12] to-white/[0.03]" />
          <div className="space-y-3">
            {flow.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center group-hover:border-white/20 transition-colors duration-300">
                    <Icon size={20} className="text-white/60" />
                  </div>
                  <div className="gradient-border rounded-2xl p-6 flex-1 group-hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white/20 text-xs font-medium tracking-wider">
                        STEP {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Videos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const hasVideos = VIDEO_IDS.length > 0;

  return (
    <section id="videos" ref={ref} className="py-24 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-6">YouTube</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            動画で見る「社長の一日」
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            実際に制作した密着ドキュメンタリーを、YouTubeチャンネルで公開しています。
          </p>
        </motion.div>

        {hasVideos ? (
          <div className="grid sm:grid-cols-2 gap-5">
            {VIDEO_IDS.map((id, i) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-black"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={`社長の一日 動画 ${i + 1}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="group block relative aspect-video rounded-3xl overflow-hidden border border-white/[0.08]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
              <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-2xl bg-[#ff0000] flex items-center justify-center shadow-2xl shadow-red-900/40 group-hover:scale-110 transition-transform duration-300">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-lg sm:text-xl">社長の一日</div>
                <div className="text-white/50 text-sm mt-1">YouTubeチャンネルで動画を見る</div>
              </div>
            </div>

            <div className="absolute top-5 left-5 z-10 flex items-center gap-2 text-white/80">
              <Youtube size={20} className="text-[#ff0000]" />
              <span className="text-sm font-medium">@one-shacho</span>
            </div>
          </motion.a>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[rgba(196,163,90,0.2)] text-white/50 hover:text-[#C4A35A] hover:border-[rgba(196,163,90,0.4)] text-sm font-medium tracking-wide transition-all duration-300"
          >
            <Youtube size={18} className="text-[#ff0000]" />
            YouTubeチャンネルを見る
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Cta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative border border-[rgba(196,163,90,0.25)] bg-[rgba(196,163,90,0.02)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C4A35A] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-48 pointer-events-none">
            <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="200" cy="150" r="150" stroke="rgba(196,163,90,0.06)" strokeWidth="0.5" />
              <circle cx="200" cy="150" r="100" stroke="rgba(196,163,90,0.08)" strokeWidth="0.5" />
              <circle cx="200" cy="150" r="50" stroke="rgba(196,163,90,0.1)" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative z-10 py-16 px-8 lg:px-16">
            <p className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium mb-5">Free Consultation</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              あなたの一日を、
              <br />
              <span className="font-serif-display italic font-light text-[#C4A35A]">会社の力に。</span>
            </h2>
            <p className="text-white/35 text-sm mb-10 max-w-md leading-relaxed">
              密着取材の事例や費用感など、まずはお気軽にご相談ください。
            </p>
            <Link href="/#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C4A35A] text-black font-semibold text-sm tracking-wide hover:bg-[#d4b36a] transition-all duration-300 shadow-lg shadow-[rgba(196,163,90,0.15)]">
              無料相談する
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.3)] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

export default function ShachoContent() {
  return (
    <main>
      <Hero />
      <Concept />
      <Capture />
      <Videos />
      <UseCases />
      <Flow />
      <Cta />
    </main>
  );
}
