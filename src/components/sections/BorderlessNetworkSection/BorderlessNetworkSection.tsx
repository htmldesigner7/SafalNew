import Image from 'next/image';
import styles from './BorderlessNetworkSection.module.css';

export default function BorderlessNetworkSection() {
  return (
    <section className={"text-center mt_80"}>
      <div className="container-1600">
        <div className={styles.content}>
          <h2 className={"title_60 mb-40"}>A Borderless Innovation Network</h2>
          <p className={styles.description}>
            Strategic scale requires global reach and integrated capability. Our partnership ecosystem spans North America, the Middle East, and Asia, bringing together deep technology infrastructure with domain expertise.
          </p>
          <p>Together, we build a synchronized network capable of delivering enterprise-grade solutions, anywhere in the world.</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/Become-a-Partner/banner-image.webp`}
            alt="Global Network Map"
            width={1200}
            height={600}
            className={styles.mapImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
