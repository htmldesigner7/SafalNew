import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ConsultExpertsCTA.module.css';

const consultData = {
  title: "Structured Advisory for Critical Decisions",
  description: "Engage with Safal for business and financial advisory services including valuation, modelling, and transaction support. Evaluate decisions through structured analysis, compliance alignment, and financial clarity.",
  buttonText: "Book a Consultation",
  buttonLink: "/contact", // Adjust link as necessary
  imageSrc: "/images/Structured-Advisory-Banner.png", // User will replace with the misty forest UI image
  imageAlt: "Consult Our Experts Dashboard"
};

export default function ConsultExpertsCTA() {
  return (
    <section className={`${styles.section} mt_80`}>
      {/* Background/Top Image */}
      <div className={styles.imageContainer}>
        <Image 
          src={consultData.imageSrc}
          alt={consultData.imageAlt}
          width={1400}
          height={800}
          className={styles.mainImage}
        />

        <div className={styles.ctaBox}>
        <h2 className={styles.title}>{consultData.title}</h2>
        <p className={styles.description}>
          {consultData.description}
        </p>
        <Link href={consultData.buttonLink} className="btn-outline btn-outline-white" style={{borderColor: '#fff', background: '#fff', color: '#333'}}>
          {consultData.buttonText}
        </Link>
      </div>
      </div>

      {/* Floating CTA Box */}
      
    </section>
  );
}
