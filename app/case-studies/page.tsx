import Image from 'next/image';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';
import { enterprisePlatformsData } from '@/data/enterprisePlatforms';
import { caseStudiesData } from '@/data/caseStudies';
import styles from './CaseStudies.module.css';

export default function CaseStudiesPage() {
  const heroData = pagesData.caseStudies.hero;

  return (
    <main>
      <InnerPageHero 
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <section className="mt_80 bg_f9">
        <div className="container-1600">
          {enterprisePlatformsData.map((platform, index) => (
            <div 
              key={platform.id} 
              className={`${styles.block} ${index % 2 !== 0 ? styles.reverse : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={platform.imageSrc} 
                  alt={platform.imageAlt} 
                  fill 
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              </div>
              <div className={styles.contentWrapper}>
                {platform.subtitle && <h4 className="title_24">{platform.subtitle}</h4>}
                <h2 className="title_40">{platform.title}</h2>
                {platform.descriptions.map((desc, idx) => (
                  <p key={idx} className="para_16 mt_15">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {caseStudiesData.map((study, index) => {
            const actualIndex = enterprisePlatformsData.length + index;
            const content = study.content?.[0] || {};
            return (
              <div 
                key={study.id} 
                className={`${styles.block} ${actualIndex % 2 !== 0 ? styles.reverse : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <Image 
                    src={study.imageSrc} 
                    alt={study.title} 
                    fill 
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.contentWrapper}>
                  {content.subheading && <h4 className="title_24">{content.subheading}</h4>}
                  <h2 className="title_40">{content.heading || study.title}</h2>
                  {content.paragraphs?.map((desc, idx) => (
                    <p key={idx} className="para_16 mt_15">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </main>
  );
}
