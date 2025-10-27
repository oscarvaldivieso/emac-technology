"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function PreFooter() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const preFooterElement = document.getElementById("prefooter");
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
      id="prefooter"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-20"
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Frase principal */}
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
          ¿Listo para transformar tu visión en realidad?
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Trabajemos juntos para crear soluciones tecnológicas que impulsen tu negocio al siguiente nivel
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contacto"
            className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="relative z-10">Contáctanos ahora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          <Link
            href="/proyectos"
            className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-none hover:bg-white hover:text-black transition-all duration-300"
          >
            Ver proyectos
          </Link>
        </div>

        
      </div>
    </section>
  );
}
