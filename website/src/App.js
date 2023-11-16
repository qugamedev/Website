import React, { useLayoutEffect, useState } from 'react';

import {
  BrowseRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


// Pages
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Blog from './Pages/Blog.js';

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path="/" element={<About/>}/>
        <Route path="/" element={<Blog/>}/>
      </Routes>
    </Router>

  )
}

export default App;
