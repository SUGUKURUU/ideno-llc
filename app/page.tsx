"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import About from "@/components/About";
import WhyOutsource from "@/components/WhyOutsource";
import DetailedProcess from "@/components/DetailedProcess";
import Service from "@/components/Service";
import Pricing from "@/components/Pricing";
import CTAVariations from "@/components/CTAVariations";
import Strength from "@/components/Strength";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Results />
        <About />
        <WhyOutsource />
        <DetailedProcess />
        <Service />
        <Pricing />
        <CTAVariations />
        <Strength />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
