import Image from 'next/image';
import styles from './AboutArchitecture.module.css';

export default function AboutArchitecture() {
  const steps = [
    { num: '01', title: 'Strategic Discovery', active: true },
    { num: '02', title: 'Low-Code Engineering', active: false },
    { num: '03', title: 'Frictionless Integration', active: false },
    { num: '04', title: 'Autonomous Scaling', active: false },
  ];

  return (
    <section className={`${styles.architectureSection} mt_80`}>
      <div className={`container-1600 ${styles.container}`}>
        <h2 className="title_60">The Value-Creation Architecture.</h2>
        
        <div className={styles.contentWrapper}>
          <div className={styles.leftList}>
            {steps.map((step, idx) => (
              <div key={idx} className={`${styles.listItem} ${step.active ? styles.active : ''}`}>
                <span className={styles.stepText}>{step.num}. {step.title}</span>
              </div>
            ))}
          </div>

          <div className={styles.centerGraphic}>
            <div className={styles.imageWrapper}>
               <Image src="/about/layered_blocks.png" alt="Layered Blocks" fill className={styles.blocksImage} />
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.indicatorLine}></div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
