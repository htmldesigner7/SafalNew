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
    iconSrc: "/images/hero_3d_book.png" // Replace with actual TAX icon later
  },
  {
    id: "valuation",
    tabLabel: "Valuation",
    title: "Business Valuation Services",
    description: "Objective, robust, and regulatory-compliant valuation services for businesses and intangible assets.\n\nOur valuation models are built on rigorous financial analysis and market insights, delivering reliable assessments for mergers and acquisitions, financial reporting, and strategic planning. We ensure every valuation meets the highest standards of accuracy and transparency.",
    iconSrc: "/images/hero_3d_book.png" 
  },
  {
    id: "transaction-advisory",
    tabLabel: "Transaction Advisory",
    title: "Strategic Transaction Advisory",
    description: "End-to-end support for mergers, acquisitions, and strategic partnerships.\n\nWe assist clients through every phase of a transaction, from initial feasibility and structuring to negotiation and post-deal integration. Our transaction advisory services are designed to maximize deal value and mitigate associated risks.",
    iconSrc: "/images/hero_3d_book.png"
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
              src="/images/finance.jpg" 
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
