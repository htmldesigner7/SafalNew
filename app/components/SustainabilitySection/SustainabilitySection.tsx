import Image from 'next/image';
import Link from 'next/link';
import styles from './SustainabilitySection.module.css';

export default function SustainabilitySection() {
  return (
    <section className={`${styles.section} mt_80`}>
      {/* Background Leaves Graphic */}
      <div className={styles.bgLeaves}></div>

      <div className={`container-1600 ${styles.container}`}>

       <div className={styles.main}>
         {/* Left Column (Top aligned) */}
        <div className={styles.leftColumn}>
          <h2 className='title_60' style={{ color: '#60853A' }}>Our Impact Beyond Technology</h2>
          <div className={styles.textContent}>
            <p>
              We believe the impact of a technology company extends beyond systems and solutions—into the value it creates for people, industries, and the environments it operates within.
            </p>
            <p>
              Across its divisions, Safal operates with a consistent approach: building responsibly, enabling sustainable progress, and delivering long-term value for clients, teams, and the broader ecosystem.
            </p>
          </div>
        </div>

        {/* Center Column (Spans vertically) */}
        <div className={styles.centerColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/green-fingerprint.jpg"
              alt="Green Thumbprint"
              fill
              className={styles.fingerprintImage}
            />
          </div>
        </div>

        {/* Right Column (Bottom aligned) */}
        <div className={styles.rightColumn}>
          <h2 className='title_60' style={{ color: '#60853A' }}>Enabling responsible growth.</h2>
          <Link href="/sustainability" className='btn-outline btn-outline-red '>
            Read our Sustainability Commitments
          </Link>
        </div>
       </div>

      </div>
    </section>
  );
}