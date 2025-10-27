"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-gray-800">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logoemac.png"
                alt="EMAC Technology"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Transformamos ideas en soluciones tecnológicas innovadoras. 
              Especialistas en desarrollo de software, consultoría tecnológica y capacitación empresarial.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/emactechnologyhn"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white text-lg">f</span>
              </Link>
              <Link
                href="https://www.instagram.com/emactechnologyhn"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-white text-lg">ig</span>
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/desarrollo-software" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Desarrollo de Software
                </Link>
              </li>
              <li>
                <Link href="/aplicaciones" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Aplicaciones Móviles
                </Link>
              </li>
              <li>
                <Link href="/consultoria" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Consultoría Tecnológica
                </Link>
              </li>
              <li>
                <Link href="/capacitacion" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Capacitación Empresarial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block text-sm">Email:</span>
                <a href="mailto:info@emactechnology.com" className="hover:text-blue-400 transition-colors duration-300">
                  gerencia@emac-technology.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Teléfono:</span>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors duration-300">
                  +504 3154-4783
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">Ubicación:</span>
                <span>San Pedro Sula, Honduras</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} EMAC Technology. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
