import Image from 'next/image';
import styles from './LegacyAccountability.module.css';

export default function LegacyAccountability() {
  return (
    <section className={"mt_80"}>
      <div className={`container-1600 ${styles.container}`}>
        <div className={styles.leftCol}>
          <h2 className={`title_60 ${styles.title}`}>A Legacy of Accountability</h2>
          <div className={styles.content}>
            <p>
              We view corporate governance not as a regulatory burden, but as the foundational framework that protects and compounds shareholder value over time. In a digital economy characterized by rapid disruption, our uncompromising oversight acts as our ultimate stabilizing force.
            </p>
            <p>
              By enforcing rigorous independent audit protocols, zero-trust data compliance, and transparent executive compensation models, we ensure that the Safal Group&apos;s aggressive technological expansion is always anchored by unshakeable institutional stability.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ultrices est in sollicitudin non tristique vel. Non cursus ac molestie lacus eget. Habitant pretium orci mattis et a gravida. Faucibus vitae lectus nibh scelerisque sed viverra vitae aliquam et. A lobortis diam luctus scelerisque. Malesuada nunc ac mattis quis dui condimentum turpis. In gravida adipiscing mauris donec eu ultrices sit pellentesque massa. Lorem ipsum dolor sit amet consectetur. Ultrices est in sollicitudin non tristique vel. Non cursus ac molestie lacus eget. Habitant pretium orci mattis et a gravida. Faucibus vitae lectus nibh scelerisque sed viverra vitae aliquam et. A lobortis diam luctus scelerisque. Malesuada nunc ac mattis quis dui condimentum turpis. In gravida adipiscing mauris donec eu ultrices sit pellentesque massa.
            </p>
          </div>
        </div>
        <div className={styles.rightCol}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/hourglass.png" 
              alt="Legacy of Accountability Hourglass" 
              fill 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
