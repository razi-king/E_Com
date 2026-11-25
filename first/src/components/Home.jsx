import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../image/banner-3.png';
import teamImage from '../image/bl-1.png';
import teamImage1 from '../image/bl-2.png';
import teamImage2 from '../image/bl-3.png';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const contact = [];
const newsProduct = [
  {id: 1, image: teamImage, date: '25-04-2025', title: "New Collection Launch", description: "Discover our latest winter collection with exclusive designs"},
  {id: 2, image: teamImage1, date: '25-04-2025', title: "Seasonal Discounts", description: "Get up to 50% off on selected items this season"},
  {id: 3, image: teamImage2, date: '25-04-2025', title: "Store Opening", description: "Visit our new flagship store in downtown"}
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div 
        className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full min-h-screen flex items-center text-[#2c2c2c] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-xl space-y-4 px-4 sm:px-6 lg:px-0">
            <h5 className="text-lg sm:text-xl text-[#ee1c47] font-medium">Winter Collection</h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black font-semibold leading-tight sm:leading-[1.1]">
              New Winter <br /> Collection 2026
            </h1>
            <p className="text-lg sm:text-xl italic text-[#333c56] mb-5">There's Nothing Like Trend</p>
            <Link 
              to="/shop" 
              className="inline-block text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-3 bg-white text-[#111111] font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 border-2 border-[#111]"
            >
              Shop Now <i className="align-middle bx bx-right-arrow-alt text-xl"></i>
            </Link>
          </div>
          
          <Link 
            to="#trending" 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:bottom-20 md:right-8 md:left-auto"
          >
            <i className='text-2xl sm:text-3xl text-[#2c2c2c] border-2 border-[#2c2c2c] hover:text-white hover:bg-[#2c2c2c] transition-all duration-300 p-2 sm:p-3 rounded-full bx bx-down-arrow-alt'></i>
          </Link>
        </div>
      </div>

      {/* Trending Products */}
      <div id="trending" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Trending <span className="text-[#ee1c47]">Products</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="mt-10 text-center">
            <Link to="/shop" className="inline-block rounded-full border-2 border-[#111] px-6 py-3 font-semibold hover:bg-[#111] hover:text-white">View all products</Link>
          </div>
        </div>
      </div>

      {/* Client Review Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs sm:text-sm font-medium text-indigo-600 mb-2">Client Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">What Our Clients Say</h2>
            
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative">
                  <img 
                    src={teamImage} 
                    alt="Mark Jevenue" 
                    className="mx-auto rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-indigo-500 p-1.5 sm:p-2 rounded-full">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-yellow-400 mb-2 sm:mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                
                <p className="text-sm sm:text-base md:text-lg leading-relaxed italic text-gray-700 mb-4 sm:mb-6">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum saepe possimus tenetur maiores magni magnam aliquam porro necessitatibus fuga libero debitis, nobis quis hic quibusdam, quas quos praesentium laborum."
                </p>
                
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Mark Jevenue</h3>
                <p className="text-xs sm:text-sm text-gray-600">CEO of Addle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Update News Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#f9f9f9] to-[#f0f4ff]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3 sm:mb-4">Latest Updates</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">News & Products</h2>
            <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {newsProduct.map((n) => (
              <div 
                key={n.id} 
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                {/* Image with hover effect */}
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-60">
                  <img 
                    src={n.image} 
                    alt="News" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
                  />
                  {/* Date badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full shadow-sm">
                    <span className="text-xs font-medium text-gray-800">{n.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                    {n.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                    {n.description}
                  </p>
                  
                  {/* Read more with animated arrow */}
                  <div className="flex items-center">
                    <Link 
                      to="#" 
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center text-sm sm:text-base"
                    >
                      Continue Reading
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
}