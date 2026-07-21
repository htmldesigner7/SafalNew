import { baseUrl } from '@/utils/baseUrl';
import React from 'react';
import { BlogPost } from './mockPosts';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  date: string;
  tags: string[];
  className?: string; 
}

export const blogsData: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Top ERP Trends Driving the Industry 4.0 Revolution',
    description: 'The ERP landscape is buzzing with innovation, fueled by technologies that align with Industry 4.0’s focus on connectivity and automation. Here are the trends reshaping the future:',
    imageSrc: `${baseUrl}/images/blogs/blog-1-up-.webp`,
    date: '',
    tags: ['Blog Posts'],
    isFeatured: true,
    content: [
      {
        paralist: [
          <><b>Cloud ERP:</b> With simpler deployment, lower costs, and unmatched agility, cloud ERP is a game-changer. It proved invaluable during the pandemic by supporting remote work.</>,
          <><b>Multi-Tier ERP:</b> Large organizations use tier-1 ERP at the corporate level and cloud-based tier-2 solutions for subsidiaries, ensuring seamless data exchange.</>,
          <><b>Digital Transformation:</b> IoT, AI, and analytics enhance visibility, boost revenue, and improve customer service.</>,
          <><b>Customized ERP:</b> Low-code platforms enable tailored solutions with user-friendly dashboards and AI-driven chatbots.</>,
          <><b>AI, ML, AR, and VR:</b> These technologies personalize experiences and optimize processes, from predictive analytics to immersive training.</>,
          <><b>Mobile ERP:</b> Mobile apps provide on-the-go access to critical data, boosting productivity with tasks like approvals and tracking.</>,
          <><b>SaaS and XaaS ERP:</b> Software-as-a-Service models offer secure, scalable solutions with IoT integration.</>,
          <><b>OpenLogic ERP:</b> This customizable, low-code platform empowers businesses to automate workflows and integrate tools without technical expertise.</>
        ],

      },
      {
        paragraphs: [
          "These trends position ERP as a catalyst for innovation, helping businesses thrive in a tech-driven world."
        ]
      }
    ]
  },
  {
    id: 'post-2',
    title: 'How Effective Are ERP Systems for Your Business? Top Benefits and Insights',
    description: 'ERP systems have evolved into powerful tools that transform how businesses operate. From automating tasks to delivering real-time insights, they offer a wealth of benefits:',
    imageSrc: `${baseUrl}/images/blogs/blog2-down.webp`,
    date: '',
    tags: ['Blog Posts'],
    content: [
      {
        paralist: [
          <><b>Streamlined Operations:</b> Automate repetitive tasks like accounting, procurement, and HR, freeing up time for strategic priorities.</>,
          <><b>Enhanced Decision-Making:</b> Access real-time data across departments for faster, smarter choices.</>,
          <><b>Cost Efficiency:</b> Eliminate redundant processes and optimize resources, especially with cloud-based ERP.</>,
          <><b>Scalability:</b> Easily add users or functions as your business grows, thanks to cloud ERP’s flexibility.</>,
          <><b>Improved Customer Experience:</b> Integrate with eCommerce and IoT for seamless, personalized interactions.</>,
          <><b>Remote Work Support:</b> Cloud ERP enables distributed teams to collaborate effectively, a must in today’s hybrid world.</>
        ],

      },
      {
        paragraphs: [
          "By integrating advanced technologies like AI and IoT, ERP systems empower businesses to stay agile, efficient, and ready for the future."
        ]
      }
    ]
  },
  {
    id: 'post-3',
    title: 'How Management Information Systems, Decision Support Systems, and Executive Information Systems Work Together',
    description: 'Management Information Systems (MIS), Decision Support Systems (DSS), and Executive Information Systems (EIS) are the unsung heroes of business operations. Together, they enhance connectivity, streamline processes, and empower smarter decisions. Here’s how they collaborate:',
    imageSrc: `${baseUrl}/images/blogs/blog-3-up.webp`,
    date: '',
    tags: ['Blog Posts'],
    content: [
      {
        paralist: [
          <><b>Management Information Systems (MIS):</b> The heart of your data operations, MIS manages internal processes and stores critical documentation. It’s the foundation for day-to-day activities and decision-making.</>,
          <><b>Decision Support Systems (DSS):</b> DSS equips managers with tools to analyze data, generate reports, and make informed decisions across planning, operations, and sales. It’s your go-to for swift, accurate choices.</>,
          <><b>Executive Information Systems (EIS):</b> Designed for senior leaders, EIS blends MIS and DSS capabilities with advanced analytics and large-scale data storage. It delivers strategic insights for high-stakes decisions.</>
        ],

      },
      {
        paragraphs: [
          "MIS feeds data to DSS and EIS, enabling both to provide actionable insights. DSS supports operational decisions, while EIS empowers executives with a strategic edge. This interconnected trio creates a seamless ecosystem that drives efficiency and growth."
        ]
      }
    ]
  },
  /*
  {
    id: 'post-4',
    title: 'Top Reasons Why Enterprise Resource Planning (ERP) Implementations Fail',
    description: 'ERP systems promise streamlined operations, but without the right approach, they can fall short. The road to failure is often paved with misaligned goals, poor planning, or unrealistic expectations. Look at the most common things and how to sidestep them:',
    imageSrc: `${baseUrl}/images/blogs/blog-3-down.webp`,
    date: '',
    tags: ['Blog Posts'],
    content: [
      {
        paralist: [
          <><b>Mismatched ERP Selection:</b> Choosing an ERP that doesn’t fit your business is like forcing a square peg into a round hole. Conduct a SWOT analysis to ensure alignment with your needs.</>,
          <><b>Unclear Objectives:</b> Without a clear understanding of your organization’s wants and needs, you’re flying blind. Define goals upfront to stay on track.</>,
          <><b>Resistance from Stakeholders:</b> Imposing an ERP without buy-in breeds resistance. Engage teams early to foster collaboration and support.</>,
          <><b>Weak Project Management:</b> Incompetent teams, inadequate IT infrastructure, or ineffective consultants can derail progress. Invest in skilled professionals and robust systems.</>,
          <><b>Over-Customization:</b> Excessive tweaks complicate implementation. Focus on essential customizations to keep things streamlined.</>,
          <><b>Inadequate Testing:</b> Skipping validation, like Factory Acceptance Tests (FAT), risks system failures. Test thoroughly with all stakeholders involved.</>,
          <><b>Rushed Timelines:</b> A "get it done now" mindset sacrifices quality. Follow standard procedures, meet milestones, and prioritize reviews.</>,
          <><b>Lack of Ownership:</b> Unclear leadership or accountability creates confusion. Assign clear roles and empower executives to drive the project.</>,
          <><b>Short-Term Thinking:</b> Prioritizing quick wins over long-term success limits impact. Plan strategically for sustained growth.</>
        ],

      },
      {
        paragraphs: [
          "By addressing these pitfalls with careful planning, stakeholder alignment, and disciplined execution, you can turn ERP challenges into opportunities for success."
        ]
      }
    ]
  },
  {
    id: 'post-5',
    title: 'Enterprise Resource Planning Implementation Types & Methods',
    description: 'Implementing an ERP system is a transformative journey that integrates critical functions like Finance, Materials Management, Sales, and HR. Success hinges on careful planning and a structured approach. Here’s how to navigate the process effectively.',
    imageSrc: `${baseUrl}/images/blogs/blog1-down.webp`,
    date: '',
    tags: ['Blog Posts'],
    content: [
      {
        heading: 'Key Implementation Approaches',
        paragraphs: [
          "The way you roll out an ERP can shape its success. Consider these three methods, each with unique benefits and challenges:"
        ],
        paralist: [
          <><b>Big Bang:</b> Launch the ERP across the organization on a single go-live date. It’s bold and fast but carries higher risk if issues arise.</>,
          <><b>Phased Rollout:</b> Implement the system in stages, rolling out modules or departments over time. It’s safer but takes longer.</>,
          <><b>Parallel Adoption:</b> Run the new ERP alongside the legacy system, allowing gradual transition. It’s resource-heavy but minimizes disruption.</>
        ]
      },
      {
        paragraphs: [
          "Choose the method that best suits your business's size, complexity, and risk appetite."
        ]
      },
      {
        heading: 'The Six Phases of ERP Implementation',
        paragraphs: [
          "A disciplined, phased approach ensures a smooth rollout. Here are the six key stages:"
        ],
        paralist: [
          <><b>Discovery & Planning:</b> Research systems, form a core team, and define requirements aligned with your processes. Set timelines and allocate resources.</>,
          <><b>Design:</b> Map existing workflows and create efficient processes that leverage the ERP’s strengths. Involve functional users for practical insights.</>,
          <><b>Development:</b> Configure the system, customize where needed, and integrate processes not covered by legacy systems. Set up hardware and software.</>,
          <><b>Testing:</b> Test modules in a development server, fix issues, and retest. Use vendor tools to prepare users for deployment.</>,
          <><b>Deployment:</b> Transfer master data, go live, and address teething issues with post-go-live support.</>,
          <><b>Support & Updates:</b> Listen to user feedback, fix bugs, add features, and provide ongoing training to maximize value.</>
        ],

      },
      {
        paragraphs: [
          "By following these phases and engaging stakeholders, you'll pave the way for a successful ERP implementation."
        ]
      }
    ]
  },
  {
    id: 'post-6',
    title: 'POS FOR RETAIL OUTLETS?',
    description: <>
      <p>The revolution of Digital India is transforming the country into a place of digitally empowered businesses and a fast economy. Small and medium sized enterprises have started implementing commercial software to scale their business. The most recommended software for such businesses is the DataNote OpenLogic POS system.</p>
      <p>DataNote POS (point of sale) helps customers to make purchases, record transactions and sales data, view performance reports, and helps businesses to manage all the aspects of operations, including sales, inventory management, and customer management. DataNote POS generates data from each transaction that gives better insight into the business operation. Analyzed data improves business accuracy and multiplies revenue.</p>
      <p>Here, see how you can run your business the right way in today’s highly competitive environment through DataNote POS.</p>
    </>,
    imageSrc: `${baseUrl}/images/blogs/blog3-up.webp`,
    date: '',
    tags: ['Blog Posts'],
    content: [
      {
        heading: 'Right ways to run your Business',
        paragraphs: [

        ],
       
      },

    ]
  }
  */
];
