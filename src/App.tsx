import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsBar } from '@/components/sections/StatsBar';
import { WhyOKLASection } from '@/components/sections/WhyOKLASection';
import { ModelsSection } from '@/components/sections/ModelsSection';
import { SavingsCalculator } from '@/components/sections/SavingsCalculator';
import { LocationsSection } from '@/components/sections/LocationsSection';
import { FinancingSection } from '@/components/sections/FinancingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTABanner } from '@/components/sections/CTABanner';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = ['home', 'models', 'why-okla', 'locations', 'financing', 'cta'];

function App() {
  const { activeSection, isScrolled } = useActiveSection(sectionIds);

  return (
    <div className="min-h-[100dvh]">
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <StatsBar />
        <WhyOKLASection />
        <ModelsSection />
        <SavingsCalculator />
        <LocationsSection />
        <FinancingSection />
        <FAQSection />
        <TestimonialsSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
