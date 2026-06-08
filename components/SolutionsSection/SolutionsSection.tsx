'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SolutionsSection.module.css';

const solutions = [
  {
    id: '01',
    title: '01. Enterprise Products & Platforms',
    shortTitle: '01. Enterprise Products & Platforms',
    image: '/solution-placeholder.png', // Replace with actual image
    description: 'Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi amet egestas sit habitant. At mauris euismod dolor scelerisque ac. Fermentum risus.',
    description2: 'Lorem ipsum dolor sit amet consectetur. Est amet est id pretium. Nulla non sed amet adipiscing malesuada volutpat scelerisque tincidunt. Massa aliquet tellus augue at morbi',
  },
  {
    id: '02',
    title: '02. Brand, Digital & Creative Services',
    shortTitle: '02. Brand, Digital & Creative Services',
    image: '/solution-placeholder.png',
    description: 'Elevate your brand identity with our comprehensive creative services. We blend strategic thinking with innovative design to craft compelling digital experiences that resonate with your target audience.',
    description2: 'From visual identity systems to immersive web platforms, our creative team delivers solutions that drive engagement and business growth.',
  },
  {
    id: '03',
    title: '03. Startup Product Development & Consulting',
    shortTitle: '03. Startup Product Development & Consulting',
    image: '/solution-placeholder.png',
    description: 'We partner with visionary founders to turn disruptive ideas into scalable products. Our end-to-end consulting covers market validation, MVP development, and go-to-market strategies.',
    description2: 'Leverage our technical expertise and business acumen to accelerate your startup\'s growth trajectory and secure a competitive edge.',
  },
  {
    id: '04',
    title: '04. Industrial Automation & IoT',
    shortTitle: '04. Industrial Automation & IoT',
    image: '/solution-placeholder.png',
    description: 'Transform your manufacturing and supply chain operations with intelligent automation. Our IoT solutions provide real-time visibility, predictive maintenance, and operational efficiency.',
    description2: 'Connect your physical assets to digital ecosystems for data-driven decision making and unprecedented industrial productivity.',
  },
  {
    id: '05',
    title: '05. AI & Emerging Technology',
    shortTitle: '05. AI & Emerging Technology',
    image: '/solution-placeholder.png',
    description: 'Harness the power of agentic AI and machine learning to solve complex business challenges. We build intelligent systems that automate workflows and generate actionable insights.',
    description2: 'Stay ahead of the curve by integrating bleeding-edge technologies that redefine industry standards and user expectations.',
  },
  {
    id: '06',
    title: '06. Business & Financial Advisory',
    shortTitle: '06. Business & Financial Advisory',
    image: '/solution-placeholder.png',
    description: 'Navigate complex market dynamics with our strategic advisory services. We provide data-backed financial modeling, M&A support, and corporate restructuring expertise.',
    description2: 'Our seasoned advisors help you optimize capital allocation and maximize stakeholder value across your enterprise portfolio.',
  },
  {
    id: '07',
    title: '07. Financial Accounting',
    shortTitle: '07. Financial Accounting',
    image: '/solution-placeholder.png',
    description: 'Ensure compliance and financial transparency with our robust accounting solutions. We offer comprehensive bookkeeping, tax planning, and statutory reporting services.',
    description2: 'Streamline your financial operations with modern cloud-based accounting platforms tailored for global enterprises.',
  },
  {
    id: '08',
    title: '08. Technology Staffing',
    shortTitle: '08. Technology Staffing',
    image: '/solution-placeholder.png',
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
              We are a diversified technology holding company engineering the future of global enterprise. Operating at the intersection of agentic AI, industrial automation, and strategic advisory, we unify complex systems to accelerate growth. We don't just build software; we architect the frameworks that power industry leaders worldwide.
            </p>
          </header>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>₹174 Crore</div>
              <div className={styles.statDivider}></div>
              <p>Strategic Exit Achieved.</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>25,000+</div>
              <div className={styles.statDivider}></div>
              <p>Active Global Users.</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>15+</div>
              <div className={styles.statDivider}></div>
              <p>Countries Deployed.</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>500,000+</div>
              <div className={styles.statDivider}></div>
              <p>Industrial Products Managed.</p>
            </div>
          </div>

        </div>
      </section>

      <section className={`${styles.section} mt_80`}>
        <div className="container-1600">

          {/* Top Header */}
          <header className={styles.header}>
            <h2 className="title_60">Comprehensive technology and business solutions.</h2>
          </header>

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
            <div className={styles.contentCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  className={styles.solutionImage}
                />
              </div>

              <div className={styles.textContent}>
                <h4 className={styles.contentTitle}>{activeSolution.title}</h4>
                <p className={styles.description}>{activeSolution.description}</p>
                <p className={styles.description}>{activeSolution.description2}</p>

                <Link href="#explore" className="btn-outline">
                  Explore More
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>

  );
}

