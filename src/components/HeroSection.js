import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="sticky top-0 min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center px-4 sm:px-6 pt-20 pb-12 sm:pt-24 overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Contenedor de texto */}
          <div className="w-full space-y-6 sm:space-y-8 animate-fade-in lg:order-1">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Construimos tus
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r text-white bg-clip-text text-transparent">
                soluciones de software
              </span>
            </h1>

            {/* Logo en móvil - aparece después del título */}
            <div className="flex justify-center lg:hidden">
              <div className="relative w-64 sm:w-80 aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/20 rounded-full blur-3xl scale-90"></div>
                <div className="relative w-full h-full animate-float">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain drop-shadow-2xl filter brightness-110"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-serif-accent">
              Transformamos tus ideas en soluciones digitales innovadoras que impulsan tu negocio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-black font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3">
                <span>Comenzar proyecto</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
            </div>

            {/* Servicios destacados */}
            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Especializados en:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium">
                  Desarrollo Web
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium">
                  Apps Móviles
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium">
                  Consultoría
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium">
                  Capacitación
                </span>
              </div>
            </div>
          </div>

          {/* Logo a la derecha - Solo visible en desktop */}
          <div className="hidden lg:flex justify-end lg:order-2">
            <div className="relative w-full max-w-1xl aspect-square">
              {/* Efecto de resplandor detrás del logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/20 rounded-full blur-3xl scale-90"></div>
              
              {/* Logo principal */}
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain drop-shadow-2xl filter brightness-110"
                  priority
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
