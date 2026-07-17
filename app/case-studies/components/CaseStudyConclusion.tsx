import styles from './CaseStudyConclusion.module.css';

export default function CaseStudyConclusion() {
  return (
    <section className={`mt_80 ${styles.section}`}>
      <div className="container-1600">
        <h2 className={`title_60 ${styles.title}`}>Conclusion</h2>
        
        <div className={styles.content}>
          <p>
            The transformation at Kanhai Foods Ltd. demonstrates how intelligent ERP systems can redefine operational excellence in FMCG manufacturing and retail. By integrating production, distribution, and sales into a single ecosystem, Safal Infosoft enabled the organization to move from reactive operations to predictive, data-driven decision-making.
          </p>
          
          <p>
              What was once a fragmented, multi-layered operation is now a synchronized, scalable engine built for growth, capable of adapting to demand shifts, minimizing wastage, and delivering consistent customer experiences across every outlet.          </p>

          <div className={styles.quoteBlock}>
            <p>
              &quot;Safal Infosoft didn’t just streamline our operations—they gave us complete control over our business. Today, every decision is backed by real-time data, and every process is aligned for scale.&quot;

            </p>
            <p className={styles.quoteAuthor}>
               — Operations Leadership, Kanhai Foods Ltd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
