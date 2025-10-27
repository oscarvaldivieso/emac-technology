"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ClientsSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });
  // Array de clientes - agrega más logos en /public/companies/
  const clients = [
    { name: "RAP", logo: "/companies/rap.png" },
    { name: "KR Ingenieria", logo: "/companies/kr.png" },
    { name: "AHM", logo: "/companies/ahm.png" },
    { name: "INVARCA", logo: "/companies/invarca.png" },
    { name: "MC Creative", logo: "/companies/mc-creative.png" },
    
    
    
    // Agrega más clientes aquí cuando tengas sus logos
    // { name: "Cliente 2", logo: "/companies/client2.png" },
    // { name: "Cliente 3", logo: "/companies/client3.png" },
  ];

  return (
    <section id="clientes" className="relative w-full bg-black py-12 sm:py-16 md:py-24 overflow-hidden scroll-mt-20">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Divisor superior con badge */}
        <div 
          ref={headerRef}
          className={`relative mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          {/* Badge "Confían en nosotros" - posicionado arriba del divisor */}
          <div className="mb-0 inline-block">
            <div className="relative group">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-400 px-4 sm:px-6 py-1.5 sm:py-2 ">
                <p className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider">
                  Confían en nosotros
                </p>
              </div>
            </div>
          </div>
          
          {/* Línea divisora */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Título */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Empresas que impulsan su tecnología con nosotros
          </h2>
        </div>

        {/* Grid de logos - centrado */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center place-items-center mx-auto max-w-5xl transition-all duration-1000 delay-300 ${
            gridVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center transition-all duration-700 hover:scale-110 ${
                gridVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms' 
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo real */}
                <div className="relative w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Texto adicional opcional */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Empresas que confían en nuestras soluciones tecnológicas
          </p>
        </div>
      </div>
    </section>
  );
}
