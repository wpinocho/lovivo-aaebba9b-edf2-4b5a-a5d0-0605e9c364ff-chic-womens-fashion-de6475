import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-0 shadow-none overflow-hidden group hover-lift cursor-pointer">
      <CardContent className="p-0">
        <div 
          className="aspect-[4/3] bg-muted overflow-hidden image-overlay"
          onClick={() => onViewProducts(collection.id)}
        >
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              No image
            </div>
          )}
          
          {collection.featured && (
            <div className="absolute top-4 right-4">
              <span className="editorial-subheading bg-accent text-foreground px-3 py-1">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-2xl mb-2 group-hover:text-muted-foreground transition-colors">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-light">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="ghost" 
            className="p-0 h-auto font-normal group/btn"
            onClick={() => onViewProducts(collection.id)}
          >
            <span className="editorial-subheading">Explore Collection</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}