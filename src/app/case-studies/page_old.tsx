import CaseStudyHero from './components/CaseStudyHero';
import CaseStudyChallenges from './components/CaseStudyChallenges';
import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { oursolution } from '@/data/cultureData';
import CaseStudyImpact from './components/CaseStudyImpact';
import CaseStudyResults from './components/CaseStudyResults';
import CaseStudyConclusion from './components/CaseStudyConclusion';

export default function CaseStudyPage() {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudyChallenges />
      <CultureSection data={oursolution} hideImages={true} />
      <CaseStudyImpact />
      <CaseStudyResults />
      <CaseStudyConclusion />
    </main>
  );
}




