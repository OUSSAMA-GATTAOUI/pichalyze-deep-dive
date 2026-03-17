import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import TechSection from "@/components/TechSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useCustomCursor();
  useScrollReveal();

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <Steps />
      <TechSection />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
};

export default Index;
