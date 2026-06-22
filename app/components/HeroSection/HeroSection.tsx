import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`${styles.heroSection}`}>
      {/* Main Content */}
      <div className={`${styles.contentContainer} container-1800`}>
        {/* Left Column */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <strong> The Architecture of
              Global Enterprise.</strong>
          </h1>
          <p className={styles.description}>
            Three strategic pillars. One unified holding company. From intelligent industrial automation to elite financial advisory, we architect the frameworks that power industry leaders.
          </p>
          <Link href="#discover" className="btn-outline">
            Discover Safal Divisions
          </Link>
        </div>

        {/* Right Column - Visual Graphic */}
        <div className={styles.visualContent}>
          <div className={styles.graphicWrapper}>
            <Image
              src="/images/hero-right.png"
              alt="Hero Graphic Full"
              width={650}
              height={650}
              className={styles.fullImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
