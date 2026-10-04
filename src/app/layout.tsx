import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import { SITE_CONFIG, constructMetadata } from "@/lib/seo-config";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#06060c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.playStoreUrl,
    logo: "/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "neeleshyadav1416@gmail.com",
    },
  };

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: SITE_CONFIG.name,
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    installUrl: SITE_CONFIG.playStoreUrl,
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable}`}>
      <head>
        <StructuredData data={[organizationSchema, mobileAppSchema]} />
      </head>
      <body className="bg-cosmic-950 text-slate-100 min-h-screen flex flex-col font-sans selection:bg-celestial-gold selection:text-cosmic-950 stars-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
