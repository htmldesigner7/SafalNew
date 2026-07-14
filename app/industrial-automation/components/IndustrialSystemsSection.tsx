import React from 'react';
import Image from 'next/image';
import sysStyles from './IndustrialSystems.module.css';

const industrialSystemsData = {
  title: "End-to-End Industrial Automation Systems",
  paragraphs: [
    "As an industrial automation company, Safal delivers integrated systems that connect machines, processes, and data into a unified operational framework. These industrial automation solutions improve control, visibility, and production efficiency across industrial environments.",
    "By aligning operational technology with digital systems, Safal enables structured and scalable Industry 4.0 transformation.",
    "Our approach integrates advanced automation frameworks with real-time data processing to enhance operational efficiency and system reliability. By aligning industrial workflows with intelligent control systems, we enable seamless coordination across processes, reduce manual dependencies, and support scalable production environments with consistent performance outcomes."
  ],
  imageSrc: "/images/Industrial-Automation-&-IoT/End-to-End-Industrial-Automation-Systems.webp",
  imageAlt: "Industrial Automation Systems",
};

export default function IndustrialSystemsSection() {
  const data = industrialSystemsData;
  return (
    <section className={sysStyles.section}>
      <div className="container-1600">
        <div className={sysStyles.contentWrapper}>
          <div className={sysStyles.textContent}>
            <h2 className={`title_60 ${sysStyles.title}`}>{data.title}</h2>
            {data.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
          <div className={sysStyles.imageContent}>
            <Image src={data.imageSrc} alt={data.imageAlt} fill className={sysStyles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
