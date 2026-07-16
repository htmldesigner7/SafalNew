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
          Your learning is not confined to a single office.
        </p>
        <p className={styles.description}>
          Collaborate across geographies, design with teams in Dubai, build for deployments in New York, and engineer alongside core teams in Ahmedabad. From day one, you operate inside a synchronized global ecosystem.
        </p>

        {/* <div className='mt-4'>
          <Link href="/open-positions">
            <button className="btn-primary">Apply Now</button>
          </Link>
        </div> */}

        <div className={styles.imageWrapper}>
          <Image
            src="/images/Internships-&-Mentorship/Internships-&-Mentorship-up-.webp"
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
