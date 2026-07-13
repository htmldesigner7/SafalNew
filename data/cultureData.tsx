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
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "integrity",
      subtitle: "",
      title: "Absolute Integrity",
      description: "We build systems designed to scale securely. Governance, transparency, and trust are foundational, not optional.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "innovation",
      subtitle: "",
      title: "Design-Driven Innovation",
      description: "Technology must function seamlessly and feel intuitive. We balance engineering depth with thoughtful design.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "ownership",
      subtitle: "",
      title: "Systemic Ownership",
      description: "We take end-to-end responsibility. From architecture to outcome, accountability is built into everything we deliver.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#d8ead2"
    }
  ]
};

export const investorCultureData: CultureContent = {
  title: "The DNA of Our Culture.",
  subtitle: "Elite systems require disciplined thinking. The behaviors we embed internally define the outcomes we deliver externally.",
  cards: [
    {
      id: "velocity-new",
      subtitle: "",
      title: "Calculated Urgency",
      description: "We do not wait for change—we engineer it. Speed, when executed with precision, becomes a decisive advantage.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "ownership-new",
      subtitle: "",
      title: "Systemic Accountability",
      description: "Ownership is absolute. If we build it, we are accountable for its performance, its impact, and its success.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "design-new",
      subtitle: "",
      title: "Aesthetic Intelligence",
      description: "Functionality is expected. Experience is engineered. We design systems that are both powerful and intuitive.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "integrity-new",
      subtitle: "",
      title: "Trust Ethics",
      description: "Integrity is foundational. Transparency, security, and ethical data practices guide every decision we make.",
      imageSrc: "/images/Relentless-Velocity.webp",
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
      imageSrc: "/images/blogs-inner.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "integrity",
      subtitle: "",
      title: "Absolute Integrity",
      description: "You build with responsibility, ensuring transparency, security, and ethical decision-making in everything you create.",
      imageSrc: "/images/blogs-inner.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "innovation",
      subtitle: "",
      title: "Aesthetic Intelligence",
      description: "You understand that great technology is not just functionalit is intuitive, elegant, and human-centric.",
      imageSrc: "/images/blogs-inner.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "ownership",
      subtitle: "",
      title: "Systemic Ownership",
      description: "You take end-to-end responsibility. From ideation to deployment, you own the outcome, not just the task.",
      imageSrc: "/images/blogs-inner.webp",
      bgColor: "#d8ead2"
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
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "accountability",
      subtitle: "",
      title: "Radical Accountability",
      description: "You take ownership of your work. You deliver, iterate, and never shift responsibility.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "adaptability",
      subtitle: "",
      title: "Agile Adaptability",
      description: "You thrive in ambiguity. You learn fast, adjust faster, and perform under evolving challenges.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "ego",
      subtitle: "",
      title: "Collaborative Ego",
      description: "You value outcomes over credit. You contribute to the team, challenge constructively, and grow collectively.",
      imageSrc: "/images/Relentless-Velocity.webp",
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
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "disciplined-allocation",
      subtitle: "",
      title: "Disciplined Allocation",
      description: "Capital is deployed with precision, balancing forward-looking R&D investments with stable, predictable cash flow generation.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "strategic-diversification",
      subtitle: "",
      title: "Strategic Diversification",
      description: "Our interconnected verticals operate independently yet scale collectively, creating a resilient ecosystem that withstands market volatility.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "transparent-governance",
      subtitle: "",
      title: "Transparent Governance",
      description: "We operate with uncompromising transparency, strict compliance standards, and zero-trust frameworks—ensuring long-term investor confidence.",
      imageSrc: "/images/Relentless-Velocity.webp",
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
      imageSrc: "/images/hero_3d_book.png",
      bgColor: "#F3EED4",
      subtitle: ""
    },
    {
      id: "financial-modelling",
      title: "Financial Modelling",
      description: "Delivery of structured financial modelling services to support forecasting, planning, and investment evaluation.",
      imageSrc: "/images/hero_3d_book.png",
      bgColor: "#CBE6F5",
      subtitle: ""
    },
    {
      id: "due-diligence",
      title: "Due Diligence",
      description: "Comprehensive financial and operational due diligence to assess risks, validate assumptions, and support investment decisions.",
      imageSrc: "/images/hero_3d_book.png",
      bgColor: "#FDE0C5",
      subtitle: ""
    },
    {
      id: "internal-audits",
      title: "Internal Audits",
      description: "Evaluation of internal controls, compliance systems, and risk frameworks to ensure operational integrity.",
      imageSrc: "/images/hero_3d_book.png",
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
      imageSrc: "/images/hero_3d_book.png",
      bgColor: "#FDE0C5",
      subtitle: ""
    },
    {
      id: "contract-to-hire",
      title: "Contract-to-Hire",
      description: "Evaluate talent in real-time before transitioning into long-term roles.",
      imageSrc: "/images/hero_3d_book.png",
      bgColor: "#CBE6F5",
      subtitle: ""
    },
    {
      id: "full-time-hiring",
      title: "Full-Time Hiring",
      description: "End-to-end hiring support to build stable, high-performance internal teams.",
      imageSrc: "/images/hero_3d_book.png",
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
      imageSrc: "/images/outcome-accelerated.png",
      bgColor: "#FFDEBD"
    },
    {
      id: "risk-optimization",
      subtitle: "",
      title: "Risk Optimization",
      description: "Reduced operational and decision-making risk",
      imageSrc: "/images/outcome-risk.png",
      bgColor: "#F3EED4"
    },
    {
      id: "efficiency-cost-optimization",
      subtitle: "",
      title: "Efficiency & Cost Optimization",
      description: "Improved efficiency with optimized cost structures",
      imageSrc: "/images/outcome-efficiency.png",
      bgColor: "#BEE4ED"
    },
    {
      id: "value-impact",
      subtitle: "",
      title: "Enterprise Visibility & Value Impact",
      description: "Enhanced visibility across systems with measurable contribution to EBITDA",
      imageSrc: "/images/outcome-value.png",
      bgColor: "#DBE9CB"
    }
  ]
};


