//import React, { useState } from "react";
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
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Header() {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='absolute  top-0 left-0 h-[159px] z-10 w-full text-white bg-gradient-to-b from-black to-transparent'>
      <div className='flex items-center   m-auto justify-between h-full p-4'>
        {/* logo */}
        <div className='flex items-center space-x-10'>
          <Link to='/'>
          <img src={logo} alt='Logo' style={{height: 120}} />
          </Link>

          {/* div below is hidden but on "medium" it is a flexbox. */}
          <div className='hidden space-x-6 md:flex'>
            <Link to='/' className='text-2xl  font-bold hover:text-gray-300'>
              Home
            </Link>
            <Link to='/about' className='text-2xl font-bold hover:text-gray-300'>
              About
            </Link>
            {/* <Link to='/blog' className='text-2xl font-bold hover:text-gray-300'>
              Blog
            </Link> */}
          </div>
        </div>

        {/* hamburger menu (only shows with window is medium or smaller) */}
        <Hide above="md">
          <Menu >
            <MenuButton
              as={IconButton}
              aria-label='Pages'
              icon={<HamburgerIcon />}
              variant='outline'
              colorScheme="black"
            />
            <MenuList>
              <Link to='/' className='text-2xl  font-bold hover:text-gray-300'>
                <MenuItem color="black" >
                    Home
                </MenuItem>
              </Link>
              <Link to='/about' className='text-2xl font-bold hover:text-gray-300'>
                <MenuItem color="black">
                    About
                </MenuItem>
              </Link>
            </MenuList>
          </Menu> 
        </Hide>
      </div>

    </div>
  );
}

export default Header;