import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Veya: AI Astrologer",
  shortName: "Veya",
  tagline: "Precision Ephemeris & Neural Astrological Intelligence",
  description:
    "Veya combines high-precision Swiss Ephemeris astronomical calculations with cutting-edge artificial intelligence to deliver deep, hyper-personalized natal birth charts, daily cosmic transits, synastry love compatibility, and 24/7 AI astrologer consultations.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  contactEmail: "neeleshyadav1416@gmail.com",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.astrotales.veya",
  packageName: "com.astrotales.veya",
  ogImage: "/og-preview.png",
  twitterHandle: "@veya_astrology",
  author: "Veya Astrological Advisory Council & AI Ephemeris Lab",
  keywords: [
    "AI Astrology",
    "Veya AI Astrologer",
    "com.astrotales.veya",
    "AI Horoscope",
    "AI Birth Chart Calculator",
    "Free Natal Chart Reading",
    "Synastry Compatibility AI",
    "Zodiac Compatibility Test",
    "Daily Horoscope AI",
    "Vedic Kundli AI",
    "Planetary Transits Today",
    "Hellenistic Astrology Calculator",
    "Astrology Big Three Calculator",
    "AI Tarot & Astrology",
    "Astrology Chart Interpretation AI",
    "Moon Phase Transit Today",
    "Rising Sign Calculator Free",
  ],
  locale: "en_US",
};

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage,
  keywords,
}: {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
} = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const metaDescription = description || SITE_CONFIG.description;
  const metaImage = ogImage || SITE_CONFIG.ogImage;
  const metaKeywords = keywords ? [...keywords, ...SITE_CONFIG.keywords] : SITE_CONFIG.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords.join(", "),
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      creator: SITE_CONFIG.twitterHandle,
      images: [metaImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
