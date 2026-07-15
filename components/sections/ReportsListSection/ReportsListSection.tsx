'use client';
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './ReportsListSection.module.css';

interface ReportItem {
  id: string;
  title: string;
  link: string;
  year?: string;
}

interface ReportsData {
  title: string;
  description: ReactNode;
  tabs: string[];
  items: Record<string, ReportItem[]>;
}

export const reportsDataMock: ReportsData = {
  title: "A Borderless Brain-Trust",
  description: <>
  <p>Capital and capability operate without boundaries.</p>
  <p>Our global structure connects financial oversight, operational leadership, and strategic execution across key markets, ensuring that reporting is not fragmented, but unified. From New York to Dubai to Ahmedabad, our teams function as one synchronized system, delivering clarity, consistency, and accountability at scale.</p>
  </>,
  tabs: ["Annual Reports", "Quarterly Results", "Financial Presentations", "CSR Reports"],
  items: {
    "Annual Reports": [
      { id: "1", title: "Annual Report for the year 2024-2025", link: "#", year: "2024-2025" },
      { id: "2", title: "Annual Report for the year 2023-2024", link: "#", year: "2023-2024" },
      { id: "3", title: "Annual Report for the year 2022-2023", link: "#", year: "2022-2023" },
      { id: "4", title: "Annual Report for the year 2024-2025", link: "#", year: "2024-2025" },
    ],
    "Quarterly Results": [
      { id: "q1", title: "Q1 Results 2024-2025", link: "#", year: "2024-2025" },
      { id: "q2", title: "Q2 Results 2023-2024", link: "#", year: "2023-2024" },
    ],
    "Financial Presentations": [
      { id: "p1", title: "Investor Presentation 2024-2025", link: "#", year: "2024-2025" },
    ],
    "CSR Reports": [
      { id: "c1", title: "CSR Sustainability Report 2024-2025", link: "#", year: "2024-2025" },
    ]
  }
};

const availableYears = ["All Years", "2024-2025", "2023-2024", "2022-2023"];

export default function ReportsListSection({ data = reportsDataMock }: { data?: ReportsData }) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]);
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentItems = data.items[activeTab] || [];
  const filteredItems = currentItems.filter(item => 
    selectedYear === "All Years" || item.year === selectedYear
  );

  return (
    <section className={`${styles.reportsSection} mt_80`}>
      <div className="container-1600">
        
        <div className={styles.header}>
          <h2 className="title_60">{data.title}</h2>
          <div className={styles.description}>{data.description}</div>
        </div>

        <div className={`${styles.controlsWrapper} mt_80`}>
          <div className={styles.tabsContainer}>
            {data.tabs.map((tab) => (
              <button 
                key={tab}
                className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ''}`}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedYear("All Years"); // reset filter on tab change
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className={styles.filterWrapper} ref={dropdownRef}>
            <button 
              className={styles.filterBtn} 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedYear === "All Years" ? "Filter by Year" : selectedYear}
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownList}>
                {availableYears.map(year => (
                  <li 
                    key={year} 
                    className={styles.dropdownItem}
                    onClick={() => {
                      setSelectedYear(year);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.reportsList}>
          {filteredItems.map((item) => (
            <a key={item.id} href={item.link} className={styles.reportItem}>
              <span className={styles.reportTitle}>{item.title}</span>
              <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
          {filteredItems.length === 0 && (
            <div style={{ padding: '20px 0', color: 'var(--grey-666)' }}>
              No reports available for the selected year.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
