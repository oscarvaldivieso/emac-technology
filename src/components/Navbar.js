"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <Image
              src="/logoemac.png"
              alt="Logo"
              width={140}
              height={100}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Menú hamburguesa de dos líneas a la derecha */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex flex-col justify-center items-center w-12 h-12 space-y-2 focus:outline-none hover:bg-white/10 rounded-lg transition-all duration-300"
            aria-label="Menu"
          >
            <span
              className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : "group-hover:w-10"
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-0.5" : "group-hover:w-10"
              }`}
            ></span>
          </button>
        </div>

        {/* Menú desplegable modernizado */}
        {isOpen && (
          <div className="mt-6 py-6 border-t border-white/10 animate-fade-in">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#inicio" 
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Inicio
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#proyectos" 
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Proyectos
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Contacto
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href="#contacto" 
                  className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar proyecto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
