import ContactHero from '@/components/views/ContactPage/ContactHero';
import ContactForm from '@/components/views/ContactPage/ContactForm';
import ContactLocations from '@/components/views/ContactPage/ContactLocations';

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactLocations />
    </main>
  );
}
