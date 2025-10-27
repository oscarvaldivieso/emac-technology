import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import ValueSection from "@/components/ValueSection";
import ClientsSection from "@/components/ClientsSection";
import TechStackSection from "@/components/TechStackSection";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OffersSection />
      <ValueSection />
      <ClientsSection />
      <TechStackSection />
      <PreFooter />
      <Footer />
    </>
  );
}
