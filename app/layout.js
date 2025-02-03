// import icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import Script from 'next/script';
import Head from 'next/head';

import localFont from "next/font/local";
import "./globals.css";



//import components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Nav';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Ana Sayfa - İzmir Beton Parke",
    template: "%s - İzmir Beton Parke"
  },
  description: "İzmir Beton Parke olarak yüksek kaliteli parke taşları üretiyoruz.",
  keywords: "Beton Parke Taşı, Beton Bordür Taşı, Zemin Kaplama, Bahçe Taşı, Kaldırım Taşı, Su Oluğu, Beton Karo Taşı, Menemen, Çiğli, Karşıyaka, Aliağa, Çeşme, Urla",
  alternates: {
    canonical: "https://www.izmirbetonparke.com.tr/",
  },
  openGraph: {
    type: "website",
    title: "Ana Sayfa - İzmir Beton Parke",
    description: "İzmir Beton Parke olarak yüksek kaliteli parke taşları üretiyoruz.",
    url: "https://www.izmirbetonparke.com.tr/",
    images: [
      {
        url: "/images/logo.webp", // `public/` içinde olduğu için direkt kullanılabilir
        width: 1200,
        height: 630,
        alt: "İzmir Beton Parke Logo"
      }
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="container"
        >

          <Navbar />
          {children}
          <Footer />
        </div>
        {/* Structured Data (JSON-LD Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "İzmir Beton Parke",
              "url": "https://www.izmirbetonparke.com.tr/",
              "logo": "https://www.izmirbetonparke.com.tr/images/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90 541 262 29 22",
                "contactType": "customer service",
                "areaServed": "TR",
                "availableLanguage": "Turkish"
              }
            })
          }}
        />


        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
