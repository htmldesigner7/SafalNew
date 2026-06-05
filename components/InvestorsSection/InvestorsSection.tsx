import Link from 'next/link';
import styles from './InvestorsSection.module.css';

export default function InvestorsSection() {
  return (
    <section className={styles.section}>
      <div className="container-1600">
        <header className={styles.header}>
          <h2 className={styles.title}>Where investor confidence meets partner potential</h2>
          <p className={styles.subtitle}>
            Safal Infosoft Group invites two kinds of partners — those who invest in our growth, and those who grow alongside us. Both relationships are built on transparency, shared ambition, and long-term value creation.
          </p>
        </header>

        <div className={styles.vennContainer}>
          {/* Glowing Orange Ring Background */}
          <div className={styles.glowRing}></div>
          
          <div className={styles.circlesWrapper}>
            {/* Left Circle */}
            <div className={`${styles.circle} ${styles.circleLeft}`}>
              <h3 className={styles.circleTitle}>Investor<br/>Value</h3>
              <ul className={styles.list}>
                <li>Strong financial governance</li>
                <li>Scalable enterprise technology platforms</li>
                <li>Sustainable long-term growth strategy</li>
                <li>Transparent business operations</li>
                <li>Global market expansion opportunities</li>
              </ul>
              <Link href="#investors" className={styles.btnOutline}>
                Explore More
              </Link>
            </div>

            {/* Right Circle */}
            <div className={`${styles.circle} ${styles.circleRight}`}>
              <h3 className={styles.circleTitle}>Strategic<br/>Partnerships</h3>
              <ul className={styles.list}>
                <li>Strong financial governance</li>
                <li>Scalable enterprise technology platforms</li>
                <li>Sustainable long-term growth strategy</li>
                <li>Transparent business operations</li>
                <li>Global market expansion opportunities</li>
              </ul>
              <Link href="#partnerships" className={styles.btnOutline}>
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
