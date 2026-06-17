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
