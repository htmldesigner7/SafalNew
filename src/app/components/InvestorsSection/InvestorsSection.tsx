

import Link from 'next/link';
import styles from './InvestorsSection.module.css';

export default function InvestorsSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <header className="header_sec">
          <h2 className="title_60">A Structured Approach to Growth & Collaboration</h2>
          <p className={styles.subtitle}>
            Safal Infosoft Group engages with investors and partners through a structured approach focused on transparency, scalability, and long-term value creation across its global technology ecosystem.
          </p>
        </header>

        <div className={styles.vennContainer}>

          {/* Left Circle */}

          {/* Left Circle */}
          <div className={`${styles.circle} ${styles.left}`}>
            <div className={styles.content}>
              <h2>Investor<br />Value</h2>
              <ul>
                <li>Strong financial governance</li>
                <li>Scalable enterprise technology platforms</li>
                <li>Sustainable long-term growth strategy</li>
                <li>Transparent and accountable operations</li>
                <li>Global expansion opportunities</li>
                <li>Structured risk management</li>
              </ul>
              <Link href="/investor-relations" className="btn-outline btn-outline-red">Explore More</Link>
            </div>
          </div>

          {/* Right Circle */}

          {/* Right Circle */}
          <div className={`${styles.circle} ${styles.right}`}>
            <div className={styles.content}>
              <h2>Strategic<br />Partnerships</h2>
              <ul>
                <li>Integrated technology collaboration</li>
                <li>Scalable solution development</li>
                <li>Joint go-to-market opportunities</li>
                <li>Long-term partnership alignment</li>
                <li>Access to multi-industry expertise</li>
                <li>Ecosystem-driven innovation</li>
              </ul>
              <a href="/investor-relations" className="btn-outline btn-outline-red">Explore More</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
