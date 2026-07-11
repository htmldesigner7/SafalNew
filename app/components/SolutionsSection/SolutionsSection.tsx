'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import styles from './SolutionsSection.module.css';

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    image: '/images/Homepage/Enterprise-Products-Platforms.webp',
    description: 'Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi amet egestas sit habitant. At mauris euismod dolor scelerisque ac. Fermentum risus.',
    description2: 'Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi',
  },
  {
    id: '02',
    title: '02. Brand, Digital & Creative Services',
    shortTitle: '02. Brand, Digital & Creative Services',
    image: '/images/Homepage/Brand-Digital-Creative-Services.webp',
    description: 'Elevate your brand identity with our comprehensive creative services. We blend strategic thinking with innovative design to craft compelling digital experiences that resonate with your target audience.',
    description2: 'From visual identity systems to immersive web platforms, our creative team delivers solutions that drive engagement and business growth.',
  },
  {
    id: '03',
    title: '03. Startup Product Development & Consulting',
    shortTitle: '03. Startup Product Development & Consulting',
    image: '/images/Homepage/Startup-Product-Development-Consulting.webp',
    description: 'We partner with visionary founders to turn disruptive ideas into scalable products. Our end-to-end consulting covers market validation, MVP development, and go-to-market strategies.',
    description2: 'Leverage our technical expertise and business acumen to accelerate your startup\'s growth trajectory and secure a competitive edge.',
  },
  {
    id: '04',
    title: '04. Industrial Automation & IoT',
    shortTitle: '04. Industrial Automation & IoT',
    image: '/images/Homepage/Industril-Automation-IoT.webp',
    description: 'Transform your manufacturing and supply chain operations with intelligent automation. Our IoT solutions provide real-time visibility, predictive maintenance, and operational efficiency.',
    description2: 'Connect your physical assets to digital ecosystems for data-driven decision making and unprecedented industrial productivity.',
  },
  {
    id: '05',
    title: '05. AI & Emerging Technology',
    shortTitle: '05. AI & Emerging Technology',
    image: '/images/Homepage/AI-Emerging-Technology.webp',
    description: 'Harness the power of agentic AI and machine learning to solve complex business challenges. We build intelligent systems that automate workflows and generate actionable insights.',
    description2: 'Stay ahead of the curve by integrating bleeding-edge technologies that redefine industry standards and user expectations.',
  },
  {
    id: '06',
    title: '06. Business & Financial Advisory',
    shortTitle: '06. Business & Financial Advisory',
    image: '/images/Homepage/Business-Financial-Advisory.webp',
    description: 'Navigate complex market dynamics with our strategic advisory services. We provide data-backed financial modeling, M&A support, and corporate restructuring expertise.',
    description2: 'Our seasoned advisors help you optimize capital allocation and maximize stakeholder value across your enterprise portfolio.',
  },
  {
    id: '07',
    title: '07. Financial Accounting',
    shortTitle: '07. Financial Accounting',
    image: '/images/Homepage/Financial-Accounting.webp',
    description: 'Ensure compliance and financial transparency with our robust accounting solutions. We offer comprehensive bookkeeping, tax planning, and statutory reporting services.',
    description2: 'Streamline your financial operations with modern cloud-based accounting platforms tailored for global enterprises.',
  },
  {
    id: '08',
    title: '08. Technology Staffing',
    shortTitle: '08. Technology Staffing',
    image: '/images/Homepage/Technology-Staffing.webp',
    description: 'Scale your engineering teams rapidly with our elite talent network. We provide specialized staffing solutions across software development, data science, and cloud infrastructure.',
    description2: 'Whether you need project-based contractors or permanent hires, we match you with vetted professionals who fit your technical requirements and company culture.',
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
            <h2 className="title_60">A Diversified Technology Group.</h2>
            <p className={styles.subtitle}>
              We are a diversified technology holding company engineering the future of global enterprise. Operating at the intersection of agentic AI, industrial automation, and strategic advisory, we unify complex systems to accelerate growth. We don&apos;t just build software; we architect the frameworks that power industry leaders worldwide.
            </p>
          </header>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={174} prefix="₹" suffix=" Crore" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Strategic Exit Achieved.</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={25000} suffix="+" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Active Global Users.</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Countries Deployed.</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <AnimatedCounter value={500000} suffix="+" />
              </div>
              <div className={styles.statDivider}></div>
              <p>Industrial Products Managed.</p>
            </div>
          </div>

        </div>
      </section>

      <section className={`${styles.section} mt_80`}>
        <div className="container-1600">

          {/* Top Header */}
          <h2 className="title_60 text-center">Comprehensive technology and business solutions.</h2>

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

                <Link href="#explore" className="btn-outline btn-outline-red mt_40">
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

