import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">Slim</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"> Club</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6 py-2 font-semibold transition-all duration-200 hover:scale-105"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6 py-2 font-semibold transition-all duration-200"
              >
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
