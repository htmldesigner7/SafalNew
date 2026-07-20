import ContactHero from '@/components/views/ContactPage/ContactHero';
import ContactForm from '@/components/views/ContactPage/ContactForm';
import ContactLocations from '@/components/views/ContactPage/ContactLocations';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Safal Infosoft | Get in Touch Today",
  description:
    "Get in touch with Safal Infosoft to discuss software development, startup consulting, enterprise solutions, or your next digital project.",
};


export default function ContactPage() {
  return (
    <main>
      {/* <ContactHero /> */}
      <ContactForm />
      <ContactLocations />
    </main>
  );
}
