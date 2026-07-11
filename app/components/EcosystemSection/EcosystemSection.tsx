'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EcosystemSection.module.css';

const products = [
  {
    id: 'DataNote',
    name: 'DataNote',
    image: '/images/digital-product.png',
    logoimage: '/images/datanote-logo.png',
    description: 'DataNote is Safal’s enterprise platform designed to unify business operations, data, and decision-making within a single system. It enables organizations to manage processes, improve visibility, and maintain operational control across functions.',
    description2: 'Built for scalability and adaptability, DataNote supports structured growth across diverse enterprise environments.',
    link: '#product'
  },
  {
    id: 'Formezy',
    name: 'Formezy',
    image: '/images/digital-product.png',
    logoimage: '/images/datanote-logo.png',
    description: 'Formezy simplifies data collection and workflow execution through structured digital forms and process automation. It enables organizations to standardize inputs, reduce manual dependency, and improve operational efficiency.',
    description2: 'Designed for flexibility, Formezy integrates seamlessly with enterprise systems to support consistent and reliable data flow.',
    link: '#product'
  },
  {
    id: 'Docezy',
    name: 'Docezy',
    image: '/images/digital-product.png',
    logoimage: '/images/datanote-logo.png',
    description: 'Docezy provides a centralized system for managing documents, workflows, and business-critical information. It ensures structured storage, controlled access, and seamless collaboration across teams.',
    description2: 'The platform is designed to improve compliance, reduce process inefficiencies, and maintain operational clarity.',
    link: '#product'
  },
  {
    id: 'Tasknote',
    name: 'Tasknote',
    image: '/images/digital-product.png',
    logoimage: '/images/datanote-logo.png',
    description: 'Tasknote enables structured task management and operational tracking across teams and workflows. It helps organizations assign, monitor, and manage activities with clarity and accountability.',
    description2: 'With a focus on execution efficiency, Tasknote ensures better coordination and visibility across ongoing operations.',
    link: '#product'
  },
  {
    id: 'ProPulse',
    name: 'ProPulse',
    image: '/images/digital-product.png',
    logoimage: '/images/datanote-logo.png',
    description: 'ProPulse is designed to provide real-time insights into business performance through structured data monitoring and analytics. It enables organizations to track key metrics, identify trends, and support informed decision-making.',
    description2: 'The platform strengthens operational intelligence while maintaining consistency across reporting and analysis.',
    link: '#product'
  },
  // {
  //   id: 'erp',
  //   name: 'ERP',
  //   image: '/images/digital-product.png',
  //   logoimage: '/images/datanote-logo.png',
  //   description: 'Unify your core business processes with our comprehensive Enterprise Resource Planning suite. Manage finance, HR, supply chain, and manufacturing from a single platform.',
  //   link: '#product'
  // },
  // {
  //   id: 'tasknote',
  //   name: 'Tasknote',
  //   image: '/images/digital-product.png',
  //   logoimage: '/images/datanote-logo.png',
  //   description: 'Keep your teams aligned and projects on track. Tasknote provides intuitive task management, time tracking, and progress visualization for modern agile teams.',
  //   link: '#product'
  // }
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

            <p className={styles.description}>
              {activeProduct.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
