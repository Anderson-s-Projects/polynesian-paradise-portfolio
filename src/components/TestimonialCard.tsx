
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  location, 
  rating,
  index 
}) => {
  return (
    <div 
      className="neu-flat p-4 md:p-8 rounded-xl opacity-0 animate-fade-up w-full"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-polynesia-coral fill-polynesia-coral" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-foreground mb-4 md:mb-6 italic text-sm md:text-base">"{quote}"</p>
      
      <div>
        <p className="font-semibold text-polynesia-deep-blue text-sm md:text-base">{author}</p>
        <p className="text-xs md:text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
