import type { Metadata } from "next";
import PageIntro from "@/components/jinzai/PageIntro";
import Company from "@/components/jinzai/Company";

export const metadata: Metadata = {
  title: "会社概要",
};

export default function CompanyPage() {
  return (
    <main>
      <PageIntro eyebrow="About" title="会社概要" />
      <Company />
    </main>
  );
}
