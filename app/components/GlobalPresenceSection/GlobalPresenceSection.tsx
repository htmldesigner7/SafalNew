import Image from 'next/image';
import Link from 'next/link';
import styles from './GlobalPresenceSection.module.css';

export default function GlobalPresenceSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>

        {/* Left Content */}
        <div>
          <h2 className="title_60">A Global Presence, Built on Integrated Systems.</h2>

          <p>
           Safal operates as a global technology holding group with entities across India, the USA, and the UAE. Each entity delivers specialized capabilities while remaining aligned within a unified and structured operating framework.
          </p>
          <p>
            Our presence across regions enables us to support diverse industries with consistent execution, localized expertise, and scalable systems designed to meet complex enterprise requirements.
          </p>
          <p>
            By integrating operations across geographies, Safal ensures seamless collaboration, operational continuity, and long-term value creation for organizations operating in global and multi-market environments.
          </p>

          <Link href="#product" className="btn-outline btn-outline-red mt_40">
            Explore our Products
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
