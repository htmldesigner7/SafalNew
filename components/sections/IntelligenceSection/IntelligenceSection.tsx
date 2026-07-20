'use client';
import { baseUrl } from '@/utils/baseUrl';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IntelligenceData, aboutIntelligenceData } from '@/data/intelligenceData';
import styles from './IntelligenceSection.module.css';
import { useRouter } from "next/navigation";

interface IntelligenceSectionProps {
  data?: IntelligenceData;
}

export default function IntelligenceSection({ data = aboutIntelligenceData }: IntelligenceSectionProps) {
  const router = useRouter();
  return (
    <section className={`${styles.intelligenceSection} mt_80`}>
      <div className="container-1600">
        <motion.div 
          className={styles.circularWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.outerRing}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.innerRing}
            initial={{ x: "-50%", y: "-50%", rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Content */}
          <motion.div 
            className={styles.centerContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="title_60">{data.title}</h2>
            <div className="description">{data.description}</div>
            {data.buttonText && (
            //   <button className="btn-primary mt_40" 
            //   onClick={() => {
            //         if (data.buttonLink?.startsWith("#")) {
            //           const id = data.buttonLink.replace("#", "");
            //           document.getElementById(id)?.scrollIntoView({
            //             behavior: "smooth",
            //             block: "start",
            //           });
            //         }
            //       }}
            //   >{data.buttonText}</button>
            <button
                className="btn-primary mt_40"
                onClick={() => {
                    if (!data.buttonLink) return;

                    // Scroll to section
                    if (data.buttonLink.startsWith("#")) {
                    const id = data.buttonLink.slice(1);

                    document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });

                    return;
                    }

                    // Navigate to another page
                    router.push(data.buttonLink);
                }}
                >
                {data.buttonText}
                </button>
            )}
          </motion.div>

          {/* Floating Icons */}
          <motion.div 
            className={`${styles.icon} ${styles.iconCube}`}
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={`${baseUrl}/images/DI_StarCube.png`} alt="Cube" width={150} height={150} style={{ width: '100%', height: 'auto' }} />
          </motion.div>

          <motion.div 
            className={`${styles.icon} ${styles.iconCompass}`}
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Image src={`${baseUrl}/images/DI_Compaas.png`} alt="Compass" width={180} height={180} style={{ width: '100%', height: 'auto' }} />
          </motion.div>

          <motion.div 
            className={`${styles.icon} ${styles.iconNetwork}`}
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Image src={`${baseUrl}/images/DI_Orbit.png`} alt="Network" width={160} height={160} style={{ width: '100%', height: 'auto' }} />
          </motion.div>

          <motion.div 
            className={`${styles.icon} ${styles.iconRocket}`}
            animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <Image src={`${baseUrl}/images/DI_Rocket.png`} alt="Rocket" width={120} height={120} style={{ width: '100%', height: 'auto' }} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
