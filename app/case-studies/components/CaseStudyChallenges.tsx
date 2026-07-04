import Image from 'next/image';
import styles from './CaseStudyChallenges.module.css';

export default function CaseStudyChallenges() {
  return (
    <section className="mt_80">
      <div className={`container-1600 ${styles.container}`}>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/challenges_sketch.png" 
            alt="The Challenges Sketch"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.contentWrapper}>
          <h2 className={`title_60 ${styles.title}`}>The Challenges</h2>
          
          <div className={styles.grid}>
            <div>
              <h3 className="title_24">Inefficient Route Planning</h3>
              <p className={styles.cardDesc}>
                In an era where global supply chains shift overnight, rigid infrastructure is a fatal liability. A leading international metal processing firm approached Safal Infosoft facing a critical threshold: their legacy
              </p>
            </div>
            
            <div>
              <h3 className="title_24">Fragmented Data Silos</h3>
              <p className={styles.cardDesc}>
                In an era where global supply chains shift overnight, rigid infrastructure is a fatal liability. A leading international metal processing firm approached Safal Infosoft facing a critical threshold: their legacy monolithic.
              </p>
            </div>

            <div>
              <h3 className="title_24">Scalability Bottlenecks</h3>
              <p className={styles.cardDesc}>
                In an era where global supply chains shift overnight, rigid infrastructure is a fatal liability. A leading international metal processing firm approached Safal Infosoft facing a critical threshold: their legacy monolithic.
              </p>
            </div>

            <div>
              <h3 className="title_24">Lack of Real-Time Visibility</h3>
              <p className={styles.cardDesc}>
                In an era where global supply chains shift overnight, rigid infrastructure is a fatal liability. A leading international metal processing firm approached Safal Infosoft facing a critical threshold: their legacy monolithic Data.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
