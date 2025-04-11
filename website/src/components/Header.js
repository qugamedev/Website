import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/qgdc_logo.png";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Hide,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function Header() {
  return (
    <div className='fixed top-0 left-0 z-50 w-full text-white bg-gradient-to-b from-black to-transparent h-[120px] sm:h-[140px] lg:h-[159px]'>
      <div className='flex items-center justify-between h-full px-6 sm:px-10 lg:px-16'>
        {/* Logo */}
        <div className='flex items-center space-x-6 sm:space-x-10'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-[90px] sm:h-[110px] lg:h-[120px]' />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <Link to='/' className='text-xl lg:text-2xl font-bold hover:text-gray-300'>
              Home
            </Link>
            <Link to='/about' className='text-xl lg:text-2xl font-bold hover:text-gray-300'>
              About
            </Link>
            <Link to='/GameJam' className='text-xl lg:text-2xl font-bold hover:text-gray-300'>
              Game Jam
            </Link>
            <Link to='/Projects' className='text-xl lg:text-2xl font-bold hover:text-gray-300'>
              Projects
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <Hide above="md">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Pages'
              icon={<HamburgerIcon />}
              variant='outline'
              colorScheme="black"
            />
            <MenuList>
              <Link to='/'>
                <MenuItem color="black">Home</MenuItem>
              </Link>
              <Link to='/about'>
                <MenuItem color="black">About</MenuItem>
              </Link>
              <Link to='/GameJam'>
                <MenuItem color="black">Game Jam</MenuItem>
              </Link>
            </MenuList>
          </Menu> 
        </Hide>
      </div>
    </div>
  );
}

export default Header;
