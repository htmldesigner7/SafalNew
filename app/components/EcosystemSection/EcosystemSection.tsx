'use client';
import { baseUrl } from '@/utils/baseUrl';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EcosystemSection.module.css';

const products = [
  {
    id: 'DataNote',
    name: 'DataNote',
    image: `${baseUrl}/images/Homepage/Datanote.webp`,
    logoimage: `${baseUrl}/images/datanote-logo.png`,
    description: <>
    <p>DataNote is Safal’s enterprise platform designed to unify business operations, data, and decision-making within a single system. It enables organizations to manage processes, improve visibility, and maintain operational control across functions.</p>
    <p>Built for scalability and adaptability, DataNote supports structured growth across diverse enterprise environments.</p>
    </>,
    link: '/enterprise-products'
  },
  {
    id: 'Formezy',
    name: 'Formezy',
    image: `${baseUrl}/images/Homepage/Formezy.webp`,
    logoimage: `${baseUrl}/images/Enterprise-Grade-Products-Built-for-Scale/Formezy-logo.svg`,
    description: <>
    <p>Formezy simplifies data collection and workflow execution through structured digital forms and process automation. It enables organizations to standardize inputs, reduce manual dependency, and improve operational efficiency.</p>
    <p>Designed for flexibility, Formezy integrates seamlessly with enterprise systems to support consistent and reliable data flow.</p>
    </>,
    link: '/enterprise-products'
  },
  {
    id: 'Docezy',
    name: 'Docezy',
    image: `${baseUrl}/images/Homepage/Docezy.webp`,
    logoimage: `${baseUrl}/images/docezy_logo.png`,
    description: <>
    <p>Docezy provides a centralized system for managing documents, workflows, and business-critical information. It ensures structured storage, controlled access, and seamless collaboration across teams.</p>
    <p>The platform is designed to improve compliance, reduce process inefficiencies, and maintain operational clarity.</p>
    </>,
    link: '/enterprise-products'
  },
  {
    id: 'Tasknote',
    name: 'Tasknote',
    image: `${baseUrl}/images/Homepage/Tasknote.webp`,
    logoimage: `${baseUrl}/images/TaskNote-Final.png`,
    description: <>
    <p>Tasknote enables structured task management and operational tracking across teams and workflows. It helps organizations assign, monitor, and manage activities with clarity and accountability.</p>
    <p>With a focus on execution efficiency, Tasknote ensures better coordination and visibility across ongoing operations.</p>
    </>,
    link: '/enterprise-products'
  },
  {
    id: 'ProPulse',
    name: 'ProPulse',
    image: `${baseUrl}/images/Homepage/Propluse.jpg`,
    logoimage: `${baseUrl}/images/propluse.png`,
    description: <>
    <p>ProPulse is designed to provide real-time insights into business performance through structured data monitoring and analytics. It enables organizations to track key metrics, identify trends, and support informed decision-making.</p>
    <p>The platform strengthens operational intelligence while maintaining consistency across reporting and analysis.</p>
    </>,
    link: '/enterprise-products'
  },
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <section className={`${styles.section} mt_80`}>
      <div className="container-1600">
        <h2 className="title_60 text-center">Our Digital Product Ecosystem</h2>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {products.map((product) => (
            <button
              key={product.id}
              className={`${styles.tabBtn} ${activeTab === product.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(product.id)}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Content Area with smooth transition */}
        <div className={styles.contentArea}>
          <div className={styles.bannerWrapper}>
            <Image
              src={activeProduct.image}
              alt={activeProduct.name}
              fill
              className={styles.bannerImage}
            />
          </div>

          <div className={`${styles.contentFooter} my_40 `}>
            <div className={styles.footerHeader}>
              <div className={styles.productLogo}>
                <div className={styles.logoTextWrapper}>
                  <Image
                    src={activeProduct.logoimage}
                    alt={activeProduct.name}
                    fill
                  />
                </div>
              </div>
              <Link href={activeProduct.link} className="btn-outline btn-outline-red">
                Visit our Product
              </Link>
            </div>

            <div className={styles.descriptionWrapper}>
              {activeProduct.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
