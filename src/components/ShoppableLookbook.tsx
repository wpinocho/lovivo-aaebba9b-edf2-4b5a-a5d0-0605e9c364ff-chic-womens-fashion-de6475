import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface LookbookItem {
  id: number;
  title: string;
  category: string;
  image: string;
  products: string[];
}

const lookbookItems: LookbookItem[] = [
  {
    id: 1,
    title: 'The Power Edit',
    category: 'Workwear',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop',
    products: ['Tailored Blazer', 'Wide Leg Trousers', 'Silk Camisole']
  },
  {
    id: 2,
    title: 'Evening Elegance',
    category: 'After Dark',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=1000&fit=crop',
    products: ['Silk Slip Dress', 'Leather Trench', 'Statement Jewelry']
  },
  {
    id: 3,
    title: 'Weekend Luxe',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=800&h=1000&fit=crop',
    products: ['Oversized Shirt', 'Linen Pants', 'Leather Jacket']
  },
  {
    id: 4,
    title: 'Layered Sophistication',
    category: 'Transitional',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=1000&fit=crop',
    products: ['Cashmere Turtleneck', 'Wool Coat', 'Pleated Skirt']
  }
];

export const ShoppableLookbook = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="editorial-subheading text-muted-foreground mb-3">
            Style Inspiration
          </p>
          <h2 className="editorial-heading text-4xl md:text-5xl text-foreground mb-4">
            Shoppable Lookbook
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Curated looks for every occasion. Click to shop the complete edit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lookbookItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer hover-lift"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden image-overlay">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Shop This Look
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="editorial-subheading bg-white/90 backdrop-blur-sm px-3 py-1 text-black">
                    {item.category}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2 group-hover:text-muted-foreground transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {item.products.map((product, index) => (
                    <span key={index}>
                      {product}
                      {index < item.products.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};