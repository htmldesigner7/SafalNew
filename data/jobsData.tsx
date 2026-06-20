export interface JobCard {
  id: string;
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  experience?: string;
  overview?: string;
  keyResponsibilities?: string[];
  tasksAndResponsibilities?: string[];
  skillsAndExperience?: string[];
}

export const jobsData: JobCard[] = [
  {
    id: "senior-full-stack",
    title: "Senior Full-Stack Engineer",
    description: "Architect and develop scalable, high-performance web applications for our global enterprise clients using modern JavaScript frameworks.",
    department: "Engineering & Tech",
    location: "Ahmedabad, India",
    type: "Full-Time",
    experience: "5+ Years",
    overview: "We are seeking a highly skilled Senior Full-Stack Engineer to join our core development team. In this role, you will be responsible for building and maintaining robust, scalable enterprise software solutions. You will work closely with cross-functional teams, including product managers and UX designers across our global hubs, to deliver high-quality digital products that solve complex business challenges. This role requires a deep understanding of modern web architecture and a passion for writing clean, efficient code.",
    keyResponsibilities: [
      "Architect, develop, and deploy scalable web applications using React.js and Node.js.",
      "Collaborate seamlessly with our global UI/UX and product teams to translate design prototypes into functional, responsive software.",
      "Optimize enterprise applications for maximum speed, scalability, and zero-downtime reliability.",
      "Identify and resolve complex technical bottlenecks within large-scale data systems.",
      "Mentor junior developers and enforce elite coding standards across the engineering department."
    ],
    tasksAndResponsibilities: [
      "Write clean, modular, and extensively tested code in accordance with agile development methodologies.",
      "Design and implement secure RESTful APIs and handle complex third-party system integrations.",
      "Conduct rigorous peer code reviews to maintain high-quality software architecture.",
      "Manage cloud deployments and monitor system performance using modern CI/CD pipelines.",
      "Participate in weekly global engineering sprints and technical strategy sessions."
    ],
    skillsAndExperience: [
      "5+ years of professional experience in full-stack web development.",
      "Deep proficiency in modern JavaScript (ES6+), React.js, Node.js, and TypeScript.",
      "Strong experience designing and managing relational and NoSQL databases (PostgreSQL, MongoDB).",
      "Hands-on experience with cloud platforms (AWS or Azure) and containerization (Docker/Kubernetes).",
      "Excellent problem-solving skills and the ability to communicate technical concepts to non-technical stakeholders."
    ]
  },
  {
    id: "lead-product-designer",
    title: "Lead Product Designer (UI/UX)",
    description: "Drive the visual and interaction design for complex digital ecosystems. Transform dense operational data into intuitive, award-winning user experiences.",
    department: "Creative Strategy",
    location: "Dubai, UAE",
    type: "Full-Time",
    experience: "7+ Years",
    overview: "We are looking for a visionary Lead Product Designer to shape the future of our enterprise software. You will lead the design process from concept to execution...",
    keyResponsibilities: ["Lead UI/UX design for flagship products.", "Conduct user research and usability testing."],
    tasksAndResponsibilities: ["Create wireframes, prototypes, and high-fidelity mockups.", "Collaborate with engineering teams for implementation."],
    skillsAndExperience: ["7+ years in Product Design.", "Expertise in Figma, Sketch, and Adobe Creative Suite."]
  },
  {
    id: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    description: "Design, deploy, and manage secure, resilient cloud infrastructure. Ensure seamless data migration and zero-trust security for our multi-continent hubs.",
    department: "Cloud Infrastructure",
    location: "New York, USA",
    type: "Full-Time",
    experience: "8+ Years",
    overview: "We are hiring a Cloud Solutions Architect to design and oversee our global cloud infrastructure...",
    keyResponsibilities: ["Design scalable cloud architectures.", "Ensure security and compliance of cloud environments."],
    tasksAndResponsibilities: ["Deploy and manage infrastructure using Terraform.", "Optimize cloud costs and performance."],
    skillsAndExperience: ["8+ years in Cloud Architecture.", "AWS or Azure Certifications.", "Experience with Kubernetes and CI/CD."]
  }
];
