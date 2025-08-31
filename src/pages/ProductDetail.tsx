import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Star, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { mockProducts } from '@/data/mockProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const { toast } = useToast();
  
  const product = mockProducts.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-oswald font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button className="btn-outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              BACK TO PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "Please select both size and color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        size: selectedSize,
        color: selectedColor,
        quantity
      }
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail images would go here */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-muted/50 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            
            {/* Category & Rating */}
            <div className="flex items-center gap-4">
              <Badge variant="outline">{product.category}</Badge>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
              </div>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="font-oswald font-bold text-3xl md:text-4xl mb-2">
                {product.name}
              </h1>
              <p className="font-oswald font-bold text-2xl text-primary">
                $3424{product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="font-oswald font-semibold text-lg mb-3">SIZE</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-3 border rounded-lg font-medium transition-colors duration-300 min-w-[50px] ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-oswald font-semibold text-lg mb-3">COLOR</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center gap-2 px-4 py-3 border rounded-lg font-medium transition-colors duration-300 ${
                      selectedColor === color
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full border border-border"
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
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-oswald font-semibold text-lg mb-3">QUANTITY</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 font-semibold min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-hero flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                ADD TO CART - ${(product.price * quantity).toFixed(2)}
              </Button>
              
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Material:</span>
                  <span className="ml-2 font-medium">100% Premium Cotton</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Fit:</span>
                  <span className="ml-2 font-medium">Regular</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Care:</span>
                  <span className="ml-2 font-medium">Machine Wash</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Origin:</span>
                  <span className="ml-2 font-medium">Made in USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;