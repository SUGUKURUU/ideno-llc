import type { Metadata } from "next";
import PageIntro from "@/components/jinzai/PageIntro";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

// TODO: 会社名・代表者・お問い合わせ窓口など確定情報に差し替える
const sections = [
  {
    title: "1. 基本方針",
    body: "［会社名］（以下「当社」）は、人材紹介事業および貨物軽自動車運送事業の業務委託の取扱いにおいて、お客様・求職者・業務委託パートナーの個人情報を適切に管理し、個人情報の保護に関する法令を遵守します。",
  },
  {
    title: "2. 取得する情報",
    body: "当社は、サービスのご提供にあたり以下の情報を取得する場合があります。",
    list: [
      "お名前・会社名・所属",
      "メールアドレス・電話番号・住所",
      "経歴・資格等（人材紹介・ドライバー応募に関する情報）",
      "お問い合わせ内容",
      "ウェブサイトの利用情報（Cookieなど）",
    ],
  },
  {
    title: "3. 利用目的",
    list: [
      "人材紹介サービスのご提供（求職者と企業のマッチングを含む）",
      "業務委託ドライバーの募集・契約に関する対応",
      "お問い合わせへの回答",
      "サービス改善・新サービスの検討",
    ],
  },
  {
    title: "4. 第三者への提供",
    body: "当社は、人材紹介・業務委託のマッチングに必要な範囲で、ご本人の同意を得たうえで提携企業に情報を提供する場合があります。それ以外の目的では、法令に基づく場合を除き、第三者に提供・開示しません。",
  },
  {
    title: "5. 個人情報の安全管理",
    body: "当社は、取得した個人情報を適切に管理し、不正アクセス・漏洩・改ざんなどを防止するための安全管理措置を講じます。",
  },
  {
    title: "6. 開示・訂正・削除等のご請求",
    body: "ご本人からの個人情報の開示・訂正・削除等のご請求には、法令に基づき適切に対応します。下記のお問い合わせ窓口までご連絡ください。",
  },
  {
    title: "7. 本ポリシーの変更",
    body: "当社は、必要に応じて本ポリシーを変更することがあります。変更後の内容は本ページに掲載した時点から効力を生じます。",
  },
  {
    title: "8. お問い合わせ窓口",
    body: "個人情報の取扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。\n［会社名］　担当窓口：［連絡先未確定］",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageIntro eyebrow="Legal" title="プライバシーポリシー" description="最終更新日：［未確定］" />
      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-semibold text-base mb-3">{section.title}</h2>
              {section.body && (
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{section.body}</p>
              )}
              {section.list && (
                <ul className="mt-2 space-y-1.5">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-2 w-1 h-1 rounded-full bg-jinzai-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
