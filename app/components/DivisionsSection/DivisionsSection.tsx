"use client";

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './DivisionsSection.module.css';
import { motion } from 'framer-motion';

export default function DivisionsSection() {
  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <header className="header_sec">
          {/* <h2 className="title_60">A Diversified Technology Group.</h2>
          <p className={styles.subtitle}>
            We are a global holding company operating at the intersection of agentic AI, industrial automation, and strategic advisory. Across eight specialized divisions, we don&apos;t just build software—we engineer the unified ecosystems that power the world&apos;s most complex organizations.
          </p> */}
          <h2 className="title_60">A Global Technology Ecosystem.</h2>
          <p className={styles.subtitle}>
            Safal operates as a global technology holding group with specialized entities across regions. Each entity delivers focused capabilities within a unified and integrated ecosystem.
          </p>
        </header>

        <div className={styles.chartWrapper}>
          <div className={styles.chartContainer}>
            {/* Animated Main Horizontal Red Lines (From Col 1 and Col 5 to Center) */}
            <div className={styles.mobileTrunkWrapperLeft}>
              <motion.div
                className={styles.animatedLineLeft}
                initial={{ scaleX: 0, opacity: 1 }}
                whileInView={{ scaleX: [0, 1, 1, 1, 0], opacity: [1, 1, 1, 0, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 6, times: [0, 0.500, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div className={styles.mobileTrunkWrapperRight}>
              <motion.div
                className={styles.animatedLineRight}
                initial={{ scaleX: 0, opacity: 1 }}
                whileInView={{ scaleX: [0, 1, 1, 1, 0], opacity: [1, 1, 1, 0, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 6, times: [0, 0.500, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Column 1 */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Infosoft Ltd.</h3>
            </div>
          </div>

          {/* Column 2 (Split Left) */}
          <div className={styles.columnSplitLeft}>
            {/* Animated Left Vertical Lines (Top and Bottom) */}
            <motion.div
              className={styles.animatedVerticalLeftTop}
              initial={{ scaleY: 0, opacity: 1 }}
              whileInView={{ scaleY: [0, 0, 1, 1, 1, 0], opacity: [1, 1, 1, 1, 0, 0] }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 6, times: [0, 0.167, 0.333, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className={styles.animatedVerticalLeftBottom}
              initial={{ scaleY: 0, opacity: 1 }}
              whileInView={{ scaleY: [0, 0, 1, 1, 1, 0], opacity: [1, 1, 1, 1, 0, 0] }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 6, times: [0, 0.167, 0.333, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
            />

            <div className={`${styles.card} ${styles.cardLeftTree}`}>
              <motion.div
                className={styles.animatedCardLineLeft}
                initial={{ scaleX: 0, opacity: 1 }}
                whileInView={{ scaleX: [0, 1, 1, 1, 0], opacity: [1, 1, 1, 0, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 6, times: [0, 0.167, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
              />
              <h3 className={styles.cardTitle}>Intelliworkz<br />Business<br />Solutions Pvt. Ltd.</h3>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
            </div>
            <div className={`${styles.card} ${styles.cardLeftTree}`}>
              <motion.div
                className={styles.animatedCardLineLeft}
                initial={{ scaleX: 0, opacity: 1 }}
                whileInView={{ scaleX: [0, 1, 1, 1, 0], opacity: [1, 1, 1, 0, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 6, times: [0, 0.167, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
              />
              <h3 className={styles.cardTitle}>Ideoz Ventures</h3>
              <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className={styles.flag} />
            </div>
          </div>

          {/* Column 3 (Center) */}
          <div className={styles.columnCenter}>
            <div className={styles.cardCenter}>
              {/* Center Image (Static) */}
              <div className={styles.centerImageWrapper}>
                <Image
                  src="/images/Homepage/Diversified-Technology.png"
                  alt="Team assembling puzzle"
                  width={120}
                  height={120}
                  className={styles.centerImage}
                />
              </div>
            </div>
          </div>

          {/* Column 4 (Split Right) */}
          <div className={styles.columnSplitRight}>
            {/* Animated Right Vertical Lines (Top and Bottom) */}
            <motion.div
              className={styles.animatedVerticalRightTop}
              initial={{ scaleY: 0, opacity: 1 }}
              whileInView={{ scaleY: [0, 0, 1, 1, 1, 0], opacity: [1, 1, 1, 1, 0, 0] }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 6, times: [0, 0.167, 0.333, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className={styles.animatedVerticalRightBottom}
              initial={{ scaleY: 0, opacity: 1 }}
              whileInView={{ scaleY: [0, 0, 1, 1, 1, 0], opacity: [1, 1, 1, 1, 0, 0] }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 6, times: [0, 0.167, 0.333, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
            />

            <div className={`${styles.card} ${styles.cardRightTree}`}>
              <motion.div
                className={styles.animatedCardLineRight}
                initial={{ scaleX: 0, opacity: 1 }}
                whileInView={{ scaleX: [0, 1, 1, 1, 0], opacity: [1, 1, 1, 0, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 6, times: [0, 0.167, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
              />
              <h3 className={styles.cardTitle}>Intelliworkz<br />Infosoft<br />Technology LLC</h3>
              <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className={styles.flag} />
            </div>
            <div className={`${styles.card} ${styles.cardRightTree}`}>
              <motion.div
                className={styles.animatedCardLineRight}
                initial={{ scaleX: 0, opacity: 1 }}
                whileInView={{ scaleX: [0, 1, 1, 1, 0], opacity: [1, 1, 1, 0, 0] }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 6, times: [0, 0.167, 0.583, 0.667, 1], repeat: Infinity, ease: "linear" }}
              />
              <h3 className={styles.cardTitle}>Safal Automation<br />Inc.</h3>
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className={styles.flag} />
            </div>
          </div>

          {/* Column 5 */}
          <div className={styles.column}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Safal Infosoft Inc.</h3>
              <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className={styles.flag} />
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
