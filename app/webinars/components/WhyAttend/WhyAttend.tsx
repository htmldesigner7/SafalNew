import Image from 'next/image';
import styles from './WhyAttend.module.css';

export default function WhyAttend() {
  return (
    <section className="mt_80">
      <h2 className="title_60">Why attend</h2>
      
      <div className={styles.topLayout}>
        <div className={styles.leftCol}>
          
          <div className={styles.block}>
            <h3 className="title_24">
              Expand your skills with training Developing an AI agent-ready checkout experience and certification
            </h3>
            <p>Topics:</p>
            <ul className={styles.list}>
              <li>Increasing conversion and lowering network costs</li>
              <li>Fighting fraud and managing disputes</li>
              <li>Building your recurring revenue engine</li>
              <li>Establishing a marketplace or vertical SaaS platform</li>
              <li>Increasing the global reach of your business with stablecoins</li>
              <li>Developing an AI agent-ready checkout experience</li>
            </ul>
            <p className='m-0'>
              Included: On-site certification exams and hands-on workrooms (Wednesday and Thursday)
            </p>
          </div>

          <div className={styles.block}>
            <h3 className="title_24">See what's next in payments and commerce</h3>
            <p>
              Head to the main stage to see our biggest product announcements live, hear from renowned business leaders, and explore what's next for global commerce as AI-native models, agentic commerce, and crypto reshape how business gets done. Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam.
            </p>
          </div>

        </div>

        <div className={styles.rightCol}>
          <Image 
            src="/images/services-image.jpg" // A placeholder image fitting the aspect ratio
            alt="Colleagues discussing"
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.fullWidthBlock}>
        <h3 className="title_24">See what's next in payments and commerce</h3>
        <p>
          Head to the main stage to see our biggest product announcements live, hear from renowned business leaders, and explore what's next for global commerce as AI-native models, agentic commerce, and crypto reshape how business gets done. Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam.
        </p>
      </div>

      <div className={styles.fullWidthBlock}>
        <h3 className="title_24">See what's next in payments and commerce</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec Lorem ipsum dolor sit amet consectetur. Tellus euismod cursus sodales dignissim tortor nullam. Enim dui vel lorem risus pellentesque egestas faucibus sed. Dictum proin urna imperdiet faucibus at euismod eu magna. Mi tellus hac orci sed etiam phasellus. Tortor vivamus in enim donec
        </p>
      </div>

    </section>
  );
}
