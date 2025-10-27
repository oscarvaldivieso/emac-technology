"use client";

import Image from "next/image";

export default function OffersSection() {
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
    <section className="relative w-full bg-black z-10 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes azules grandes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl"></div>
        
        {/* Elementos adicionales */}
        <div className="absolute top-1/3 -left-20 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-blue-700/12 rounded-full blur-3xl"></div>
        
        
      </div>
      {/* Consultoría de Software */}
      <div className="relative min-h-screen flex items-center px-6 py-20 z-10">
        <div className="max-w-7xl w-full mx-auto">
          {/* Título arriba */}
          <div className="mb-16">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Consultoría de Software
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl">
              Transformamos ideas en soluciones tecnológicas robustas y escalables
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 items-start">
            {/* Texto animado en la izquierda */}
            <div className="relative h-[500px] w-[154px] flex items-center justify-center overflow-hidden">
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
                  className="group relative min-h-100 border border-4 border-gray-700 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gray-800"
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
                  <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                    <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
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
      <div className="relative min-h-screen flex items-center px-6 py-20 z-10">
        <div className="max-w-7xl w-full mx-auto">
          {/* Título arriba */}
          <div className="mb-16">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Cursos y Capacitaciones
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl">
              Eleva tus habilidades con programas diseñados por expertos de la industria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 items-start">
            {/* Grid de cards modernizado */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainingCourses.map((course, index) => (
                <div 
                  key={index}
                  className="group relative h-80 border border-gray-700 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gray-500"
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
                  <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                    <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto animado en la derecha */}
            <div className="relative h-[500px] w-[154px] flex items-center justify-center overflow-hidden lg:ml-auto">
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
