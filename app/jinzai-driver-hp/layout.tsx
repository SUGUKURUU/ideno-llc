import type { Metadata } from "next";
import JinzaiHeader from "@/components/jinzai/Header";
import JinzaiFooter from "@/components/jinzai/Footer";

const siteName = "compath株式会社";
const siteDescription =
  "人材紹介事業と貨物軽自動車運送の業務委託で、企業の「人」と「物流」の課題を解決します。";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  // 提案用のサンプルサイトのため検索エンジンには出さない
  robots: { index: false, follow: false },
};

export default function JinzaiDriverHpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="jinzai-theme bg-jinzai-bg text-jinzai-fg min-h-screen flex flex-col font-sans antialiased">
      <JinzaiHeader />
      <div className="flex-1">{children}</div>
      <JinzaiFooter />
    </div>
  );
}
