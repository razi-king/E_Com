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
import teamImage from '../image/bl-1.png';
import teamImage1 from '../image/bl-2.png';
import teamImage2 from '../image/bl-3.png';
import logo from '../image/logo.png';

const contact = [];
const newsProduct = [
  {id: 1, image: teamImage, date: '25-04-2025', title: "New Collection Launch", description: "Discover our latest winter collection with exclusive designs"},
  {id: 2, image: teamImage1, date: '25-04-2025', title: "Seasonal Discounts", description: "Get up to 50% off on selected items this season"},
  {id: 3, image: teamImage2, date: '25-04-2025', title: "Store Opening", description: "Visit our new flagship store in downtown"}
];
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
        className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full min-h-screen flex items-center text-[#2c2c2c] bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-xl space-y-4 px-4 sm:px-6 lg:px-0">
            <h5 className="text-lg sm:text-xl text-[#ee1c47] font-medium">Winter Collection</h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-black font-semibold leading-tight sm:leading-[1.1]">
              New Winter <br /> Collection 2025
            </h1>
            <p className="text-lg sm:text-xl italic text-[#333c56] mb-5">There's Nothing Like Trend</p>
            <Link 
              to="#" 
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
          
          {/* Product List */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg hover:scale-[.98] overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                {/* Product Image */}
                <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden'>
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
                  <button className="absolute top-2 left-2 p-1.5 sm:p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <i className="bx bx-heart text-lg sm:text-xl hover:text-[#ee1c47]"></i>
                  </button>
                </div>
                
                {/* Product Info */}
                <div className="p-3 sm:p-4 relative">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 line-clamp-2">{product.title}</h3>
                  
                  {/* Rating Stars */}
                  <div className="flex mb-1 sm:mb-2 text-yellow-400 text-sm sm:text-base">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="bx bxs-star"></i>
                    ))}
                    <i className="bx bxs-star-half"></i>
                    <span className="text-gray-500 text-xs ml-1">(24)</span>
                  </div>
                  
                  {/* Price */}
                  <p className="text-[#ee1c47] font-bold mb-2 sm:mb-3 text-sm sm:text-base">{product.price}</p>
                  
                  {/* Add to Cart Button */}
                  <button className="w-full bg-black text-white py-1.5 sm:py-2 rounded hover:bg-[#ee1c47] transition-colors duration-300 text-sm sm:text-base">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
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
      <section className="bg-[#111] text-gray-300 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
            {/* Brand Info */}
            <div className="space-y-3 sm:space-y-4">
              <img src={logo} alt="Logo" className="w-28 sm:w-32 md:w-36 h-auto mb-3 sm:mb-4 invert" />
              <address className="not-italic space-y-2">
                <p className="flex items-start text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  3245 Grant Street<br/>Longview, TX United Kingdom 765378
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  01601348732
                </p>
                <p className="flex items-center text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  xyz@gmail.com
                </p>
              </address>
              <div className="flex space-x-3 sm:space-x-4 pt-1 sm:pt-2">
                {[
                  {icon: 'bxl-facebook', color: 'hover:text-[#1877f2]'},
                  {icon: 'bxl-twitter', color: 'hover:text-[#1da1f2]'},
                  {icon: 'bxl-instagram', color: 'hover:text-[#e1306c]'},
                  {icon: 'bxl-youtube', color: 'hover:text-[#ff0000]'},
                  {icon: 'bxl-linkedin', color: 'hover:text-[#0a66c2]'}
                ].map((social, index) => (
                  <Link key={index} className="text-xl sm:text-2xl text-gray-400 transition-colors duration-300">
                    <i className={`bx ${social.icon} ${social.color}`}></i>
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 sm:after:w-10 after:h-0.5 after:bg-gray-500">
                Support
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {['Contact Us', 'About Page', 'Size Guide', 'Shopping & Returns', 'Privacy'].map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-start">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 sm:mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 sm:after:w-10 after:h-0.5 after:bg-gray-500">
                Shop
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {["Men's Shopping", "Women's Shopping", "Kid's Shopping", "Furniture", "Discount"].map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-start">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 sm:mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 sm:after:w-10 after:h-0.5 after:bg-gray-500">
                Company
              </h4>
              <ul className="space-y-1 sm:space-y-2">
                {['About', 'Blog', 'Affiliate', 'Login'].map((item, index) => (
                  <li key={index}>
                    <Link to="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-start">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 mt-0.5 sm:mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-8 sm:after:w-10 after:h-0.5 after:bg-gray-500">
                Subscribe
              </h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Receive updates, hot deals, and discounts sent straight to your inbox daily.
              </p>
              <form className="mt-2 sm:mt-3 space-y-2 sm:space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 sm:focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                  />
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 absolute right-2 sm:right-3 top-2.5 sm:top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 text-xs sm:text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}