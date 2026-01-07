'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Cullen Heubner
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('cv')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              CV
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white mt-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white mt-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('items')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Items
              </button>
              <button
                onClick={() => scrollToSection('cv')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                CV
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-purple-400 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}