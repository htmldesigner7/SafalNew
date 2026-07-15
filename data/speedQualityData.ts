export interface SpeedQualityItem {
  title: string;
  paragraphs?: string[];
  paralist?: string[];
}

export interface SpeedQualityData {
  title: string;
  items: SpeedQualityItem[];
  imageSrc: string;
  imageAlt: string;
}

export const speedQualityData: SpeedQualityData = {
  title: "Speed, Quality, and Scalability",
  items: [
    {
      title: "Speed",
      paragraphs: [
        "Fast access to pre-qualified talent through technology staffing solutions.",
        "We enable rapid team deployment without compromising on technical precision. Through structured screening, role-specific validation, and a continuously evolving talent pipeline, organizations can onboard the right professionals faster while maintaining consistency in quality and long-term scalability across projects.",
      ]
      
    },
    {
      title: "Quality",
      paragraphs: [
        "Strong technical validation and screening processes.",
        "We ensure every candidate meets defined technical benchmarks through multi-layered evaluation, practical assessments, and domain-specific validation. This structured approach minimizes hiring risks, improves delivery outcomes, and ensures that talent aligns seamlessly with both technical environments and business expectations."
      ]
    },
    {
      title: "Scalability",
      paragraphs: [
        "Flexible scaling through IT staff augmentation services.",
        "Our staffing approach is designed to scale with evolving project demands, enabling organizations to expand or optimize teams without operational disruption. With access to a diverse talent pool and flexible engagement models, businesses can maintain momentum while adapting to changing workloads and growth requirements.",
        "Additional strengths:"
      ],

       paralist: [
        "Reliable technology staffing services across roles and domains",
        "Experience as a structured IT staffing company",
        "Consistent delivery aligned with business and technical needs",
        "Ability to scale teams without operational disruption"
      ],
    }
  ],
  imageSrc: "/images/blogs/blogs.webp",
  imageAlt: "Speed, Quality, Scalability"
};
