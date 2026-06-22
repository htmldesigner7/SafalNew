import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import ReportsListSection from './components/ReportsListSection/ReportsListSection';
import { pagesData } from '@/data/pagesData';

export default function FinancialReportsPage() {
  const heroData = pagesData.financialReports.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <ReportsListSection />
    </main>
  );
}
