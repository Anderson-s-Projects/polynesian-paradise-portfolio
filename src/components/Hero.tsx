
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <div 
        ref={heroRef}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" 
          alt="Tropical paradise in Polynesia" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-up [animation-delay:0.3s] opacity-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow mb-6">
            Discover Paradise in <span className="text-polynesia-light-coral">Polynesia</span>
          </h1>
          <p className="text-xl md:text-2xl text-white text-shadow max-w-3xl mx-auto mb-10">
            Experience the untouched beauty of the South Pacific islands with our curated luxury experiences
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="neu-button bg-polynesia-coral text-white hover:bg-polynesia-light-coral transition-colors min-w-[180px]">
              Explore Destinations
            </button>
            <button className="neu-button bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white/30 transition-colors min-w-[180px]">
              View Packages
            </button>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-soft-pulse"
          aria-label="Scroll Down"
        >
          <ChevronDown size={36} strokeWidth={1.5} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
