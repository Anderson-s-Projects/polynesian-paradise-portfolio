
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <section className="py-16 px-6 md:px-16 bg-polynesia-sand">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto neu-flat p-10 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-polynesia-deep-blue mb-4">
              Get Travel Inspiration
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Subscribe to our newsletter for exclusive offers, travel tips, and updates on new destinations.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-6 py-4 pr-14 neu-pressed bg-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-polynesia-teal transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 neu-small p-3 rounded-full bg-polynesia-teal text-white hover:bg-polynesia-blue transition-colors"
                aria-label="Subscribe"
              >
                {isSubmitted ? <Check size={20} /> : <Send size={20} />}
              </button>
            </div>
            
            {isSubmitted && (
              <p className="mt-4 text-center text-polynesia-deep-blue animate-fade-in">
                Thanks for subscribing! Check your email soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
