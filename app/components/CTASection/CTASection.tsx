import Image from 'next/image';
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>
        
        {/* Left Content */}
        <div className={styles.textContent}>
          <p className="title_40" style={{marginBottom: '0px', color:'var(--red)'}}>You&apos;re the missing piece.</p>
          <h2 className="title_60">Let&apos;s find the right key together.</h2>
          
          <p>
            Whether you&apos;re evaluating enterprise software, exploring a technology partnership, looking to invest, or launching a startup — every great outcome starts with a single conversation. Tell us what you need. We&apos;ll connect you with exactly the right person from day one.
          </p>
          
          <Link href="/contact" className="btn-outline btn-outline-red mt_40">
            Start the Conversation
          </Link>
        </div>
      </div>

      {/* Right Graphic - Kept outside container to stretch to the exact right edge of the screen */}
      <div className={styles.graphicContent}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/gold-key.png" 
            alt="Golden Key in Puzzle" 
            fill 
            className={styles.graphicImage} 
          />
        </div>
      </div>
    </section>
  );
}
