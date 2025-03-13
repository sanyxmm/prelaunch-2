import "./globals.css";
import Hero from "@/Amorr-PreLaunch/Hero";
import Together from "@/Amorr-PreLaunch/Together";
import Testinomials from "@/Amorr-PreLaunch/Testinomials";
import Journey from "@/Amorr-PreLaunch/Journey";
import Cherish from "@/Amorr-PreLaunch/Cherish";
import Footer from "@/Amorr-PreLaunch/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Hero/>
        <Together/>
        <Journey/>
        <Cherish/>
        <Testinomials/>
        <Footer/>
      </body>
    </html>
  );
}
