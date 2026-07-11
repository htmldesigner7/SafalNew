import { ReactNode } from 'react';

export interface HeroContent {
  title: ReactNode;
  description: string;
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
      description: "Safal Infosoft is not just adapting to the future of global enterprise: we are building the infrastructure that powers it. From heavy industry automation to AI-driven ecosystems, we engineer the scale that moves markets.",
      imageSrc: "/images/ourstory-banner.webp",
      imageAlt: "About Hero Graphic",
    }
  },
  contact: {
    hero: {
      title: (
        <>
          <strong>Initiate the Next <br />
           Phase of Growth.</strong>
        </>
      ),
      description: "Whether you require robust enterprise infrastructure, visionary creative strategy, or elite financial advisory, our global team is ready to engineer your solution. Connect with Safal Infosoft to begin.",
      imageSrc: "/images/blogs-inner.webp",
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
      description: "Six distinct entities. Three global hubs. One unshakeable foundation. We are not just a technology provider; we are a unified matrix of specialized divisions operating across India, the UAE, and the USA.",
      imageSrc: "/images/blogs-inner.webp",
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
      description: "Welcome to Safal Group Investor Relations. We engineer long-term shareholder value by driving digital transformation across global enterprise markets. We execute with a fortress balance sheet, disciplined capital allocation, and uncompromising operational velocity.",
      imageSrc: "/images/blogs-inner.webp",
      imageAlt: "Investor Relations Graphic",
    }
  },

  lifeAtSafal: {
    hero: {
      title: (
        <>
          <strong>Operate at the Edge of Possible.</strong>
        </>
      ),
      description: "Life at the Safal Group is a high-velocity journey. We provide the elite infrastructure; you provide the raw ambition. Join a borderless matrix where deep engineering meets boundless creativity.",
      imageSrc: "/images/blogs-inner.webp",
      imageAlt: "Investor Relations Graphic",
    }
  },

  jobDetails: {
    hero: {
      title: (
        <>
          <strong>Operate at the Edge of Possible.</strong>
        </>
      ),
      description: "At the Safal Group, we don&apos;t hire for static roles; we hire for upward trajectories. Join a borderless matrix where deep engineering meets boundless creativity, and help us architect the digital backbone of tomorrow.",
      imageSrc: "/images/blogs-inner.webp",
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
      description: "At the Safal Group, internships aren&apos;t simulations. You will deploy live code, craft global brand ecosystems, and engineer automation systems alongside the industry&apos;s top minds. This is where raw potential transforms into elite execution.",
      imageSrc: "/images/blogs-inner.webp",
      imageAlt: "Internships and Mentorship",
    }
  },

  financialReports: {
    hero: {
      title: (
        <>
          <strong>Financial Reports & Disclosures</strong>
        </>
      ),
      description: "Access our latest financial results, annual reports, and strategic disclosures. We operate with radical transparency to ensure our stakeholders have the insights they need to make informed decisions.",
      imageSrc: "/images/blogs-inner.webp",
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
      imageSrc: "/images/blogs-inner.webp",
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
      description: "Leadership at Safal Infosoft goes beyond managing the present; we engineer what comes next. Meet the strategic minds, technologists, and creatives driving our global vision.",
      imageSrc: "/images/blogs-inner.webp",
      imageAlt: "Blogs Hero Image",
    }
  },
  technologyStaffing: {
    hero: {
      title: (
        <>
          <strong>Connecting You with <br />
            <span>Top Tech Talent</span></strong>
        </>
      ),
      description: "We provide comprehensive technology staffing solutions to help you build high-performing teams.",
      imageSrc: "/images/blogs-inner.webp",
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
      imageSrc: "/images/blogs-inner.webp", // Replace with correct image from the design
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
      imageSrc: "/images/blogs-inner.webp", // Replace with correct globe/dome image if different
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
      imageSrc: "/images/blogs-inner.webp",
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
      imageSrc: "/images/blogs-inner.webp",
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
      imageSrc: "/images/financial-accounting-hero.png",
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
      imageSrc: "/images/blogs-inner.webp",
      imageAlt: "Brand Digital Creative Services Hero",
    }
  },
  corporateGovernance: {
    hero: {
      title: (
        <>
          <strong>Zero-Trust Ethics.<br />
            Unyielding Discipline.</strong>
        </>
      ),
      description: "Innovation without structural discipline is a corporate liability. Our Board of Directors ensures that every technological advancement, venture incubation, and market expansion adheres strictly to the highest global standards of ethical compliance, risk management, and corporate responsibility.",
      imageSrc: "/images/glass_temple.png",
      imageAlt: "Corporate Governance Pillar",
    }
  },
  sustainability: {
    hero: {
      title: (
        <>
          <strong>Architecting a <br />Sustainable Future.</strong>
        </>
      ),
      description: "True innovation cannot come at the expense of our environment. Through our Green-Code initiative and AI-driven resource allocation, we actively optimize software architectures to drastically reduce global energy consumption.",
      imageSrc: "/images/sustainability-section.jpg",
      imageAlt: "Sustainability Hero",
    }
  }
};
