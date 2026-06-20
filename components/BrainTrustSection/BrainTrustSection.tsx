import Image from 'next/image';
import styles from './BrainTrustSection.module.css';

export default function BrainTrustSection() {
  return (
    <section className={`${styles.brainTrustSection} mt_80`}>
      <div className="container-1600">
        <div className={styles.header}>
          <h2 className="title_60" style={{ textAlign: "center" }}>A Borderless Brain-Trust.</h2>
          <p style={{ textAlign: "center" }}>
            Talent is not restricted by geography. Our operational infrastructure allows a systems architect in New York to collaborate flawlessly in real-time with a UI/UX director in Dubai and a low-code engineering lead in Ahmedabad. We operate as a singular, synchronized global team, ensuring you are always learning from the best minds in the industry.
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
