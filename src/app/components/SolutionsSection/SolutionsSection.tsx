'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './SolutionsSection.module.css';

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
        setCount(Math.floor(ease * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count.toLocaleString('en-IN')}{suffix}</span>;
}


const solutions = [
  {
    id: '01',
    title: '01. Enterprise Products & Platforms',
    shortTitle: '01. Enterprise Products & Platforms',
    image: `/images/Homepage/Enterprise-Products-Platforms.webp`,
    description: 'Safal designs and delivers integrated enterprise platforms that unify business processes, data, and operations. As an enterprise solutions provider, we build scalable systems that support efficiency, control, and long-term growth.',
    description2: 'Our platforms are modular, adaptable, and structured to align with evolving enterprise requirements across industries.',
    link: '/enterprise-products'
  },
  {
    id: '02',
    title: '02. Brand, Digital & Creative Services',
    shortTitle: '02. Brand, Digital & Creative Services',
    image: `/images/Homepage/Brand-Digital-Creative-Services.webp`,
    description: 'We build structured brand and digital systems that ensure consistency across communication, platforms, and customer touchpoints. Our approach connects design with business objectives and operational clarity.',
    description2: 'As a technology consulting company, we deliver digital solutions that function as integrated extensions of enterprise systems.',
    link: '/brand-digital-creative-services'
  },
  {
    id: '03',
    title: '03. Startup Product Development & Consulting',
    shortTitle: '03. Startup Product Development & Consulting',
    image: `/images/Homepage/Startup-Product-Development-Consulting.webp`,
    description: 'Safal supports startups and growth-stage businesses in building scalable products aligned with market and operational requirements. We provide structured product development with a focus on clarity, performance, and long-term viability.',
    description2: 'From concept to execution, we enable products that are built for scale and sustained growth.',
    link: '/startup-product-development'
  },
  {
    id: '04',
    title: '04. Industrial Automation & IoT',
    shortTitle: '04. Industrial Automation & IoT',
    image: `/images/Homepage/Industril-Automation-IoT.webp`,
    description: 'We deliver automation and IoT systems that connect machines, processes, and data across industrial environments. These systems improve visibility, efficiency, and operational control.',
    description2: 'As a digital transformation partner, we help organizations transition to connected and data-driven industrial operations.',
    link: '/industrial-automation'
  },
  {
    id: '05',
    title: '05. AI & Emerging Technology',
    shortTitle: '05. AI & Emerging Technology',
    image: `/images/Homepage/AI-Emerging-Technology.webp`,
    description: 'Safal integrates AI and emerging technologies into enterprise systems to enhance decision-making and operational intelligence. Our solutions are designed to be practical, scalable, and aligned with real business applications.',
    description2: 'We focus on building systems that improve performance while maintaining stability and control.',
    link: '/ai-emerging-technology'
  },
  {
    id: '06',
    title: '06. Business & Financial Advisory',
    shortTitle: '06. Business & Financial Advisory',
    image: `/images/Homepage/Business-Financial-Advisory.webp`,
    description: 'We provide structured advisory services that align financial strategy with business objectives. Our approach focuses on clarity, compliance, and sustainable growth.',
    description2: 'Safal supports enterprises in making informed decisions across planning, expansion, and financial structuring.',
    link: '/business-financial-advisory'
  },
  {
    id: '07',
    title: '07. Financial Accounting',
    shortTitle: '07. Financial Accounting',
    image: `/images/Homepage/Financial-Accounting.webp`,
    description: 'Our financial accounting services ensure accuracy, compliance, and transparency across business operations. We build systems that support reliable reporting and governance.',
    description2: 'These services integrate seamlessly with broader enterprise processes and operational frameworks.',
    link: '/financial-accounting-solutions'
  },
  {
    id: '08',
    title: '08. Technology Staffing',
    shortTitle: '08. Technology Staffing',
    image: `/images/Homepage/Technology-Staffing.webp`,
    description: 'Safal provides technology staffing solutions that enable organizations to build and scale capable teams. We connect businesses with skilled professionals aligned to specific project and operational needs.',
    description2: 'Our approach ensures continuity, flexibility, and access to specialized expertise across technology functions.',
    link: '/technology-staffing'
  }
];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0];

  return (
    <>
      <section className={`${styles.section} mt_80`}>
        <div className="container-1600">

          {/* Top Header */}
          <header className={styles.header}>
            <h2 className="title_60">A Diversified Technology Holding Group.</h2>
            <p className={styles.subtitle}>
             Safal is a diversified technology holding company and <b>enterprise solutions provider</b> focused on building and scaling integrated systems for modern enterprises. As a <b>technology consulting company</b> and <b>digital transformation partner,</b> we operate across automation, enterprise platforms, and strategic advisory, enabling organizations to align technology with business outcomes.
            </p>
            <p className={styles.subtitle}>
              We architect systems that bring structure, scalability, and long-term value to enterprise operations.
            </p>
          </header>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={20} prefix="" suffix="+ Years" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Technology & Business Experience</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={25000} suffix="+" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Active Global Users</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Countries of Deployment</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={2500} suffix="+" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Projects & Implementations Delivered</p>
            </div>
          </div>

        </div>
      </section>

      <section className={`${styles.section} mt_80`}>
        <div className="container-1600">

          {/* Top Header */}
          <h2 className="title_60 text-center">Integrated Technology & Business Solutions.</h2>

          <div className={styles.interactiveBlock}>

            {/* Vertical Tabs */}
            <div className={styles.tabsCol}>
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  className={`${styles.tabBtn} ${activeTab === solution.id ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(solution.id)}
                >
                  {solution.shortTitle}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <motion.div
              className={styles.contentCol}
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  className={styles.solutionImage}
                />
              </div>

              <div className={styles.textContent}>
                <h4 className="title_40">{activeSolution.title}</h4>
                <p>{activeSolution.description}</p>
                <p className="mt-4">{activeSolution.description2}</p>

                <Link href={activeSolution.link} className="btn-outline btn-outline-red mt_40">
                  Explore More
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </>

  );
}

