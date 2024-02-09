import React, { useLayoutEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Blog from "./components/Blog.js";

// Components
import Footer from "./components/Footer.js";

// Assets
import logo from "./assets/images/qgdc_logo.png";


// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  var singlePage = true;
  return (
    <ChakraProvider>
      <Router>
        {singlePage ? (
          <Header></Header>
        ) : (
          <div className='absolute top-0 left-0 z-10 w-full text-white bg-gradient-to-b from-black to-transparent'>
            <div className='flex items-center justify-center p-10'>
              <div className='flex items-center space-x-4'>
                <img src={logo} alt='Logo' className='w-67 h-60' />
                <div style={{ fontSize: 60, fontFamily: "NT Brick Sans", fontWeight: "700" }}>
                  Queen's <br></br> Game Dev <br></br> Club
                </div>
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
        </Routes>
        <Footer></Footer>
      </Router>
    </ChakraProvider>
  );
}

export default App;
