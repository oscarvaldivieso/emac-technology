"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OffersSection() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [softwareRef, softwareVisible] = useScrollAnimation({ threshold: 0.1 });
  const [coursesRef, coursesVisible] = useScrollAnimation({ threshold: 0.1 });
  const consultingServices = [
    {
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos",
      image: "/software.jpg"
    },
    {
      title: "Apps Móviles",
      description: "Aplicaciones nativas e híbridas",
      image: "/apps.jpg"
    }
  ];

  const trainingCourses = [
  {
    title: "Power BI",
    description:
      "Aprende a diseñar paneles dinámicos e informes visuales que transformen tus datos en decisiones inteligentes.",
    image: "/courses/powerbi.jpg",
  },
  {
    title: "Excel",
    description:
      "Domina el uso de hojas de cálculo, fórmulas avanzadas y herramientas de análisis de datos para tu entorno profesional.",
    image: "/courses/excel.png",
  },
  {
    title: "Bases de Datos",
    description:
      "Comprende el diseño, gestión y optimización de bases de datos SQL y NoSQL para almacenar y consultar información eficientemente.",
    image: "/courses/databases.jpeg",
  },
  {
    title: "Minitab",
    description:
      "Aplica herramientas estadísticas con Minitab para el control de calidad y mejora continua de procesos empresariales.",
    image: "/courses/minitab.png",
  },
  {
    title: "Programación Web, Móvil y de Escritorio",
    description:
      "Aprende a desarrollar aplicaciones modernas y multiplataforma con tecnologías actuales para distintos entornos.",
    image: "/courses/software.webp",
  },
];


  return (
    <section id="servicios" className="relative w-full bg-black z-10 overflow-hidden scroll-mt-20">
      {/* Título principal de la sección */}
      <div 
        ref={titleRef}
        className={`relative z-10 max-w-7xl  pt-16 sm:pt-20 px-6 md:pt-24 pb-8 sm:pb-10 md:pb-12 transition-all duration-1000 ${
          titleVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          ¿Qué ofrecemos?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl" style={{ textAlign: 'justify' }}>
          Descubre nuestras soluciones y servicios diseñados para impulsar tu crecimiento
        </p>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes azules grandes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl"></div>
        
        {/* Elementos adicionales */}
        
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-blue-700/12 rounded-full blur-3xl"></div>
        
        
      </div>
      {/* Consultoría de Software */}
      <div 
        ref={softwareRef}
        className={`relative min-h-screen flex items-center px-6 py-10 z-10 transition-all duration-1000 delay-200 ${
          softwareVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-20'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto">
          {/* Divisor superior con badge */}
          <div className="relative mb-8 sm:mb-12 md:mb-16">
            {/* Badge "Consultoría de Software" */}
            <div className="mb-0 inline-block">
              <div className="relative group">
                <div className="relative bg-gradient-to-r from-blue-400 to-blue-400 px-4 sm:px-6 py-1.5 sm:py-2">
                  <p className="text-xs sm:text-sm font-bold text-blue-900 uppercase tracking-wider">
                    Consultoría de Software
                  </p>
                </div>
              </div>
            </div>
            
            {/* Línea divisora */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>

          {/* Título arriba */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Transformamos ideas en soluciones tecnológicas
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl" style={{ textAlign: 'justify' }}>
              Desarrollamos software robusto y escalable adaptado a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start">
            {/* Texto animado en la izquierda - Solo visible en desktop */}
            <div className="hidden lg:flex relative h-[500px] w-[154px] items-center justify-center overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
              
              <div className="rotate-270 origin-center flex w-[500px]">
                <div className="animate-scroll-vertical-reverse flex">
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    SOFTWARE /
                  </h2>
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                     SOFTWARE /
                  </h2>
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    SOFTWARE /
                  </h2>
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    SOFTWARE /
                  </h2>
                </div>
              </div>
            </div>

            {/* Grid de cards modernizado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {consultingServices.map((service, index) => (
                <div 
                  key={index}
                  className={`group relative min-h-100 border border-4 border-gray-700 overflow-hidden cursor-pointer transition-all duration-700 hover:border-gray-800 ${
                    softwareVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: softwareVisible ? `${index * 150}ms` : '0ms' 
                  }}
                >
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Degradado inferior */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  
                  {/* Contenido en la parte inferior */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-10">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cursos y Capacitaciones */}
      <div 
        ref={coursesRef}
        className={`relative min-h-screen flex items-center px-6 py-10 z-10 transition-all duration-1000 delay-200 ${
          coursesVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-20'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto">
          {/* Divisor superior con badge */}
          <div className="relative mb-8 sm:mb-12 md:mb-16">
            {/* Badge "Cursos y Capacitaciones" */}
            <div className="mb-0 inline-block">
              <div className="relative group">
                <div className="relative bg-gradient-to-r from-purple-400 to-purple-400 px-4 sm:px-6 py-1.5 sm:py-2">
                  <p className="text-xs sm:text-sm font-bold text-purple-900 uppercase tracking-wider">
                    Cursos y Capacitaciones
                  </p>
                </div>
              </div>
            </div>
            
            {/* Línea divisora */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>

          {/* Título arriba */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Eleva tus habilidades profesionales
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl" style={{ textAlign: 'justify' }}>
              Programas diseñados por expertos de la industria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 items-start">
            {/* Grid de cards modernizado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingCourses.map((course, index) => (
                <div 
                  key={index}
                  className={`group relative h-80 border border-gray-700 overflow-hidden cursor-pointer transition-all duration-700 hover:border-gray-500 ${
                    coursesVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: coursesVisible ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Degradado inferior */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  
                  {/* Contenido en la parte inferior */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 z-10">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-purple-400 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed" style={{ textAlign: 'justify' }}>
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto animado en la derecha - Solo visible en desktop */}
            <div className="hidden lg:flex relative h-[500px] w-[154px] items-center justify-center overflow-hidden lg:ml-auto">
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
              
              <div className="rotate-90 origin-center flex w-[500px]">
                <div className="animate-scroll-vertical-reverse flex">
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    CURSOS /
                  </h2>
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    CURSOS /
                  </h2>
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    CURSOS /
                  </h2>
                  <h2 className="text-[90px] italic font-bold text-white/30 whitespace-nowrap leading-none mr-12">
                    CURSOS /
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
