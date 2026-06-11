"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Service from "@/components/Service";
import Pricing from "@/components/Pricing";
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
        <About />
        <Problems />
        <Service />
        <Pricing />
        <Strength />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
