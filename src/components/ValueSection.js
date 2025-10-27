"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ValueSection() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [carouselRef, carouselVisible] = useScrollAnimation({ threshold: 0.1 });
  const preguntas = [
    "¿Qué riesgos debo prever en mi proyecto de software?",
    "¿Cómo puedo optimizar los procesos tecnológicos de mi empresa?",
    "¿Qué herramientas debo implementar para mejorar la productividad?",
    "¿Cómo puedo formar a mi equipo en nuevas tecnologías?",
    "¿Cuál es la mejor manera de capacitar al personal en desarrollo de software?",
    "¿Cómo puedo asegurar la calidad de mis aplicaciones?",
    "¿Qué lenguajes o frameworks debo aprender primero?",
    "¿Cómo integrar mis sistemas actuales con nuevas soluciones?",
    "¿Qué buenas prácticas seguir para la gestión de proyectos tecnológicos?",
    "¿Cómo proteger la información y seguridad de mis sistemas?",
    "¿Qué estrategias de automatización debo implementar?",
    "¿Cómo medir el impacto de la capacitación en mi equipo?",
  ];

  // Dividir las preguntas en tres filas
  const fila1 = preguntas.slice(0, 4);
  const fila2 = preguntas.slice(4, 8);
  const fila3 = preguntas.slice(8, 12);

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-24 md:py-32 overflow-hidden">
      

      <div 
        ref={headerRef}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
          headerVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Título y descripción */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Eliminando los obstáculos para tu éxito tecnológico
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Es fácil perderse entre consejos contradictorios y tareas interminables.
            Nosotros filtramos el ruido, nos enfocamos en lo que realmente importa y
            te damos la claridad que tu empresa necesita para brillar en el mercado.
          </p>
        </div>
      </div>

      {/* Carruseles infinitos */}
      <div 
        ref={carouselRef}
        className={`relative max-w-3xl mx-auto px-4 sm:px-0 transition-all duration-1000 delay-300 ${
          carouselVisible 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}
      >
        {/* Fade effect en los lados */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 via-white to-transparent z-20 pointer-events-none"></div>
        
      <div className="relative space-y-4 sm:space-y-6">
        {/* Primera fila - Hacia la derecha */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...fila1, ...fila1].map((pregunta, index) => (
              <div
                key={`fila1-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-3"
              >
                <div className="min-w-64 sm:min-w-80 h-10 sm:h-12 bg-blue-100 px-4 sm:px-6 flex items-center justify-center hover:bg-blue-200 transition-all duration-300">
                  <p className="text-gray-800 text-center text-xs sm:text-sm md:text-base font-medium">
                    {pregunta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila - Hacia la izquierda */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {[...fila2, ...fila2].map((pregunta, index) => (
              <div
                key={`fila2-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-3"
              >
                <div className="min-w-64 sm:min-w-80 h-10 sm:h-12 bg-blue-100 px-4 sm:px-6 flex items-center justify-center hover:bg-blue-200 transition-all duration-300">
                  <p className="text-gray-800 text-center text-xs sm:text-sm md:text-base font-medium">
                    {pregunta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tercera fila - Hacia la derecha */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            {[...fila3, ...fila3].map((pregunta, index) => (
              <div
                key={`fila3-${index}`}
                className="flex-shrink-0 mx-2 sm:mx-3"
              >
                <div className="min-w-64 sm:min-w-80 h-10 sm:h-12 bg-blue-100 px-4 sm:px-6 flex items-center justify-center hover:bg-blue-200 transition-all duration-300">
                  <p className="text-gray-800 text-center text-xs sm:text-sm md:text-base font-medium">
                    {pregunta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
