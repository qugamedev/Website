import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/qgdc_logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='absolute top-0 left-0 z-10 w-full text-white bg-gradient-to-b from-black to-transparent'>
      <div className='flex items-center justify-between p-4'>
        {/* logo */}
        <div className='flex items-center space-x-4'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-24 w-27' />
          </Link>

          {/* div below is hidden but on "medium" it is a flexbox. */}
          <div className='hidden space-x-4 md:flex'>
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

        {/* on medium and up screens the hamburger menu is hidden. */}
        <button className='p-2 rounded md:hidden hover:bg-gray-700 focus:bg-gray-700' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className='flex flex-col items-center md:hidden'>
          <Link to='/' className='my-2 text-2xl font-bold hover:text-gray-300'>
            Home
          </Link>
          <Link to='/about' className='my-2 text-2xl font-bold hover:text-gray-300'>
            About
          </Link>
          <Link to='/blog' className='my-2 text-2xl font-bold hover:text-gray-300'>
            Blog
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
