"use client";

import { useEffect, useState } from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import DetailSection from "../components/details/details";
import Image from "next/image";

const HERO_IMAGES = [
  "/bg-imgs/angelssloppyphotos-9zX3trwenRU-unsplash.jpg",
  "/bg-imgs/erik-mclean-KoINdO0_y0o-unsplash.jpg",
  "/bg-imgs/giuseppe-patriarchi-TmbwkTaCaRE-unsplash.jpg",
  "/bg-imgs/viktor-stefanoski-nyOAfRSVF-g-unsplash.jpg",
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1 className="sr-only">YG auto | 滋賀県野洲市の自動車販売・整備・車検</h1>
      <section className="relative h-screen overflow-hidden border-b border-slate-300">
        {HERO_IMAGES.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="YGauto hero visual"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-slate-900/25" />
      </section>
      <AboutSection />
      <ServicesSection />
      <DetailSection />
    </>
  );
}
