import { ReactNode } from 'react';

export interface ArchitectureCard {
  id: string;
  number: string;
  phase: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export interface ArchitectureContent {
  title: ReactNode;
  subtitle: string;
  cards: ArchitectureCard[];
}

export const architectureData: ArchitectureContent = {
  title: "The Architecture of Growth.",
  subtitle: "Growth is not accidental; it is engineered. Our methodology shifts organizations from reactive management to proactive market leadership.",
  cards: [
    {
      id: "audit",
      number: "01",
      phase: "Phase",
      title: "Audit & Architect",
      description: "We map your existing legacy debt, identify operational bottlenecks, and blueprint a scalable, low-code architecture tailored to your goals.",
      isActive: true
    },
    {
      id: "develop",
      number: "02",
      phase: "Phase",
      title: "Develop & Automate.",
      description: "Our engineering pods build the infrastructure, train predictive machine learning models, and design the UI/UX required for high user adoption.",
      isActive: false
    },
    {
      id: "deploy",
      number: "03",
      phase: "Phase",
      title: "Deploy & Migrate.",
      description: "We execute a phased rollout. By running legacy and new systems in parallel, we ensure zero operational downtime and secure data migration.",
      isActive: false
    },
    {
      id: "monitor",
      number: "04",
      phase: "Phase",
      title: "Monitor & Evolve.",
      description: "Post-launch, the system's AI takes over continuously monitoring performance, predicting maintenance needs, and scaling server capacity.",
      isActive: false
    }
  ]
};

export const talentAcquisitionData: ArchitectureContent = {
  title: "Structured Talent Acquisition",
  subtitle: "Growth is not accidental; it is engineered. Our methodology shifts organizations from reactive management to proactive market leadership.",
  cards: [
    {
      id: "understand",
      number: "01",
      phase: "Phase",
      title: "Understand & Define",
      description: "We analyze role requirements, technical expectations, and project scope to define precise hiring criteria, ensuring alignment with business and delivery objectives.",
      isActive: true
    },
    {
      id: "source",
      number: "02",
      phase: "Phase",
      title: "Source & Evaluate",
      description: "Through structured technology recruitment services, we identify and engage relevant talent, followed by rigorous technical screening and capability validation.",
      isActive: false
    },
    {
      id: "shortlist",
      number: "03",
      phase: "Phase",
      title: "Shortlist & Align",
      description: "Candidates are shortlisted based on technical fit, experience, and project compatibility, ensuring seamless alignment with team structures and workflows.",
      isActive: false
    },
    {
      id: "deploy",
      number: "04",
      phase: "Phase",
      title: "Deploy & Scale",
      description: "Selected talent is onboarded within defined timelines, with the flexibility to scale teams efficiently through IT staff augmentation services as requirements evolve.",
      isActive: false
    }
  ]
};

export const alignmentBlueprintData: ArchitectureContent = {
  title: "The Alignment Blueprint.",
  subtitle: "High-yield alliances are engineered, not accidental. Our rigorous onboarding framework ensures immediate, compounding ROI for both parties.",
  cards: [
    {
      id: "initiation",
      number: "01",
      phase: "Phase",
      title: "Initiation",
      description: "Submit your corporate profile. Our strategic alliance directors review your technological capabilities and market position for immediate, actionable synergies.",
      isActive: true
    },
    {
      id: "architecture",
      number: "02",
      phase: "Phase",
      title: "Architecture",
      description: "We enter a mutual discovery phase, meticulously mapping out integration points, revenue-sharing models, and joint go-to-market strategies.",
      isActive: false
    },
    {
      id: "integration",
      number: "03",
      phase: "Phase",
      title: "Integration",
      description: "The alliance is activated. You gain secure access to our global engineering pods, venture capital resources, and established enterprise client networks.",
      isActive: false
    },
    {
      id: "global-scaling",
      number: "04",
      phase: "Phase",
      title: "Global Scaling",
      description: "Together, we execute aggressive go-to-market campaigns, driving mutual revenue and capturing new international market share at unprecedented velocity.",
      isActive: false
    }
  ]
};
