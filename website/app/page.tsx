import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { AcquisitionStack } from '@/components/sections/AcquisitionStack';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { AuditSection } from '@/components/sections/AuditSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioSection />
        <SocialProofSection />
        <ProblemSection />
        <AcquisitionStack />
        <ServicesSection />
        <CaseStudiesSection />
        <AuditSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
