import Image from 'next/image';
import styles from './ExecutiveCommittee.module.css';

const ExecutiveCommittee = () => {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.imageWrapper}>
          {/* Fallback gradient if image fails to load */}
          <div className={styles.fallbackGradient}></div>
          
          {/* Main Background Image - Assuming the user will upload it here */}
          <Image
            src="/images/leadership-team-bg.png" 
            alt="Executive Committee"
            fill
            className={styles.image}
          />
          
          {/* Glassmorphism Text Overlay */}
          <div className={styles.overlayWrapper}>
            <div className={styles.glassBox}>
              <p className={styles.text}>
                A synergy of diverse expertise. Our executive committee unites decades of experience
                across enterprise architecture, brand strategy, and financial advisory to drive
                uncompromising results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;
