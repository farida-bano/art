"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

// Define your products array
const products = [
  { id: 1, name: 'Garlic Wallhanging', image: 'garlic.jpg', price: 3000, material: 'Yarn', category: 'wallhanging' },
  { id: 2, name: 'Crochet Heart Keychain', image: 'heart2.jpg', price: 300, material: 'Wool/Yarn', category: 'keyflower' },
  { id: 3, name: 'Crochet Cactus Plants', image: 'cactus.jpg', price: 3000, material: 'Yarn', category: 'wallhanging' },
  { id: 4, name: 'Crochet Chillies', image: 'chllies.jpg', price: 2000, material: 'Cotton Yarn', category: 'food' },
  { id: 5, name: 'Crochet Jewelry Box', image: 'jew.jpg', price: 3000, material: 'Wool', category: 'wallhanging' },
  { id: 6, name: 'Crochet Owl Keychain', image: 'owl.jpg', price: 300, material: 'Wool', category: 'keyflower' },
  { id: 7, name: 'Crochet Tissue Box', image: 'tt.jpg', price: 3000, material: 'Wool', category: 'wallhanging' },
  { id: 8, name: 'Crochet Key & Coins Bag', image: 'gift.jpg', price: 600, material: 'Wool', category: 'keyflower' },
  { id: 9, name: 'Crochet Baby Frock', image: 'frock.jpg', price: 3000, material: 'Wool', category: 'wallhanging' },
  { id: 10, name: 'Crochet Bag', image: 'bags.jpg', price: 4500, material: 'Wool', category: 'wallhanging' },
  { id: 11, name: 'Crochet Chocolate Chips Biscuits', image: 'biscit.jpg', price: 400 / 6, material: 'Wool', category: 'food' },
  { id: 12, name: 'Machine Knitting Baba Set', image: 'babaset.jpg', price: 3000, material: 'Wool', category: 'babaset' },
  { id: 13, name: 'Crochet Fish Keychain Coasters', image: 'fish.jpg', price: 300 / 1, material: 'Wool', category: 'keyflower' },
  { id: 14, name: 'Crochet Hair Clips', image: 'hair clip.jpg', price: 50 / 1, material: 'Wool', category: 'hairaccessories' },
  { id: 15, name: 'Crochet Donuts', image: 'donuts.jpg', price: 300 / 1, material: 'Wool', category: 'food' },
  { id: 16, name: 'Crochet Hair Accessories', image: 'hairac.jpg', price: 250, material: 'Wool', category: 'hairaccessories' },
  { id: 17, name: 'Crochet Bag', image: '3.jpg', price: 500, material: 'Wool', category: 'wallhanging' },
  { id: 18, name: 'Crochet Cup Cake', image: 'cup.jpg', price: 400, material: 'Wool', category: 'food' },
  { id: 19, name: 'Crochet Coins & Gift Bags', image: '4.jpg', price: 300, material: 'Wool', category: 'keyflower' },
  { id: 20, name: 'Crochet Heart Shape Keychains', image: 'heart2.jpg', price: 250, material: 'Wool', category: 'keyflower' },
  { id: 21, name: 'Crochet Lavender', image: 'leven.png', price: 250, material: 'Wool', category: 'Flowers' },
  { id: 22, name: 'Crochet Lily', image: 'ros.png', price: 250, material: 'Wool', category: 'Flowers' },
  { id: 23, name: 'Crochet Lily', image: 'li.png', price: 250, material: 'Wool', category: 'Flowers' },
  { id: 24, name: 'Crochet Roses', image: 'ro.png', price: 250, material: 'Wool', category: 'Flowers' },
];


const Home = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Add to cart functionality
  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  // Add to wishlist functionality
  const addToWishlist = (id: number) => {
    if (!wishlist.includes(id)) {
      setWishlist([...wishlist, id]);
    }
  };

  // Applying discount (10% off)
  const applyDiscount = (price: number) => {
    const discount = 0.1; // Example: 10% discount
    return price - price * discount;
  };

  return (
    <div
    className="min-h-screen flex flex-col bg-teal-100"
    style={{
      backgroundImage: "url('/ggg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
      {/* Header */}
      <Header />
{/* Promotional Banner */}
<div className="w-full h-[100px] sm:h-[100px] md:h-[150px] lg:h-[180px] bg-cover bg-center relative" style={{ backgroundImage: 'url("/eee.png")' }}>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
    <div className="text-center text-white px-4 top-0">
      <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold mb-3">Up to 10% Off on All Products!</h1>
      <a
        href="#shop-now"
        className="bg-red-500 py-2 px-6 text-sm sm:text-base md:text-lg font-semibold text-white rounded-md hover:bg-red-600 active:bg-red-700 transition duration-200 ease-in-out"
      >
        Shop Now
      </a>
    </div>
  </div>
</div>


<div className="w-full h-auto flex justify-center items-center mt-10">
      <div className="w-full px-4">
        {/* Title Section */}
        <div className="flex items-center space-x-5 mb-8">
          <span className="border-l-8 border-red-500 text-red-500 font-bold pl-3">Today's</span>
          <h2 className="text-3xl sm:text-5xl font-bold">Flash Sales</h2>
        </div>

        {/* Product Grid */}
        <div className="w-full h-auto justify-center mt-9">
          {/* Product 1 (Example) */}
          <div className="bg-yellow-400 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
            <div className="w-full h-500 bg-gray-300 flex justify-center items-center overflow-hidden">
              <Image
                src="/aaa.png"
                width={950}
                height={450}
                alt="knitting"
                layout="intrinsic"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col mt-4">
              <span className="font-bold text-lg text-gray-800">Beautiful Owls Keychains</span>
              <span className="text-gray-600 mt-1">$4.00</span>
              <button
                className="mt-3 bg-red-500 text-white py-2 px-6 text-lg rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
                onClick={() => handleAddToCart("Beautiful Owls Keychains", 10)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Product Listing Section */}
      <main className="flex-grow p-4">
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-full h-48 object-cover rounded mb-4 transition-transform transform hover:scale-105 duration-300"
                />
                <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">Price: ₹{applyDiscount(product.price).toFixed(2)}</p>
                <p className="text-gray-600">Material: {product.material}</p>
                <div className="flex justify-between mt-4 space-x-2">
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`bg-gray-300 text-black py-1 px-3 rounded hover:bg-gray-500 transition-colors duration-300 ${
                      cart.includes(product.id) ? 'bg-green-500 text-white' : ''
                    }`}
                  >
                    {cart.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                  <button
                    onClick={() => addToWishlist(product.id)}
                    className={`bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 transition-colors duration-300 ${
                      wishlist.includes(product.id) ? 'bg-purple-700' : ''
                    }`}
                  >
                    {wishlist.includes(product.id) ? 'Added to Wishlist' : 'Add to Wishlist'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
