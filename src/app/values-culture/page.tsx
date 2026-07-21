import InnerPageHero from "@/components/sections/InnerPageHero/InnerPageHero";
import CultureSection from "@/components/sections/CultureSection/CultureSection";
import SustainableSection from "@/components/sections/SustainableSection/SustainableSection";
import VisionMissionSection from "./components";
import { investorCultureData } from "@/data/cultureData";
import { SingularData } from "@/data/sustainableData";
import { pagesData } from "@/data/pagesData";
import DedicationSection from "./components/DedicationSection";
import type { Metadata } from "next";
import MultiplierSection from "./components/MultiplierSection";

export const metadata: Metadata = {
  title: "Our Values & Company Culture | Safal Infosoft",
  description:
    "Learn about Safal Infosoft's core values, collaborative culture, and commitment to innovation, integrity, and customer success.",
};


export default function Valuesandculture() {
  const heroData = pagesData.Valuesandculture.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
     <MultiplierSection></MultiplierSection>
      <CultureSection data={investorCultureData} />
      <DedicationSection />
      <SustainableSection data={SingularData} />
      <VisionMissionSection />
    </main>
  );
}
