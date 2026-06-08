import ContactHero from '@/components/ContactPage/ContactHero';
import ContactForm from '@/components/ContactPage/ContactForm';
import ContactLocations from '@/components/ContactPage/ContactLocations';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactLocations />
    </main>
  );
}
