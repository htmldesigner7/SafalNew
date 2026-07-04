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
          <h2 className='title_60' style={{ color: '#60853A' }}>Our imprint on the world</h2>
          <div className={styles.textContent}>
            <p>
              We believe a technology company&apos;s most lasting impact isn&apos;t measured in revenue — it&apos;s measured in people developed, industries transformed, and responsibility exercised at every level of operation.
            </p>
            <p>
              Across eight specialized divisions, Safal Infosoft Group operates with one constant: doing business in a way that creates value for our clients, our people, and the communities we work in — today and for the long term.
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
          <h2 className='title_60' style={{ color: '#60853A' }}>goes beyond software.</h2>
          <Link href="#sustainability" className='btn-outline btn-outline-red '>
            Read our Sustainability Commitments
          </Link>
        </div>
       </div>

      </div>
    </section>
  );
}