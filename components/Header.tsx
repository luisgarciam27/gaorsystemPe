import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-secondary ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Component - Adjusts text color based on scroll state */}
        <a href="#" className="flex items-center group">
          <Logo className="h-11" lightMode={!isScrolled} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-600 hover:text-brand-600 hover:bg-brand-50' 
                  : 'text-brand-100 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X size={28} className="text-slate-800" />
          ) : (
             <Menu size={28} className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 absolute w-full shadow-xl rounded-b-3xl">
          <div className="flex flex-col px-6 py-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-bold text-lg hover:text-brand-600 hover:bg-brand-50 py-3 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;