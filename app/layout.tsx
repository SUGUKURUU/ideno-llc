import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ideno-llc.jp";
const siteName = "合同会社出野 | ideno LLC";
const siteDescription =
  "SNSを会社の資産に。認知拡大、採用強化、ブランド構築まで。経営者と企業の魅力を発信するSNS運用代行・ショート動画制作サービス。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "SNS運用代行",
    "ショート動画制作",
    "TikTok運用",
    "Instagram運用",
    "経営者ブランディング",
    "YouTube運営",
    "動画撮影",
    "合同会社出野",
    "ideno LLC",
  ],
  authors: [{ name: "合同会社出野" }],
  creator: "合同会社出野",
  publisher: "合同会社出野",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
