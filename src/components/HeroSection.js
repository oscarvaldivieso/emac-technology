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
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              Construimos tus
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r text-white bg-clip-text text-transparent">
                soluciones de software
              </span>
            </h1>

            {/* Logo en móvil - aparece después del título */}
            <div className="flex justify-center lg:hidden">
              <div className="relative w-48 sm:w-56 aspect-square">
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
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-serif-accent">
              Transformamos tus ideas en soluciones digitales innovadoras que impulsan tu negocio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-gray-100 text-black font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2">
                <span>Comenzar proyecto</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold text-sm transition-all duration-300">
                Conocer más
              </button>
            </div>

            {/* Servicios destacados */}
            <div className="pt-4 sm:pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400 mb-2 sm:mb-3">Especializados en:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  Desarrollo Web
                </span>
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  Apps Móviles
                </span>
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  Consultoría
                </span>
                <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium">
                  Capacitación
                </span>
              </div>
            </div>
          </div>

          {/* Logo a la derecha - Solo visible en desktop */}
          <div className="hidden lg:flex justify-end lg:order-2">
            <div className="relative w-full max-w-lg aspect-square">
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
