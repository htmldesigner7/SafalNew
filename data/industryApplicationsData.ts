import { baseUrl } from '@/utils/baseUrl';
import { SectorsContent } from './sectorsData';

export const industryApplicationsData: SectorsContent = {
  title: 'Industry Applications',
  subtitle: 'As a digital transformation partner and IT consulting services company, Safal’s enterprise platforms are deployed across industries where operational control, system integration, and data visibility are essential to performance.',
  cards: [
    {
      id: '01',
      title: 'Manufacturing',
      image: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Manufacturing.webp`,
      description: ''
    },
    {
      id: '02',
      title: 'Logistics & Supply Chain',
      image: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Logistics-&-Supply-Chain.webp`,
      description: ''
    },
    {
      id: '03',
      title: 'Retail & Distribution',
      image: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Retail-&-Distribution.webp`,
      description: ''
    },
    {
      id: '04',
      title: 'Healthcare',
      image: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Healthcare.webp`,
      description: ''
    },
    {
      id: '05',
      title: 'Financial Services',
      image: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Financial-Services.webp`,
      description: ''
    },
    {
      id: '06',
      title: 'Real Estate & Property Management',
      image: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Real-Estate-&-Property-Management.webp`,  
      description: ''
    }
  ]
};

export const industrialEnvironmentsData: SectorsContent = {
  title: 'Across Industrial Environments',
  subtitle: 'As an IoT solutions provider, Safal supports industries where system reliability, operational efficiency, and real-time control are critical.',
  cards: [
    { id: '01', title: 'Textile', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Textile.webp`, description: '' },
    { id: '02', title: 'Pharmaceutical', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Pharmaceutical.webp`, description: '' },
    { id: '03', title: 'Automobile', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Automobile.webp`, description: '' },
    { id: '04', title: 'Energy', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Energy.webp`, description: '' },
    { id: '05', title: 'Food & Dairy', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Food-&-Dairy.webp`, description: '' },
    { id: '06', title: 'Oil & Gas', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Oil-&-Gas.webp`, description: '' },
    { id: '07', title: 'Airports & Infrastructure', image: `${baseUrl}/images/Industrial-Automation-&-IoT/Airports-&-Infrastructure.webp`, description: '' },
  ]
};
