import React from 'react';
import Image from 'next/image';
import styles from './EngineerFutureSection.module.css';

export default function EngineerFutureSection() {
  return (
    <section className="mt_80">
      <div className={`container-1600 ${styles.gridContainer}`}>
        <div className={styles.textContent}>
          <h2 className="title_60">
            Don’t Just Write Code.
          </h2>
          <p>
            Engineer the Future.
          </p>
          <p>
           We don’t hire for static roles, we invest in trajectories.
          </p>
          <p>Whether you're building scalable enterprise systems, contributing to emerging ventures, or optimizing global platforms, your work directly shapes digital ecosystems at scale.</p>
          <p>You are not here to execute tasks.<br/>You are here to architect impact.</p>
        </div>
        <div className={styles.imageContent}>
          <Image
            src="/images/blogs-inner.webp"
            alt="Engineer the Future"
            width={600}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
