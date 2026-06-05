import Image from 'next/image';
import styles from './DivisionsSection.module.css';

export default function DivisionsSection() {
  return (
    <section className={styles.section}>
      <div className="container-1600">
        <header className={styles.header}>
          <h2 className={styles.title}>A Diversified Technology Group.</h2>
          <p className={styles.subtitle}>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don't just build software—we engineer the unified ecosystems that power the world's most complex organizations.
          </p>
        </header>

        <div className={styles.chartContainer}>
          {/* SVG Lines Overlay for future animation */}
          <svg className={styles.svgLines} preserveAspectRatio="none" width="100%" height="100%">
            {/* Main horizontal line */}
            <line className={styles.animLine} x1="10%" y1="50%" x2="90%" y2="50%" />
            {/* Left vertical line */}
            <line className={styles.animLine} x1="28.5%" y1="20%" x2="28.5%" y2="80%" />
            {/* Right vertical line */}
            <line className={styles.animLine} x1="71.5%" y1="20%" x2="71.5%" y2="80%" />
          </svg>

          {/* Column 1 */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Infosoft Ltd.</h3>
            </div>
          </div>

          {/* Column 2 (Split) */}
          <div className={styles.columnSplit}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Intelliworkz<br/>Business<br/>Solutions Pvt. Ltd.</h3>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Ideaz Ventures</h3>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
            </div>
          </div>

          {/* Column 3 (Center) */}
          <div className={styles.columnCenter}>
            <div className={styles.cardCenter}>
              {/* Note: Placeholder image, user should replace with puzzle vector from Figma */}
              <Image 
                src="/puzzle-placeholder.png" 
                alt="Team assembling puzzle" 
                width={140} 
                height={140} 
                className={styles.centerImage}
              />
            </div>
          </div>

          {/* Column 4 (Split) */}
          <div className={styles.columnSplit}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Intelliworkz<br/>Infosoft<br/>Technology LLC</h3>
              <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className={styles.flag} />
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Automation<br/>Inc.</h3>
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className={styles.flag} />
            </div>
          </div>

          {/* Column 5 */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Infosoft Inc.</h3>
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className={styles.flag} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
