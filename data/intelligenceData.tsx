import { ReactNode } from 'react';

export interface IntelligenceData {
  title: ReactNode;
  description: ReactNode;
  buttonText?: string;
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


export const EconomicData: IntelligenceData = {
  title: <>The Safal Economic Moat.</>,
  description: "Our proprietary AI engines and low-code data frameworks don&apos;t just serve our clients—they optimize our own internal cost structures. This relentless pursuit of operational efficiency creates a widening economic moat, driving up profit margins and ensuring long-term financial resilience in a shifting global economy.",
  buttonText: "Download Q3 Earnings Presentation"
};

export const whoWeWorkWithData: IntelligenceData = {
  title: <>Who We <br />Work With</>,
  description: (
    <>
      <p>As part of our <b>consulting services for startups,</b> Ideaz Ventures works with:</p>
      <ul>
        <li>Founders building new digital products</li>
        <li>Startups at early and growth stages</li>
        <li>Product teams within enterprises</li>
      </ul>
    </>
  )
};

export const partnershipMatrixData: IntelligenceData = {
  title: <>The Safal<br />Partnership Matrix.</>,
  description: "A partnership with the Safal Group is an integration into a comprehensive digital powerhouse. You aren&apos;t just connecting with a single agency; you are plugging directly into an autonomous ecosystem of industrial IoT, creative strategy, financial advisory, and elite software engineering. Together, we engineer an unfair market advantage.",
  buttonText: "Apply for Partnership"
};


export const TheSafalPartnershipMatrixData: IntelligenceData = {
  title: <>The Safal <br/> Partnership Matrix.</>,
  description: "A partnership with the Safal Group is an integration into a comprehensive digital powerhouse. You aren't just connecting with a single agency; you are plugging directly into an autonomous ecosystem of industrial IoT, creative strategy, financial advisory, and elite software engineering. Together, we engineer an unfair market advantage.",
  buttonText: "Apply for Partnership"
};