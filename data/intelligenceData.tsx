import { ReactNode } from 'react';

export interface IntelligenceData {
  title: ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export const aboutIntelligenceData: IntelligenceData = {
  title: <>Driven by<br/>Intelligence.</>,
  description: "Safal Infosoft is more than a software provider; we are an interconnected holding matrix. Every line of code, every brand strategy, and every data model we build is designed to autonomously propel your enterprise forward.",
  buttonText: "Explore Our Divisions",
  buttonLink: "#"
};

export const sandboxData: IntelligenceData = {
  title: <>The R&D Sandbox.</>,
  description: "We allocate 20% of our operational bandwidth to internal innovation. From spatial computing to next-gen predictive AI, we give our teams the playground, the capital, and the resources to break things and build the technology of tomorrow.",
  buttonText: "View Open Roles"
};
