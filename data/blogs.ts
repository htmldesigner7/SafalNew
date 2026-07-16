import { BlogPost } from './mockPosts';

export const blogsData: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Transforming Manufacturing with AI',
    description: 'Discover how artificial intelligence is revolutionizing the manufacturing sector with predictive maintenance and automated quality control.',
    imageSrc: "/images/Industrial-Automation-&-IoT/Industrial-Automation-&-IoT.webp",
    date: '10-March-2024',
    tags: ['Blog Posts', 'AI & Automation', 'Manufacturing'],
    isFeatured: true,
    content: [
      {
        heading: "The Dawn of AI in Manufacturing",
        paragraphs: [
          "Artificial intelligence is no longer just a buzzword; it is actively reshaping the global manufacturing landscape. From predictive maintenance that anticipates machine failures before they happen, to advanced computer vision systems that inspect products with flawless precision, AI is driving unprecedented efficiency.",
          "By implementing smart automation, factories are significantly reducing downtime and minimizing waste. The ability to process massive amounts of operational data in real-time allows managers to make strategic decisions instantly, saving millions of dollars annually."
        ]
      },
      {
        heading: "Automated Quality Control",
        paragraphs: [
          "One of the most immediate benefits of integrating AI into manufacturing is the drastic improvement in quality control. Traditional manual inspections are prone to human error and fatigue. In contrast, AI-powered cameras and sensors can detect microscopic defects on an assembly line moving at high speeds.",
          "This continuous, automated scrutiny ensures that only products meeting the highest standards reach the consumer, protecting brand reputation and reducing costly recalls."
        ]
      }
    ]
  },
  {
    id: 'post-2',
    title: 'The Future of Cloud ERP',
    description: 'Learn why modern enterprises are migrating to cloud-based ERP solutions for better scalability and real-time insights.',
    imageSrc: "/images/blogs/blogs.webp",
    date: '05-April-2024',
    tags: ['Blog Posts', 'ERP Solutions', 'Cloud Migration'],
    content: [
      {
        heading: "Breaking Down Legacy Silos",
        paragraphs: [
          "For decades, organizations have struggled with fragmented on-premise systems that isolate data within specific departments. Cloud ERP solutions are breaking down these silos by providing a single, unified source of truth across the entire enterprise.",
          "This centralization empowers teams with real-time access to critical financial, operational, and supply chain metrics, fostering collaboration and accelerating growth."
        ]
      }
    ]
  }
];
