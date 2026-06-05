import Image from 'next/image';
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={`container-1600 ${styles.container}`}>
        
        {/* Left Content */}
        <div className={styles.textContent}>
          <span className={styles.subtitle}>You're the missing piece.</span>
          <h2 className={styles.title}>Let's find the right key together.</h2>
          
          <p className={styles.description}>
            Whether you're evaluating enterprise software, exploring a technology partnership, looking to invest, or launching a startup — every great outcome starts with a single conversation. Tell us what you need. We'll connect you with exactly the right person from day one.
          </p>
          
          <Link href="#contact" className={styles.btnOutline}>
            Start the Conversation
          </Link>
        </div>

        {/* Right Graphic */}
        <div className={styles.graphicContent}>
          <div className={styles.imageWrapper}>
            {/* Placeholder for the puzzle key image */}
            <Image 
              src="/cta-puzzle-key.png" 
              alt="Golden Key in Puzzle" 
              fill 
              className={styles.graphicImage} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
