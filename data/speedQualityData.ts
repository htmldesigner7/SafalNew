export interface SpeedQualityItem {
  title: string;
  paragraphs?: string[];
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
        "We enable rapid team deployment without compromising on technical precision. Through structured screening, role-specific validation, and a continuously evolving talent pipeline, organizations can onboard the right professionals faster while maintaining consistency in quality and long-term scalability across projects."
      ]
    },
    {
      title: "Quality",
      paragraphs: [
        "Ensuring the highest standards in every candidate selection.",
        "Our rigorous evaluation process involves deep technical assessments, cultural fit interviews, and continuous performance tracking. By prioritizing quality at every step, we provide professionals who not only meet but exceed project expectations."
      ]
    },
    {
      title: "Scalability",
      paragraphs: [
        "Flexible workforce solutions designed to grow with your business.",
        "Whether you need a single specialist or an entire engineering squad, our scalable staffing models adapt seamlessly to your changing project demands, ensuring you have the right resources exactly when you need them."
      ]
    }
  ],
  imageSrc: "/images/hero_3d_book.png",
  imageAlt: "Speed, Quality, Scalability"
};
