import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './BannerCTASection.module.css';

export interface BannerCTAData {
  iconSrc?: string;
  title: string | React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgImageSrc: string;
}

interface BannerCTASectionProps {
  data: BannerCTAData;
}

export default function BannerCTASection({ data }: BannerCTASectionProps) {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <div
          className={styles.bannerContainer}
          style={{ backgroundImage: `url(${data.bgImageSrc})` }}
        >
          {/* Optional Overlay to ensure text readability if needed */}
          {/* <div className={styles.overlay}></div> */}

          <div className={styles.contentWrapper}>
            {data.iconSrc && (
              <div className={styles.iconWrapper}>
                <Image
                  src={data.iconSrc}
                  alt="Icon"
                  width={64}
                  height={64}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}

            <h2 className={`title_60 ${styles.title}`}>{data.title}</h2>

            <p className={styles.description}>{data.description}</p>

            <Link href={data.buttonLink} className={styles.btnWhite}>
              {data.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
