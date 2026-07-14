import React from 'react';
import Image from 'next/image';
import styles from './DataDrivenSection.module.css';

const dataDrivenComplianceData = {
  title: <>Data-Driven and<br/>Compliance-Focused</>,
  description: <>Safal’s approach to business and financial advisory services is grounded in financial data, regulatory requirements, and structured analysis.<br/><br/>Each engagement is executed with a focus on accuracy, transparency, and compliance, ensuring that decisions are supported by verifiable data and aligned with applicable frameworks.<br/><br/>Our methodology integrates financial evaluation, risk assessment, and regulatory alignment into a cohesive advisory process. This ensures that every recommendation is backed by structured analysis, enabling organizations to make informed decisions while maintaining consistency across financial, operational, and compliance dimensions.</>,
  imageSrc: "/images/blogs/blogs.webp", 
  imageAlt: "Data Driven Steps"
};

export default function DataDrivenSection() {
  const data = dataDrivenComplianceData;
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <h2 className="title_60 mb_30">{data.title}</h2>
            <div className={styles.description}>
              {data.description}
            </div>
          </div>
          <div className={styles.rightCol}>
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={800}
              height={550}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
