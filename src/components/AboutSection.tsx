
import React, { useEffect, useRef } from 'react';
import { Map, Compass, Shield, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div 
          ref={(el) => (elementsRef.current[0] = el)} 
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-polynesia-deep-blue mb-4">
            Discover Our Approach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At PolynesiaEscape, we curate transformative journeys that combine luxury accommodations with authentic cultural experiences and sustainable tourism practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div 
            ref={(el) => (elementsRef.current[1] = el)} 
            className="opacity-0 [animation-delay:0.2s]"
          >
            <div className="neu-flat p-1 rounded-2xl overflow-hidden">
              <div className="overflow-hidden rounded-xl image-reveal">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Polynesian beach paradise" 
                  className="w-full h-[400px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div 
            ref={(el) => (elementsRef.current[2] = el)} 
            className="opacity-0 [animation-delay:0.4s]"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-polynesia-deep-blue mb-6">
              Your Journey to Paradise Begins Here
            </h3>
            <p className="text-muted-foreground mb-6">
              Founded in 2010, PolynesiaEscape has been crafting extraordinary travel experiences across the South Pacific islands. Our team of expert travel designers are passionate about sharing the beauty, culture, and magic of Polynesia with discerning travelers.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe in creating meaningful connections between our guests, the stunning natural environments, and the welcoming local communities of Polynesia. Our curated experiences go beyond the typical tourist routes, offering you authentic moments that will become cherished memories.
            </p>
            
            <button className="neu-button bg-polynesia-teal text-white hover:bg-polynesia-blue transition-colors">
              Learn About Our Values
            </button>
          </div>
        </div>
        
        <div 
          ref={(el) => (elementsRef.current[3] = el)} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0 [animation-delay:0.6s]"
        >
          <div className="neu-flat p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-polynesia-light-teal w-14 h-14 flex items-center justify-center rounded-full mb-6">
              <Map className="w-7 h-7 text-polynesia-deep-blue" />
            </div>
            <h4 className="text-xl font-semibold text-polynesia-deep-blue mb-3">Expertly Curated</h4>
            <p className="text-muted-foreground">Our journeys are carefully designed to showcase the best of each island.</p>
          </div>
          
          <div className="neu-flat p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-polynesia-light-coral w-14 h-14 flex items-center justify-center rounded-full mb-6">
              <Compass className="w-7 h-7 text-polynesia-deep-blue" />
            </div>
            <h4 className="text-xl font-semibold text-polynesia-deep-blue mb-3">Local Expertise</h4>
            <p className="text-muted-foreground">Our local guides share authentic insights and hidden gems with travelers.</p>
          </div>
          
          <div className="neu-flat p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-polynesia-light-teal w-14 h-14 flex items-center justify-center rounded-full mb-6">
              <Shield className="w-7 h-7 text-polynesia-deep-blue" />
            </div>
            <h4 className="text-xl font-semibold text-polynesia-deep-blue mb-3">Peace of Mind</h4>
            <p className="text-muted-foreground">Travel with confidence knowing every detail is handled with care.</p>
          </div>
          
          <div className="neu-flat p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-polynesia-light-coral w-14 h-14 flex items-center justify-center rounded-full mb-6">
              <Award className="w-7 h-7 text-polynesia-deep-blue" />
            </div>
            <h4 className="text-xl font-semibold text-polynesia-deep-blue mb-3">Luxury Standards</h4>
            <p className="text-muted-foreground">Premium accommodations and services for an unforgettable experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
