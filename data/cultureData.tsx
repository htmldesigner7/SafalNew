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
  subtitle: "Elite technology requires elite discipline. The behaviors we reward internally dictate the results we deliver globally.",
  cards: [
    {
      id: "velocity",
      subtitle: "Core / Execution",
      title: "Relentless Velocity",
      description: "We operate with calculated urgency. Speed to market, executed without compromising precision is the competitive advantage.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "integrity",
      subtitle: "Core / Conscience",
      title: "Absolute Integrity",
      description: "We build systems handling billions in revenue. Zero-trust security and ethical data governance are non-negotiable foundations.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "innovation",
      subtitle: "Core / Aesthetic",
      title: "Design-Driven Innovation.",
      description: "Code is functional, design is emotional. Enterprise software must be as beautifully intuitive as it is mathematically complex.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "ownership",
      subtitle: "Core / Accountability",
      title: "Systemic Ownership.",
      description: "We do not pass the buck. If we architect the solution, we own the outcome, the performance, and the ROI for our partners.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#d8ead2"
    }
  ]
};

export const investorCultureData: CultureContent = {
  title: "The DNA of Our Culture.",
  subtitle: "Elite technology requires elite discipline. The behaviors we reward internally dictate the results we deliver globally.",
  cards: [
    {
      id: "velocity-new",
      subtitle: "Velocity",
      title: "Calculated Urgency",
      description: "We do not wait for the future; we engineer it. Speed to market, executed with absolute precision, is our competitive advantage.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#f5f0ce"
    },
    {
      id: "ownership-new",
      subtitle: "Ownership",
      title: "Systemic Accountability",
      description: "There is no \"passing the buck\" in our matrix. If we architect the solution, we own the outcome, the performance, and the ROI.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#cceaf4"
    },
    {
      id: "design-new",
      subtitle: "Design",
      title: "Aesthetic Intelligence",
      description: "Code must be flawless, but the experience must be beautiful. Enterprise software should be as intuitive as consumer technology.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#fbe0c9"
    },
    {
      id: "integrity-new",
      subtitle: "Integrity",
      title: "Trust Ethics",
      description: "We build systems that handle billions in global revenue. Absolute transparency, ethical data, and uncompromising security are our baseline.",
      imageSrc: "/images/Relentless-Velocity.webp",
      bgColor: "#d8ead2"
    }
  ]
};
