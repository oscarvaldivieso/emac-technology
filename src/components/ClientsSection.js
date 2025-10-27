"use client";

import Image from "next/image";

export default function ClientsSection() {
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
    <section className="relative w-full bg-black py-24 overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Divisor superior con badge */}
        <div className="relative mb-16">
          {/* Badge "Confían en nosotros" - posicionado arriba del divisor */}
          <div className="mb-0 inline-block">
            <div className="relative group">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-400 px-6 py-2 ">
                <p className="text-sm font-bold text-blue-900 uppercase tracking-wider">
                  Confían en nosotros
                </p>
              </div>
            </div>
          </div>
          
          {/* Línea divisora */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Título */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empresas que impulsan su tecnología con nosotros
          </h2>
        </div>

        {/* Grid de logos - centrado */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center place-items-center mx-auto max-w-5xl">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-full h-24 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo real */}
                <div className="relative w-40 h-20 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
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
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Empresas que confían en nuestras soluciones tecnológicas
          </p>
        </div>
      </div>
    </section>
  );
}
