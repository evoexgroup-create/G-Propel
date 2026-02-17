import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Applications from "@/components/Applications";
import Vision from "@/components/Vision";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Technology />
        <Stats />
        <HowItWorks />
        <Applications />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
