import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, size: string, color: string, newQuantity: number) => {
    const itemId = `${id}-${size}-${color}`;
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: newQuantity } });
    }
  };

  const removeItem = (id: string, size: string, color: string) => {
    const itemId = `${id}-${size}-${color}`;
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-8">
              <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
              <h1 className="font-oswald font-bold text-3xl mb-4">
                Your cart is empty
              </h1>
              <p className="text-muted-foreground">
                Looks like you haven't added any items to your cart yet.
              </p>
            </div>
            
            <Link to="/products">
              <Button className="btn-hero">
                SHOP NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-oswald font-bold text-4xl md:text-5xl mb-2">
            SHOPPING <span className="text-glow">CART</span>
          </h1>
          <p className="text-muted-foreground">
            Review your items before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="card-product">
                <div className="flex flex-col md:flex-row gap-6">
                  
                  {/* Product Image */}
                  <div className="w-full md:w-32 aspect-square bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-oswald font-semibold text-xl hover:text-primary transition-colors duration-300">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm mt-1">
                          Size: {item.size} • Color: {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size, item.color)}
                        className="text-muted-foreground hover:text-destructive transition-colors duration-300 p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                          className="p-2 hover:bg-muted transition-colors duration-300"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                          className="p-2 hover:bg-muted transition-colors duration-300"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-oswald font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          ${item.price} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card-product sticky top-24">
              <h2 className="font-oswald font-semibold text-xl mb-6">
                ORDER SUMMARY
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-primary font-semibold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-semibold">${(state.total * 0.08).toFixed(2)}</span>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-oswald font-semibold">TOTAL</span>
                    <span className="font-oswald font-bold text-primary">
                      ${(state.total + state.total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/checkout" className="block">
                  <Button className="btn-hero w-full">
                    PROCEED TO CHECKOUT
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    CONTINUE SHOPPING
                  </Button>
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  🔒 Secure checkout guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;