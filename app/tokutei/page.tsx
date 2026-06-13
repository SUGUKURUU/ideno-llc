"use client";

import Link from "next/link";

const items = [
  { label: "販売事業者名", value: "合同会社出野" },
  { label: "所在地", value: "お問い合わせいただいた際に開示します" },
  { label: "電話番号", value: "お問い合わせいただいた際に開示します" },
  { label: "販売価格", value: "各プランページに記載の通り（税別）" },
  { label: "サービス提供時期", value: "契約締結後、協議の上で定める日程より開始" },
  { label: "支払方法", value: "銀行振込（前払い・月払い）" },
  { label: "支払時期", value: "各月の請求書発行後、指定期日までにお支払いください" },
  { label: "返品・キャンセル", value: "サービスの性質上、提供開始後のキャンセル・返金はお受けできません。詳細は契約書をご参照ください。" },
];

export default function TokuteiPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.25)] to-transparent z-50" />

      <div className="max-w-3xl mx-auto px-6 py-28">
        <Link href="/" className="inline-flex items-center gap-2 text-[#C4A35A] opacity-60 hover:opacity-100 text-xs tracking-widest uppercase transition-opacity mb-14">
          ← トップに戻る
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Legal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">特定商取引法に基づく表記</h1>
        <p className="text-white/30 text-sm mb-14 tracking-wide">最終更新日：2026年6月12日</p>

        <div className="luxury-divider mb-14" />

        <div className="border border-[rgba(196,163,90,0.15)] overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row ${i !== items.length - 1 ? "border-b border-white/[0.04]" : ""} hover:bg-[rgba(196,163,90,0.02)] transition-colors duration-200`}
            >
              <div className="sm:w-48 flex-shrink-0 px-6 py-4 bg-[rgba(196,163,90,0.03)] text-[#C4A35A] text-[11px] font-medium tracking-[0.1em] uppercase flex items-start sm:items-center opacity-80">
                {item.label}
              </div>
              <div className="px-6 py-4 text-white/50 text-sm leading-relaxed flex items-center border-t border-white/[0.03] sm:border-t-0 sm:border-l sm:border-white/[0.04]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
