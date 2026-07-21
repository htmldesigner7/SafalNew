import React from 'react';
import Image from 'next/image';
import styles from './PlatformCapabilitiesSection.module.css';
import { div } from 'framer-motion/client';
import { text } from 'stream/consumers';
import { AlignCenter } from 'lucide-react';

export default function PlatformCapabilitiesSection() {
  const graphicData = [
    {
      text: "Configurable systems aligned with defined business processes",
      position: 'top-left',
      dotColor: '#F25C38'
    },
    {
      text: "Seamless integration across enterprise platforms and data systems",
      position: 'bottom-left',
      dotColor: '#3498DB'
    },
    {
      text: "Scalable architecture enabling growth and operational expansion",
      position: 'right',
      dotColor: '#58D68D'
    }
  ];

  const capabilitiesList = [
    "Configurable systems aligned with defined business processes",
    "Integration with existing enterprise platforms and data systems",
    "Scalable architecture supporting operational expansion",
    "Centralized data control with structured reporting",
    "Secure, governed system environments",
    "Multi-user, multi-location operational capability",
  ];
    
  return (
    <section className={"mt_80"}>
      <div className="container-1600">
        <h2 className="title_60 text-center">Platform Capabilities</h2>
      
      <div className={styles.contentWrapper}>
        {/* Graphic Column */}
        
        <div className={styles.graphicColumn}>
          <div className={styles.graphicCenter}>
            {/* Placeholder for the central graphic */}
            <Image 
              src={`/images/Enterprise-Grade-Products-Built-for-Scale/enterprise-products-platform.png`} 
              alt="Platform Capabilities Graphic" 
              width={300} 
              height={300} 
              className={styles.centerImage}
            />
            
            {/* Annotations */}
            {graphicData.map((item, index) => {
              let positionClass = '';
              if (item.position === 'top-left') positionClass = styles.topLeft;
              if (item.position === 'bottom-left') positionClass = styles.bottomLeft;
              if (item.position === 'right') positionClass = styles.right;

              return (
                <div key={index} className={`${styles.annotation} ${positionClass}`}>
                  <div 
                    className={styles.annotationDot} 
                    style={{ backgroundColor: item.dotColor, color: item.dotColor }}
                  ></div>
                  <p className={styles.annotationText}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* List Column */}
        <div className={styles.listColumn}>
          <div className={styles.listCard}>

            
            {capabilitiesList.map((capability, index) => (
              <div key={index} className={styles.listItem}>
                <p className={styles.listText}>{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

            <p className='text-center'>
              As an <b>enterprise solutions provider,</b> Safal ensures these capabilities are aligned with real-world operational requirements and system environments.
            </p>
    </section>
  );
}
