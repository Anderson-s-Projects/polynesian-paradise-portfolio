
import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-polynesia-deep-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Polynesia<span className="text-polynesia-coral">Escape</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Crafting unforgettable journeys to the most beautiful islands of the South Pacific since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-polynesia-coral transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-polynesia-coral transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-polynesia-coral transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Bora Bora</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Tahiti</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Moorea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Fiji</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">The Cook Islands</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Travel Packages</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Honeymoon Specials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Travel Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-polynesia-coral transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-polynesia-coral mt-0.5" />
                <span className="text-gray-300">789 Pacific Avenue, Suite 300<br />San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-polynesia-coral" />
                <a href="tel:+14155551234" className="text-gray-300 hover:text-polynesia-coral transition-colors">+1 (415) 555-1234</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-polynesia-coral" />
                <a href="mailto:info@polynesiaescape.com" className="text-gray-300 hover:text-polynesia-coral transition-colors">info@polynesiaescape.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {currentYear} PolynesiaEscape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
