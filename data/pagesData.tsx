import { ReactNode } from 'react';

export interface HeroContent {
  title: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const pagesData: Record<string, { hero: HeroContent }> = {
  about: {
    hero: {
      title: (
        <>
          Architecting the Digital<br />
          Backbone of Tomorrow.
        </>
      ),
      description: "Safal Infosoft is not adapting to the future of enterprise—we are building the infrastructure that powers it. From industrial automation to AI-led ecosystems, we engineer the systems that move industries forward.",
      imageSrc: "/images/our-story/our-story.webp",
      imageAlt: "About Hero Graphic",
    }
  },
  contact: {
    hero: {
      title: (
        <>
          <strong> Initiate the Next Phase of Growth.</strong>
        </>
      ),
      description: <>
        <p>Whether you require robust enterprise infrastructure, strategic innovation, or scalable business solutions, our global teams are built to deliver.</p>
        <p>Connect with Safal to begin.</p>
      </>,
      imageSrc: "/images/MasterContact.png",
      imageAlt: "Contact Hero Email Graphic",
    }
  },

  ourEntities: {
    hero: {
      title: (
        <>
          <strong>The Architecture of Synergy</strong>
        </>
      ),
      description: <>Three core verticals. One unified ecosystem.<br /><br />Safal is designed as a structured matrix where technology, innovation, and execution operate in alignment. Each vertical brings deep specialization, together creating a system capable of delivering scalable, high-impact outcomes across industries and geographies.</>,
      imageSrc: "/images/Group-Structure/Group-Structure.webp",
      imageAlt: "Contact Hero Email Graphic",
    }
  },

  investorRelations: {
    hero: {
      title: (
        <>
          <strong>Architecting Exponential Value</strong>
        </>
      ),
      description: <>
        <p>Welcome to Safal Group Investor Relations.<br />We engineer long-term shareholder value through disciplined execution, strategic diversification, and deep-tech innovation across global enterprise markets.</p>
        <p>Our approach combines a strong balance sheet, precise capital allocation, and operational velocity, designed to deliver consistent, compounding growth.</p>
      </>,
      imageSrc: "/images/Values-&-Culture/Values-&-Culture.webp",
      imageAlt: "Values & Culture",
    }
  },

  lifeAtSafal: {
    hero: {
      title: (
        <>
          <strong>Operate at the Edge of Possible.</strong>
        </>
      ),
      description: <>
        <p>Life at Safal is built for momentum. We create the infrastructure, the ecosystem, and the opportunity…<br />you bring ambition, curiosity, and the drive to build what doesn’t yet exist.
        </p>
        <p>This is where deep engineering meets bold thinking.<br />This is where careers accelerate.</p>
      </>,
      imageSrc: "/images/life-at-safal/Life-at-Safal.webp",
      imageAlt: "Investor Relations Graphic",
    }
  },

  jobDetails: {
    hero: {
      title: (
        <>
          <strong>Define the Edge. Deliver the Outcome.</strong>
        </>
      ),
      description: <>
        <p>This isn’t a role defined by a job description, it’s defined by the outcomes you create.</p>
        <p>At Safal Group, you step into high-impact environments where your work directly shapes real systems, real products, and real markets. You operate alongside teams that prioritize execution, ownership, and precision, where every contribution drives measurable impact.</p>
      </>,
      imageSrc: "/images/Open-Positions/Open-Positions.webp",
      imageAlt: "Job Opportunities",
    }
  },

  internshipsMentorship: {
    hero: {
      title: (
        <>
          <strong>Skip the Sandbox. Build the Enterprise.</strong>
        </>
      ),
      description: <>
        <p>At Safal Group, internships are not simulations.<br />You will ship real code, contribute to live systems, and work alongside engineers, strategists, and creators shaping global enterprises.</p>
        <p>This is where raw potential is forged into execution.</p>
      </>,
      imageSrc: "/images/Internships-&-Mentorship/Internships-&-Mentorship.png",
      imageAlt: "Internships and Mentorship",
    }
  },

  financialReports: {
    hero: {
      title: (
        <>
          <strong>Radical Transparency. Measurable Scale.</strong>
        </>
      ),
      description: <>
        <p>Access structured financial disclosures, performance reports, and governance filings across the Safal ecosystem.<br />We operate with complete visibility, enabling stakeholders to track growth, evaluate performance, and understand how capital is deployed across our global operations.</p>
      </>,
      imageSrc: "/images/Financial-Reports-&-Disclosures/Financial-Reports-&-Disclosures.webp",
      imageAlt: "Financial Reports",
    }
  },

  blogs: {
    hero: {
      title: (
        <>
          <strong>Insights & Innovations</strong>
        </>
      ),
      description: "Dive into our latest thoughts on technology, enterprise scale, and the future of global engineering. Stay ahead with deep-dives written by our architects and visionaries.",
      imageSrc: "/images/blogs/blogs.webp",
      imageAlt: "Blogs Hero Image",
    }
  },

  LeaderShipTeam: {
    hero: {
      title: (
        <>
          <strong>Architecting the Digital Backbone of Tomorrow</strong>
        </>
      ),
      description: "Leadership at Safal Infosoft goes beyond managing the present—we design what comes next. Meet the minds driving our global vision across technology, strategy, and execution.",
      imageSrc: "/images/leadership-team-bg.png",
      imageAlt: "Blogs Hero Image",
    }
  },
  technologyStaffing: {
    hero: {
      title: (
        <>
          <strong>Build High-Performance Tech Teams</strong>
        </>
      ),
      description: "Flexible technology staffing solutions designed to help you scale teams with speed, precision, and the right technical expertise.",
      imageSrc: "/images/Technology-Staffing/Technology-Staffing.webp",
      imageAlt: "Technology Staffing Hero",
    }
  },
  startupProductDevelopment: {
    hero: {
      title: (
        <>
          <strong>From Idea to Scalable Product</strong>
        </>
      ),
      description: "Structured startup product development services and consulting designed to transform ideas into scalable, production-ready digital products.",
      imageSrc: "/images/Startup-Product-Development-&-Consulting/Product-Development-&-Venture-Enablement.webp", // Replace with correct image from the design
      imageAlt: "Startup Product Development Hero",
    }
  },
  enterpriseProducts: {
    hero: {
      title: (
        <>
          <strong>Enterprise-Grade Products Built for Scale</strong>
        </>
      ),
      description: "Formezy EAP, DataNote ERP, and tailored enterprise systems designed to streamline operations, integrate processes, and support scalable enterprise environments.",
      imageSrc: "/images/banner-images/Open-Positions.webp",
      imageAlt: "Enterprise Products Hero",
    }
  },
  industrialAutomation: {
    hero: {
      title: (
        <>
          Driving Industry 4.0 Transformation
        </>
      ),
      description: "End-to-end industrial automation solutions and IIoT systems designed to connect machines, optimize operations, and enable data-driven industrial environments.",
      imageSrc: "/images/Industrial-Automation-&-IoT/Industrial-Automation-&-IoT.webp",
      imageAlt: "Industrial Automation & IoT",

    }
  },
  aiEmergingTechnology: {
    hero: {
      title: (
        <>
          <strong>AI That Drives Real<br />Business Outcomes</strong>
        </>
      ),
      description: "Enterprise AI systems and machine learning services designed to automate processes, structure decision-making, and deliver measurable business outcomes.",
      imageSrc: "/images/AI-&-Emerging-Technology/AI-&-Emerging-Technology.webp",
      imageAlt: "AI Emerging Technology Hero",
    }
  },
  financialAccountingSolutions: {
    hero: {
      title: (
        <>
          <strong>Smarter, Faster & Scalable<br />Accounting Solutions</strong>
        </>
      ),
      description: "Structured financial accounting solutions and accounting solutions designed to manage financial processes with accuracy, compliance, and operational efficiency.",
      imageSrc: "/images/financial-accounting-solutions/financial-accounting-solutions.webp",
      imageAlt: "Financial Accounting Solutions Hero",
    }
  },
  brandDigitalCreativeServices: {
    hero: {
      title: (
        <>
          <strong>Building Brands That Perform</strong>
        </>
      ),
      description: "Strategic digital branding services, creative design services, and integrated digital marketing services designed to build, scale, and position brands with clarity and consistency.",
      imageSrc: "/images/Brand,-Digital-&-Creative-Services/Brand,-Digital-&-Creative-Services.webp",
      imageAlt: "Brand Digital Creative Services Hero",
    }
  },
  corporateGovernance: {
    hero: {
      title: (
        <>
          <strong>Zero-Trust Ethics. Unyielding Discipline.</strong>
        </>
      ),
      description: <>
        <p>Innovation without discipline creates risk.<br />At Safal, governance is engineered into every layer, ensuring that technological advancement, market expansion, and venture growth operate within uncompromising global standards of compliance, accountability, and responsibility.</p>
      </>,
      imageSrc: "/images/Corporate-Governance/Corporate-Governance.webp",
      imageAlt: "Corporate Governance Pillar",
    }
  },
  sustainability: {
    hero: {
      title: (
        <>
          <strong>Engineering a Carbon-Neutral Future.</strong>
        </>
      ),
      description: "At Safal Group, sustainability is not an initiative; it is embedded into how we architect systems.We design low-friction digital ecosystems and intelligent infrastructure that reduce energy consumption, minimize waste, and enable enterprises to move toward measurable ESG outcomes.",
      imageSrc: "/images/Sustainability/background_of_warm_202603281709-(1)-1.webp",
      imageAlt: "Sustainability Hero",
    }
  },

  openpositions: {
    hero: {
      title: (
        <>
          <strong>Operate at the Edge of Possible.</strong>
        </>
      ),
      description: <>
        <p>At Safal Group, we don’t hire for static roles, we hire for upward trajectories.<br />You’re not stepping into a job; you’re entering a system designed to accelerate your growth.</p>
        <p>Join a borderless matrix where deep engineering meets creative strategy, and contribute to building the digital backbone of tomorrow.</p>
      </>,
      imageSrc: "/images/Careers/safal-careers-hero.webp",
      imageAlt: "Open positions Hero",
    }
  }
};
