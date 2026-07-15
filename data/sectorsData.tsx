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
  title: 'Transforming Industries Through Scalable Systems.',
  cards: [
    {
      id: '01',
      title: 'Manufacturing',
      image: '/images/Homepage/Manufacturing.webp',
      description: <> Safal supports manufacturing enterprises in building connected, efficient, and data-driven production environments. By integrating automation, enterprise systems, and operational intelligence, we enable improved process control, reduced downtime, and enhanced production visibility.<br/><br />
       Our solutions align shop-floor operations with enterprise systems, ensuring consistency, scalability, and long-term efficiency across complex manufacturing ecosystems.
      </>,
    },
    {
      id: '02',
      title: 'Logistics',
      image: '/images/Homepage/Logistics.webp',
      description:<> 
      Safal enables logistics organizations to streamline operations through integrated systems, real-time tracking, and data-driven decision-making. By connecting supply chain processes, we improve visibility, coordination, and operational efficiency across logistics networks.
      <br /> <br />
      Our solutions help businesses manage complexity, optimize movement, and maintain control across distribution, warehousing, and transportation systems.</>
    },
    {
      id: '03',
      title: 'Retail',
      image: '/images/Homepage/Retail.webp',
      description: <>Safal supports retail businesses in building connected and responsive operational systems. By integrating digital platforms, data insights, and enterprise processes, we enable improved customer experience and operational efficiency across retail environments. <br /><br />Our solutions ensure consistency across channels, optimize inventory management, and support scalable growth in dynamic retail ecosystems.
      </>,
    },
    {
      id: '04',
      title: 'Healthcare',
      image: '/images/Homepage/Healthcare.webp',
      description: <>Safal enables healthcare organizations to improve operational efficiency and system integration through structured digital solutions. By connecting data, processes, and platforms, we support better coordination, visibility, and decision-making across healthcare environments. <br /><br />Our solutions are designed to enhance system reliability, ensure compliance, and support the delivery of efficient and consistent healthcare services.
      </>,
    },
    {
      id: '05',
      title: 'Finance',
      image: '/images/Homepage/Finance.webp',
      description: <>Safal supports financial institutions in building structured, secure, and scalable systems for managing operations and data. By integrating platforms and processes, we enable improved transparency, compliance, and operational control. <br /><br />Our solutions help organizations manage complexity, strengthen reporting systems, and support informed decision-making across financial operations.
      </>,
    },
    {
      id: '06',
      title: 'Real Estate',
      image: '',
      description: <>Safal enables real estate organizations to streamline operations, manage assets, and improve visibility through structured digital solutions. By connecting data, processes, and platforms, we support better coordination across property management, sales, and financial workflows. <br /><br />Our solutions are designed to enhance operational control, improve reporting accuracy, and support scalable growth. This ensures efficient management of real estate portfolios while maintaining consistency across projects and business functions.
      </>,
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
      image: '/images/Brand,-Digital-&-Creative-Services/Manufacturing.webp',
      description: ''
    },
    {
      id: '02',
      title: 'Retail & E-commerce',
      image: '/images/Brand,-Digital-&-Creative-Services/Retail-&-Distribution.webp',
      description: ''
    },
    {
      id: '03',
      title: 'Healthcare',
      image: '/images/Brand,-Digital-&-Creative-Services/Healthcare.webp',
      description: ''
    },
    {
      id: '04',
      title: 'Financial Services',
      image: '/images/Brand,-Digital-&-Creative-Services/Financial-Services.webp',
      description: ''
    },
    {
      id: '05',
      title: 'Real Estate',
      image: '/images/Brand,-Digital-&-Creative-Services/Real-Estate-&-Property-Management.webp',
      description: ''
    },
    {
      id: '06',
      title: 'Technology & Startups',
      image: '/images/Brand,-Digital-&-Creative-Services/Brand,-Digital-&-Creative-Services.webp',
      description: ''
    }
  ]
};
