"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors mb-12"
        >
          ← トップに戻る
        </Link>

        <h1 className="text-3xl font-bold mb-2">プライバシーポリシー</h1>
        <p className="text-white/40 text-sm mb-12">最終更新日：2026年6月12日</p>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-base mb-4">1. 個人情報の取り扱いについて</h2>
            <p>
              合同会社出野（以下「当社」）は、お客様の個人情報を適切に管理し、
              個人情報の保護に関する法令を遵守した取り扱いを行います。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">2. 収集する情報</h2>
            <p>当社は以下の情報を収集する場合があります。</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>お名前・会社名</li>
              <li>メールアドレス・電話番号</li>
              <li>お問い合わせ内容</li>
              <li>ウェブサイトの利用情報（Cookieなど）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">3. 利用目的</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>お問い合わせへの回答・サービス提供</li>
              <li>サービス改善・新サービスの開発</li>
              <li>メールマガジン・営業連絡（同意を得た場合）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">4. 個人情報の安全管理</h2>
            <p>
              当社は、お客様の個人情報を厳重に管理し、不正アクセス、紛失、破壊、
              改ざん、漏洩などから保護するために、適切なセキュリティ対策を実施しています。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">5. 第三者への提供</h2>
            <p>
              当社は、法令に基づく場合を除き、お客様の個人情報を第三者に提供・開示しません。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">6. Cookie について</h2>
            <p>
              当サイトでは、利用者の利便性向上のためにCookieを使用しています。
              ブラウザの設定でCookieを無効にすることができます。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">7. ポリシーの変更</h2>
            <p>
              当社は、必要に応じてこのプライバシーポリシーを変更することがあります。
              変更はウェブサイトに掲載した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-4">8. お問い合わせ</h2>
            <p>
              個人情報に関するお問い合わせは、下記までご連絡ください。
              <br />
              合同会社出野 担当窓口：dntty99●gmail.com（●を@に変えてください）
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
