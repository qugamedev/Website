import React, { useLayoutEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


// Pages
import Home from './components/Home.js';
import About from './components/About.js';
import Blog from './components/Blog.js';

// Components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>

  );
}

export default App;
