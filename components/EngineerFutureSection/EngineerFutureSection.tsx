import React from 'react';
import Image from 'next/image';
import styles from './EngineerFutureSection.module.css';

export default function EngineerFutureSection() {
  return (
    <section className="mt_80">
      <div className={`container-1600 ${styles.gridContainer}`}>
        <div className={styles.textContent}>
          <h2 className="title_60">
            Don't Just Write Code.<br />
            Engineer the Future.
          </h2>
          <p>
            We don't hire for basic execution; we hire for global impact. Whether you are architecting a disruptive new startup with an external founder, or optimizing core systems across our ERP platforms for Safal Infosoft, your work here directly impacts the global digital economy. You are not a cog in a machine; you are the machine.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Habitant est in vulputate rhoncus auctor mattis. Enim eu vel in est orci pellentesque egestas lacus vel. Cras mattis cras imperdiet tincidunt in euismod ac magna. Et tellus nisl orci elit etiam in enim risus. Tortor in cursus id urna donec.
          </p>
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
