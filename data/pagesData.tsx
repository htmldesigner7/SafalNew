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
          <strong>Culture is our Operating System</strong>
        </>
      ),
      description: "At the Safal Group, our infrastructure is built on code, but our momentum is driven by people. We cultivate an elite environment of relentless innovation, systemic ownership, and unyielding integrity across three continents.",
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
  }
};
