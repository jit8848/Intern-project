// CartPage.jsx
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartPage = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeItem, 
    getSubtotal 
  } = useCart();
  
  const shippingFee = 100;
  const total = getSubtotal() + shippingFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <Link to="/products" className="bg-blue-500 text-white px-6 py-2 rounded-md">
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">Spices/Food</p>
                      <p className="text-blue-600 font-bold">Rs {item.price}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 border rounded-md"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 border rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit sticky top-8">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span>Subtotal ({cartItems.length} items)</span>
              <span className="font-medium">Rs {getSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium">Rs {shippingFee}</span>
            </div>
            <div className="flex justify-between border-t pt-4">
              <span className="font-bold">Total</span>
              <span className="font-bold text-blue-600">Rs {total}</span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-md"
          >
            Proceed to Pay
          </Link>
        </div>
      </div>
    </div>
  );
};