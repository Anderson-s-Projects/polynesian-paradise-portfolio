
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-polynesia-deep-blue">
            Polynesia<span className="text-polynesia-coral">Escape</span>
          </h1>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
          >
            About
          </a>
          <div className="relative group">
            <button className="flex items-center text-foreground hover:text-polynesia-coral transition-colors font-medium">
              Destinations <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-lg overflow-hidden shadow-lg glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
              <div className="py-2 px-4">
                <a href="#bora-bora" className="block py-2 text-foreground hover:text-polynesia-coral transition-colors">Bora Bora</a>
                <a href="#tahiti" className="block py-2 text-foreground hover:text-polynesia-coral transition-colors">Tahiti</a>
                <a href="#moorea" className="block py-2 text-foreground hover:text-polynesia-coral transition-colors">Moorea</a>
                <a href="#fiji" className="block py-2 text-foreground hover:text-polynesia-coral transition-colors">Fiji</a>
              </div>
            </div>
          </div>
          <a 
            href="#testimonials" 
            className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
          >
            Contact
          </a>
        </nav>
        
        <button className="hidden md:flex neu-button bg-polynesia-blue text-white hover:bg-polynesia-deep-blue transition-colors">
          Book Now
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          aria-label="Menu Toggle"
          className="md:hidden neu-small p-2 rounded-full"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="flex items-center">
              <h1 className="text-2xl font-semibold text-polynesia-deep-blue">
                Polynesia<span className="text-polynesia-coral">Escape</span>
              </h1>
            </a>
            <button 
              aria-label="Close Menu"
              className="neu-small p-2 rounded-full"
              onClick={toggleMenu}
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-lg">
            <a 
              href="#home" 
              className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#destinations" 
              className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
              onClick={toggleMenu}
            >
              Destinations
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-polynesia-coral transition-colors font-medium"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
          
          <div className="mt-auto">
            <button className="w-full neu-button bg-polynesia-blue text-white hover:bg-polynesia-deep-blue transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
