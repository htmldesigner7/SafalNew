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
    id: 'clarity',
    title: 'Clarity',
    content: 'Delivering financial clarity through comprehensive data analysis and reporting. We help you understand your financial position to make informed, strategic decisions.'
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    content: 'Identifying and mitigating financial risks to protect your business assets and ensure long-term stability in a dynamic market environment.'
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
              Safal delivers business and financial advisory services focused on financial clarity, governance, and risk management. These services combine analytical frameworks with regulatory alignment to support critical business decisions. As part of its business advisory services and financial advisory services, Safal enables organizations to operate with structured financial oversight and strategic direction.
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
              {/* Note: I'm using a placeholder right now for the hover layers image */}
              <Image 
                src="/images/hero_3d_book.png" 
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
