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
      imageSrc: "/about/about_hero.png",
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
  }
};
