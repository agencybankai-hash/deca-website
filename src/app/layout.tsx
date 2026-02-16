import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DECA Windows & Doors | European Energy-Efficient Windows Made in USA",
  description:
    "Premium European-style tilt & turn windows and doors manufactured in Massachusetts. Industry-leading U-values, soundproofing, and energy efficiency. Factory-direct pricing.",
  keywords: "european windows, tilt and turn windows, energy efficient windows, Massachusetts windows, DECA windows",
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
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
