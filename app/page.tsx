import Image from "next/image";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import DetailSection from "../components/details/details";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ServicesSection />
      <DetailSection />
    </>
  );
}
