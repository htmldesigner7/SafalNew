export interface CultureCard {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

export interface CultureContent {
  title: string;
  subtitle: string;
  cards: CultureCard[];
}

export const cultureData: CultureContent = {
  title: "The DNA of Our Culture.",
  subtitle: "Elite systems require disciplined thinking. What we build externally is defined by how we operate internally.",
  cards: [
    {
      id: "velocity",
      subtitle: "",
      title: "Relentless Velocity",
      description: "We operate with urgency and precision. Speed to execution, without compromise, defines our competitive edge.",
      imageSrc: "/images/our-story/Relentless-Velocity.webp",
      bgColor: "#F2ECCA"
    },
    {
      id: "integrity",
      subtitle: "",
      title: "Absolute Integrity",
      description: "We build systems designed to scale securely. Governance, transparency, and trust are foundational, not optional.",
      imageSrc: "/images/our-story/Absolute-Integrity.webp",
      bgColor: "#BEE4ED"
    },
    {
      id: "innovation",
      subtitle: "",
      title: "Design-Driven Innovation",
      description: "Technology must function seamlessly and feel intuitive. We balance engineering depth with thoughtful design.",
      imageSrc: "/images/our-story/Design-Driven Innovation.webp",
      bgColor: "#FFDEBD"
    },
    {
      id: "ownership",
      subtitle: "",
      title: "Systemic Ownership",
      description: "We take end-to-end responsibility. From architecture to outcome, accountability is built into everything we deliver.",
      imageSrc: "/images/our-story/Systemic-Ownership.webp",
      bgColor: "#DBE9CB"
    }
  ]
};

export const investorCultureData: CultureContent = {
  title: "The DNA of Our Culture",
  subtitle: "Elite systems require disciplined thinking. The behaviors we embed internally define the outcomes we deliver externally.",
  cards: [
    {
      id: "velocity-new",
      subtitle: "",
      title: "Calculated Urgency",
      description: "We do not wait for change—we engineer it. Speed, when executed with precision, becomes a decisive advantage.",
      imageSrc: "/images/Values-&-Culture/Values-culture/Calculated-Urgency.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "ownership-new",
      subtitle: "",
      title: "Systemic Accountability",
      description: "Ownership is absolute. If we build it, we are accountable for its performance, its impact, and its success.",
      imageSrc: "/images/Values-&-Culture/Values-culture/Systemic-Accountability.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "design-new",
      subtitle: "",
      title: "Aesthetic Intelligence",
      description: "Functionality is expected. Experience is engineered. We design systems that are both powerful and intuitive.",
      imageSrc: "/images/Values-&-Culture/Values-culture/Aesthetic-Intelligence.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "integrity-new",
      subtitle: "",
      title: "Trust Ethics",
      description: "Integrity is foundational. Transparency, security, and ethical data practices guide every decision we make.",
      imageSrc: "/images/Values-&-Culture/Values-culture/Trust-Ethics.webp",
      bgColor: "#d8ead2"
    }
  ]
};

export const TalentData: CultureContent = {
  title: "The DNA of Our Talent",
  subtitle: "Elite outcomes are driven by consistent behaviors. These are the principles that define how we think, build, and deliver.",
  cards: [
    {
      id: "velocity",
      subtitle: "",
      title: "Relentless Velocity",
      description: "You thrive in high-momentum environments, prioritizing execution and clarity over unnecessary complexity.",
      imageSrc: "/images/life-at-safal/Relentless-Velocity.webp",
      bgColor: "#F2ECCA"
    },
    {
      id: "integrity",
      subtitle: "",
      title: "Absolute Integrity",
      description: "You build with responsibility, ensuring transparency, security, and ethical decision-making in everything you create.",
      imageSrc: "/images/life-at-safal/Absolute-Integrity.webp",
      bgColor: "#BEE4ED"
    },
    {
      id: "innovation",
      subtitle: "",
      title: "Aesthetic Intelligence",
      description: "You understand that great technology is not just functionalit is intuitive, elegant, and human-centric.",
      imageSrc: "/images/life-at-safal/Aesthetic-Intelligence.webp",
      bgColor: "#FFDEBD"
    },
    {
      id: "ownership",
      subtitle: "",
      title: "Systemic Ownership",
      description: "You take end-to-end responsibility. From ideation to deployment, you own the outcome, not just the task.",
      imageSrc: "/images/life-at-safal/Systemic-Ownership.webp",
      bgColor: "#DBE9CB"
    }
  ]
};


export const MaterialtData: CultureContent = {
  title: "Are You Safal Material?",
  subtitle: "",
  cards: [
    {
      id: "curiosity",
      subtitle: "",
      title: "Fierce Curiosity",
      description: "You don’t accept surface-level understanding. You question, break down systems, and seek to understand how things truly work.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Fierce-Curiosity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "accountability",
      subtitle: "",
      title: "Radical Accountability",
      description: "You take ownership of your work. You deliver, iterate, and never shift responsibility.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Radical-Accountability.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "adaptability",
      subtitle: "",
      title: "Agile Adaptability",
      description: "You thrive in ambiguity. You learn fast, adjust faster, and perform under evolving challenges.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Agile-Adaptability.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "ego",
      subtitle: "",
      title: "Collaborative Ego",
      description: "You value outcomes over credit. You contribute to the team, challenge constructively, and grow collectively.",
      imageSrc: "/images/Internships-&-Mentorship/Internship/Collaborative-Ego.webp",
      bgColor: "#d8ead2"
    }
  ]
};

export const architectureValueData: CultureContent = {
  title: "The Architecture of Our Value",
  subtitle: "Elite outcomes are driven by disciplined systems. Our value creation model is built on four core pillars:",
  cards: [
    {
      id: "aggressive-trajectory",
      subtitle: "",
      title: "Aggressive Trajectory",
      description: "We drive sustained, compounding revenue growth through expansion into high-margin digital ecosystems, SaaS platforms, and automation-led industries.",
      imageSrc: "/images/Investor-Relations/Investor/Aggressive-Trajectory.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "disciplined-allocation",
      subtitle: "",
      title: "Disciplined Allocation",
      description: "Capital is deployed with precision, balancing forward-looking R&D investments with stable, predictable cash flow generation.",
      imageSrc: "/images/Investor-Relations/Investor/Disciplined-Allocation.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "strategic-diversification",
      subtitle: "",
      title: "Strategic Diversification",
      description: "Our interconnected verticals operate independently yet scale collectively, creating a resilient ecosystem that withstands market volatility.",
      imageSrc: "/images/Investor-Relations/Investor/Strategic-Diversification.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "transparent-governance",
      subtitle: "",
      title: "Transparent Governance",
      description: "We operate with uncompromising transparency, strict compliance standards, and zero-trust frameworks—ensuring long-term investor confidence.",
      imageSrc: "/images/Investor-Relations/Investor/Transparent-Governance.webp",
      bgColor: "#d8ead2"
    }
  ]
};

export const advisoryCapabilitiesData: CultureContent = {
  title: "Core Advisory Capabilities",
  subtitle: "",
  cards: [
    {
      id: "business-advisory",
      title: "Business Advisory",
      description: "Advisory support for structuring operations and decision-making within defined business and financial frameworks.",
      imageSrc: "/images/Business-&-Financial-Advisory/Business-Advisory.webp",
      bgColor: "#F3EED4",
      subtitle: ""
    },
    {
      id: "financial-modelling",
      title: "Financial Modelling",
      description: "Delivery of structured financial modelling services to support forecasting, planning, and investment evaluation.",
      imageSrc: "/images/Business-&-Financial-Advisory/Financial-Modelling.webp",
      bgColor: "#CBE6F5",
      subtitle: ""
    },
    {
      id: "due-diligence",
      title: "Due Diligence",
      description: "Comprehensive financial and operational due diligence to assess risks, validate assumptions, and support investment decisions.",
      imageSrc: "/images/Business-&-Financial-Advisory/Due-Diligence.webp",
      bgColor: "#FDE0C5",
      subtitle: ""
    },
    {
      id: "internal-audits",
      title: "Internal Audits",
      description: "Evaluation of internal controls, compliance systems, and risk frameworks to ensure operational integrity.",
      imageSrc: "/images/Business-&-Financial-Advisory/Internal-Audits.webp",
      bgColor: "#D7EAD3",
      subtitle: ""
    }
  ]
};



export const ValueCreationArchitecture: CultureContent = {
  title: "Flexible Hiring Structures",
  subtitle: "",
  cards: [
    {
      id: "contract-hiring",
      title: "Contract Hiring",
      description: "On-demand talent through tech staffing solutions for short-term or project-based needs.",
      imageSrc: "/images/Technology-Staffing/Contract-Hiring.webp",
      bgColor: "#FDE0C5",
      subtitle: ""
    },
    {
      id: "contract-to-hire",
      title: "Contract-to-Hire",
      description: "Evaluate talent in real-time before transitioning into long-term roles.",
      imageSrc: "/images/Technology-Staffing/Contract-to-Hire.webp",
      bgColor: "#CBE6F5",
      subtitle: ""
    },
    {
      id: "full-time-hiring",
      title: "Full-Time Hiring",
      description: "End-to-end hiring support to build stable, high-performance internal teams.",
      imageSrc: "/images/Technology-Staffing/Full-Time-Hiring.webp",
      bgColor: "#E2F0D9",
      subtitle: ""
    }
  ]
};


export const measuredOperationalOutcomesData: CultureContent = {
  title: "Measured Operational Outcomes",
  subtitle: "",
  cards: [
    {
      id: "accelerated-execution",
      subtitle: "",
      title: "Accelerated Execution",
      description: "Faster workflows and decision cycles across operations",
      imageSrc: "/images/AI-&-Emerging-Technology/Accelerated-Execution.webp",
      bgColor: "#FFDEBD"
    },
    {
      id: "risk-optimization",
      subtitle: "",
      title: "Risk Optimization",
      description: "Reduced operational and decision-making risk",
      imageSrc: "/images/AI-&-Emerging-Technology/Risk-Optimization.webp",
      bgColor: "#F3EED4"
    },
    {
      id: "efficiency-cost-optimization",
      subtitle: "",
      title: "Efficiency & Cost Optimization",
      description: "Improved efficiency with optimized cost structures",
      imageSrc: "/images/AI-&-Emerging-Technology/Efficiency-&-Cost-Optimization.webp",
      bgColor: "#BEE4ED"
    },
    {
      id: "value-impact",
      subtitle: "",
      title: "Enterprise Visibility & Value Impact",
      description: "Enhanced visibility across systems with measurable contribution to EBITDA",
      imageSrc: "/images/AI-&-Emerging-Technology/Value-Impact.webp",
      bgColor: "#DBE9CB"
    }
  ]
};


export const oursolution: CultureContent = {
  title: "Our Solution",
  subtitle: "Engineering a Unified Manufacturing-to-Retail Intelligence Layer",
  cards: [
    {
      id: "production-planning",
      subtitle: "",
      title: "AI-Driven Demand & Production Planning",
      description: "Dynamic demand forecasting aligned production schedules with real-time consumption patterns, reducing overproduction and stockouts.",
      imageSrc: "/images/AI-&-Emerging-Technology/Accelerated-Execution.webp",
      bgColor: "#FFDEBD"
    },
    {
      id: "Inventory-Control",
      subtitle: "",
      title: "Centralized Multi-Outlet Inventory Control",
      description: "A unified inventory system provided live visibility across all outlets, warehouses, and production units, ensuring optimized stock movement.",
      imageSrc: "/images/AI-&-Emerging-Technology/Risk-Optimization.webp",
      bgColor: "#F3EED4"
    },
    {
      id: "Quality-Control",
      subtitle: "",
      title: "Batch-Wise Traceability & Quality Control",
      description: "End-to-end tracking from production batches to retail shelves improved compliance, quality monitoring, and expiry management.",
      imageSrc: "/images/AI-&-Emerging-Technology/Value-Impact.webp",
      bgColor: "#BEE4ED"
    },
    {
      id: "Route-Optimization",
      subtitle: "",
      title: "Integrated Distribution & Route Optimization",
      description: "Automated replenishment planning and route optimization streamlined logistics, ensuring faster and more efficient outlet servicing.",
      imageSrc: "/images/AI-&-Emerging-Technology/Value-Impact.webp",
      bgColor: "#DBE9CB"
    }
  ]
};

export const architectureOversightData: CultureContent = {
  title: "The Architecture of Our Oversight",
  subtitle: "Elite systems require disciplined governance. The principles we enforce internally define the outcomes we deliver externally.",
  cards: [
    {
      id: "independent-oversight",
      subtitle: "",
      title: "Independent Oversight",
      description: "Our board structure emphasizes independence, bringing diverse global expertise to evaluate strategy, mitigate bias, and ensure accountability at the highest level.",
      imageSrc: "/images/Corporate-Governance/governance/Independent-Oversight.webp",
      bgColor: "#F5F0CE"
    },
    {
      id: "zero-trust-compliance",
      subtitle: "",
      title: "Zero-Trust Compliance",
      description: "We design and operate systems with strict adherence to global data security, privacy regulations, and ethical AI practices, holding ourselves to the same standards as our clients.",
      imageSrc: "/images/Corporate-Governance/governance/Zero-Trust-Compliance.webp",
      bgColor: "#CCEAF4"
    },
    {
      id: "risk-mitigation",
      subtitle: "",
      title: "Risk Mitigation",
      description: "Structured audit frameworks proactively identify and manage financial, operational, and technological risks, ensuring resilience across all business units.",
      imageSrc: "/images/Corporate-Governance/governance/Risk-Mitigation.webp",
      bgColor: "#FBE0C9"
    },
    {
      id: "shareholder-transparency",
      subtitle: "",
      title: "Shareholder Transparency",
      description: "Clear, consistent, and accurate reporting underpins stakeholder trust, supported by open communication and disciplined financial governance.",
      imageSrc: "/images/Corporate-Governance/governance/Shareholder-Transparency.webp",
      bgColor: "#D8EAD2"
    }
  ]
};

export const FlexibleServiceStructures: CultureContent = {
  title: "Flexible Service Structures",
  subtitle: "",
  cards: [
    {
      id: "structure-1",
      subtitle: "",
      title: "Dedicated Accounting Teams",
      description: "Aligned teams delivering end-to-end accounting outsourcing services.",
      imageSrc: "/images/financial-accounting-solutions/Dedicated-Accounting-Teams.webp",
      bgColor: "#FFDEBD"
    },
    {
      id: "structure-2",
      subtitle: "",
      title: "Process-Based Engagement",
      description: "Defined execution of specific accounting functions within structured workflows.",
      imageSrc: "/images/financial-accounting-solutions/Process-Based-Engagement.webp",
      bgColor: "#BEE4ED"
    },
    {
      id: "structure-3",
      subtitle: "",
      title: "Full Outsourcing Model",
      description: "Complete management of accounting operations through scalable service models.",
      imageSrc: "/images/financial-accounting-solutions/Full-Outsourcing-Model.webp",
      bgColor: "#DBE9CB"
    },
   
  ]
};

export const strategicAllyData: CultureContent = {
  title: "The DNA of a Strategic Ally",
  subtitle: "",
  cards: [
    {
      id: "velocity",
      subtitle: "",
      title: "Uncompromising Velocity",
      description: "You move fast and prioritize execution. Speed, adaptability, and decisive action define your approach to growth.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Uncompromising-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "governance",
      subtitle: "",
      title: "Enterprise-Grade Integrity",
      description: "You operate with strong governance, data security, and compliance standards, ensuring trust across every engagement.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Enterprise-Grade-Integrity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "ambition",
      subtitle: "",
      title: "Disruptive Ambition",
      description: "You aim to redefine industries, not just participate in them, leveraging innovation, automation, and design to lead markets.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Disruptive-Ambition.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "accountability",
      subtitle: "",
      title: "Shared Accountability",
      description: "You believe in ownership. Success, risk, and outcomes are shared, built on mutual commitment and aligned incentives.",
      imageSrc: "/images/Strategic-Partnerships/Strategic-Partnerships/Shared-Accountability.webp",
      bgColor: "#d8ead2"
    }
  ]
};
