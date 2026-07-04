export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  tags: string[];
  isFeatured?: boolean;
}

export const mockPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Transforming Manufacturing with AI',
    description: 'Discover how artificial intelligence is revolutionizing the manufacturing sector with predictive maintenance and automated quality control.',
    imageSrc: '/images/manufacturing.jpg',
    date: '10-March-2024',
    tags: ['AI & Automation', 'Manufacturing'],
    isFeatured: true
  },
  {
    id: 'post-2',
    title: 'The Future of Cloud ERP',
    description: 'Learn why modern enterprises are migrating to cloud-based ERP solutions for better scalability and real-time insights.',
    imageSrc: '/images/hero-section.jpg',
    date: '05-April-2024',
    tags: ['ERP Solutions', 'Cloud Migration']
  },
  {
    id: 'post-3',
    title: 'Aviation Tech Innovations',
    description: 'Explore the latest technological advancements in the aviation industry, from predictive analytics to autonomous systems.',
    imageSrc: '/images/hero-3d.jpg',
    date: '12-May-2024',
    tags: ['Aviation Tech', 'Case Studies']
  },
  {
    id: 'post-4',
    title: 'Streamlining Finance Operations',
    description: 'How digital transformation is helping financial institutions automate compliance and improve customer experience.',
    imageSrc: '/images/finance.jpg',
    date: '20-June-2024',
    tags: ['Finance', 'AI & Automation']
  }
];
