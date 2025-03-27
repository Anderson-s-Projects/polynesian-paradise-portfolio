
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const destinationsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (destinationsRef.current) {
      observer.observe(destinationsRef.current);
    }
    
    return () => {
      if (destinationsRef.current) {
        observer.unobserve(destinationsRef.current);
      }
    };
  }, []);
  
  const destinations = [
    {
      id: 1,
      name: "Bora Bora Overwater Retreat",
      description: "Experience the iconic overwater bungalows with direct lagoon access and Mount Otemanu views.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      price: "$4,299",
      days: 7
    },
    {
      id: 2,
      name: "Tahiti Cultural Immersion",
      description: "Discover black pearl farms, vanilla plantations, and explore the vibrant markets of Papeete.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3506&q=80",
      price: "$3,799",
      days: 8
    },
    {
      id: 3,
      name: "Moorea Adventure Package",
      description: "Snorkel with rays and sharks, hike to waterfalls, and enjoy sunset sailing adventures.",
      image: "https://images.unsplash.com/photo-1511716282089-ffebbfb2c2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80",
      price: "$3,499",
      days: 6
    },
    {
      id: 4,
      name: "Fiji Island Hopping",
      description: "Explore multiple islands with diverse landscapes from lush rainforests to pristine beaches.",
      image: "https://images.unsplash.com/photo-1549752448-38f4d3a0ea74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80",
      price: "$4,099",
      days: 9
    },
  ];
  
  const testimonials = [
    {
      id: 1,
      quote: "Our honeymoon in Bora Bora exceeded all expectations. The overwater bungalow was breathtaking, and the personalized touches made our stay unforgettable.",
      author: "Emma & James",
      location: "Honeymooners from Australia",
      rating: 5
    },
    {
      id: 2,
      quote: "The cultural tours arranged by PolynesiaEscape gave us insight into local traditions that we wouldn't have experienced otherwise. Truly authentic.",
      author: "Michael Thompson",
      location: "Adventure Traveler from Canada",
      rating: 5
    },
    {
      id: 3,
      quote: "From the moment we arrived, every detail was perfectly coordinated. The island hopping experience was seamless, and each resort was more beautiful than the last.",
      author: "Sarah Chen",
      location: "Family Vacation from Singapore",
      rating: 4
    },
  ];
  
  const scrollLeft = () => {
    if (destinationsRef.current) {
      destinationsRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (destinationsRef.current) {
      destinationsRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };
  
  if (!isPageLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-polynesia-off-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-polynesia-deep-blue animate-soft-pulse">
            Polynesia<span className="text-polynesia-coral">Escape</span>
          </h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <AboutSection />
      
      <section id="destinations" className="section-padding overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-polynesia-deep-blue mb-4">
                Featured Destinations
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our handpicked selection of the most breathtaking island getaways in the South Pacific.
              </p>
            </div>
            
            <div className="hidden md:flex space-x-3">
              <button 
                onClick={scrollLeft}
                className="neu-small p-3 rounded-full hover:bg-polynesia-sand transition-colors"
                aria-label="Previous destinations"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={scrollRight}
                className="neu-small p-3 rounded-full hover:bg-polynesia-sand transition-colors"
                aria-label="Next destinations"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div 
            ref={destinationsRef}
            className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {destinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className="min-w-[300px] md:min-w-[350px] snap-start"
              >
                <DestinationCard 
                  image={destination.image}
                  name={destination.name}
                  description={destination.description}
                  price={destination.price}
                  days={destination.days}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="testimonials" className="py-24 px-6 bg-polynesia-sand overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-polynesia-deep-blue mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read about the experiences of our guests who have explored the beauty of Polynesia with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default Index;
