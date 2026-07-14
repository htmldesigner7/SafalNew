import React from 'react';

export interface ImageCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export interface ImageCardsData {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  cards: ImageCardItem[];
}

export const endToEndProductData: ImageCardsData = {
  title: "End-to-End Product Development",
  cards: [
    {
      id: "Product Strategy",
      title: "Product Strategy",
      description: "Defines product direction, feature prioritization, and system structure aligned with business goals and market requirements as part of comprehensive product development services for startups.",
      imageSrc: "/images/Startup-Product-Development-&-Consulting/Product-Strategy.webp", // User will replace with actual images
      imageAlt: "Product Strategy"
    },
    {
      id: "MVP Development",
      title: "MVP Development",
      description: "Builds minimum viable products with essential functionality, enabling faster validation and structured iteration within early-stage environments.",
      imageSrc: "/images/Startup-Product-Development-&-Consulting/MVP-Development.webp", // User will replace with actual images
      imageAlt: "MVP Development"
    },
    {
      id: "Scaling Tech Teams",
      title: "Scaling Tech Teams",
      description: "Supports the expansion of engineering teams and systems to manage product growth, performance, and complexity.",
      imageSrc: "/images/Startup-Product-Development-&-Consulting/Scaling-Tech-Teams.webp", // User will replace with actual images
      imageAlt: "Scaling Tech Teams"
    }
  ]
};
