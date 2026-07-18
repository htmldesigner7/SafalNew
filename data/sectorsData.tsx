import { ReactNode } from 'react';

export interface SectorCard {
  id: string;
  title: string;
  image: string;
  description: ReactNode;
}

export interface SectorsContent {
  title: string;
  subtitle?: string;
  cards: SectorCard[];
}

export const defaultSectorsData = {
  title: 'Transforming Industries Through Scalable Systems',
  cards: [
    {
      id: '01',
      title: 'Manufacturing',
      image: '/safal/images/Homepage/Manufacturing.webp',
      description:"Safal supports manufacturing enterprises in building connected, efficient, and data-driven production environments. By integrating automation, enterprise systems, and operational intelligence, we improve process control and enhance production visibility across complex ecosystems. ",
    },
    {
      id: '02',
      title: 'Logistics',
      image: '/safal/images/Homepage/Logistics.webp',
      description:"Safal enables logistics organizations to streamline operations through integrated systems, real-time tracking, and data-driven decision-making. By connecting supply chain processes, we improve visibility, coordination, and efficiency across distribution, warehousing, and transportation networks.",
    },
    {
      id: '03',
      title: 'Retail',
      image: '/safal/images/Homepage/Retail.webp',
      description: "Safal supports retail businesses in building connected and responsive operational systems. By integrating digital platforms, data insights, and enterprise processes, we enable improved customer experience, consistent inventory management, and scalable growth across retail environments.",
    },
    {
      id: '04',
      title: 'Healthcare',
      image: '/safal/images/Homepage/Healthcare.webp',
      description: "Safal enables healthcare organizations to improve operational efficiency and system integration through structured digital solutions. By connecting data, processes, and platforms, we support better coordination, visibility, and compliance across healthcare service delivery.",
    },
    {
      id: '05',
      title: 'Finance',
      image: '/safal/images/Homepage/Finance.webp',
      description: "Safal supports financial institutions in building structured, secure, and scalable systems for managing operations and data. By integrating platforms and processes, we enable improved transparency, compliance, and operational control across financial workflows.",
    },
    {
      id: '06',
      title: 'Real Estate',
      image: '/safal/images/Homepage/Real-Estate.jpg',
      description: "Safal enables real estate organizations to streamline operations, manage assets, and improve visibility through structured digital solutions. By connecting data, processes, and platforms, we support coordinated, consistent management across property, sales, and financial functions.",
    }
  ]
};

export const brandIndustryApplicationsData = {
  title: 'Across Diverse Business Environments',
  subtitle: 'Intelliworkz delivers creative design and marketing services across industries where brand positioning, digital presence, and customer engagement are critical.',
  cards: [
    {
      id: '01',
      title: 'Manufacturing',
      image: '/safal/images/Brand,-Digital-&-Creative-Services/Manufacturing.webp',
      description: ''
    },
    {
      id: '02',
      title: 'Retail & E-commerce',
      image: '/safal/images/Brand,-Digital-&-Creative-Services/Retail-&-Distribution.webp',
      description: ''
    },
    {
      id: '03',
      title: 'Healthcare',
      image: '/safal/images/Brand,-Digital-&-Creative-Services/Healthcare.webp',
      description: ''
    },
    {
      id: '04',
      title: 'Financial Services',
      image: '/safal/images/Brand,-Digital-&-Creative-Services/Financial-Services.webp',
      description: ''
    },
    {
      id: '05',
      title: 'Real Estate',
      image: '/safal/images/Brand,-Digital-&-Creative-Services/Real-Estate-&-Property-Management.webp',
      description: ''
    },
    {
      id: '06',
      title: 'Technology & Startups',
      image: '/safal/images/Brand,-Digital-&-Creative-Services/Technology&Startup.webp',
      description: ''
    }
  ]
};
