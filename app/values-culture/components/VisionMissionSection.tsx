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
      'Lorem ipsum dolor sit amet consectetur. Blandit enim tortor donec sit in ut vitae lectus. Amet egestas neque lobortis varius. Tincidunt non vulputate nam in aliquam at mi. Arcu amet neque a ut congue rhoncus massa tortor iaculis. Elementum vitae mauris eget dictumst id tempus feugiat adipiscing. Erat non et aliquam tortor. Pharetra pharetra sit mattis senectus ultrices. Lacus neque in amet aliquam sed habitasse. Nunc commodo consequat eget.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis. Tortor euismod sit consequat magna mauris dolor ut fusce mauris pellentesque. Hendrerit feugiat magna faucibus malesuada. Dapibus netus non lobortis euismod.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis. Tortor euismod sit orci cursus nullam scelerisque venenatis mollis aliquet. Nibh neque volutpat libero at turpis in neque etiam. Tellus.'
    ],
    imageSrc: '/images/Our-Imapcts.webp' // Target/Arrow
  },
  {
    id: 'impacts',
    tabTitle: 'Our Imapcts',
    title: 'Our Impacts',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.'
    ],
    imageSrc: '/images/Our-Vision.webp' // Hands holding globe
  },
  {
    id: 'mission1',
    tabTitle: 'Our Mission',
    title: 'Our Mission',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.'
    ],
    imageSrc: '/images/Our-Mission.webp' // Diamond
  },
  {
    id: 'mission2',
    tabTitle: 'Our Mission',
    title: 'Our Mission',
    paragraphs: [
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.',
      'Lorem ipsum dolor sit amet consectetur. Varius elit elit faucibus duis tellus dolor semper facilisis.'
    ],
    imageSrc: '/images/Our-Philosophy.webp' // Compass
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
