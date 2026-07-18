import React from 'react';
import Image from 'next/image';
import styles from './AiLedTransformation.module.css';

export default function AiLedTransformation() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.layout}>
          <div className={styles.contentCol}>
            <h2 className="title_60">AI-Led Transformation & Execution</h2>
            <p>
              As an AI development company, Safal approaches AI as a system layer within business operations—not as isolated tools. These enterprise AI solutions are designed to integrate with workflows, decision systems, and enterprise platforms.
            </p>
            <p>
              Through structured AI consulting services and execution frameworks, Safal enables scalable AI adoption aligned with operational and business objectives.
            </p>
          </div>
          <div className={styles.imageCol}>
            <Image 
              src="/safal/images/AI-&-Emerging-Technology/AI-Lead-Execution.webp" 
              alt="AI Process Diagram" 
              width={700} 
              height={400} 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
