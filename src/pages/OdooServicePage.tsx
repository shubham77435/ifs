import { HeroSection } from "../components/HeroSection";
import { AboutOdooSection } from "../components/AboutOdooSection";
import { ServicesSection } from "../components/ServicesSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ProcessSection } from "../components/ProcessSection";
import { IndustryExpertiseSection } from "../components/IndustryExpertiseSection";
import { AudienceSection } from "../components/AudienceSection";
import { DifferenceSection } from "../components/DifferenceSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { FooterCTA } from "../components/FooterCTA";

export default function OdooServicePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutOdooSection />
      <ServicesSection />
      <ComparisonSection />
      <PortfolioSection />
      <ProcessSection />
      <IndustryExpertiseSection />
      <AudienceSection />
      <DifferenceSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterCTA />
    </main>
  );
}