export const oursolution: CultureContent = {
  title: "Our Solution",
  subtitle: "lorem",
  cards: [
    {
      id: "accelerated-execution",
      subtitle: "",
      title: "Accelerated Execution",
      description: "Faster workflows and decision cycles across operations",
      imageSrc: "/images/accelerated.png",
      bgColor: "#FFDEBD"
    },
    {
      id: "risk-optimization",
      subtitle: "",
      title: "Risk Optimization",
      description: "Reduced operational and decision-making risk",
      imageSrc: "/images/outcome-risk.png",
      bgColor: "#F3EED4"
    },
    {
      id: "efficiency-cost-optimization",
      subtitle: "",
      title: "Efficiency & Cost Optimization",
      description: "Improved efficiency with optimized cost structures",
      imageSrc: "/images/outcome-efficiency.png",
      bgColor: "#BEE4ED"
    },
    {
      id: "value-impact",
      subtitle: "",
      title: "Value Impact",
      description: "Enhanced visibility across systems with measurable contribution to EBITDA",
      imageSrc: "/images/outcome-value.png",
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
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#F5F0CE"
    },
    {
      id: "zero-trust-compliance",
      subtitle: "",
      title: "Zero-Trust Compliance",
      description: "We design and operate systems with strict adherence to global data security, privacy regulations, and ethical AI practices, holding ourselves to the same standards as our clients.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#CCEAF4"
    },
    {
      id: "risk-mitigation",
      subtitle: "",
      title: "Risk Mitigation",
      description: "Structured audit frameworks proactively identify and manage financial, operational, and technological risks, ensuring resilience across all business units.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#FBE0C9"
    },
    {
      id: "shareholder-transparency",
      subtitle: "",
      title: "Shareholder Transparency",
      description: "Clear, consistent, and accurate reporting underpins stakeholder trust, supported by open communication and disciplined financial governance.",
      imageSrc: "/images/Relentless-Velocity.webp",
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
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#F5F0CE"
    },
    {
      id: "structure-2",
      subtitle: "",
      title: "Process-Based Engagement",
      description: "Defined execution of specific accounting functions within structured workflows.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#CCEAF4"
    },
    {
      id: "structure-3",
      subtitle: "",
      title: "Full Outsourcing Model",
      description: "Complete management of accounting operations through scalable service models.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#FBE0C9"
    },
   
  ]
};

export const strategicAllyData: CultureContent = {
  title: "The DNA of a Strategic Ally.",
  subtitle: "Elite technology requires elite discipline. The behaviors we reward internally dictate the results we deliver globally.",
  cards: [
    {
      id: "velocity",
      subtitle: "Core / Execution",
      title: "Uncompromising Velocity",
      description: "We partner with organizations that move fast. You prioritize rapid deployment, agile iteration, and aggressive market expansion over bureaucratic delays.",
      imageSrc: "/images/challenges_sketch.png",
      bgColor: "#f5f0ce"
    },
    {
      id: "governance",
      subtitle: "Core / Governance",
      title: "Enterprise-Grade Integrity",
      description: "You operate at the highest levels of corporate compliance, ensuring absolute data security, zero-trust ethics, and flawless operational transparency in every joint venture.",
      imageSrc: "/images/challenges_sketch.png",
      bgColor: "#cceaf4"
    },
    {
      id: "ambition",
      subtitle: "Core / Aesthetic",
      title: "Disruptive Ambition",
      description: "You aren't satisfied with incremental upgrades. You want to alter how industries operate, utilizing AI, automation, and aesthetic design lead the market.",
      imageSrc: "/images/challenges_sketch.png",
      bgColor: "#fbe0c9"
    },
    {
      id: "accountability",
      subtitle: "Core / Accountability",
      title: "Shared Accountability",
      description: "We believe in mutual risk and mutual reward. When we co-create a solution, we both own the outcome, the client success, and the ultimate ROI.",
      imageSrc: "/images/challenges_sketch.png",
      bgColor: "#d8ead2"
    }
  ]
};
