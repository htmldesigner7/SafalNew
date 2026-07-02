import React from 'react';
import Image from 'next/image';
import styles from './IndustrialSystemsSection.module.css';


const industrialSystemsData = {
  title: "End-to-End Industrial Automation Systems",
  paragraphs: [
    "As an industrial automation company, Safal delivers integrated systems that connect machines, processes, and data into a unified operational framework. These industrial automation solutions improve control, visibility, and production efficiency across industrial environments.",
    "By aligning operational technology with digital systems, Safal enables structured and scalable Industry 4.0 transformation.",
    "Our approach integrates advanced automation frameworks with real-time data processing to enhance operational efficiency and system reliability. By aligning industrial workflows with intelligent control systems, we enable seamless coordination across processes, reduce manual dependencies, and support scalable production environments with consistent performance outcomes."
  ],
  imageSrc: "/images/manufacturing.jpg", // Placeholder until exact image is known
  imageAlt: "Industrial Automation Systems",
};

export default function IndustrialSystemsSection() {
  const data = industrialSystemsData;
  return (
    <section className={styles.section}>
      <div className="container-1600">
        <div className={styles.contentWrapper}>
          
          {/* Left Text Content */}
          <div className={styles.textContent}>
            <h2 className={`title_60 ${styles.title}`}>
              {data.title}
            </h2>
            
            {data.paragraphs.map((para, index) => (
              <p key={index}>
                {para}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className={styles.imageContent}>
            <Image 
              src={data.imageSrc}
              alt={data.imageAlt}
              fill
              className={styles.image}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
