import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BuildScaleSection.module.css';

export default function BuildScaleSection() {
  return (
    <section className="mt_80 mb_80">
      <div className="container-1600">
        <div className={styles.layout}>
          
          <div className={styles.contentCol}>
            <h2 className="title_40 mb_20">
              Build, Scale, and Position Your Brand with Clarity
            </h2>
            <p className={styles.description}>
              Engage with a team delivering digital marketing and branding services through structured execution, creative consistency, and technology-driven systems.
            </p>
            <div className="mt_40">
              <Link href="/contact" className="btn-outline btn-outline-red">
                Start the Conversation
              </Link>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <Image
              src="/images/Brand,-Digital-&-Creative-Services/Highend_3d_render_of_a_polished_gold_key_unlocking_delpmaspu-(1)-2.webp"
              alt="Brand Clarity"
              width={700}
              height={500}
              className={styles.image}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
