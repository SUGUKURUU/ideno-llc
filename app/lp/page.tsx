import { Metadata } from 'next';
import LpHero from '@/components/lp/LpHero';
import LpProblems from '@/components/lp/LpProblems';
import LpServices from '@/components/lp/LpServices';
import LpCaseStudies from '@/components/lp/LpCaseStudies';
import LpComparison from '@/components/lp/LpComparison';
import LpFaq from '@/components/lp/LpFaq';
import LpPlans from '@/components/lp/LpPlans';
import LpTestimonials from '@/components/lp/LpTestimonials';
import LpFinalCta from '@/components/lp/LpFinalCta';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'SNS運用、HP制作、社長ブランディング｜デジタル発信支援サービス',
  description:
    'すべての企業の課題を解決する3つのサービス。SNS運用代行、ホームページ制作、社長ブランディング。業種問わず、平均3倍の成果を実現しています。',
  keywords: [
    'SNS運用',
    'ホームページ制作',
    ' 社長ブランディング',
    'デジタルマーケティング',
    'ウェブサイト制作',
    'インスタグラム',
    'SNS代行',
  ],
  openGraph: {
    title: 'SNS運用、HP制作、社長ブランディング｜デジタル発信支援サービス',
    description:
      'すべての企業の課題を解決する3つのサービス。SNS運用代行、ホームページ制作、社長ブランディング。業種問わず、平均3倍の成果を実現しています。',
    type: 'website',
  },
};

export default function LpPage() {
  return (
    <main className="w-full">
      {/* Hero */}
      <LpHero />

      {/* Problems */}
      <LpProblems />

      {/* Services */}
      <LpServices />

      {/* Case Studies */}
      <LpCaseStudies />

      {/* Comparison */}
      <LpComparison />

      {/* FAQ */}
      <LpFaq />

      {/* Plans */}
      <LpPlans />

      {/* Testimonials */}
      <LpTestimonials />

      {/* Final CTA */}
      <LpFinalCta />

      {/* Contact Form */}
      <Contact />
    </main>
  );
}
