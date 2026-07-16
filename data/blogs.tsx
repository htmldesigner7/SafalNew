import React from 'react';
import { BlogPost } from './mockPosts';

export const blogsData: BlogPost[] = [

  {
    id: 'post-1',
    title: 'Top ERP Trends Driving the Industry 4.0 Revolution',
    description: 'The ERP landscape is buzzing with innovation, fueled by technologies that align with Industry 4.0’s focus on connectivity and automation. Here are the trends reshaping the future:',
    imageSrc: "/images/Industrial-Automation-&-IoT/Industrial-Automation-&-IoT.webp",
    date: '',
    tags: ['Blog Posts',],
    isFeatured: true,
    content: [
      {
        heading: "",
        paragraphs: [
          ""
        ],
        paralist: [
          <><b>Cloud ERP:</b> With simpler deployment, lower costs, and unmatched agility, cloud ERP is a game-changer. It proved invaluable during the pandemic by supporting remote work.  
          </>,
          <><b>Cloud ERP:</b> With simpler deployment, lower costs, and unmatched agility, cloud ERP is a game-changer. It proved invaluable during the pandemic by supporting remote work.  
          </>,

        ],
      },
      {
        heading: "Automated Quality Control",
        paragraphs: [
          "One of the most immediate benefits of integrating AI into manufacturing is the drastic improvement in quality control. Traditional manual inspections are prone to human error and fatigue. In contrast, AI-powered cameras and sensors can detect microscopic defects on an assembly line moving at high speeds.",
          "This continuous, automated scrutiny ensures that only products meeting the highest standards reach the consumer, protecting brand reputation and reducing costly recalls.",

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
          "This centralization empowers teams with real-time access to critical financial, operational, and supply chain metrics, fostering collaboration and accelerating growth.",

        ],

        paralist: ["ravi", "ravi"]
      }
    ]
  }
];
