'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DesignIcon, DevelopmentIcon, TestingIcon, CommissioningIcon } from '@/components/icons/DeliveryIcons';
import styles from './StructuredDeliverySection.module.css';

const deliveryStagesData = [
  {
    id: "01",
    title: "Design",
    description: "Architecture aligned with plant processes",
    icon: <DesignIcon />,
    y: 7.45
  },
  {
    id: "02",
    title: "Development",
    description: "Control systems and integration implementation",
    icon: <DevelopmentIcon />,
    y: 138.69
  },
  {
    id: "03",
    title: "Testing",
    description: "System validation and performance verification",
    icon: <TestingIcon />,
    y: 269.93
  },
  {
    id: "04",
    title: "Commissioning",
    description: "Deployment, calibration, and operational handover",
    icon: <CommissioningIcon />,
    y: 399.09
  }
];

export default function StructuredDeliverySection() {
  const [activeStage, setActiveStage] = useState(0);
  const activeY = deliveryStagesData[activeStage].y;

  const getPath = (index: number) => {
    switch (index) {
      case 0: return "M25 7.45044C311.611 7.45044 352.556 204.31 639.167 204.31";
      case 1: return "M25 138.69C311.611 138.69 352.556 204.31 639.167 204.31";
      case 2: return "M25 269.931C311.611 269.931 352.556 204.311 639.167 204.311";
      case 3: return "M25.1094 399.088C311.72 399.088 352.904 203.812 639.515 203.812";
      default: return "";
    }
  };

  return (
    <section className={"mt_80"}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_60">Structured End-to-End Project Delivery</h2>
          <p className={styles.subtitle}>
            Safal delivers turnkey industrial automation solutions through clearly defined execution stages aligned with plant requirements and system performance.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          {/* Left List */}
          <div className={styles.stagesList}>
            {deliveryStagesData.map((stage, index) => (
              <div
                key={index}
                className={`${styles.stageItem} ${activeStage === index ? styles.active : ''}`}
                onClick={() => setActiveStage(index)}
                style={{ top: `${stage.y}px` }}
              >
                <div className={styles.stageNumber}>{stage.id}</div>
                <div className={styles.iconWrapper}>{stage.icon}</div>
                <div className={styles.stageContent}>
                  <h3 className="title_24">{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </div>
            ))}

            {/* SVG Connecting Lines */}
            <div className={styles.svgContainer}>
              <svg style={{ overflow: 'visible' }} width="645" height="400" viewBox="0 0 645 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="activeGradient" x1="25" y1="0" x2="639.167" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EA580C" />
                    <stop offset="1" stopColor="#E11D48" />
                  </linearGradient>
                </defs>

                <path d={getPath(0)} stroke="#E7E5E4" strokeWidth="1.81333" strokeLinecap="round" />
                <path d={getPath(1)} stroke="#E7E5E4" strokeWidth="1.81333" strokeLinecap="round" />
                <path d={getPath(2)} stroke="#E7E5E4" strokeWidth="1.81333" strokeLinecap="round" />
                <path d={getPath(3)} stroke="#E7E5E4" strokeWidth="1.81333" strokeLinecap="round" />

                <motion.path
                  key={activeStage}
                  d={getPath(activeStage)}
                  stroke="url(#activeGradient)"
                  strokeWidth="2.72"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <path opacity="0.2" d="M637.46 210.949C641.127 210.949 644.1 207.977 644.1 204.31C644.1 200.643 641.127 197.67 637.46 197.67C633.793 197.67 630.82 200.643 630.82 204.31C630.82 207.977 633.793 210.949 637.46 210.949Z" fill="#EA580C" />
                <path d="M637.46 209.109C639.975 209.109 642.014 206.959 642.014 204.308C642.014 201.656 639.975 199.507 637.46 199.507C634.945 199.507 632.906 201.656 632.906 204.308C632.906 206.959 634.945 209.109 637.46 209.109Z" fill="#EA580C" />

                <motion.rect 
                  x="1.5" 
                  width="15" 
                  height="15" 
                  rx="7.5" 
                  fill="#EA580C" 
                  stroke="white" 
                  strokeWidth="3" 
                  animate={{ y: activeY - 7.5 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageContent}>
            <Image
              src={`/images/Structured-End-to-End-Project-Delivery.png`}
              alt="Project Delivery Stages"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
