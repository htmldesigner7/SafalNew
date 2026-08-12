import Image from 'next/image';
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>
        
        {/* Left Content */}
        <div className={styles.textContent}>
          <p className="title_40" style={{marginBottom: '0px', color:'var(--red)'}}>The right partnership begins here.</p>
          <h2 className="title_60">Unlocking the Right Fit for Your Enterprise</h2>
          
          <p>
           Whether you are evaluating enterprise systems, exploring strategic partnerships, or planning your next phase of growth, Safal brings a structured approach to identifying the right path forward.
          </p>
          <p>We connect your requirements with the right capabilities, ensuring clarity, alignment, and effective execution from the start.</p>
          
          <Link href="/contact" className="btn-outline btn-outline-red mt_40">
            Start the Conversation
          </Link>
        </div>
      </div>

      {/* Right Graphic - Kept outside container to stretch to the exact right edge of the screen */}
      <div className={styles.graphicContent}>
        <div className={styles.imageWrapper}>
          <Image 
            src={`/images/Homepage/gold-key.png`} 
            alt="Golden Key in Puzzle" 
            fill 
            className={styles.graphicImage} 
          />
        </div>
      </div>
    </section>
  );
}
