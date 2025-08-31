import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img  
          alt="Streetwear collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm uppercase tracking-wide">
              Premium Streetwear Collection
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero mb-8 animate-fade-up [animation-delay:200ms]">
            <span className="block">DEFINE</span>
            <span className="block text-glow">YOUR</span>
            <span className="block">STREET</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up [animation-delay:400ms]">
            Elevate your style with our exclusive collection of premium streetwear tees. 
            Made for the bold, designed for the streets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:600ms]">
            <Link to="/products">
              <Button className="btn-hero group">
                SHOP COLLECTION
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            
            <Link to="/collections">
              <Button className="btn-outline">
                VIEW LOOKBOOK
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 max-w-lg mx-auto animate-fade-up [animation-delay:800ms]">
            <div>
              <div className="text-2xl md:text-3xl font-oswald font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Designs</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-oswald font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Customers</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-oswald font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-secondary rounded-full animate-glow-pulse [animation-delay:1s]" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-glow-pulse [animation-delay:2s]" />
    </section>
  );
};

export default Hero;