import React, { useEffect, useState } from 'react';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';



export default function Header() {
  const[isSticky,setIsSticky]= useState(false);
  useEffect(()=>{
    const handleScroll =()=>{
      setIsSticky(window.scrollY>50);
    };
    window.addEventListener('scroll',handleScroll);
    return () =>window.removeEventListener('scroll',handleScroll);
  },[]);
  return (
    <div className={`flex justify-between items-center px-5 h-[100px] fixed top-0 right-0 z-50 w-full  shadow-md ${isSticky ? 'bg-opacity-50':'bg-white'}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="w-32" />
      </Link>

      <nav className="font-bold flex gap-5  transition-all duration-[420ms] ease-in-out">
        <Link className='hover:text-[#ee1c47] hover:scale-125' to="/">Home</Link>
        <Link className='hover:text-[#ee1c47] hover:scale-125' to="/shop">Shop</Link>
        <Link className='hover:text-[#ee1c47] hover:scale-125' to="/products">Products</Link>
        <Link className='hover:text-[#ee1c47] hover:scale-125' to="/page">Page</Link>
        <Link className='hover:text-[#ee1c47] hover:scale-125' to="/docs">Docs</Link>
      </nav>

      <div className="flex items-center gap-4 text-2xl transition-all duration-[420ms] ease-in-out font-normal text-[#2c2c2c]">
        <Link to="#"><i className="hover:text-[#ee1c47] hover:scale-110 bx bx-search"></i></Link>
        <Link to="#"><i className="hover:text-[#ee1c47] hover:scale-110 bx bx-user"></i></Link>
        <Link to="#"><i className="hover:text-[#ee1c47] hover:scale-110 bx bx-cart"></i></Link>
        <button className="text-[35px] text-[#2c2c2c] cursor-pointer bx bx-menu"></button>
      </div>
    </div>
  );
}
