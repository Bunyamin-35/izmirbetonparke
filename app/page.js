
import HeroSection from "./components/Hero/Hero";
import LogoCloudSection from "./components/LogoCloud/LogoCloud";
import Features from "./components/Feature/Feature";
import CTASection from "./components/CTA/CTASection";
import MetricsSection from "./components/Metrics/Metrics";
import PortfolioSection from "./components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <LogoCloudSection />
      <Features />
      <PortfolioSection/>
      <MetricsSection/> 
      <CTASection />
    </div>
  );
}
// className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"