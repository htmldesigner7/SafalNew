import Image from 'next/image';
import styles from './AboutCulture.module.css';

export default function AboutCulture() {
  const cards = [
    {
      subtitle: 'Core / Execution',
      title: 'Relentless Velocity',
      desc: 'We operate with calculated urgency. Speed to market, executed without compromising precision, is the competitive advantage.',
      bgColor: '#f5f0d5', // yellow-ish
    },
    {
      subtitle: 'Core / Governance',
      title: 'Absolute Integrity',
      desc: 'We build systems handling billions in revenue. Zero-trust security and ethical data governance are non-negotiable foundations.',
      bgColor: '#bfe4ed', // blue-ish
      image: '/about/culture_cube.png'
    },
    {
      subtitle: 'Core / Aesthetic',
      title: 'Design-Driven Innovation.',
      desc: 'Code is functional; design is emotional. Enterprise software must be as beautifully intuitive as it is mathematically complex.',
      bgColor: '#fbdcc3', // orange-ish
    },
    {
      subtitle: 'Core / Accountability',
      title: 'Systemic Ownership.',
      desc: 'We do not pass the buck. If we architect the solution, we own the outcome, the performance, and the ROI for our partners.',
      bgColor: '#d4e6c9', // green-ish
    }
  ];

  return (
    <section className={`${styles.cultureSection} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>
        <div className={styles.headerContent}>
          <h2 className="title_60">The DNA of Our Culture.</h2>
          <p className={styles.subtext}>Elite technology requires elite discipline. The behaviors we reward internally dictate the results we deliver globally.</p>
        </div>

        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ backgroundColor: card.bgColor }}
            >
              <div className={styles.cardTop}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.cardIcon}>
                   <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                   <path d="M2 17L12 22L22 17"/>
                   <path d="M2 12L12 17L22 12"/>
                </svg>
                <span className={styles.subtitle}>{card.subtitle}</span>
              </div>
              
              {card.image && (
                <div className={styles.imageWrapper}>
                  <Image src={card.image} alt="Cube Sketch" fill className={styles.cubeImage} />
                </div>
              )}

              <div className={styles.cardBottom}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
