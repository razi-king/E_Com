import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../image/banner-3.png';
import imageOne from '../image/1.jpg';
import imageTwo from '../image/2.jpg';
import imageThree from '../image/3.jpg';
import imageFour from '../image/4.jpg';
import imageFive from '../image/5.jpg';
import imageSix from '../image/6.jpg';
import imageSeven from '../image/7.jpg';
import imageEight from '../image/8.jpg';

const products = [
  { id: 1, image: imageOne, tag: 'Sale', title: 'Half Running Set', price: '$99.00' },
  { id: 2, image: imageTwo, tag: 'New', title: 'Formal Men Lowers', price: '$79.00' },
  { id: 3, image: imageThree, tag: '', title: 'Half Running Suit', price: '$89.00' },
  { id: 4, image: imageFour, tag: 'Hot', title: 'Half Fancy Lady Dress', price: '$109.00' },
  { id: 5, image: imageFive, tag: '', title: 'Flix Flox Jeans', price: '$59.00' },
  { id: 6, image: imageSix, tag: 'Hot', title: 'Fancy Salwar Suit', price: '$129.00' },
  { id: 7, image: imageSeven, tag: 'Sale', title: 'Printed Straight Kurta', price: '$69.00' },
  { id: 8, image: imageEight, tag: 'Sale', title: 'Collot Full Dress', price: '$89.00' }
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div 
        className="px-[10%] py-[5%] w-full h-screen bg-center bg-cover flex items-center text-[#2c2c2c]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-xl space-y-4">
          <h5 className="text-xl text-[#ee1c47] font-medium">Winter Collection</h5>
          <h1 className="text-6xl text-black font-semibold leading-[1.1]">
            New Winter <br /> Collection 2025
          </h1>
          <p className="text-xl italic text-[#333c56] mb-5">There's Nothing Like Trend</p>
          <Link 
            to="#" 
            className="inline-block text-base px-6 py-3 bg-white text-[#111111] font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 border-2 border-[#111]"
          >
            Shop Now <i className="align-middle bx bx-right-arrow-alt text-xl"></i>
          </Link>
        </div>
        
        <Link 
          to="#trending" 
          className="absolute bottom-20 right-[10%]"
        >
          <i className='text-3xl text-[#2c2c2c] border-2 border-[#2c2c2c] hover:text-white hover:bg-[#2c2c2c] transition-all duration-300 p-3 rounded-full bx bx-down-arrow-alt'></i>
        </Link>
      </div>

      {/* Trending Products */}
      <div id="trending" className="px-[10%] py-20">
  <div className="mb-12 text-center">
    <h2 className="text-4xl font-bold">
      Our Trending <span className="text-[#ee1c47]">Products</span>
    </h2>
  </div>
  
  {/* Product List */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div >
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Product Tag */}
          {product.tag && (
            <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${
              product.tag === 'Sale' ? 'bg-red-500 text-white' :
              product.tag === 'New' ? 'bg-blue-500 text-white' :
              'bg-yellow-500 text-black'
            }`}>
              {product.tag}
            </span>
          )}
          {/* Wishlist Button */}
          <button className="absolute top-2 left-2 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <i className="bx bx-heart text-xl hover:text-[#ee1c47]"></i>
          </button>
        </div>
        
        {/* Product Info */}
        <div className="p-4 relative">
          <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
          
          {/* Rating Stars */}
          <div className="flex mb-2 text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <i key={i} className="bx bxs-star"></i>
            ))}
            <i className="bx bxs-star-half"></i>
          </div>
          
          {/* Price */}
          <p className="text-[#ee1c47] font-bold mb-4">{product.price}</p>
          
          {/* Add to Cart Button */}
          <button className="w-full bg-black text-white py-2 rounded hover:bg-[#ee1c47] transition-colors duration-300">
            Add To Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}