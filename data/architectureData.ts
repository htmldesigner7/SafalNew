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
