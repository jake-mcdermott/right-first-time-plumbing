import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  BUSINESS_NAME,
  PHONE_RAW,
  EMAIL,
  SERVICE_AREAS,
} from "@/constants";

const inter = Inter({ subsets: ["latin"] });

const SITE_TITLE       = `${BUSINESS_NAME} | Carrboro & Chapel Hill NC`;
const SITE_DESCRIPTION = `Trusted plumber serving ${SERVICE_AREAS.join(", ")} and surrounding areas.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/owen-van.jpg",
        width: 2048,
        height: 1536,
        alt: "Owen McDermott with his Right First Time Plumbing van",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/owen-van.jpg"],
  },
};

// Schema.org LocalBusiness (Plumber) JSON-LD
// NOTE: Fill in a real `address` if/when you have a business address.
// Without one, Google treats this as a "service area business", which is fine for trades.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  image: `${SITE_URL}/owen-van.jpg`,
  logo: `${SITE_URL}/logo.svg`,
  url: SITE_URL,
  telephone: PHONE_RAW,
  email: EMAIL,
  priceRange: "$$",
  description:
    "Trusted plumber serving Carrboro, Chapel Hill, Hillsborough and surrounding areas. Licensed, insured and focused on getting the job done right the first time.",
  areaServed: SERVICE_AREAS.map((name) => ({
    "@type": "City",
    name,
    containedInPlace: { "@type": "State", name: "North Carolina" },
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
      description: "24/7 emergency service",
    },
  ],
  sameAs: [
    "https://www.google.com/search?kgmid=/g/11y_zmcqbk",
    // Add Facebook / Yelp URLs here when available
  ],
  potentialAction: [
    {
      "@type": "ReserveAction",
      target: `mailto:${EMAIL}?subject=Free%20Plumbing%20Quote%20Request`,
      name: "Get a Free Quote",
    },
    {
      "@type": "CommunicateAction",
      target: `tel:${PHONE_RAW.replace(/-/g, "")}`,
      name: "Call Now",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload the LCP hero image so it isn't render-blocked */}
        <link rel="preload" as="image" href="/hero-carrboro.jpg" fetchPriority="high" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
