import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BannerCTASection.module.css';

const data = {
  iconSrc: '/images/logo.svg', // Fallback, user can change if there is a specific icon
  title: (
    <>
      Start Your Product <br />
      Journey with <br />
      Structured Execution
    </>
  ),
  description: 'Work with a team delivering startup consulting services and product development through disciplined execution, scalable architecture, and long-term product thinking.',
  buttonText: 'Book a Consultation',
  buttonLink: '/contact',
  bgImageSrc: '/images/Structured-Advisory-Banner.png', 
};

export default function BannerCTASection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div 
          className={styles.bannerContainer}
          style={{ backgroundImage: `url(${data.bgImageSrc})` }}
        >
          {/* Optional Overlay to ensure text readability if needed */}
          {/* <div className={styles.overlay}></div> */}
          
          <div className={styles.contentWrapper}>
            {data.iconSrc && (
              <div className={styles.iconWrapper}>
                <Image 
                  src={data.iconSrc} 
                  alt="Icon" 
                  width={64} 
                  height={64} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}
            
            <h2 className={`title_60 ${styles.title}`}>{data.title}</h2>
            
            <p className={styles.description}>{data.description}</p>
            
            <Link href={data.buttonLink} className={styles.btnWhite}>
              {data.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
