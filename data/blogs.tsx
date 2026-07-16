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
        paragraphs:[
          ""
        ],
        
        paralist: [
          <><b>Cloud ERP:</b> With simpler deployment, lower costs, and unmatched agility, cloud ERP is a game-changer. It proved invaluable during the pandemic by supporting remote work.  
          </>,
          <><b>Multi-Tier ERP:</b>  Large organizations use tier-1 ERP at the corporate level and cloud-based tier-2 solutions for subsidiaries, ensuring seamless data exchange.
          </>,
          <><b>Digital Transformation:</b> IoT, AI, and analytics enhance visibility, boost revenue, and improve customer service.
          </>,
          <><b>Customized ERP:</b> Low-code platforms enable tailored solutions with user-friendly dashboards and AI-driven chatbots.
          </>,
          <><b>AI, ML, AR, and VR:</b> These technologies personalize experiences and optimize processes, from predictive analytics to immersive training.
          </>,
          <><b>Mobile ERP:</b> Mobile apps provide on-the-go access to critical data, boosting productivity with tasks like approvals and tracking.
          </>,
          <><b>SaaS and XaaS ERP:</b> Software-as-a-Service models offer secure, scalable solutions with IoT integration.
          </>,
          <><b>OpenLogic ERP:</b> This customizable, low-code platform empowers businesses to automate workflows and integrate tools without technical expertise.
          </>,

        ],
        
      },
      {
        heading: "",
        paragraphs: [
          "",

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
