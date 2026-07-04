export interface Brochure {
  id: string;
  title: string;
  imageSrc: string;
  tags: string[];
  pdfPages: number;
  pdfSize: string;
  isFeatured?: boolean;
}

export const mockBrochures: Brochure[] = [
  {
    id: 'brochure-1',
    title: 'Enterprise AI Implementation Guide',
    imageSrc: '/images/hero-section.jpg',
    tags: ['Brochures', 'AI & Automation'],
    pdfPages: 24,
    pdfSize: '2.4 MB',
    isFeatured: true
  },
  {
    id: 'brochure-2',
    title: 'Cloud ERP Migration Strategy',
    imageSrc: '/images/hero-3d.jpg',
    tags: ['Whitepapers', 'Cloud Migration'],
    pdfPages: 36,
    pdfSize: '4.1 MB'
  },
  {
    id: 'brochure-3',
    title: 'Industrial Automation Overview',
    imageSrc: '/images/manufacturing.jpg',
    tags: ['Brochures', 'ERP Solutions'],
    pdfPages: 12,
    pdfSize: '1.8 MB'
  }
];
