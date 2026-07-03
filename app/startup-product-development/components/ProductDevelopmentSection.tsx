import React from 'react';
import Image from 'next/image';
import styles from './ProductDevelopmentSection.module.css';

const data = {
  title: "Product Development & Venture Enablement",
  paragraphs: [
    "Ideaz Ventures is Safal's dedicated startup product development company focused on building and scaling digital products. It operates as a structured startup consulting company, working with founders, startups, and product teams to translate ideas into executable product systems.",
    "The focus is on clarity in product direction, disciplined execution, and building technology foundations that support long-term scale."
  ],
  imageSrc: "/images/hero_3d_book.png", 
  imageAlt: "Product Development Layers Architecture"
};

export default function ProductDevelopmentSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div className={styles.layout}>
          <div className={styles.contentCol}>
            <h2 className="title_60">{data.title}</h2>
            {data.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          
          <div className={styles.imageCol}>
            <Image 
              src={data.imageSrc} 
              alt={data.imageAlt} 
              width={800} 
              height={500} 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
