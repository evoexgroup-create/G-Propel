import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Applications from "@/components/Applications";
import Vision from "@/components/Vision";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Prototype from "@/components/Prototype";
import Blog from "@/components/Blog";
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
        <Prototype />
        <Applications />
        <Vision />
        <Team />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
