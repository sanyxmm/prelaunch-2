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
    <div className="hidden md:hidden fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 text-white text-2xl font-bold">
  Under Development
</div>

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
