"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TechStackSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.1 });
  // Stack tecnológico - agrega los logos en /public/tech/
  const technologies = [
    { name: "React", logo: "/tech/react.png" },
    { name: "Angular", logo: "/tech/angular.png" },
    { name: "Vue", logo: "/tech/vue.png" },
    { name: "Python", logo: "/tech/python.png" },
    { name: "C#", logo: "/tech/csharp.png" },
    { name: "Wordpress", logo: "/tech/wordpress.png" },
    { name: "MySQL", logo: "/tech/mysql.png" },
    { name: "Javascript", logo: "/tech/js.png" },
    { name: "PostgreSQL", logo: "/tech/postgre.png" },
    { name: "Flutter", logo: "/tech/flutter.png" },
    { name: "PHP", logo: "/tech/php.png" },
    { name: "SQL Server", logo: "/tech/sql-server.svg" },
  ];

  // Dividir en dos filas para el efecto de scroll
  const row1 = technologies.slice(0, 6);
  const row2 = technologies.slice(6, 12);

  return (
    <section id="stack" className="relative w-full bg-black py-12 sm:py-16 md:py-24 overflow-hidden scroll-mt-20">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
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
          {/* Badge "Stack Tecnológico" */}
          <div className="mb-0 inline-block">
            <div className="relative group">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-400 px-4 sm:px-6 py-1.5 sm:py-2">
                <p className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider">
                  Stack Tecnológico
                </p>
              </div>
            </div>
          </div>
          
          {/* Línea divisora */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Título */}
        <div className="mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Tecnologías que dominamos
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl" style={{ textAlign: 'justify' }}>
            Trabajamos con las herramientas más modernas y robustas del mercado para crear soluciones escalables y de alto rendimiento
          </p>
        </div>

        {/* Carruseles infinitos de tecnologías */}
        <div 
          ref={carouselRef}
          className={`relative transition-all duration-1000 delay-300 ${
            carouselVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          {/* Fade effects en los lados */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Primera fila - Scroll hacia la derecha */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...row1, ...row1, ...row1].map((tech, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
                  >
                    <div className="group relative w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                      {/* Logo de la tecnología */}
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 group-hover:scale-110 transition-all duration-300">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Nombre de la tecnología */}
                      <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-300">
                        {tech.name}
                      </p>
                      {/* Efecto de brillo al hover */}
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Segunda fila - Scroll hacia la izquierda */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...row2, ...row2, ...row2].map((tech, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
                  >
                    <div className="group relative w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                      {/* Logo de la tecnología */}
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 group-hover:scale-110 transition-all duration-300">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {/* Nombre de la tecnología */}
                      <p className="text-white font-semibold text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-300">
                        {tech.name}
                      </p>
                      {/* Efecto de brillo al hover */}
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Texto adicional */}
        <div className="text-center mt-10 sm:mt-16 md:mt-20">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg" style={{ textAlign: 'justify' }}>
            Y muchas más tecnologías que se adaptan a las necesidades de tu proyecto
          </p>
        </div>
      </div>
    </section>
  );
}
