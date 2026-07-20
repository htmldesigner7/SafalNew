import { IndustryDetailData } from '@/components/sections/IndustryDetailSection/IndustryDetailSection';

export const manufacturingIndustryData: IndustryDetailData = {
  title: 'Manufacturing',
  paragraphs: [
    'Safal enables manufacturing organizations to streamline operations by integrating production workflows, inventory systems, and reporting structures into unified digital environments. This improves coordination, reduces inefficiencies, and enhances operational visibility across the manufacturing lifecycle.',
    'Our solutions are designed to support scalability, optimize resource utilization, and ensure consistent execution across production environments. By connecting systems and processes, we help manufacturers achieve structured, data-driven operational control.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'Discrete Manufacturing',
    'Process Manufacturing',
    'Automotive & Components',
    'Industrial Equipment',
    'Metal & Heavy Engineering',
    'Textile & Apparel Manufacturing',
    'Plastics & Polymers',
    'Electronics Manufacturing'
  ],
  imageSrc: `/images/INDUSTRIES/Manufacturing.webp`,
  imageAlt: 'Manufacturing facility',
  reverse: false,
};

export const retailIndustryData: IndustryDetailData = {
  title: 'Hospitality',
  paragraphs: [
    'Safal supports hospitality businesses in managing operations, guest services, and backend systems through integrated digital solutions. By aligning processes and data, organizations gain better control over service delivery and operational workflows.',
    'Our approach focuses on improving efficiency, enhancing guest experience consistency, and enabling real-time visibility across locations. This ensures structured operations and scalable growth within dynamic hospitality environments.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'Hotels & Resorts',
    'Restaurants & QSR Chains',
    'Travel & Tourism Operators',
    'Event & Venue Management',
    'Facility & Property Management',
    'Luxury & Boutique Hospitality'
  ],
  imageSrc: `/images/INDUSTRIES/Hospitality.webp`,
  imageAlt: 'Hospitality Management',
  reverse: true,
};

export const healthcareIndustryData: IndustryDetailData = {
  title: 'Startups',
  paragraphs: [
    'Safal enables startups to build structured operational and digital foundations from the outset. By integrating systems, workflows, and data, we support scalable growth and efficient decision-making in fast-paced business environments.',
    'Our solutions help startups maintain agility while establishing control, visibility, and process consistency. This ensures that growth is supported by strong digital infrastructure and structured execution frameworks.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'SaaS & Product Startups',
    'D2C & E-commerce Brands',
    'Fintech Startups',
    'Healthtech & Edtech',
    'Platform-Based Businesses',
    'AI & Deep Tech Startups',
    'Marketplace Platforms'
  ],
  imageSrc: `/images/INDUSTRIES/Startups.webp`,
  imageAlt: 'Startup Ecosystems',
  reverse: false,
};

export const hospitalityIndustryData: IndustryDetailData = {
  title: 'Logistics',
  paragraphs: [
    'Safal supports logistics and supply chain organizations in optimizing operations through integrated systems for tracking, inventory, and workflow management. This improves coordination, reduces delays, and enhances operational efficiency.',
    'By enabling real-time visibility and structured process management, our solutions help logistics businesses streamline operations and improve decision-making across complex supply chain networks.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'Warehousing & Distribution',
    'Freight & Transportation',
    'Supply Chain Management',
    'Fleet Management',
    'Third-Party Logistics (3PL)',
    'Cold Chain Logistics',
    'Last-Mile Delivery'
  ],
  imageSrc: `/images/INDUSTRIES/Logistics.webp`,
  imageAlt: 'Logistics and Supply Chain',
  reverse: true,
};

export const realEstateIndustryData: IndustryDetailData = {
  title: 'Retail',
  paragraphs: [
    'Safal enables retail businesses to unify operations across inventory, billing, and customer engagement systems. This ensures consistency across locations while improving visibility and operational control.',
    'Our solutions support seamless retail operations, enabling businesses to manage multi-location environments efficiently. By integrating systems, we help retailers enhance performance and deliver consistent customer experiences.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'Multi-Store Retail Chains',
    'E-commerce & Omnichannel Retail',
    'Fashion & Apparel Retail',
    'Electronics & Consumer Goods',
    'FMCG Distribution',
    'Specialty Retail',
    'Wholesale & Distribution'
  ],
  imageSrc: `/images/INDUSTRIES/Retail.webp`,
  imageAlt: 'Retail and E-commerce',
  reverse: false,
};

export const financeIndustryData: IndustryDetailData = {
  title: 'Healthcare',
  paragraphs: [
    'Safal enables healthcare organizations to improve operational efficiency and system integration through structured digital solutions. By connecting data, processes, and platforms, we support better coordination, visibility, and decision-making across healthcare environments.',
    'Our solutions are designed to enhance system reliability, ensure compliance, and support the delivery of efficient and consistent healthcare services.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'Hospitals & Clinics',
    'Diagnostic Centers',
    'Pharma & Life Sciences',
    'Healthcare Networks',
    'Medical Equipment Providers',
    'Telemedicine Platforms'
  ],
  imageSrc: `/images/INDUSTRIES/Healthcare.webp`,
  imageAlt: 'Healthcare Technology',
  reverse: true,
};

export const logisticsIndustryData: IndustryDetailData = {
  title: 'Finance',
  paragraphs: [
    'Safal supports financial organizations in managing operations, compliance, and reporting through structured digital systems. By integrating financial data and workflows, we enable improved accuracy, control, and decision-making.',
    'Our solutions focus on enhancing transparency, ensuring regulatory alignment, and enabling efficient financial operations across institutions and enterprise environments.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'NBFCs & Lending Institutions',
    'Banking & Financial Services',
    'Investment Firms',
    'Insurance Companies',
    'Fintech Platforms',
    'Wealth Management Firms'
  ],
  imageSrc: `/images/INDUSTRIES/Finance.webp`,
  imageAlt: 'Financial Services',
  reverse: false,
};

export const startupsIndustryData: IndustryDetailData = {
  title: 'Real Estate',
  paragraphs: [
    'Safal enables real estate organizations to streamline operations across property management, sales processes, and financial workflows through integrated digital systems. This improves coordination, visibility, and control across projects and portfolios.',
    'Our solutions support structured operations, enhance reporting accuracy, and enable efficient management of real estate assets, ensuring scalability and consistency across business functions.'
  ],
  subIndustriesTitle: 'Sub-Industries / Verticals',
  subIndustries: [
    'Residential Real Estate',
    'Commercial Real Estate',
    'Property Management Firms',
    'Real Estate Developers',
    'Construction & Infrastructure',
    'Co-working & Managed Spaces'
  ],
  imageSrc: `/images/INDUSTRIES/Real-Estate.webp`,
  imageAlt: 'Real Estate Infrastructure',
  reverse: true,
};

export const allIndustriesData = [
  manufacturingIndustryData,
  retailIndustryData,
  healthcareIndustryData,
  hospitalityIndustryData,
  realEstateIndustryData,
  financeIndustryData,
  logisticsIndustryData,
  startupsIndustryData
];
