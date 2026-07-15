import React from 'react';
import Image from 'next/image';
import styles from './FinancialProcessSection.module.css';

const data = {
  title: "End-to-End Financial Process Management",
  paragraphs: [
    "Safal delivers financial accounting solutions and accounting outsourcing services focused on managing financial operations with consistency, control, and compliance.",
    "Through standardized workflows and system-led execution, Safal ensures financial processes are aligned with regulatory requirements and operational accuracy.",
    "Our approach ensures financial processes are executed through structured workflows, standardized controls, and consistent validation mechanisms. By integrating data accuracy, process discipline, and compliance requirements, we enable seamless financial operations that improve reporting reliability, reduce errors, and support efficient decision-making across the organization."
  ],
  imageSrc: "/images/financial-accounting-solutions/End-to-End-Financial-Process-Management.webp",
  imageAlt: "End-to-End Financial Process Management Flow"
};

export default function FinancialProcessSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.content}>
          <h2 className="title_60 text-center mb_40">{data.title}</h2>
          {data.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            width={900}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
