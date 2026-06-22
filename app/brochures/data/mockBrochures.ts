export interface Brochure {
  id: string;
  title: string;
  pdfPages: number;
  pdfSize: string;
  imageSrc: string;
  tags: string[];
  isFeatured?: boolean;
}

export const mockBrochures: Brochure[] = [
  {
    id: 'feat-1',
    title: 'The Future of Distributed Enterprise - Full Brochure',
    pdfPages: 18,
    pdfSize: '4.3 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
    isFeatured: true,
  },
  {
    id: 'brochure-1',
    title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
    pdfPages: 12,
    pdfSize: '3.2 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
  },
  {
    id: 'brochure-2',
    title: 'Automating the Supply Chain: A 2026 Perspective.',
    pdfPages: 7,
    pdfSize: '2.5 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
  },
  {
    id: 'brochure-3',
    title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
    pdfPages: 5,
    pdfSize: '1.8 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
  },
  {
    id: 'brochure-4',
    title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
    pdfPages: 6,
    pdfSize: '1.9 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
  },
  {
    id: 'brochure-5',
    title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
    pdfPages: 12,
    pdfSize: '3.2 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
  },
  {
    id: 'brochure-6',
    title: 'Automating the Supply Chain: A 2026 Perspective.',
    pdfPages: 7,
    pdfSize: '2.5 MB',
    imageSrc: '/images/brochure.png',
    tags: ['Brochure', 'ERP Solution'],
  }
];
