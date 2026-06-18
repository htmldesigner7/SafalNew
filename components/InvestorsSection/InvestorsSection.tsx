import Link from 'next/link';
import styles from './InvestorsSection.module.css';

export default function InvestorsSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <header className="header_sec">
          <h2 className="title_60">Where investor confidence meets partner potential</h2>
          <p className={styles.subtitle}>
            Safal Infosoft Group invites two kinds of partners — those who invest in our growth, and those who grow alongside us. Both relationships are built on transparency, shared ambition, and long-term value creation.
          </p>
        </header>

        <div className={styles.vennContainer}>

          {/* Left Circle */}
          <div className={`${styles.circle} ${styles.left}`}>
            <div className={styles.content}>
              <h2>Investor<br/>Value</h2>
              <ul>
                <li>Strong financial governance</li>
                <li>Scalable enterprise technology platforms</li>
                <li>Sustainable long-term growth strategy</li>
                <li>Transparent business operations</li>
                <li>Global market expansion opportunities</li>
              </ul>
              <a href="#" className={styles.btn}>Explore More</a>
            </div>
          </div>

          {/* Right Circle */}
          <div className={`${styles.circle} ${styles.right}`}>
            <div className={styles.content}>
              <h2>Strategic<br/>Partnerships</h2>
              <ul>
                <li>Strong financial governance</li>
                <li>Scalable enterprise technology platforms</li>
                <li>Sustainable long-term growth strategy</li>
                <li>Transparent business operations</li>
                <li>Global market expansion opportunities</li>
              </ul>
              <a href="#" className={styles.btn}>Explore More</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
