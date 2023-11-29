import React from "react";

function Header() {
  return (
    <div className=' h-40 relative '>
      <div className="left-[319px] top-[68px] absolute text-center text-white text-3xl font-bold font-['Inter']">About</div>
      <div className="left-[447px] top-[69px] absolute text-center text-white text-3xl font-bold font-['Inter']">Blog</div>
      <div className="left-[207px] top-[64px] absolute text-center text-white text-3xl font-bold font-['Inter']">Home</div>
      <div className='w-24 h-24 left-[58px] top-[30px] absolute'>
        <div className='w-24 h-24 left-0 top-0 absolute bg-zinc-300 rounded-full' />
        <div className="left-[18px] top-[37px] absolute text-center text-black text-xl font-bold font-['Inter']">LOGO</div>
      </div>
    </div>
  );
}

export default Header;
