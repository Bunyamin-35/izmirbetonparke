// import icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import Script from 'next/script';


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
    <html lang="en">
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
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
