import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Trend {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const trends: Trend[] = [
  {
    id: 1,
    title: 'Power Suiting',
    subtitle: 'The New Authority',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&h=800&fit=crop',
    description: 'Tailored blazers and structured silhouettes redefine professional elegance'
  },
  {
    id: 2,
    title: 'Soft Minimalism',
    subtitle: 'Effortless Luxury',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&h=800&fit=crop',
    description: 'Clean lines and neutral tones create timeless sophistication'
  },
  {
    id: 3,
    title: 'Leather Love',
    subtitle: 'Edge Meets Elegance',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&h=800&fit=crop',
    description: 'Butter-soft leather pieces add instant cool to any wardrobe'
  },
  {
    id: 4,
    title: 'Romantic Draping',
    subtitle: 'Feminine Flow',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=1200&h=800&fit=crop',
    description: 'Flowing silks and pleated fabrics bring movement to modern dressing'
  }
];

export const TrendCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trends.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + trends.length) % trends.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % trends.length);
  };

  const currentTrend = trends[currentIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="editorial-subheading text-muted-foreground mb-3">
            What's Trending
          </p>
          <h2 className="editorial-heading text-4xl md:text-5xl text-foreground">
            This Season's Edit
          </h2>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <div className="absolute inset-0 grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-full image-overlay">
                <img
                  src={currentTrend.image}
                  alt={currentTrend.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="px-8 md:px-12 animate-fade-in">
                <p className="editorial-subheading text-muted-foreground mb-4">
                  {currentTrend.subtitle}
                </p>
                <h3 className="editorial-heading text-4xl md:text-5xl mb-6">
                  {currentTrend.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 font-light">
                  {currentTrend.description}
                </p>
                <Button variant="outline" size="lg" className="group">
                  Explore Trend
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {trends.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-foreground'
                      : 'w-2 bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);