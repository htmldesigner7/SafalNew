import { ArchitectureContent } from '@/data/architectureData';

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
