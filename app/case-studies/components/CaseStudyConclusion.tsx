import styles from './CaseStudyConclusion.module.css';

export default function CaseStudyConclusion() {
  return (
    <section className={`mt_80 ${styles.section}`}>
      <div className="container-1600">
        <h2 className={`title_60 ${styles.title}`}>Conclusion</h2>
        
        <div className={styles.content}>
          <p>
            The true power of a modern ERP lies in predictive capability. We embed AI directly into the user interface, transforming passive dashboards into active strategic advisors. Whether it is anticipating supply chain bottlenecks in the plastic and rubber industry or forecasting financial trends in trading, the system moves from being a system of record to a system of intelligence.
          </p>
          
          <p>
            Egestas sed hac suspendisse proin scelerisque pharetra dui adipiscing. Cursus donec et congue enim. In vel et dui non interdum lectus bibendum laoreet. Posuere gravida risus lorem vitae diam lacus mattis. Id diam nulla sapien sapien phasellus ut. Vitae enim ipsum turpis at. Et pretium molestie eu id sed semper suspendisse molestie.
          </p>

          <div className={styles.quoteBlock}>
            <p>
              &quot;Safal Infosoft didn&apos;t just modernize our systems—they fundamentally transformed how we think about manufacturing data. The predictive insights have been game-changing.&quot;
            </p>
            <p className={styles.quoteAuthor}>
              — Chief Operations Officer, Global Metal Processing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
