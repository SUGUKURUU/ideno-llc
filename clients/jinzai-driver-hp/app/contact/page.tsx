import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="お問い合わせ"
        description="サービスに関するご相談・ドライバー募集へのご応募は、下記フォームよりお気軽にお問い合わせください。"
      />
      <Contact />
    </main>
  );
}
