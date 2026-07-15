import JobDetailsPage from '@/components/views/JobDetailsPage/JobDetailsPage';
import InnerPageHero from '@/components/sections/InnerPageHero/InnerPageHero';
import { pagesData } from '@/data/pagesData';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const heroData = pagesData.jobDetails.hero;

  return (
    <main>
      <InnerPageHero
        title={heroData.title}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        imageAlt={heroData.imageAlt}
      />
      <JobDetailsPage jobId={id} />
    </main>
  );
}
