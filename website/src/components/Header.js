import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header" style={{  zIndex: 2, width: "100%", height: 159, position: 'absolute', left: 0, top: 0,background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0) 100%)'}}>
        
        <div className="About" 
        style={{left: 319, top: 68, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
   <Link to="/about">About</Link>
      
        </div>
        <div className="Blog" 
        style={{left: 447, top: 69, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
          
        <Link to="/blog">Blog</Link>

        </div>
        <div className="Home" 
        style={{left: 207, top: 64, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
          
        <Link to="/">Home</Link>

        </div>
        <div className="Group2" style={{width: 98, height: 98, left: 58, top: 30, position: 'absolute'}}>
          <div className="Ellipse1" style={{width: 98, height: 98, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
          <div className="Logo" 
          style={{left: 18, top: 37, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>
            LOGO</div>
        </div>
       
  </div>  
   );
}

export default Header;
