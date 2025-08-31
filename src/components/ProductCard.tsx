import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group card-product relative overflow-hidden">
      
      {/* Product Image */}
      <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link to={`/product/${product.id}`}>
            <Button className="btn-hero">
              VIEW DETAILS
            </Button>
          </Link>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold">
            FEATURED
          </Badge>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/20 backdrop-blur-sm hover:bg-background/40 border-0"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full border border-border"
                style={{ 
                  backgroundColor: color.toLowerCase() === 'black' ? '#000' : 
                                   color.toLowerCase() === 'white' ? '#fff' :
                                   color.toLowerCase() === 'grey' ? '#888' :
                                   color.toLowerCase() === 'neon green' ? '#00ff00' :
                                   color.toLowerCase() === 'electric blue' ? '#00aaff' :
                                   color.toLowerCase() === 'neon pink' ? '#ff0088' :
                                   color.toLowerCase() === 'blood orange' ? '#ff4500' : '#ccc'
                }}
              />
            ))}
          </div>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-oswald font-semibold text-lg leading-tight hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-oswald font-bold text-xl">
            ${product.price}
          </span>

          <Button variant="ghost" size="sm" className="hover-glow">
            <ShoppingCart className="w-4 h-4 mr-2" />
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;