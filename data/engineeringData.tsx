export interface EngineeringCard {
  id: string;
  number: string;
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface EngineeringContent {
  title: string;
  cards: EngineeringCard[];
}

export const engineeringData: EngineeringContent = {
  title: "Engineering Global Impact.",
  cards: [
    {
      id: "logistics",
      number: "01.",
      subtitle: "",
      title: "Autonomous Logistics",
      description: "Optimizing movement through intelligent systems and predictive operations.",
      imageSrc: "/images/our-story/Our-Story/Decentralized-Security.webp" 
    },
    {
      id: "finance",
      number: "02.",
      subtitle: "",
      title: "Decentralized Security",
      description: "Building trust through zero-trust frameworks and resilient architectures.",
      imageSrc: "/images/our-story/Our-Story/Decentralized-Security.webp" // Placeholder icon, replace with actual security icon
    },
    {
      id: "corporate",
      number: "03.",
      subtitle: "",
      title: "Enterprise Ecosystems",
      description: "Creating connected systems that drive institutional scale and efficiency.",
      imageSrc: "/images/our-story/Our-Story/Enterprise-Ecosystems.webp" // Placeholder icon, replace with actual ecosystem icon
    },
    {
      id: "industrial",
      number: "04.",
      subtitle: "",
      title: "Low-Code Agility",
      description: "Transforming legacy systems into adaptable, high-performance environments.",
      imageSrc: "/images/our-story/Our-Story/Low-Code-Agility.webp" // Placeholder icon, replace with actual agility icon
    }
  ]
};

export const joinTeamData: EngineeringContent = {
  title: "Why You Should Join Our Team",
  cards: [
    {
      id: "dynamic-equilibrium",
      number: "01.",
      subtitle: "",
      title: "Dynamic Equilibrium",
      description: "Elite performance requires balance. We champion flexible work structures and intentional downtime, ensuring sustained focus without burnout.",
      imageSrc: "/images/life-at-safal/Dynamic-Equilibrium.webp"
    },
    {
      id: "psychological-safety",
      number: "02.",
      subtitle: "",
      title: "Psychological Safety",
      description: "Innovation requires courage. We foster an environment where ideas are tested openly, and failure is treated as insight—not limitation.",
      imageSrc: "/images/life-at-safal/Psychological-Safety.webp"
    },
    {
      id: "mastery-fund",
      number: "03.",
      subtitle: "",
      title: "The Mastery Fund",
      description: "Growth is engineered. Every team member gets access to dedicated learning resources, certifications, and opportunities to master emerging technologies.",
      imageSrc: "/images/life-at-safal/The-Mastery-Fund.webp"
    },
    {
      id: "global-mobility",
      number: "04.",
      subtitle: "",
      title: "Global Mobility",
      description: "Your work travels. Collaborate across geographies, contribute to global projects, and explore opportunities across our international hubs.",
      imageSrc: "/images/life-at-safal/Global-Mobility.webp"
    }
  ]
};

export const blueprintData: EngineeringContent = {
  title: "The Blueprint for Growth",
  cards: [
    {
      id: "strategic-mentorship",
      number: "01.",
      subtitle: "",
      title: "Strategic Mentorship",
      description: "Work directly with senior architects and leaders in focused 1-on-1 environments. No generic training, only high-impact guidance and real feedback.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Strategic-Mentorship.webp"
    },
    {
      id: "live-enterprise",
      number: "02.",
      subtitle: "",
      title: "Live Enterprise Projects",
      description: "Contribute to active client systems, production codebases, and venture initiatives that operate in real-world conditions.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Live-Enterprise-Projects.webp"
    },
    {
      id: "bleeding-edge",
      number: "03.",
      subtitle: "",
      title: "Bleeding-Edge Tech",
      description: "Gain exposure to advanced technologies including low-code frameworks, AI systems, automation pipelines, and industrial IoT.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Bleeding-Edge-Tech.webp"
    },
    {
      id: "fast-track",
      number: "04.",
      subtitle: "",
      title: "The Fast Track",
      description: "Top performers transition directly into full-time roles, bypassing traditional hiring cycles and integrating into core teams.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/The-Fast-Track.webp"
    }
  ]
};

export const financialReportData: EngineeringContent = {
  title: "Financial Data & Reporting",
  cards: [
    {
      id: "quarterly-earnings",
      number: "01.",
      subtitle: "",
      title: "Quarterly Earnings",
      description: "Access detailed quarterly performance, including financial statements, earnings calls, and executive insights.",
      imageSrc: "/images/Investor-Relations/Investor/Quarterly-Earnings.webp"
    },
    {
      id: "corporate-governance",
      number: "02.",
      subtitle: "",
      title: "Corporate Governance",
      description: "Review board structures, governance policies, compliance frameworks, and ethical standards guiding our operations.",
      imageSrc: "/images/Investor-Relations/Investor/Corporate-Governance.webp"
    },
    {
      id: "annual-reports",
      number: "03.",
      subtitle: "",
      title: "Annual Reports",
      description: "Explore comprehensive yearly performance, audited financials, and strategic outlooks.",
      imageSrc: "/images/Investor-Relations/Investor/Annual-Reports.webp"
    },
    {
      id: "esg-disclosures",
      number: "04.",
      subtitle: "",
      title: "ESG Disclosures",
      description: "Track measurable progress across environmental, social, and governance initiatives aligned with long-term sustainability goals.",
      imageSrc: "/images/Investor-Relations/Investor/ESG-Disclosures.webp"
    }
  ]
};


export const AdvisoryAcrossDiverse: EngineeringContent = {
  title: "Advisory Across Diverse Scenarios",
  cards: [
    {
      id: "quarterly-earnings",
      number: "01.",
      subtitle: "",
      title: "Business Structuring & Financial Planning",
      description: "Structured advisory across business models, financial planning, and governance frameworks.",
      imageSrc: "/images/Business-&-Financial-Advisory/Business-Advisory.webp"
    },
    {
      id: "corporate-governance",
      number: "02.",
      subtitle: "",
      title: "Due Diligence for Investment Decisions",
      description: "Evaluation of financial, operational, and compliance factors to support investment decisions.",
      imageSrc: "/images/Business-&-Financial-Advisory/Due-Diligence.webp"
    },
    {
      id: "annual-reports",
      number: "03.",
      subtitle: "",
      title: "Valuation & Transaction Support",
      description: "Delivery of business valuation and financial advisory services across transaction scenarios and investment processes.",
      imageSrc: ""
    },
    {
      id: "esg-disclosures",
      number: "04.",
      subtitle: "",
      title: "Internal Audit & Compliance Review",
      description: "Assessment of internal systems and controls to strengthen governance and reduce risk exposure.",
      imageSrc: "/images/Business-&-Financial-Advisory/Internal-Audits.webp"
    }
  ]
};

export const appliedImplementationsData: EngineeringContent = {
  title: 'Applied Industrial Implementations',
  cards: [
    {
      id: "production-line",
      number: "01.",
      subtitle: "",
      title: "Production Line Automation",
      description: "Improved production efficiency and process consistency.",
      imageSrc: "/images/Industrial-Automation-&-IoT/Production-Line-Automation.webp"
    },
    {
      id: "real-time-monitoring",
      number: "02.",
      subtitle: "",
      title: "Real-Time Monitoring Systems",
      description: "Visibility into machine performance and operations.",
      imageSrc: "/images/Industrial-Automation-&-IoT/Real-Time-Monitoring-Systems.webp"
    },
    {
      id: "predictive-maintenance",
      number: "03.",
      subtitle: "",
      title: "Predictive Maintenance Systems",
      description: "Reduced downtime through early fault detection.",
      imageSrc: "/images/Industrial-Automation-&-IoT/Predictive-Maintenance-Systems.webp"
    },
    {
      id: "energy-monitoring",
      number: "04.",
      subtitle: "",
      title: "Energy Monitoring & Optimization",
      description: "Improved efficiency and reduced operational costs.",
      imageSrc: "/images/Industrial-Automation-&-IoT/Energy-Monitoring-&-Optimization.webp"
    }
  ]
};


export const collaborativeEcosystemsData: EngineeringContent = {
  title: 'Collaborative Ecosystems',
  cards: [
    {
      id: "integrations",
      number: "01.",
      subtitle: "",
      title: "Technology Integrations",
      description: "Integrate your platforms, products, or specialized systems into Safal’s ecosystem to deliver high-performance, enterprise-ready solutions at scale.",
      imageSrc: "/images/Become-a-Partner/Becomepartner/Technology-Integrations.webp"
    },
    {
      id: "channel",
      number: "02.",
      subtitle: "",
      title: "Channel & Go-To-Market",
      description: "Expand your global footprint through Safal’s presence across the US, UAE, and India, enabling faster market entry and accelerated growth.",
      imageSrc: "/images/Become-a-Partner/Becomepartner/Channel-&-Go-To-Market.webp"
    },
    {
      id: "co-innovation",
      number: "03.",
      subtitle: "",
      title: "Venture & Co-Innovation",
      description: "Partner with our innovation ecosystem to co-build new products, scale ventures, and bring emerging solutions to market with execution backing.",
      imageSrc: "/images/Become-a-Partner/Becomepartner/Venture-&-Co-Innovation.webp"
    },
    {
      id: "implementation-experts",
      number: "04.",
      subtitle: "",
      title: "Implementation Experts",
      description: "Join as a certified implementation partner to deploy enterprise systems, automation frameworks, and digital transformation initiatives across industries.",
      imageSrc: "/images/Become-a-Partner/Becomepartner/Implementation-Experts.webp"
    }
  ]
};



export const CollaborativeEcosystemsData2: EngineeringContent = {
  title: 'Collaborative Ecosystems',
  cards: [
    {
      id: "integrations",
      number: "01.",
      subtitle: "",
      title: "Technology Integrations",
      description: "Integrate your proprietary software or hardware into Safal’s ecosystem, including platforms like DataNote, to deliver high-performance, scalable solutions to global enterprise clients.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Technology-Integrations.webp"
    },
    {
      id: "channel",
      number: "02.",
      subtitle: "",
      title: "Channel & Go-To-Market",
      description: "Expand into new geographies with structured market entry strategies, leveraging our presence across the US, UAE, and India to accelerate distribution and adoption.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Channel-&-Go-To-Market.webp"
    },
    {
      id: "co-innovation",
      number: "03.",
      subtitle: "",
      title: "Venture & Co-Innovation",
      description: "Work alongside our Ideaz Ventures division to co-build next-generation products, combining capital, engineering depth, and execution to take ideas from concept to scale.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Venture-&-Co-Innovation.webp"
    },
    {
      id: "implementation-experts",
      number: "04.",
      subtitle: "",
      title: "Implementation Experts",
      description: "Become a certified deployment partner for Safal’s enterprise systems, driving digital transformation across industries through proven frameworks and execution expertise.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Implementation-Experts.webp"
    }
  ]
};