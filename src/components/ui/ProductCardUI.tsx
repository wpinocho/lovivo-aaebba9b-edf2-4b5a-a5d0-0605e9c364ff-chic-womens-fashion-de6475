import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-white border-0 shadow-none group hover-lift">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-[3/4] bg-muted overflow-hidden mb-4 image-overlay">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    No image
                  </div>
                )}

                {/* Badges */}
                {(logic.discountPercentage || logic.product.featured || !logic.inStock) && (
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {logic.discountPercentage && (
                      <span className="editorial-subheading bg-black text-white px-3 py-1">
                        -{logic.discountPercentage}% Off
                      </span>
                    )}
                    {logic.product.featured && (
                      <span className="editorial-subheading bg-accent text-foreground px-3 py-1">
                        Featured
                      </span>
                    )}
                    {!logic.inStock && (
                      <span className="editorial-subheading bg-muted text-muted-foreground px-3 py-1">
                        Sold Out
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>

            <div className="space-y-3">
              <Link to={`/products/${logic.product.slug}`}>
                <h3 className="font-serif text-lg text-foreground group-hover:text-muted-foreground transition-colors line-clamp-2">
                  {logic.product.title}
                </h3>
              </Link>

              {logic.hasVariants && logic.options && (
                <div className="space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="editorial-subheading text-muted-foreground mb-2">
                        {opt.name}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                          const isSelected = logic.selected[opt.name] === val
                          const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                          if (swatch) {
                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                title={`${opt.name}: ${val}`}
                                className={`h-8 w-8 rounded-full border-2 transition-all ${
                                  isSelected ? 'border-foreground scale-110' : 'border-border hover:border-foreground/50'
                                }`}
                                style={{ backgroundColor: swatch }}
                                aria-label={`${opt.name}: ${val}`}
                              />
                            )
                          }

                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              className={`editorial-subheading border px-3 py-1 transition-all ${
                                isSelected 
                                  ? 'border-foreground bg-foreground text-background' 
                                  : 'border-border hover:border-foreground'
                              }`}
                              aria-pressed={isSelected}
                              aria-label={`${opt.name}: ${val}`}
                            >
                              {val}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-end justify-between pt-2">
                <div className="flex flex-col">
                  <span className="font-serif text-xl text-foreground">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-muted-foreground text-sm line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="border-foreground hover:bg-foreground hover:text-background disabled:opacity-50"
                >
                  {logic.inStock ? 'Add to Cart' : 'Sold Out'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}