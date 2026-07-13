// import { ReactNode } from 'react';

// export interface ArchitectureCard {
//   id: string;
//   number: string;
//   phase: string;
//   title: string;
//   description: string;
//   isActive?: boolean;
// }

// export interface ArchitectureContent {
//   title: ReactNode;
//   subtitle: string;
//   cards: ArchitectureCard[];
// }

export const architectureData = {
  title: "The Architecture of Growth.",
  subtitle: "Growth is structured. Execution is phased. Outcomes are engineered.",
  cards: [
    {
      id: "audit",
      number: "01",
      phase: "",
      title: "Audit & Architect",
      description: "We assess systems, identify inefficiencies, and define scalable architecture.",
      isActive: true
    },
    {
      id: "develop",
      number: "02",
      phase: "",
      title: "Develop & Automate",
      description: "We build infrastructure, embed intelligence, and enable seamless adoption.",
      isActive: false
    },
    {
      id: "deploy",
      number: "03",
      phase: "",
      title: "Deploy & Migrate",
      description: "We transition systems with precision, ensuring continuity and zero disruption.",
      isActive: false
    },
    {
      id: "monitor",
      number: "04",
      phase: "",
      title: "Monitor & Evolve",
      description: "We continuously optimize performance, adapt systems, and scale intelligently.",
      isActive: false
    }
  ]
};

export const talentAcquisitionData = {
  title: "Structured Talent Acquisition",
  subtitle: "A systematic approach to identifying, validating, and deploying technology talent aligned with business goals and project timelines.",
  cards: [
    {
      id: "understand",
      number: "01",
      phase: "",
      title: "Understand & Define",
      description: "We analyze role requirements, technical expectations, and project scope to define precise hiring criteria, ensuring alignment with business and delivery objectives.",
      isActive: true
    },
    {
      id: "source",
      number: "02",
      phase: "",
      title: "Source & Evaluate",
      description: "Through structured technology recruitment services, we identify and engage relevant talent, followed by rigorous technical screening and capability validation.",
      isActive: false
    },
    {
      id: "shortlist",
      number: "03",
      phase: "",
      title: "Shortlist & Align",
      description: "Candidates are shortlisted based on technical fit, experience, and project compatibility, ensuring seamless alignment with team structures and workflows.",
      isActive: false
    },
    {
      id: "deploy",
      number: "04",
      phase: "",
      title: "Deploy & Scale",
      description: "Selected talent is onboarded within defined timelines, with the flexibility to scale teams efficiently through IT staff augmentation services as requirements evolve.",
      isActive: false
    }
  ]
};

export const alignmentBlueprintData = {
  title: "The Alignment Blueprint",
  subtitle: "High-impact partnerships are structured with clarity and precision. Our onboarding framework ensures alignment from strategy to execution.",
  cards: [
    {
      id: "initiation",
      number: "01",
      phase: "",
      title: "Initiation",
      description: <>Share your organizational profile and capabilities. <br /><br />We assess alignment across technology, market positioning, and potential synergies.
      </>,
      isActive: true
    },
    {
      id: "architecture",
      number: "02",
      phase: "",
      title: "Architecture",
      description: <>Define integration models, collaboration structures, and go-to-market alignment. <br /><br />Every partnership is built with a clear execution blueprint.
      </>,
      isActive: false
    },
    {
      id: "integration",
      number: "03",
      phase: "",
      title: "Integration",
      description: <>Gain access to Safal’s engineering, product, and market infrastructure. <br /><br />Activate collaboration across global teams and capabilities.
      </>,
      isActive: false
    },
    {
      id: "global-scaling",
      number: "04",
      phase: "",
      title: "Global Scaling",
      description: <>Execute joint go-to-market strategies, expand into new markets, and scale with shared momentum and measurable outcomes.</>,
      isActive: false
    }
  ]
};
