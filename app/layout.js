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
    default: "Ana Sayfa -İzmir Beton Parke",
    template: "%s - İzmir Beton Parke"
  },
  description: "Balaban Sirketler Grubu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <Head>
        {/* Temel Meta Etiketleri */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Beton Parke Taşı, Beton Bordür Taşı, Zemin Kaplama, Bahçe Taşı, Kaldırım Taşı,Su Oluğu, Beton Karo Taşı, Menemen, Çiğli, Karşıyaka, Aliağa, Çeşme, Urla " />
        <link rel="canonical" href="https://www.izmirbetonparke.com.tr/" />

        {/* Open Graph Meta Etiketleri (Facebook & LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ana Sayfa - İzmir Beton Parke" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://www.izmirbetonparke.com.tr/" />
        <meta property="og:image" content="https://www.izmirbetonparke.com.tr/assets/logo.webp" />
      </Head>
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "İzmir Beton Parke",
            "url": "https://www.izmirbetonparke.com.tr/",
            "logo": "https://www.izmirbetonparke.com/assets/logo.webp",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90 541 262 29 22",
              "contactType": "customer service",
              "areaServed": "TR",
              "availableLanguage": "Turkish"
            }
          })}
        </script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
