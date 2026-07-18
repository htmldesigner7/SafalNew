"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './VisionMissionSection.module.css';

export interface VisionMissionItem {
  id: string;
  tabTitle: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
}

const visionMissionData: VisionMissionItem[] = [
  {
    id: 'vision',
    tabTitle: 'Our Vision',
    title: 'Our Vision',
    paragraphs: [
      'To architect intelligent, scalable ecosystems that redefine how global enterprises operate, compete, and grow in a digital-first world.',
      'Our vision extends beyond delivering technology, we strive to shape resilient, future-ready enterprises that thrive through innovation, operational excellence, and intelligent digital ecosystems. Every solution we create is designed to support sustainable growth, long-term adaptability, and measurable business impact.'
    ],
    imageSrc: '/safal/images/Values-&-Culture/Our-Vision.webp' // Target/Arrow
  },
  {
    id: 'mission',
    tabTitle: 'Our Mission',
    title: 'Our Mission',
    paragraphs: [
      'To build high-performance systems that combine technology, strategy, and design, delivering measurable business outcomes with precision and speed.',
      'Our mission is to transform complex business challenges into structured, scalable digital solutions that deliver measurable value. By combining engineering expertise, strategic thinking, and disciplined execution, we help organizations innovate with confidence, improve operational performance, and achieve sustainable business growth.'
    ],
    imageSrc: '/safal/images/Values-&-Culture/Our-Mission.webp' // Hands holding globe
  },
  {
    id: 'impact',
    tabTitle: 'Our Impact',
    title: 'Our Impact',
    paragraphs: [
      'We enable organizations to scale efficiently, reduce complexity, and unlock new growth opportunities through integrated, future-ready solutions.',
      'Our impact is reflected in stronger operations, faster decision-making, and measurable business outcomes across every engagement. By aligning technology with business objectives, we help organizations improve efficiency, accelerate growth, and build resilient enterprises prepared for long-term success.'
    ],
    imageSrc: '/safal/images/Values-&-Culture/Our-Imapcts.webp' // Diamond
  },
  {
    id: 'philosophy',
    tabTitle: 'Our Philosophy',
    title: 'Our Philosophy',
    paragraphs: [
      'We believe sustainable success is engineered through alignment of people, systems, and purpose, creating long-term value across every layer of the enterprise.',
      'Our philosophy is rooted in building with purpose, executing with discipline, and innovating with responsibility. We believe that lasting business value comes from combining strategic thinking, technical excellence, and meaningful collaboration to create solutions that stand the test of time.'
    ],
    imageSrc: '/safal/images/Values-&-Culture/Our-Philosophy.webp' // Compass
  }
];

const QUADRANTS = [
  { // Q1 Top Right (Vision)
    id: 0,
    outerPie: "M 200 200 L 200 45 A 155 155 0 0 1 355 200 Z",
    innerPie: "M 200 200 L 200 90 A 110 110 0 0 1 310 200 Z",
    activePie: "M 200 200 L 200 35 A 165 165 0 0 1 365 200 Z",
    textPathInactive: "M 200 68 A 132 132 0 0 1 332 200",
    textPathActive: "M 200 20 A 180 180 0 0 1 380 200",
    transformActive: "translate(15, -15)",
    cxInactive: 242, cyInactive: 158,
    cxActive: 260, cyActive: 140
  },
  { // Q2 Bottom Right (Mission 1)
    id: 1,
    outerPie: "M 200 200 L 355 200 A 155 155 0 0 1 200 355 Z",
    innerPie: "M 200 200 L 310 200 A 110 110 0 0 1 200 310 Z",
    activePie: "M 200 200 L 365 200 A 165 165 0 0 1 200 365 Z",
    textPathInactive: "M 332 200 A 132 132 0 0 1 200 332",
    textPathActive: "M 380 200 A 180 180 0 0 1 200 380",
    transformActive: "translate(15, 15)",
    cxInactive: 242, cyInactive: 242,
    cxActive: 260, cyActive: 260
  },
  { // Q3 Bottom Left (Values)
    id: 2,
    outerPie: "M 200 200 L 200 355 A 155 155 0 0 1 45 200 Z",
    innerPie: "M 200 200 L 200 310 A 110 110 0 0 1 90 200 Z",
    activePie: "M 200 200 L 200 365 A 165 165 0 0 1 35 200 Z",
    textPathInactive: "M 68 200 A 132 132 0 0 0 200 332",
    textPathActive: "M 20 200 A 180 180 0 0 0 200 380",
    transformActive: "translate(-15, 15)",
    cxInactive: 158, cyInactive: 242,
    cxActive: 140, cyActive: 260
  },
  { // Q4 Top Left (Impacts)
    id: 3,
    outerPie: "M 200 200 L 45 200 A 155 155 0 0 1 200 45 Z",
    innerPie: "M 200 200 L 90 200 A 110 110 0 0 1 200 90 Z",
    activePie: "M 200 200 L 35 200 A 165 165 0 0 1 200 35 Z",
    textPathInactive: "M 68 200 A 132 132 0 0 1 200 68",
    textPathActive: "M 20 200 A 180 180 0 0 1 200 20",
    transformActive: "translate(-15, -15)",
    cxInactive: 158, cyInactive: 158,
    cxActive: 140, cyActive: 140
  }
];

