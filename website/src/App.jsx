import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Pages
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import GameJam from "./components/Gamejam.jsx";
import Projects from "./components/Projects.jsx"
import PageNotFound from "./components/404Page.jsx";

// Components
import Footer from "./components/Footer.jsx";

// Assets
import logo from "./assets/images/qgdc_logo.png";


// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// AOS Animations
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  var singlePage = true; //Decides if the header is included on the homepage or not.

  useEffect(() => {
    AOS.init({once: true}); // plays all animations only the first time you are on the page
    AOS.refresh();
  }, []);

  return (
    <ChakraProvider>
      <Router>

        {/* Either use the <Header> component, or use a simplified title header depending on [singlePage] value. */}
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

        {/* Establish routes to other pages. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gamejam' element={<GameJam />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='/blog' element={<Blog />} /> */}
        </Routes>

        {/* Add footer component to page. */}
        <Footer></Footer>
        
      </Router>
    </ChakraProvider>
  );
}

export default App;
