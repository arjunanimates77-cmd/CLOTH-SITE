import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-oswald font-bold text-2xl text-glow">
                URBANCURSE
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Defining street culture through premium streetwear. Made for the bold, designed for the streets.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="font-oswald font-semibold text-lg">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=Graphics" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Graphics Tees
                </Link>
              </li>
              <li>
                <Link to="/products?category=Limited" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Limited Edition
                </Link>
              </li>
              <li>
                <Link to="/products?category=Basics" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Basics
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-oswald font-semibold text-lg">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-oswald font-semibold text-lg">CONTACT</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">123 Street Culture Blvd, Urban City, UC 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">hello@nitro-streetwear.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-oswald font-semibold text-xl mb-2">
              STAY IN THE <span className="text-glow">LOOP</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Get the latest drops and exclusive offers
            </p>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-300">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; {currentYear} NITRO Streetwear. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="font-semibold text-primary">Street Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;