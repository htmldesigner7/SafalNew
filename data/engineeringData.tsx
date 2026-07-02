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
      subtitle: "Sector / Logistics",
      title: "Autonomous Logistics",
      description: "Eliminating bottlenecks through Industrial IoT and predictive machine learning.",
      imageSrc: "/images/Relentless-Velocity.webp" 
    },
    {
      id: "finance",
      number: "02.",
      subtitle: "Sector / Finance",
      title: "Decentralized Security",
      description: "Balancing seamless API integrations with military-grade zero-trust frameworks.",
      imageSrc: "/images/Relentless-Velocity.webp" // Placeholder icon, replace with actual security icon
    },
    {
      id: "corporate",
      number: "03.",
      subtitle: "Sector / Corporate",
      title: "Enterprise Ecosystems",
      description: "Building cohesive digital narratives that drive deep institutional investor confidence.",
      imageSrc: "/images/Relentless-Velocity.webp" // Placeholder icon, replace with actual ecosystem icon
    },
    {
      id: "industrial",
      number: "04.",
      subtitle: "Sector / Industrial",
      title: "Low-Code Agility",
      description: "Transitioning legacy monoliths into agile micro-services without halting production.",
      imageSrc: "/images/Relentless-Velocity.webp" // Placeholder icon, replace with actual agility icon
    }
  ]
};

export const joinTeamData: EngineeringContent = {
  title: "Why you Should Join Our Awesome Team",
  cards: [
    {
      id: "dynamic-equilibrium",
      number: "01.",
      subtitle: "Sector / Logistics",
      title: "Dynamic Equilibrium",
      description: "Elite performance requires deep recovery. We champion flexible working models and mandatory disconnects to prevent burnout and sustain focus.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "psychological-safety",
      number: "02.",
      subtitle: "Sector / Finance",
      title: "Psychological Safety",
      description: "True innovation requires risk. We cultivate an environment where bold ideas are stress-tested, and failure is treated as a data point, not a career setback.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "mastery-fund",
      number: "03.",
      subtitle: "Sector / Corporate",
      title: "The Mastery Fund",
      description: "We don't just offer training; we provide a dedicated annual budget for every team member to pursue global certifications and master bleeding-edge technologies.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "global-mobility",
      number: "04.",
      subtitle: "Sector / Industrial",
      title: "Global Mobility",
      description: "Prove your impact, and the world opens up. We offer cross-continental project collaboration and rotations between our US, UAE, and Indian hubs.",
      imageSrc: "/images/blogs-inner.webp"
    }
  ]
};

export const blueprintData: EngineeringContent = {
  title: "The Blueprint for Growth.",
  cards: [
    {
      id: "strategic-mentorship",
      number: "01.",
      subtitle: "Lorem",
      title: "Strategic Mentorship",
      description: "You are paired 1-on-1 with a Senior Architect or Director. No generic bootcamps—just targeted, high-level career acceleration and unfiltered feedback.",
      imageSrc: "/images/Relentless-Velocity.webp"
    },
    {
      id: "live-enterprise",
      number: "02.",
      subtitle: "Lorem",
      title: "Live Enterprise Projects",
      description: "Forget dummy data. You will contribute to live codebases, active client campaigns, and high-stakes venture incubations that impact the real world.",
      imageSrc: "/images/Relentless-Velocity.webp"
    },
    {
      id: "bleeding-edge",
      number: "03.",
      subtitle: "Lorem",
      title: "Bleeding-Edge Tech",
      description: "Gain hands-on exposure to the technologies defining the next decade: proprietary low-code frameworks, predictive AI modeling, and Industrial IoT.",
      imageSrc: "/images/Relentless-Velocity.webp"
    },
    {
      id: "fast-track",
      number: "04.",
      subtitle: "Lorem ipsum",
      title: "The Fast Track",
      description: "Our internship is our ultimate talent pipeline. Exceptional performers bypass standard recruiting and receive direct offers to join the matrix full-time upon graduation.",
      imageSrc: "/images/Relentless-Velocity.webp"
    }
  ]
};

export const financialReportData: EngineeringContent = {
  title: "Financial Data & Reporting.",
  cards: [
    {
      id: "quarterly-earnings",
      number: "01.",
      subtitle: "Lorem",
      title: "Quarterly Earnings",
      description: "Access our latest quarterly financial results, executive webcasts, and earnings call transcripts.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "corporate-governance",
      number: "01.",
      subtitle: "Lorem",
      title: "Corporate Governance",
      description: "Review our board of directors, executive committee charters, and strict corporate code of ethics.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "annual-reports",
      number: "01.",
      subtitle: "Lorem",
      title: "Annual Reports",
      description: "Deep dive into our yearly performance metrics, audited financials, and strategic shareholder letters.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "esg-disclosures",
      number: "01.",
      subtitle: "Lorem ipsum",
      title: "ESG Disclosures",
      description: "Track our measurable progress toward our 2040 Net-Zero mandates and global social impact initiatives.",
      imageSrc: "/images/blogs-inner.webp"
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
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "corporate-governance",
      number: "01.",
      subtitle: "",
      title: "Due Diligence for Investment Decisions",
      description: "Evaluation of financial, operational, and compliance factors to support investment decisions.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "annual-reports",
      number: "01.",
      subtitle: "",
      title: "Valuation & Transaction Support",
      description: "Delivery of business valuation and financial advisory services across transaction scenarios and investment processes.",
      imageSrc: "/images/blogs-inner.webp"
    },
    {
      id: "esg-disclosures",
      number: "01.",
      subtitle: "",
      title: "Internal Audit & Compliance Review",
      description: "Assessment of internal systems and controls to strengthen governance and reduce risk exposure.",
      imageSrc: "/images/blogs-inner.webp"
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
      imageSrc: "/images/Installation_Shape__The_202603281531 (1) 1.webp"
    },
    {
      id: "real-time-monitoring",
      number: "02.",
      subtitle: "",
      title: "Real-Time Monitoring Systems",
      description: "Visibility into machine performance and operations.",
      imageSrc: "/images/Installation_Shape__The_202603281531 (1) 1.webp"
    },
    {
      id: "predictive-maintenance",
      number: "03.",
      subtitle: "",
      title: "Predictive Maintenance Systems",
      description: "Reduced downtime through early fault detection.",
      imageSrc: "/images/Installation_Shape__The_202603281531 (1) 1.webp"
    },
    {
      id: "energy-monitoring",
      number: "04.",
      subtitle: "",
      title: "Energy Monitoring & Optimization",
      description: "Improved efficiency and reduced operational costs.",
      imageSrc: "/images/Installation_Shape__The_202603281531 (1) 1.webp"
    }
  ]
};