export default function VisionMissionSection({ data = visionMissionData }: { data?: VisionMissionItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentItem = data[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  if (!currentItem) return null;

  return (
    <section className={`${styles.visionSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.gridContainer}>
          
          {/* Left Column - Graphic */}
          <div className={styles.leftCol}>
            <div className={styles.imageWrapper}>
              <svg viewBox="0 0 400 400" className={styles.wheelSvg}>
                {QUADRANTS.map((quad, index) => {
                  const isActive = currentIndex === index;
                  const itemData = data[index] || data[0];
                  
                  // Text and clip paths specific to this quadrant
                  const textPathId = isActive ? `textPathActive${index}` : `textPathInactive${index}`;
                  const clipPathId = isActive ? `clipPathActive${index}` : `clipPathInactive${index}`;
                  
                  // Image positioning and sizing
                  const imgSize = isActive ? 100 : 60;
                  const imgX = isActive ? quad.cxActive - imgSize/2 : quad.cxInactive - imgSize/2;
                  const imgY = isActive ? quad.cyActive - imgSize/2 : quad.cyInactive - imgSize/2;

                  return (
                    <g 
                      key={index}
                      className={styles.quadrantGroup}
                      style={{ 
                        transform: isActive ? quad.transformActive : 'translate(0, 0)',
                        transition: 'transform 0.4s ease-in-out'
                      }}
                      onClick={() => setCurrentIndex(index)}
                    >
                      {/* Define paths locally within the group so they translate with it */}
                      <defs>
                        <path id={`textPathInactive${index}`} d={quad.textPathInactive} />
                        <path id={`textPathActive${index}`} d={quad.textPathActive} />
                        <clipPath id={`clipPathInactive${index}`}>
                          <path d={quad.innerPie} />
                        </clipPath>
                        <clipPath id={`clipPathActive${index}`}>
                          <path d={quad.activePie} />
                        </clipPath>
                      </defs>

                      {/* Inactive State Background Layers */}
                      <path 
                        d={quad.outerPie} 
                        fill="#f3efe6" 
                        stroke="#fcfbf5" 
                        strokeWidth="3" 
                        style={{ opacity: isActive ? 0 : 1, transition: 'opacity 0.2s ease-in-out' }}
                      />
                      <path 
                        d={quad.innerPie} 
                        fill="#d4eff9" 
                        stroke="#fcfbf5" 
                        strokeWidth="3" 
                        style={{ opacity: isActive ? 0 : 1, transition: 'opacity 0.2s ease-in-out' }}
                      />

                      {/* Active State Background Layer */}
                      <path 
                        d={quad.activePie} 
                        fill="#009fe3" 
                        stroke="#fcfbf5" 
                        strokeWidth="3" 
                        style={{ opacity: isActive ? 1 : 0, transition: 'opacity 0.4s ease-in-out' }}
                      />
                      
                      {/* Curved Text */}
                      <text fill="#009fe3" fontSize={isActive ? "15" : "13"} fontWeight="500" className={styles.quadrantText}>
                        <textPath href={`#${textPathId}`} startOffset="50%" textAnchor="middle">
                          {itemData.tabTitle}
                        </textPath>
                      </text>
                      
                      {/* Image inside quadrant */}
                      <image 
                        href={itemData.imageSrc} 
                        x={imgX} 
                        y={imgY} 
                        width={imgSize} 
                        height={imgSize} 
                        clipPath={`url(#${clipPathId})`}
                        preserveAspectRatio="xMidYMid slice"
                        style={{ 
                          opacity: isActive ? 1 : 0.8,
                          transition: 'all 0.4s ease-in-out'
                        }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={styles.rightCol}>
            
            <div className={styles.contentWrapper}>
              {data.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`${styles.contentItem} ${index === currentIndex ? styles.activeItem : ''}`}
                >
                  <h2 className="title_60">{item.title}</h2>
                  {item.paragraphs.map((text, idx) => (
                    <p key={idx} className={styles.paragraph}>{text}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className={styles.navArrows}>
              <button onClick={handlePrev} className={styles.arrowBtn} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button onClick={handleNext} className={styles.arrowBtn} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
