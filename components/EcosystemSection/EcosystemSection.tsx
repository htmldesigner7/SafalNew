'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EcosystemSection.module.css';

const products = [
  {
    id: 'datanote',
    name: 'Datanote',
    image: '/ecosystem-banner-placeholder.png', // Placeholder for the ERP banner
    logoText: 'DATANOTE', // Using text as placeholder for logo
    logoSubtext: 'OpenLogic ERP',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque id eu cras quam. Tincidunt iaculis pulvinar tellus neque vitae viverra augue nec. Massa odio dignissim sit in dis ac. Id adipiscing faucibus urna senectus e aliquam magna nulla faucibus. Arcu arcu auctor imperdiet nisl amet. In non platea morbi facilisis consectetur nunc maecenas. Sit porta nulla sed non in nibh tellus nisl. Quam eget odio vestibulum bibendum eget vel massa. In nibh imperdiet proin felis senectus viverra vulputate. Sem mattis malesuada blandit sapien sagittis mi. Hac potenti pellentesque sit est urna faucibus tempus tincidunt. Gravida velit aliquet integer lorem libero imperdiet porttitor',
    link: '#product'
  },
  {
    id: 'pos',
    name: 'POS',
    image: '/ecosystem-banner-placeholder.png',
    logoText: 'POS SYSTEM',
    logoSubtext: 'Retail Solution',
    description: 'Optimize your retail operations with our advanced Point of Sale system. Seamlessly manage inventory, process transactions, and gather valuable customer insights in real-time.',
    link: '#product'
  },
  {
    id: 'formezy',
    name: 'Formezy',
    image: '/ecosystem-banner-placeholder.png',
    logoText: 'FORMEZY',
    logoSubtext: 'Digital Forms',
    description: 'Digitize your paperwork and streamline data collection with Formezy. Build custom forms, automate workflows, and securely store submissions in the cloud.',
    link: '#product'
  },
  {
    id: 'crm',
    name: 'CRM',
    image: '/ecosystem-banner-placeholder.png',
    logoText: 'SMART CRM',
    logoSubtext: 'Customer Relations',
    description: 'Build stronger relationships with your customers. Our CRM provides a unified view of your interactions, helping you drive sales, improve support, and foster loyalty.',
    link: '#product'
  },
  {
    id: 'docezy',
    name: 'Docezy',
    image: '/ecosystem-banner-placeholder.png',
    logoText: 'DOCEZY',
    logoSubtext: 'Document Management',
    description: 'Securely store, organize, and share your critical business documents. Docezy offers robust version control, access management, and seamless collaboration features.',
    link: '#product'
  },
  {
    id: 'erp',
    name: 'ERP',
    image: '/ecosystem-banner-placeholder.png',
    logoText: 'ENTERPRISE ERP',
    logoSubtext: 'Business Management',
    description: 'Unify your core business processes with our comprehensive Enterprise Resource Planning suite. Manage finance, HR, supply chain, and manufacturing from a single platform.',
    link: '#product'
  },
  {
    id: 'tasknote',
    name: 'Tasknote',
    image: '/ecosystem-banner-placeholder.png',
    logoText: 'TASKNOTE',
    logoSubtext: 'Project Tracking',
    description: 'Keep your teams aligned and projects on track. Tasknote provides intuitive task management, time tracking, and progress visualization for modern agile teams.',
    link: '#product'
  }
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <section className={styles.section}>
      <div className="container-1600">
        <h2 className={styles.sectionTitle}>Our Digital Product Ecosystem</h2>
        
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
          
          <div className={styles.contentFooter}>
            <div className={styles.footerHeader}>
              <div className={styles.productLogo}>
                <div className={styles.logoIconPlaceholder}></div>
                <div className={styles.logoTextWrapper}>
                  <span className={styles.logoMainText}>{activeProduct.logoText}</span>
                  <span className={styles.logoSubtext}>{activeProduct.logoSubtext}</span>
                </div>
              </div>
              <Link href={activeProduct.link} className={styles.btnOutline}>
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
