import { ReactNode } from 'react';

export interface HeroContent {
  title: ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const pagesData: Record<string, any> = {
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
          <strong>Initiate the Next Phase<br />
            of Growth.</strong>
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
      description: "At the Safal Group, we don't hire for static roles; we hire for upward trajectories. Join a borderless matrix where deep engineering meets boundless creativity, and help us architect the digital backbone of tomorrow.",
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
      description: "At the Safal Group, internships aren't simulations. You will deploy live code, craft global brand ecosystems, and engineer automation systems alongside the industry's top minds. This is where raw potential transforms into elite execution.",
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
          <strong>From Idea to Scalable <br />
            <span>Product</span></strong>
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
          <strong>Enterprise-Grade<br />
          Products Built for Scale</strong>
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
          Driving Industry 4.0 <strong>Transformation</strong>
        </>
      ),
      description: "End-to-end industrial automation solutions and IIoT systems designed to connect machines, optimize operations, and enable data-driven industrial environments.",
      imageSrc: "/images/blogs-inner.webp",
      imageAlt: "Industrial Automation & IoT",
      
    }
  }
};
