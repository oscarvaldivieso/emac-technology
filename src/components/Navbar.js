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
              width={120}
              height={80}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          {/* Menú horizontal para desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
            >
              Servicios
            </a>
            <a 
              href="#clientes" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
            >
              Clientes
            </a>
            <a 
              href="#stack" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300"
            >
              Stack
            </a>
            <a 
              href="https://wa.me/50431544783" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contacto
            </a>
          </div>

          {/* Menú hamburguesa solo para móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden group flex flex-col justify-center items-center w-12 h-12 space-y-2 focus:outline-none hover:bg-white/10 rounded-lg transition-all duration-300"
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

        {/* Menú desplegable solo para móvil */}
        {isOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-white/10 animate-fade-in">
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
                  href="#clientes" 
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Clientes
                </a>
              </li>
              <li>
                <a 
                  href="#stack" 
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Stack
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50431544783" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg text-white hover:text-blue-400 transition-all duration-300 hover:translate-x-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  → Contacto
                </a>
              </li>
              
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
