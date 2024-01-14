import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/qgdc_logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent text-white z-10'>
      <div className='flex items-center justify-between p-4'>
        {/* logo */}
        <div className='flex items-center space-x-4'>
        <Link to='/'><img src={logo} alt='Logo' className='w-27 h-24' /></Link>
          {/* links for large screens */}
          <div className='hidden md:flex space-x-4'>
            <Link to='/' className='text-2xl font-bold hover:text-gray-300'>
              Home
            </Link>
            <Link to='/about' className='text-2xl font-bold hover:text-gray-300'>
              About
            </Link>
            <Link to='/blog' className='text-2xl font-bold hover:text-gray-300'>
              Blog
            </Link>
          </div>
        </div>

        {/* Hamburger icon for small screens */}
        <button className='md:hidden hover:bg-gray-700 focus:bg-gray-700 p-2 rounded' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className='flex flex-col items-center md:hidden'>
          <Link to='/' className='text-xl font-bold my-2 hover:text-gray-300'>
            Home
          </Link>
          <Link to='/about' className='text-xl font-bold my-2 hover:text-gray-300'>
            About
          </Link>
          <Link to='/blog' className='text-xl font-bold my-2 hover:text-gray-300'>
            Blog
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
