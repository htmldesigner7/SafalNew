import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutIntelligence.module.css';

export default function AboutIntelligence() {
  return (
    <section className={`${styles.intelligenceSection} mt_80`}>
      <div className={styles.orbitContainer}>
        {/* Orbital rings */}
        <div className={styles.ring1}></div>
        <div className={styles.ring2}></div>
        <div className={styles.ring3}></div>

        {/* Orbiting Icons */}
        <div className={styles.iconWrapper} style={{ top: '30%', left: '10%' }}>
          <Image src="/about/orbit_cube.png" alt="Cube Icon" width={100} height={100} className={styles.orbitIcon} />
        </div>
        <div className={styles.iconWrapper} style={{ top: '10%', right: '15%' }}>
          <Image src="/about/orbit_compass.png" alt="Compass Icon" width={120} height={120} className={styles.orbitIcon} />
        </div>
        <div className={styles.iconWrapper} style={{ bottom: '15%', right: '20%' }}>
          <Image src="/about/orbit_molecule.png" alt="Molecule Icon" width={100} height={100} className={styles.orbitIcon} />
        </div>
        <div className={styles.iconWrapper} style={{ bottom: '5%', left: '25%' }}>
          <Image src="/about/orbit_rocket.png" alt="Rocket Icon" width={90} height={90} className={styles.orbitIcon} />
        </div>

        {/* Center Content */}
        <div className={styles.centerContent}>
          <h2 className="title_60">Driven by<br/>Intelligence.</h2>
          <p className={styles.description}>
            Safal Infosoft is more than a software provider; we are an interconnected holding matrix. Every line of code, every brand strategy, and every data model we build is designed to autonomously propel your enterprise forward.
          </p>
          <Link href="/divisions" className={styles.exploreBtn}>
            Explore Our Divisions
          </Link>
        </div>
      </div>
    </section>
  );
}
