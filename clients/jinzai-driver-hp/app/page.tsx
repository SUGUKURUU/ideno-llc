import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import Flow from "@/components/Flow";
import DriverRecruit from "@/components/DriverRecruit";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Strengths />
        <Flow />
        <DriverRecruit />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
