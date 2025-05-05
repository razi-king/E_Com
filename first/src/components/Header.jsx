import React, { useEffect, useState } from 'react';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`fixed top-0 right-0 z-50 w-full shadow-md transition-colors duration-300 ease-in-out ${isSticky ? 'bg-white bg-opacity-90 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="flex justify-between items-center px-5 h-[100px]">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-bold gap-5 transition-all duration-300 ease-in-out">
          <Link className='hover:text-[#ee1c47] hover:scale-125' to="/">Home</Link>
          <Link className='hover:text-[#ee1c47] hover:scale-125' to="/shop">Shop</Link>
          <Link className='hover:text-[#ee1c47] hover:scale-125' to="/products">Products</Link>
          <Link className='hover:text-[#ee1c47] hover:scale-125' to="/page">Page</Link>
          <Link className='hover:text-[#ee1c47] hover:scale-125' to="/docs">Docs</Link>
        </nav>

        {/* Icons and Mobile Toggle */}
        <div className="flex items-center gap-4 text-2xl font-normal text-[#2c2c2c]">
          <Link to="/search" aria-label="Search"><i className="hover:text-[#ee1c47] hover:scale-110 bx bx-search"></i></Link>
          <Link to="/account" aria-label="User"><i className="hover:text-[#ee1c47] hover:scale-110 bx bx-user"></i></Link>
          <Link to="/cart" aria-label="Cart"><i className="hover:text-[#ee1c47] hover:scale-110 bx bx-cart"></i></Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-[35px] text-[#2c2c2c] cursor-pointer"
            aria-label="Toggle menu"
          >
            <i className="bx bx-menu"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full px-5 py-4 flex flex-col gap-4 shadow-md">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ee1c47]" to="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ee1c47]" to="/shop">Shop</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ee1c47]" to="/products">Products</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ee1c47]" to="/page">Page</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#ee1c47]" to="/docs">Docs</Link>
        </div>
      )}
    </div>
  );
}
