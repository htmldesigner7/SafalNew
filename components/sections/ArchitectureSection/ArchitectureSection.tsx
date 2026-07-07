'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './ArchitectureSection.module.css';
import { architectureData, ArchitectureContent } from '@/data/architectureData';

interface ArchitectureSectionProps {
  data?: ArchitectureContent;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ArchitectureSection({ data = architectureData }: ArchitectureSectionProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className={`${styles.architectureSection} mt_80`}>
      <div className="container-1600">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title_60 text-center">{data.title}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </motion.div>

        <div className={styles.cardsGrid} ref={containerRef}>
          {data.cards.map((card, index) => (
            <motion.div 
              key={card.id} 
              className={styles.card}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.phaseLabel}>
                  <span className={styles.phaseNumber}>{card.number}.</span> {card.phase}
                </div>
                <h3 className="title_24">{card.title}</h3>
                <p className={styles.description}>{card.description}</p>
              </div>
              
              {/* Arc Graphic at bottom */}
              <div className={styles.arcContainer}>
                {/* Grey dashed base */}
                <div className={styles.arcLine} style={{ borderColor: '#d5d4cb' }} />
                
                {/* Red dashed overlay that fills up slowly */}
                <motion.div 
                  className={styles.arcLine}
                  style={{ borderColor: '#eb5a3c' }}
                  initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 50%, 0% 50%)" }}
                  animate={isInView ? { clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)" } : { clipPath: "polygon(0% 0%, 0% 0%, 0% 50%, 0% 50%)" }}
                  transition={{ duration: 2.5, delay: index * 2.5, ease: "linear" }}
                />

                <motion.div 
                  className={styles.arcCircle}
                  initial={{ borderColor: "#d5d4cb", color: "#888" }}
                  animate={isInView ? { borderColor: "#eb5a3c", color: "#eb5a3c" } : { borderColor: "#d5d4cb", color: "#888" }}
                  transition={{ duration: 0.3, delay: index * 2.5 + 1.25 }}
                >
                  {card.number}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
