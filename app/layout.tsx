import type { Metadata } from "next";
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
