import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../image/banner-3.png';
import imageOne from '../image/1.jpg';


export default function Home() {
  return (
    <>
    <div className="px-[10%] py-[5%] w-full h-screen bg-center bg-cover grid grid-cols-1 items-center text-[#2c2c2c] " style={{ backgroundImage: `url(${banner})` }}>
        <div className="max-w-xl space-y-4 text-[#2c2c2c]">
    <h5 className="text-xl text-[#ee1c47] font-medium">Winter Collection</h5>
    <h1 className="text-6xl text-black font-semibold ml-1.5 mr-2.5 leading-[1.1]">
      New Winter <br /> Collection 2025
    </h1>
    <p className="text-xl italic text-[#333c56] mb-5 ">There's Nothing Like Trend</p>
    <Link to="#" className="inline-block text-base px-6 py-3 bg-white text-[#111111] font-medium rounded-full hover:bg-black hover:text-white transition-all duration-[420ms] border-2 border-[#111]">
      Shop Now <i className="align-middle bx bx-right-arrow-alt text-xl"></i>
    </Link>
  </div>
  <div className='absolute top-[85%] right-[11%]  '>
    <Link to="#">
    <i className='text-3xl text-[#2c2c2c] border-2 border-[#2c2c2c] hover:text-white hover:bg-[#2c2c2c] transition-all duration-[420ms] p-3 rounded-[50px] bx bx-down-arrow-alt'></i>
    </Link>
  </div>
</div>
{/* Trending Section Start  */}
<div>
    <div>
        <h2>Our Trending <span>Products</span></h2>
    </div>
    <div>
        <div>
            <img src={imageOne} alt="FirstProducts" loading='lazy' />
            <div>
                <h5>Sale</h5>
            </div>
            {/* Trending Heart Section */}
            <div>
                <i className='bx bx-heart'></i>
            </div>
            {/* Trending Star Section  */}
            <div>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star'></i>
                <i className='bx bx-star-half'></i>
            </div>
            {/* Trending Price Section  */}
            <div>
                <h4>Half Running Set</h4>
                <p>$99 - $129</p>
            </div>
        </div>
    </div>
</div>
    </>

  )
}
