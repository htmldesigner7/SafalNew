import type { Metadata } from "next";
import { Familjen_Grotesk, Figtree } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safal App",
  description: "Simple new project setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="" suppressHydrationWarning>
      <body className={`${familjenGrotesk.variable} ${figtree.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Footer />
      </body>
    </html>
  );
}
