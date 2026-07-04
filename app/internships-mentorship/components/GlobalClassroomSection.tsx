import React from 'react';
import Image from 'next/image';
import styles from './GlobalClassroomSection.module.css';
import Link from 'next/link';

export default function GlobalClassroomSection() {
  return (
    <section className={`${styles.classroomSection} mt_80 mb_80 text-center`}>
      <div className="container-1600">
        <h2 className="title_60">A Global Classroom.</h2>
        <p className={styles.description}>
          As a Safal intern, your learning isn&apos;t confined to a single office. Our borderless infrastructure means a UI/UX intern in Ahmedabad might co-design an interface with a Director in Dubai, while an engineering fellow writes logic for a New York deployment. You get global exposure on day one.
        </p>
        
        <div className='mt-4'>
          <Link href="/open-positions">
            <button className="btn-primary">Apply Now</button>
          </Link>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/independent-header.png" 
            alt="Global Classroom Network" 
            width={1200} 
            height={500} 
            className={styles.networkImage}
          />
        </div>
      </div>
    </section>
  );
}
