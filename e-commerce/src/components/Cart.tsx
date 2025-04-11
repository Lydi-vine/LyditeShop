import React from 'react';
import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 mr-15 text-center">Shopping Bag</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">There is nothing in the cart. <Link to="/Store" className='cursor-pointer text-orange-500 font-bold underline'>Get Yours Now!!</Link></p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-6 items-center border-b pb-4">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-orange-600 font-bold">${product.price}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="bg-gray-300 text-sm px-2 py-1 rounded cursor-pointer">−</button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="bg-gray-300 text-sm px-2 py-1 rounded cursor-pointer">+</button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 font-semibold cursor-pointer">
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h4 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;