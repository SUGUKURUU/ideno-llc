"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Gold top line */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(196,163,90,0.25)] to-transparent z-50" />

      <div className="max-w-3xl mx-auto px-6 py-28">
        <Link href="/" className="inline-flex items-center gap-2 text-[#C4A35A] opacity-60 hover:opacity-100 text-xs tracking-widest uppercase transition-opacity mb-14">
          ← トップに戻る
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-[#C4A35A]" />
          <span className="text-[#C4A35A] text-[11px] tracking-[0.25em] uppercase font-medium">Legal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">プライバシーポリシー</h1>
        <p className="text-white/30 text-sm mb-14 tracking-wide">最終更新日：2026年6月12日</p>

        <div className="luxury-divider mb-14" />

        <div className="space-y-12">
          {[
            {
              title: "1. 個人情報の取り扱いについて",
              body: "合同会社出野（以下「当社」）は、お客様の個人情報を適切に管理し、個人情報の保護に関する法令を遵守した取り扱いを行います。",
            },
            {
              title: "2. 収集する情報",
              body: "当社は以下の情報を収集する場合があります。",
              list: ["お名前・会社名", "メールアドレス・電話番号", "お問い合わせ内容", "ウェブサイトの利用情報（Cookieなど）"],
            },
            {
              title: "3. 利用目的",
              list: ["お問い合わせへの回答・サービス提供", "サービス改善・新サービスの開発", "メールマガジン・営業連絡（同意を得た場合）"],
            },
            {
              title: "4. 個人情報の安全管理",
              body: "当社は、お客様の個人情報を厳重に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などから保護するために、適切なセキュリティ対策を実施しています。",
            },
            {
              title: "5. 第三者への提供",
              body: "当社は、法令に基づく場合を除き、お客様の個人情報を第三者に提供・開示しません。",
            },
            {
              title: "6. Cookie について",
              body: "当サイトでは、利用者の利便性向上のためにCookieを使用しています。ブラウザの設定でCookieを無効にすることができます。",
            },
            {
              title: "7. ポリシーの変更",
              body: "当社は、必要に応じてこのプライバシーポリシーを変更することがあります。変更はウェブサイトに掲載した時点で効力を生じます。",
            },
            {
              title: "8. お問い合わせ",
              body: "個人情報に関するお問い合わせは、下記までご連絡ください。\n合同会社出野 担当窓口：dntty99●gmail.com（●を@に変えてください）",
            },
          ].map((section) => (
            <div key={section.title} className="border-t border-white/[0.05] pt-10">
              <h2 className="text-white font-semibold text-base mb-4 flex items-center gap-3">
                <span className="w-1 h-4 bg-[#C4A35A] flex-shrink-0" />
                {section.title}
              </h2>
              {section.body && (
                <p className="text-white/45 text-sm leading-relaxed whitespace-pre-line">{section.body}</p>
              )}
              {section.list && (
                <ul className="mt-3 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/45 text-sm">
                      <span className="w-1 h-1 bg-[#C4A35A] opacity-60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
