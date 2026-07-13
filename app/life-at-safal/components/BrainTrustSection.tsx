import Image from 'next/image';
import styles from './BrainTrustSection.module.css';

export default function BrainTrustSection() {
  return (
    <section className={`${styles.brainTrustSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_60" style={{ textAlign: "center" }}>A Borderless Brain-Trust.</h2>
          <p style={{ textAlign: "center" }}>
            Talent is not limited by geography. Our ecosystem connects engineers, designers, and strategists across continents into one synchronized system.
          </p>
          <p style={{ textAlign: "center" }}>
            You could be collaborating with a systems architect in New York, a design lead in Dubai, and an engineering team in Ahmedabad, all in real time.
          </p>
          <p style={{ textAlign: "center" }}>
            We don’t operate as distributed teams.<br/>We operate as one unified intelligence.

          </p>
        </div>

        <div className={styles.galleryGrid}>
          {/* Col 1 */}
          <div className={styles.col}>
            <Image src="/images/blogs-inner.webp" alt="Team meeting" width={300} height={300} className={styles.img} />
          </div>
          
          {/* Col 2 */}
          <div className={styles.col}>
            <Image src="/images/blogs-inner.webp" alt="Team working" width={300} height={200} className={styles.img} />
            <Image src="/images/blogs-inner.webp" alt="Office space" width={300} height={200} className={styles.img} />
          </div>
          
          {/* Col 3 */}
          <div className={styles.col}>
            <Image src="/images/blogs-inner.webp" alt="Discussion" width={500} height={500} className={styles.img} />
          </div>
          
          {/* Col 4 */}
          <div className={styles.col}>
            <Image src="/images/blogs-inner.webp" alt="Collaboration" width={300} height={200} className={styles.img} />
            <Image src="/images/blogs-inner.webp" alt="Walking" width={300} height={200} className={styles.img} />
          </div>
          
          {/* Col 5 */}
          <div className={styles.col}>
            <Image src="/images/blogs-inner.webp" alt="Group" width={300} height={300} className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}
