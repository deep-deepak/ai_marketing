import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StructuredSection } from "./components/StructuredSection";
import { AboutSection } from "./components/AboutSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { ServicesSection } from "./components/ServicesSection";
import { TrustSection } from "./components/TrustSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { BlogSection } from "./components/BlogSection";
import { FitSection } from "./components/FitSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <Hero />
      <StructuredSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <TrustSection />
      <HowItWorksSection />
      <BlogSection />
      <FaqSection />
      <FitSection />
      <Footer />
    </div>
  );
}
