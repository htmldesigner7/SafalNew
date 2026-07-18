export interface EnterprisePlatform {
  id: string;
  imageSrc: string;
  imageAlt: string;
  subtitle?: string;
  title: string;
  descriptions: string[];
}

export const enterprisePlatformsData: EnterprisePlatform[] = [
  {
    id: "platform-1",
    imageSrc: "/safal/images/Industrial-Automation-&-IoT/Industrial-Automation-&-IoT.webp",
    imageAlt: "Manufacturing Factory Floor",
    subtitle: "Kabhi B (Kanhai Foods Ltd.)",
    title: "Scaling a 100+ Outlet Food Network with Integrated ERP & Distribution Intelligence",
    descriptions: [
      "A leading food manufacturing and retail brand, Kabhi B required a unified system to connect production, distribution, and retail operations across 100+ outlets. By implementing an integrated ERP and Distribution Management System, the organization achieved real-time inventory visibility, batch-level traceability, and demand-driven production planning, transforming a fragmented network into a synchronized, data-driven ecosystem."
    ]
  },
  {
    id: "platform-2",
    imageSrc: "/safal/images/blogs/blogs.webp",
    imageAlt: "ERP Dashboard Interface",
    subtitle: "Allmark Industries Pvt. Ltd.",
    title: "Engineering Precision Through Project-Driven ERP Transformation",
    descriptions: [
      "A complex fabrication environment required structured planning and execution. By implementing a tailored ERP with multi-level BOM integration and stage-wise production tracking, Allmark streamlined operations, improved material control, and enabled real-time visibility across project-based manufacturing."
    ]
  },
  {
    id: "platform-3",
    imageSrc: "/safal/images/blogs/blogs.webp",
    imageAlt: "ERP Dashboard Interface",
    subtitle: "American Precoat Pvt. Ltd.",
    title: "Driving Real-Time Control in Continuous Steel Processing",
    descriptions: [
      "Operating a high-speed galvanizing line, American Precoat needed precise production visibility and cost accuracy. A fully integrated ERP enabled coil-level traceability, real-time reporting, and reduced zinc wastage by 50%, significantly improving operational and financial efficiency."
    ]
  },
  {
    id: "platform-4",
    imageSrc: "/safal/images/blogs/blogs.webp",
    imageAlt: "ERP Dashboard Interface",
    subtitle: "YKGI Holdings Berhad",
    title: "Optimizing Coil Coating Operations with Data-Driven ERP",
    descriptions: [
      "YKGI transitioned from fragmented systems to a unified ERP environment, enabling better production planning, material control, and end-to-end traceability. The transformation improved operational consistency while reducing downtime and material wastage across coating lines."
    ]
  },
  {
    id: "platform-5",
    imageSrc: "/safal/images/blogs/blogs.webp",
    imageAlt: "ERP Dashboard Interface",
    subtitle: "Heavy Metal & Tubes India Pvt. Ltd.",
    title: "Unifying Multi-Plant Manufacturing into a Single Digital Backbone",
    descriptions: [
      "Managing operations across four plants required centralized control and visibility. With a fully integrated ERP, the company streamlined production routing, improved WIP tracking, and achieved real-time coordination across manufacturing, logistics, and finance, unlocking scalable growth across all units."
    ]
  }
];
