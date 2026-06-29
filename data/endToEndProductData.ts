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
      id: "mvp-dev",
      title: "MVP Development",
      description: "Builds minimum viable products with essential functionality, enabling faster validation and structured iteration within early-stage environments.",
      imageSrc: "/images/hero_3d_book.png", // User will replace with actual images
      imageAlt: "MVP Development"
    },
    {
      id: "prod-strat",
      title: "Product Strategy",
      description: "Defines product direction, feature prioritization, and system structure aligned with business goals and market requirements as part of comprehensive product.",
      imageSrc: "/images/hero_3d_book.png", // User will replace with actual images
      imageAlt: "Product Strategy"
    },
    {
      id: "scaling-tech",
      title: "Scaling Tech Teams",
      description: "Supports the expansion of engineering teams and systems to manage product growth, performance, and complexity.",
      imageSrc: "/images/hero_3d_book.png", // User will replace with actual images
      imageAlt: "Scaling Tech Teams"
    }
  ]
};
