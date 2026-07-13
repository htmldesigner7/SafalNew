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
    id: "sql-developer",
    title: "SQL Developer",
    description: "Design and optimize high-performance database systems that power enterprise applications, ensuring stability, speed, and scalability across critical operations.",
    department: "Engineering & Tech",
    location: "Ahmedabad, India",
    type: "Full-Time",
    experience: "0–1 Year",
    overview: <>
    <p>We are looking for an SQL Developer who can design, optimize, and maintain high-performance database systems that support enterprise-grade applications. In this role, you will work closely with developers and internal teams to ensure database stability, reliability, and efficiency across all operations.</p>
    <p>You will play a key role in improving query performance, maintaining data integrity, and ensuring that database systems scale seamlessly with business needs.</p>
    </>,
    keyResponsibilities: [
      "Write, optimize, and maintain complex SQL queries for application performance.",
      "Ensure database performance, security, and availability across systems.",
      "Manage database operations including backup, recovery, and migration.",
      "Design and maintain database structures aligned with application requirements.",
      "Collaborate with development teams to improve in-application database usage."
    ],
    tasksAndResponsibilities: [
      "Monitor and optimize database performance and resource utilization.",
      "Handle database upgrades, troubleshooting, and issue resolution.",
      "Maintain documentation, schemas, and data flow structures (DFDs).",
      "Work with MS SQL Server and reporting tools like Crystal Reports.",
      "Ensure adherence to best practices in database management and optimization."
    ],
    skillsAndExperience: [
      "Strong proficiency in SQL and relational database systems.",
      "Familiarity with MS SQL Server and database optimization techniques.",
      "Ability to handle complex queries and large datasets efficiently.",
      "Understanding of database design, indexing, and performance tuning.",
      "Basic knowledge of ERP systems and data structures.",
      "Familiarity with Git or version control systems is a plus"
    ]
  },
  {
    id: "pre-sales-executive",
    title: "Pre-Sales Executive (IT)",
    description: "Drive strategic growth by connecting enterprise needs with tailored technology solutions, owning the journey from first conversation to successful deal closure.",
    department: "Sales & Strategy",
    location: " Ahmedabad, India",
    type: "Full-Time",
    experience: "1–2 Years",
    overview: <>
    <p>We are looking for a Pre-Sales Executive who can bridge business needs with technology solutions. In this role, you will drive lead generation, engage with potential clients, and support the end-to-end sales cycle by positioning the right solutions for the right problems.</p>
    <p>You will work closely with sales, product, and technical teams to create meaningful conversations, build pipelines, and convert opportunities into long-term partnerships.</p>
    </>,
    keyResponsibilities: [
      "Identify, qualify, and engage potential clients through data-driven prospecting.", 
      "Build and manage a strong pipeline through outreach and lead generation.",
      "Schedule and conduct discovery calls, demos, and client interactions.",
      "Collaborate with internal teams to align solutions with client requirements.",
      "Drive conversations with decision-makers including CXOs and IT leaders.",
    ],
    tasksAndResponsibilities: [
      "Use platforms like LinkedIn and Apollo for data profiling and lead generation.",
      "Execute targeted marketing and outreach campaigns.",
      "Develop content and messaging tailored to different customer personas.",
      "Manage CRM tools to track pipeline performance and optimize conversions.",
      "Represent the company in webinars, meetings, and industry interactions.",
    ],
    skillsAndExperience: [
      "1–2 years of experience in IT sales, pre-sales, or consulting.",
      "Strong understanding of technology concepts (cloud, APIs, digital transformation).",
      "Excellent communication and storytelling skills.",
      "Experience with CRM tools like HubSpot or Salesforce.",
      "Ability to manage end-to-end sales cycles from prospecting to closure.",
      "MBA or relevant degree preferred.",
    ]
  },
];
