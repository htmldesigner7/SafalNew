import InnerPageHero from "@/components/sections/InnerPageHero/InnerPageHero";
import MultiplierSection from "../investor-relations/components/MultiplierSection";
import CultureSection from "@/components/sections/CultureSection/CultureSection";
import SustainableSection from "@/components/sections/SustainableSection/SustainableSection";
import VisionMissionSection from "./components";
import { investorCultureData } from "@/data/cultureData";
import { SingularData } from "@/data/sustainableData";
import { pagesData } from "@/data/pagesData";
import DedicationSection from "./components/DedicationSection";


export default function InvestorRelationsPage() {
  const heroData = pagesData.investorRelations.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <MultiplierSection />
      <CultureSection data={investorCultureData} />
      <DedicationSection />
      <SustainableSection data={SingularData} />
      <VisionMissionSection />
    </main>
  );
}
