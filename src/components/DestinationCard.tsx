
import React, { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  days: number;
  index: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  image, 
  name, 
  description, 
  price, 
  days,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <div 
      className={`neu-flat rounded-2xl overflow-hidden transition-all duration-500 opacity-0 animate-fade-up`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`}></div>
        <img 
          ref={imageRef}
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'} lazy-image ${imageLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={handleImageLoad}
        />
        <div className="absolute top-4 right-4 neu-small py-1 px-4 bg-white/80 backdrop-blur-sm text-polynesia-deep-blue text-sm font-medium">
          {days} Days
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-polynesia-deep-blue mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-xl font-semibold text-polynesia-coral">{price}</p>
          </div>
          
          <button 
            className={`neu-small p-3 rounded-full transition-all duration-300 ${
              isHovered 
                ? 'bg-polynesia-teal text-white' 
                : 'bg-polynesia-off-white text-polynesia-deep-blue'
            }`}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
