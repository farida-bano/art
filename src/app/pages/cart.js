import React from 'react';
import { useState } from 'react';

const Cart = ({ cartItems }) => {
  const removeFromCart = (id) => {
    // Logic to remove item from cart
    // Update the cart state here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
