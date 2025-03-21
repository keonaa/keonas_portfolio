import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import "../styles/globals.css";

export const metadata = {
  title: "Keona Aguilar",
  description: "A portfolio showcasing Keona's work",
  icons: {
    icon: "/keona_favicon.svg", 
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
