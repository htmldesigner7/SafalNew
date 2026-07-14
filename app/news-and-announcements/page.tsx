import React from 'react';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import NewsGrid from './components/NewsGrid';

export const metadata = {
  title: 'News & Announcements - Safal Infosoft Limited',
  description: 'The latest official updates on Safal Infosoft\'s global expansion, strategic partnerships, and technological breakthroughs across our integrated divisions.',
};

export default function NewsAndAnnouncementsPage() {
  return (
    <main>
      <InnerPageHero
        title={
          <>
            Media & Global<br />
            Dispatches.
          </>
        }
        description="Stay updated with official announcements, strategic developments, and key milestones across Safal’s global operations and integrated divisions."
        imageSrc="/images/hero-section-right.png" // Placeholder image as discussed
        imageAlt="Media and Global Dispatches Megaphone"
      />
      
      <NewsGrid />
    </main>
  );
}
