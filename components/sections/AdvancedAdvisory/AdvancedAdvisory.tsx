"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './AdvancedAdvisory.module.css';

const tabsData = [
  {
    id: "tax-advisory",
    tabLabel: "Tax Advisory",
    title: "Tax Advisory / FEMA",
    description: "Structured tax advisory services and FEMA compliance support for domestic and cross-border transactions.\n\nWe provide comprehensive guidance on tax structuring, regulatory compliance, and cross-border financial frameworks. Our approach ensures alignment with applicable laws while optimizing financial efficiency across jurisdictions. From transaction structuring to regulatory filings, we enable organizations to operate with clarity, minimize exposure, and maintain compliance within evolving regulatory environments.",
    iconSrc: "/safal/images/Business-&-Financial-Advisory/Tax-Advisory.svg" // Replace with actual TAX icon later
  },
  {
    id: "valuation",
    tabLabel: "Valuation",
    title: "Valuation (Business & IP)",
    description: "Independent business valuation services for enterprises and intellectual property using established financial methodologies.\n\n We deliver objective and methodical valuation assessments based on financial performance, market positioning, and future growth potential. Our structured approach incorporates financial modelling, industry benchmarks, and regulatory considerations to ensure accuracy and credibility. This supports informed decision-making across investments, restructuring, and strategic planning initiatives.",
    iconSrc: "/safal/images/Business-&-Financial-Advisory/Valuation.svg" 
  },
  {
    id: "transaction-advisory",
    tabLabel: "Transaction Advisory",
    title: "Transaction Advisory",
    description: "End-to-end transaction advisory services supporting mergers, acquisitions, and strategic transactions.\n\nWe support the complete transaction lifecycle, from financial evaluation and due diligence to structuring and execution. Our advisory ensures alignment with strategic objectives while addressing financial, operational, and regulatory complexities. This enables organizations to navigate transactions with confidence, mitigate risks, and maximize long-term value outcomes.",
    iconSrc: "/safal/images/Business-&-Financial-Advisory/Transaction-Advisory.svg"
  }
];

export default function AdvancedAdvisory() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mt_80">
      <div className="container-1600">
        <h2 className="title_60 text-center">Advanced Financial & Regulatory Advisory</h2>
        
        <div className={styles.layout}>
          {/* Left Column - Main Graphic */}
          <div className={styles.imageCol}>
            <Image 
              src="/safal/images/Business-&-Financial-Advisory/Advanced-Financial-&-Regulatory-Advisory.webp" 
              alt="Advanced Financial Analytics"
              fill
              className={styles.mainImage}
            />
          </div>

          {/* Right Column - Tabs */}
          <div className={styles.contentCol}>
            {/* Tabs Header */}
            <div className={styles.tabsHeader}>
              {tabsData.map((tab, index) => (
                <div 
                  key={tab.id}
                  className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.tabLabel}
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              <div className={styles.iconWrapper}>
                <Image 
                  src={tabsData[activeTab].iconSrc}
                  alt={tabsData[activeTab].tabLabel}
                  fill
                  className={styles.icon}
                />
              </div>
              <h3 className="title_40 mb_20">{tabsData[activeTab].title}</h3>
              {tabsData[activeTab].description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={`${styles.description} ${idx > 0 ? "mt_15" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
