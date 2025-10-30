import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroSection } from '@/components/HeroSection';
import { TrendCarousel } from '@/components/TrendCarousel';
import { ShoppableLookbook } from '@/components/ShoppableLookbook';
import { CategoryFilters } from '@/components/CategoryFilters';
import { SizeGuideModal } from '@/components/SizeGuideModal';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Category Filters */}
      <CategoryFilters />

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="editorial-subheading text-muted-foreground mb-3">
                Curated Collections
              </p>
              <h2 className="editorial-heading text-4xl md:text-5xl text-foreground">
                Shop by Collection
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trend Carousel */}
      <TrendCarousel />

      {/* Products Section */}
      <section id="products-section" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <div>
              <p className="editorial-subheading text-muted-foreground mb-2">
                {selectedCollectionId ? 'Collection' : 'All Products'}
              </p>
              <h2 className="editorial-heading text-3xl md:text-4xl text-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Collection'
                  : 'New Arrivals'
                }
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              <SizeGuideModal />
              {selectedCollectionId && (
                <Button 
                  variant="outline" 
                  onClick={handleShowAllProducts}
                >
                  View All Products
                </Button>
              )}
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-[3/4] bg-muted animate-pulse" />
                  <div className="h-4 bg-muted animate-pulse w-3/4" />
                  <div className="h-4 bg-muted animate-pulse w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No products available in this collection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Shoppable Lookbook */}
      <ShoppableLookbook />

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};