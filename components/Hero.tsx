"use client";

import React, { useState, useEffect } from "react";
const images = [
  "unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
  "Gemini4.png",
  "Gemini3.png",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        console.log(`Image changed: ${prevIndex}`);
        return (prevIndex + 1) % images.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
      relative w-full h-[400px] md:h-[450px] lg:h-[850px] overflow-hidden
      [clip-path:ellipse(155%_90%_at_50%_0%)]         
      md:[clip-path:ellipse(140%_85%_at_50%_0%)]     
      lg:[clip-path:ellipse(120%_90%_at_50%_0%)]     
      "
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image} // イメージ全部表示して
          alt={`Hero Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover
transition-opacity duration-1000 ease-in-out
${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
