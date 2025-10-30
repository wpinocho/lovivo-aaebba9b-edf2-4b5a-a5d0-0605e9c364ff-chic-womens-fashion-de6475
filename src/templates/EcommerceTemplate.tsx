import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 border-b ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-serif text-2xl font-light tracking-tight">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link 
                to="/" 
                className="editorial-subheading text-foreground/70 hover:text-foreground transition-colors"
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className="editorial-subheading text-foreground/70 hover:text-foreground transition-colors"
              >
                Editorial
              </Link>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative"
                aria-label="View cart"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {pageTitle && (
          <div className="mt-8">
            <h1 className="editorial-heading text-4xl text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-foreground text-background py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-light mb-4">
              <BrandLogoLeft />
            </div>
            <p className="text-background/70 font-light max-w-md">
              Curating timeless pieces for the modern woman. Discover elegance in every detail.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="editorial-subheading text-background mb-4">Shop</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                New Arrivals
              </Link>
              <Link 
                to="/" 
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Collections
              </Link>
              <Link 
                to="/blog" 
                className="block text-background/70 hover:text-background transition-colors text-sm"
              >
                Editorial
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="editorial-subheading text-background mb-4">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/70 text-sm">
          <p>&copy; 2024 Your Fashion Store. All rights reserved.</p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}