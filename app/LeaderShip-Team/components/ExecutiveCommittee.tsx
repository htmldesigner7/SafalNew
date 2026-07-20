import { baseUrl } from '@/utils/baseUrl';
import Image from 'next/image';
import styles from './ExecutiveCommittee.module.css';

const ExecutiveCommittee = () => {
  return (
    <section className="mt_80">
      <div className="container-1600">
        <div className={styles.imageWrapper}>
          <div className={styles.fallbackGradient}></div>
          <Image
            src={`${baseUrl}/images/LeaderShip-Team/Executive.webp`} 
            alt="Executive Committee"
            fill
            className={styles.image}
          />
          <div className={styles.overlayWrapper}>
            <div className={styles.glassBox}>
              <p className={styles.text}>
                A synergy of diverse expertise. Our leadership unites founders, technologists, and division heads across engineering, AI, and digital strategy to drive one unified vision forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCommittee;
