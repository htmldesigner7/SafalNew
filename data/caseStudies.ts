import { BlogPost } from './mockPosts';

export const caseStudiesData: BlogPost[] = [
  {
    id: 'post-3',
    title: 'Aviation Tech Innovations',
    description: 'Explore the latest technological advancements in the aviation industry, from predictive analytics to autonomous systems.',
    imageSrc: '/images/hero-3d.jpg',
    date: '12-May-2024',
    tags: ['Case Studies', 'Aviation Tech'],
    content: [
      {
        heading: "Re-imagining the Skies",
        subheading: "Enhancing Efficiency Through Technology",
        paragraphs: [
          "The aviation industry is undergoing a digital renaissance. Airlines and aerospace manufacturers are heavily investing in predictive analytics to optimize flight paths, reduce fuel consumption, and enhance passenger safety.",
          "Furthermore, autonomous systems and advanced robotics are streamlining ground operations and maintenance protocols, ensuring faster turnarounds and minimizing costly delays."
        ]
      }
    ]
  },
  {
    id: 'post-4',
    title: 'Streamlining Finance Operations',
    description: 'How digital transformation is helping financial institutions automate compliance and improve customer experience.',
    imageSrc: "/images/Become-a-Partner/Becomepartner/Technology-Integrations.webp",
    date: '20-June-2024',
    tags: ['Case Studies', 'Finance', 'AI & Automation'],
    content: [
      {
        heading: "The Digital Financial Ecosystem",
        subheading: "Enhancing Efficiency Through Technology",
        paragraphs: [
          "Financial institutions are under constant pressure to innovate while adhering to strict regulatory frameworks. Digital transformation is enabling these organizations to automate complex compliance reporting, drastically reducing the risk of human error.",
          "Beyond compliance, AI-driven chatbots and personalized financial algorithms are transforming the customer experience, offering tailored insights and instantaneous support that modern consumers expect."
        ]
      }
    ]
  }
];
