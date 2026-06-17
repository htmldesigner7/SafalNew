import Image from 'next/image';
import Link from 'next/link';
import styles from './GlobalPresenceSection.module.css';

export default function GlobalPresenceSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>

        {/* Left Content */}
        <div>
          <h2 className="title_60">A Diversified Technology<br />Group.</h2>

          <p>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
          </p>
          <p>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
          </p>
          <p>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
          </p>

          <Link href="#product" className="btn-outline btn-outline-red mt_40">
            Visit our Product
          </Link>
        </div>

        {/* Right Graphic */}
        <div className={styles.graphicContent}>
          <div className={styles.globeWrapper}>
            {/* Placeholder for the wireframe globe image */}
            <Image
              src="/images/globe-img.png"
              alt="Global Presence Globe"
              fill
              className={styles.globeImage}
            />


          </div>
        </div>

      </div>
    </section>
  );
}
