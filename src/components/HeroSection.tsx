import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop"
          alt="Fashion hero"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
        <div className="max-w-2xl animate-fade-in">
          <p className="editorial-subheading text-white/80 mb-4">
            Spring/Summer 2024
          </p>
          <h1 className="editorial-heading text-6xl md:text-7xl lg:text-8xl text-white mb-6">
            New Drops
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-light max-w-xl">
            Discover the season's most coveted pieces. Curated collections that define modern elegance.
          </p>
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="bg-white text-black hover:bg-white/90 text-base px-8 py-6 group"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};