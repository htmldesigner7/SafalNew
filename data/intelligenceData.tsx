import { ReactNode } from 'react';

export interface IntelligenceData {
  title: ReactNode;
  description: ReactNode;
  buttonText?: string;
  buttonLink?: string;
}

export const aboutIntelligenceData: IntelligenceData = {
  title: <>Driven by<br/>Intelligence.</>,
  description: <>Safal Infosoft operates as an interconnected system of capabilities. Every solution, platform, and strategy is designed to work in alignment, creating continuity across execution.<br/>We don’t build in silos.<br/>We engineer systems that think, adapt, and scale.</>,
  buttonText: "Explore Our Divisions",
  buttonLink: "#"
};

export const sandboxData: IntelligenceData = {
  title: <>The R&D Sandbox.</>,
  description: <>
  <p>We dedicate a significant portion of our bandwidth to exploration and innovation. From next-generation AI to emerging computing paradigms, we empower our teams to experiment, iterate, and build what’s next.</p>
  <p>This is where ideas are tested.<br/>This is where breakthroughs begin.</p>
  </>,
  buttonText: "View Open Roles"
};


export const EconomicData: IntelligenceData = {
  title: <>The Safal Economic Moat</>,
  description: <>
  <p>Our competitive advantage is engineered, not assumed.</p>
  <p>Through proprietary AI engines, low-code frameworks, and integrated infrastructure, we optimize both client outcomes and internal efficiencies. This dual advantage strengthens margins, enhances scalability, and builds long-term resilience.</p>
  <p>As our ecosystem expands, so does our ability to create defensible market positioning, ensuring sustained performance in evolving global conditions.</p>
  </>,
  buttonText: "Download Q3 Earnings Presentation"
};

export const whoWeWorkWithData: IntelligenceData = {
  title: <>Across Product-Driven Organizations</>,
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
  title: <>The Safal<br />Partnership Matrix</>,
  description: <>
  <p>A partnership with Safal is not a single engagement, it’s integration into a unified, multi-disciplinary ecosystem.</p>
  <p>From enterprise software and industrial automation to creative strategy and financial advisory, our integrated model enables you to operate with expanded capability, reach, and execution strength.</p>
  <p>Together, we don’t just collaborate, we build sustained competitive advantage.</p>
  </>,
  buttonText: "Apply for Partnership"
};


export const TheSafalPartnershipMatrixData: IntelligenceData = {
  title: <>The Safal Partnership Matrix</>,
  description: <>A partnership with Safal is not a collaboration, it is an integration into a larger, high-performance system. <br /><br />You don’t engage with a single division; you connect with an ecosystem spanning industrial IoT, enterprise software, creative strategy, and financial intelligence. Together, we engineer outcomes that create a lasting competitive advantage.
  </>,
  buttonText: "Apply for Partnership"
};