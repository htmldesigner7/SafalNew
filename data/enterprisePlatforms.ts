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
    imageSrc: "/images/Industrial-Automation-&-IoT/Industrial-Automation-&-IoT.webp",
    imageAlt: "Manufacturing Factory Floor",
    subtitle: "Kabhi B (Kanhai Foods Ltd.)",
    title: "Scaling a 100+ Outlet Food Network with Integrated ERP & Distribution Intelligence",
    descriptions: [
      "DataNote ERP is a comprehensive enterprise system for managing finance, inventory, and operational workflows. As part of Safal's approach as an enterprise solutions provider, it delivers centralized control, system visibility, and a scalable foundation for enterprise operations.",
      "Our ERP platform enables integrated management of financial, operational, and inventory workflows through a unified system architecture. By ensuring data consistency, process alignment, and real-time visibility, it supports efficient execution, improves control, and enables informed decision-making across enterprise operations."
    ]
  },
  {
    id: "platform-2",
    imageSrc: "/images/blogs/blogs.webp",
    imageAlt: "ERP Dashboard Interface",
    subtitle: "",
    title: "Scaling a 100+ Outlet Food Network with Integrated ERP & Distribution Intelligence",
    descriptions: [
      "DataNote ERP is a comprehensive enterprise system for managing finance, inventory, and operational workflows. As part of Safal's approach as an enterprise solutions provider, it delivers centralized control, system visibility, and a scalable foundation for enterprise operations.",
      "Our ERP platform enables integrated management of financial, operational, and inventory workflows through a unified system architecture. By ensuring data consistency, process alignment, and real-time visibility, it supports efficient execution, improves control, and enables informed decision-making across enterprise operations."
    ]
  }
];
