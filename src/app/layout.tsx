import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { GA_MEASUREMENT_ID, GTM_ID, getGTMHeadScript, getGA4Script, getGTMBodyNoscript } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "DECA Windows & Doors | European Energy-Efficient Windows Made in USA",
  description:
    "Premium European-style tilt & turn windows and doors manufactured in Massachusetts. Industry-leading U-values, soundproofing, and energy efficiency. Factory-direct pricing.",
  keywords: "european windows, tilt and turn windows, energy efficient windows, Massachusetts windows, DECA windows",
  metadataBase: new URL("https://www.decawindows.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DECA Windows & Doors",
    title: "DECA Windows & Doors | European Energy-Efficient Windows Made in USA",
    description: "Premium European-style tilt & turn windows manufactured in Massachusetts. Factory-direct pricing.",
    url: "https://www.decawindows.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DECA Windows & Doors",
    description: "European tilt & turn windows made in Massachusetts. U-value 0.10.",
  },
  verification: {
    google: "PASTE_GSC_VERIFICATION_CODE_HERE",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DECA Windows & Doors",
  "url": "https://www.decawindows.com",
  "logo": "https://www.decawindows.com/logo.png",
  "description": "USA-based manufacturer of premium European-style tilt & turn windows and doors",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "109 Apremont Way",
    "addressLocality": "Westfield",
    "addressRegion": "MA",
    "postalCode": "01085",
    "addressCountry": "US"
  },
  "telephone": "+14137714457",
  "email": "info@decawindows.com",
  "sameAs": [
    "https://www.facebook.com/decawindows",
    "https://www.instagram.com/decawindows"
  ],
  "knowsAbout": [
    "Tilt and turn windows",
    "European windows",
    "Energy efficient windows",
    "uPVC windows",
    "Aluminum windows"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmHead = getGTMHeadScript();
  const gtmBody = getGTMBodyNoscript();
  const ga4 = getGA4Script();

  return (
    <html lang="en">
      <head>
        {gtmHead && <script dangerouslySetInnerHTML={{ __html: gtmHead }} />}
        {ga4 && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: ga4 }} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        {gtmBody && GTM_ID !== "GTM-XXXXXXX" && (
          <noscript dangerouslySetInnerHTML={{ __html: gtmBody }} />
        )}
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
