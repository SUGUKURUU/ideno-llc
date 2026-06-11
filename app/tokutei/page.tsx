"use client";

import Link from "next/link";

const items = [
  { label: "販売事業者名", value: "合同会社出野" },
  { label: "代表者氏名", value: "出野（代表社員）" },
  { label: "所在地", value: "お問い合わせいただいた際に開示します" },
  { label: "電話番号", value: "お問い合わせいただいた際に開示します" },
  { label: "メールアドレス", value: "info@ideno-llc.jp" },
  { label: "販売価格", value: "各プランページに記載の通り（税別）" },
  { label: "サービス提供時期", value: "契約締結後、協議の上で定める日程より開始" },
  { label: "支払方法", value: "銀行振込（前払い・月払い）" },
  { label: "支払時期", value: "各月の請求書発行後、指定期日までにお支払いください" },
  { label: "返品・キャンセル", value: "サービスの性質上、提供開始後のキャンセル・返金はお受けできません。詳細は契約書をご参照ください。" },
];

export default function TokuteiPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-12"
        >
          ← トップに戻る
        </Link>

        <h1 className="text-3xl font-bold mb-2">特定商取引法に基づく表記</h1>
        <p className="text-white/40 text-sm mb-12">最終更新日：2024年1月1日</p>

        <div className="space-y-0 border border-white/[0.08] rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row ${
                i !== items.length - 1 ? "border-b border-white/[0.06]" : ""
              }`}
            >
              <div className="sm:w-48 flex-shrink-0 px-6 py-4 bg-white/[0.02] text-white/50 text-xs font-medium tracking-wide flex items-start sm:items-center">
                {item.label}
              </div>
              <div className="px-6 py-4 text-white/70 text-sm leading-relaxed flex items-center">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
