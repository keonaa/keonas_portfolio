import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Keona Aguilar",
  description: "A portfolio showcasing Keona's work",
  icons: {
    icon: "/keona_favicon.svg", // Corrected favicon path
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
