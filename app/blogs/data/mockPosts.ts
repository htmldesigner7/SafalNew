export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  tags: string[];
  isFeatured?: boolean;
  content?: BlogSection[];
}

export const mockPosts: BlogPost[] = [
  {
    id: 'feat-1',
    title: 'The AI-Driven Enterprise: Scaling Low-Code ERP Across Global Markets.',
    description: 'Discover how legacy manufacturing hubs are leveraging autonomous data nodes and low-code infrastructure to achieve unprecedented operational velocity and eliminate system friction.',
    date: '12/02/2026',
    imageSrc: '/safal/images/blogs.png',
    tags: ['Blog', 'ERP Solution'],
    isFeatured: true,
    content: [
      {
        paragraphs: [
          'In an era where market dynamics shift overnight, rigid infrastructure is a liability. The modern enterprise requires an ecosystem that learns, adapts, and scales autonomously. For decades, global conglomerates relied on heavy, monolithic ERP systems that took years to deploy and millions to update. Today, that model is fundamentally broken. By transitioning to a modular architecture, organizations can deploy tailored micro-services at unprecedented speeds.',
          'Egestas sed hac suspendisse leo a scelerisque pharetra du adipiscing. Cursus donec et congue enim. In volutpat dui non interdum lectus. Lacinia quam diam laoreet. Posuere gravida id asus lorem et diam. Eiusmod mattis di diam nulla. Sapien sapien proin it, sed. Vitae enim ipsum turpis at. Tincidunt molestie eu id sed semper auctor diam mo estie.'
        ]
      },
      {
        heading: 'The Fallacy of Traditional Monolithic Systems',
        paragraphs: [
          'Safal Infosoft\'s approach to digital transformation involves dismantling these silos. It is no longer sufficient to simply store data; systems must act upon it in real time. By integrating our proprietary low-code frameworks with advanced machine learning protocols, we empower internal teams to iterate on their own workflows without requiring massive developer oversight.',
          'Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim donec lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi nulla hac cras sed etiam phasellus. Tortor vivamus in enim donec at nulla leo. Amet pulvinar sit risus cursus, orci velit purus dictumst. In sit portitor lectus faucibus odio quis molestie vel tempus. Lacus tempor tempus mauris commodo eleifend. Hac nisl egestas mauris fringilla lectus. Sed nec mus dignissim id. Mauris eu magna nisl eu v. purus velit consectetur cursus. Consectetur ac id nibh elementum. Congue varius eu pulvinar est morbi natoque nullam et. Egestas odio lectus augue massa.'
        ]
      },
      {
        heading: 'Injecting Machine Learning into Daily Workflows',
        paragraphs: [
          'The true power of a modern ERP lies in predictive capacity. We embed AI directly into the user interface, transforming passive dashboards into active strategic advisors. Whether it\'s anticipating supply chain bottlenecks in the plant dried rubber industry or forecasting financial trends in trading, the system moves from being a system of record to a system of intelligence.',
          'Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim donec lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi nulla hac cras sed etiam phasellus. Tortor vivamus in enim donec at nulla leo. Amet pulvinar sit risus cursus, orci velit purus dictumst. In sit portitor lectus faucibus odio quis molestie vel tempus. Lacus tempor tempus mauris commodo eleifend. Hac nisl egestas mauris fringilla lectus. Sed nec mus dignissim id. Mauris eu magna nisl eu v. purus velit consectetur cursus. Consectetur ac id nibh elementum. Congue varius eu pulvinar est morbi natoque nullam et. Egestas odio lectus augue massa.'
        ]
      },
      {
        imageSrc: '/safal/images/ContactHandShake.png',
        imageAlt: 'Handshake'
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim donec lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi nulla hac cras sed etiam phasellus. Tortor vivamus in enim donec at nulla leo. Amet pulvinar sit risus cursus, orci velit purus dictumst. In sit portitor lectus faucibus odio quis molestie vel tempus. Lacus tempor tempus mauris commodo eleifend. Hac nisl egestas mauris fringilla lectus. Sed nec mus dignissim id. Mauris eu magna nisl eu v. purus velit consectetur cursus. Consectetur ac id nibh elementum. Congue varius eu pulvinar est morbi natoque nullam et. Egestas odio lectus augue massa.'
        ]
      }
    ]
  },
  {
    id: 'post-1',
    title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
    description: 'Why top-tier B2B organizations are investing heavily in cohesive digital design ecosystems to...',
    date: '12/02/2026',
    imageSrc: '/safal/images/Brand,-Digital-&-Creative-Services/Logistics-&-Supply-Chain.webp',
    tags: ['ERP Solution', 'Blog'],
  },
  {
    id: 'post-2',
    title: 'Automating the Supply Chain: A 2026 Perspective.',
    description: 'A technical breakdown of how Industrial IoT and machine learning are eliminating bottlenecks in...',
    date: '12/02/2026',
    imageSrc: '/safal/images/life-at-safal/Life@Safal/Aesthetic-Intelligence.webp',
    tags: ['ERP Solution', 'Blog'],
  },
  {
    id: 'post-3',
    title: 'Beyond Aesthetics: The ROI of Enterprise Brand Strategy.',
    description: 'Why top-tier B2B organizations are investing heavily in cohesive digital design ecosystems to...',
    date: '12/02/2026',
    imageSrc: '/safal/images/our-story/Our-Story/Decentralized-Security.webp',
    tags: ['ERP Solution', 'Blog'],
  },
  {
    id: 'post-4',
    title: 'The Future of Decentralized Corporate Banking.',
    description: 'How our business advisory division envisions the next decade of institutional transaction processi...',
    date: '12/02/2026',
    imageSrc: '/safal/images/banner-images/Brand,-Digital-&-Creative-Services.webp',
    tags: ['ERP Solution', 'Blog'],
  },
  {
    id: 'post-5',
    title: 'Transforming Healthcare with Predictive Analytics.',
    description: 'A case study on implementing data-driven patient care models using Safal\'s highly customi...',
    date: '12/02/2026',
    imageSrc: '/safal/images/Corporate-Governance/Design-Driven-Innovation..webp',
    tags: ['ERP Solution', 'Blog'],
  },
  {
    id: 'post-6',
    title: 'Designing for Data Density in Complex SaaS.',
    description: 'Our Creative Head shares a framework for ensuring accessible, user-friendly interfaces wit...',
    date: '12/02/2026',
    imageSrc: '/safal/images/blogs.png',
    tags: ['ERP Solution', 'Blog'],
  }
];
