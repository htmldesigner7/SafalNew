"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './StructuredAdvisory.module.css';

const accordionData = [
  {
    id: 'governance',
    title: 'Governance',
    content: 'Structured financial governance frameworks designed to enhance control, accountability, and compliance across business operations. We align financial processes with regulatory requirements while strengthening internal systems to support transparent and consistent decision-making.'
  },
  {
    id: 'financial-clarity',
    title: 'Financial Clarity',
    content: 'Clear, data-backed financial visibility through structured analysis, modelling, and reporting frameworks. This enables organizations to evaluate performance, forecast outcomes, and make informed decisions with confidence and precision.'
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    content: 'Comprehensive risk assessment and mitigation strategies across financial, operational, and regulatory dimensions. We identify potential exposures early and establish structured controls to ensure stability, compliance, and long-term business resilience.'
  }
];

export default function StructuredAdvisory() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.layout}>
          
          <div className={styles.leftCol}>
            <h2 className="title_40 mb_40">
              Structured Advisory Across<br />Business and Finance
            </h2>
            <p>
              Safal delivers <b>business and financial advisory services</b> focused on financial clarity, governance, and risk management. These services combine analytical frameworks with regulatory alignment to support critical business decisions.
            </p>
            <p>
              As part of its <b>business advisory services</b> and <b>financial advisory services,</b> Safal enables organizations to operate with structured financial oversight and strategic direction.
            </p>

            <div className={styles.accordion}>
              {accordionData.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={item.id} 
                    className={styles.accordionItem}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={styles.accordionHeader}>
                      <span className={isActive ? styles.activeDot : styles.inactiveDot}>&bull;</span>
                      <h3 className={`title_24 ${isActive ? styles.titleActive : styles.titleInactive}`}>
                        {item.title}
                      </h3>
                    </div>
                    {isActive && (
                      <div className={styles.accordionContent}>
                        <p className="m-0">{item.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              {/* Note: I&apos;m using a placeholder right now for the hover layers image */}
              <Image 
                src="/images/blogs/blogs.webp" 
                alt="Hover Layers"
                fill
                className={styles.image}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
