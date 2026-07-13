import Image from 'next/image';
import Link from 'next/link';
import HeroGraphic from './HeroGraphic';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      {/* Main Content */}
      <div className={`${styles.contentContainer} container-1800`}>
        {/* Left Column */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <strong> Architecting Global Enterprise Systems.</strong>
          </h1>
          <p className={styles.description}>
          Three strategic pillars. One unified holding company. As a <b>technology consulting company</b> and <b>digital transformation partner,</b> Safal delivers integrated solutions as an <b>enterprise solutions provider,</b> powering modern businesses.
          </p>
          <Link href="#discover" className="btn-outline">
            Discover Our Divisions
          </Link>
        </div>

        {/* Right Column - Visual Graphic */}
        <div className={styles.visualContent}>
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}
