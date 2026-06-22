import CultureSection from '@/components/sections/CultureSection/CultureSection';
import { cultureData } from '@/data/cultureData';

export default function AboutCulture() {
  if (!cultureData) return null;

  return (
    <CultureSection data={cultureData} />
  );
}
