import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  count: number;
}

const categories: Category[] = [
  { id: 'all', name: 'All', count: 0 },
  { id: 'new', name: 'New Arrivals', count: 24 },
  { id: 'outerwear', name: 'Outerwear', count: 18 },
  { id: 'tops', name: 'Tops', count: 45 },
  { id: 'bottoms', name: 'Bottoms', count: 32 },
  { id: 'dresses', name: 'Dresses', count: 28 },
  { id: 'knitwear', name: 'Knitwear', count: 21 },
  { id: 'accessories', name: 'Accessories', count: 36 },
];

interface CategoryFiltersProps {
  onCategoryChange?: (categoryId: string) => void;
}

export const CategoryFilters = ({ onCategoryChange }: CategoryFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="border-y border-border bg-background sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => handleCategoryClick(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
              {category.count > 0 && (
                <span className="ml-2 text-xs opacity-70">
                  ({category.count})
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};