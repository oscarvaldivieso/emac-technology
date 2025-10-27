"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PreFooter() {
  const [scale, setScale] = useState(1);
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      const preFooterElement = document.getElementById("contacto");
      if (!preFooterElement) return;

      const rect = preFooterElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcular el progreso del scroll cuando el elemento está visible
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calcular qué tan visible está el elemento (0 a 1)
        const visiblePercentage = Math.min(
          Math.max((windowHeight - rect.top) / windowHeight, 0),
          1
        );
        
        // Escalar de 1.2 a 1.5 basado en el scroll
        const newScale = 1.2 + (visiblePercentage * 0.3);
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contacto"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20 scroll-mt-20"
    >
      {/* Imagen de fondo con efecto parallax/zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/software.jpg')",
          transform: `scale(${scale})`,
        }}
      >
        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido */}
      <div 
        ref={contentRef}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center transition-all duration-1000 ${
          contentVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Frase principal */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
          ¿Listo para transformar tu visión en realidad?
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto" style={{ textAlign: 'justify' }}>
          Trabajemos juntos para crear soluciones tecnológicas que impulsen tu negocio al siguiente nivel
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/50431544783"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-base sm:text-lg rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10">Contáctanos ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        
      </div>
    </section>
  );
}
