import { Metadata } from "next";

const pageTitle = "ホームページ制作 | 成果につながるサイト設計 | EXECUTIVE SUPPORT";
const pageDescription =
  "企業サイト制作で成果を出す。UX設計、説得力あるコピーライティング、制作後サポート。実績50+社。問い合わせが平均3.5倍に増加。初回相談無料。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ホームページ制作",
    "企業サイト",
    "Webサイト",
    "成果型",
    "SEO対策",
    "Web制作",
    "コーポレートサイト",
    "採用サイト",
    "LP制作",
    "中小企業向け",
  ],
  authors: [{ name: "株式会社エグゼクティブサポート" }],
  creator: "株式会社エグゼクティブサポート",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://ideno-llc.jp/services/website",
    title: pageTitle,
    description: pageDescription,
    siteName: "株式会社エグゼクティブサポート | EXECUTIVE SUPPORT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ideno-llc.jp/services/website",
  },
};

export default function WebsiteServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
