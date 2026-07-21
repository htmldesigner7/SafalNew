import { baseUrl } from '@/utils/baseUrl';
export interface Brochure {
  id: string;
  title: string;
  imageSrc: string;
  tags: string[];
  pdfPages: number;
  pdfSize: string;
  pdfUrl?: string;
  isFeatured?: boolean;
}

export const mockBrochures: Brochure[] = [
  {
    id: 'brochure-1',
    title: 'Safal - Company Profile 2026',
    imageSrc: `${baseUrl}/files/Frame-2085662964.webp`,
    tags: ['Brochures', 'Company Profile'],
    pdfPages: 24,
    pdfSize: '3.8 MB',
    pdfUrl: `${baseUrl}/files/Safal-Company-Profile-2026.pdf`,
    isFeatured: true
  },
  {
    id: 'brochure-2',
    title: 'DataNote - Brochure 2024',
    imageSrc: `${baseUrl}/files/2.webp`,
    tags: ['Brochures', 'ERP'],
    pdfPages: 36,
    pdfSize: '18.8 MB',
    pdfUrl: `${baseUrl}/files/Datanote--Brochure-2024.pdf`
  },
  {
    id: 'brochure-3',
    title: 'Formezy - Platform Brochure 2025',
    imageSrc: `${baseUrl}/files/Formezy-Brochure-2.webp`,
    tags: ['Brochures', 'Platform'],
    pdfPages: 42,
    pdfSize: '30.1 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Platform-Brochure--2025.pdf`
  },
  {
    id: 'brochure-4',
    title: 'Formezy - EAP Brochure 2026',
    imageSrc: `${baseUrl}/files/Formezy-EAP-Brochure.webp`,
    tags: ['Brochures', 'EAP'],
    pdfPages: 48,
    pdfSize: '46.1 MB',
    pdfUrl: `${baseUrl}/files/Formezy-EAP-Brochure-2026.pdf`
  },
  {
    id: 'brochure-5',
    title: 'Formezy - Overview Leaflet',
    imageSrc: `${baseUrl}/files/Formezy-Brochure-2.webp`,
    tags: ['Brochures', 'Overview'],
    pdfPages: 12,
    pdfSize: '8.2 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Leaflet-2026.pdf`
  },
  {
    id: 'brochure-6',
    title: 'Formezy - Chemical Industry',
    imageSrc: `${baseUrl}/files/Chemical-and-Pharma-Industry.webp`,
    tags: ['Brochures', 'Chemical'],
    pdfPages: 16,
    pdfSize: '8.3 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Chemical-Leaflet.pdf`
  },
  {
    id: 'brochure-7',
    title: 'Formezy - Engineering Industry',
    imageSrc: `${baseUrl}/files/Engineering-Industry.webp`,
    tags: ['Brochures', 'Engineering'],
    pdfPages: 16,
    pdfSize: '6.9 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Engineering-Leaflet.pdf`
  },
  {
    id: 'brochure-8',
    title: 'Formezy - Food & Beverage',
    imageSrc: `${baseUrl}/files/Food-and-Beverage-Industry.webp`,
    tags: ['Brochures', 'Food'],
    pdfPages: 20,
    pdfSize: '10.5 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Food-Industry-Leaflet.pdf`
  },
  {
    id: 'brochure-9',
    title: 'Formezy - Foundry Industry',
    imageSrc: `${baseUrl}/files/Casting-and-Forging-Industry.webp`,
    tags: ['Brochures', 'Foundry'],
    pdfPages: 14,
    pdfSize: '7.0 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Foundry-Leaflet.pdf`
  },
  {
    id: 'brochure-10',
    title: 'Formezy - Garment & Textile',
    imageSrc: `${baseUrl}/files/Garment-and-Textile-Industry.webp`,
    tags: ['Brochures', 'Textile'],
    pdfPages: 18,
    pdfSize: '10.9 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Garment-and-Textile-Leaflet.pdf`
  },
  {
    id: 'brochure-11',
    title: 'Formezy - Metal Processing',
    imageSrc: `${baseUrl}/files/Metal-Processing-Industry.webp`,
    tags: ['Brochures', 'Metal'],
    pdfPages: 20,
    pdfSize: '11.2 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Metal-Processing-Leaflet.pdf`
  },
  {
    id: 'brochure-12',
    title: 'Formezy - Plastic Industry',
    imageSrc: `${baseUrl}/files/Plastic-and-Rubber-Industry.webp`,
    tags: ['Brochures', 'Plastic'],
    pdfPages: 16,
    pdfSize: '9.4 MB',
    pdfUrl: `${baseUrl}/files/Formezy-Plastic-Leaflet.pdf`
  },
  {
    id: 'brochure-13',
    title: 'Ideaz Venture - Brochure 2025',
    imageSrc: `${baseUrl}/files/3.webp`,
    tags: ['Brochures', 'Venture'],
    pdfPages: 28,
    pdfSize: '18.9 MB',
    pdfUrl: `${baseUrl}/files/Ideaz-Venture-Brochure-2025.pdf`
  },
  {
    id: 'brochure-14',
    title: 'IW - Brochure 2024',
    imageSrc: `${baseUrl}/files/Solar-Industry.webp`,
    tags: ['Brochures', 'IW'],
    pdfPages: 32,
    pdfSize: '12.7 MB',
    pdfUrl: `${baseUrl}/files/IW-brochure-2024-32-Page.pdf`
  }
];
