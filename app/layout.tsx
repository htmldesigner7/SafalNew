import type { Metadata } from "next";
import { headers } from "next/headers";
import { Familjen_Grotesk, Figtree } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "IT Consulting Services Company | Digital Transformation Partner | Safal",
//   description: "Safal is an IT consulting services company and digital transformation partner delivering technology consulting and enterprise solutions for modern businesses.",
// };

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path") || "/";
  const siteUrl = process.env.SITE_URL || "https://www.safalinfosoft.com";
  const currentUrl = `${siteUrl}${pathname}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default:
        "IT Consulting Services Company | Digital Transformation Partner | Safal",
      template: "%s",
    },
    description:
      "Safal is an IT consulting services company and digital transformation partner delivering technology consulting and enterprise solutions for modern businesses.",
    // robots: {
    //   index: true,
    //   follow: true,
    //   googleBot: {
    //     index: true,
    //     follow: true,
    //     maxSnippet: -1,
    //     maxImagePreview: "large",
    //     maxVideoPreview: -1,
    //   },
    // },
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title:
        "IT Consulting Services Company | Digital Transformation Partner | Safal",
      description:
        "Safal is an IT consulting services company and digital transformation partner delivering technology consulting and enterprise solutions for modern businesses.",

      url: currentUrl,
      siteName: "safalinfosoft",
      type: "website",
      images: [
        {
          url: `${siteUrl}/images/HomePage/Enterprise-Products-Platforms.webpg`,
          width: 1200,
          height: 630,
          alt: "safalinfosoft",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "IT Consulting Services Company | Digital Transformation Partner | Safal",
      description:
        "Safal is an IT consulting services company and digital transformation partner delivering technology consulting and enterprise solutions for modern businesses",
      images: [`${siteUrl}/images/HomePage/Enterprise-Products-Platforms.webpg`],
    },

  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="" suppressHydrationWarning>
      <body className={`${familjenGrotesk.variable} ${figtree.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
