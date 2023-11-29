import React from "react";

function Footer() {
  return (
    <footer className='w-full h-36 py-5 bg-zinc-900 flex justify-center items-center gap-5'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <div className='text-center text-white text-2xl font-bold'>qugamedev@clubs.queensu.ca</div>
      </div>
      <div className='flex justify-center items-center gap-3.5'>
        <div className='p-6 rounded-lg border-4 border-black flex flex-col justify-center items-center gap-2.5'>
          <div className='text-center text-stone-300 text-xl font-bold'>Type your email...</div>
        </div>
        <div className='p-6 bg-black rounded-lg flex flex-col justify-center items-center gap-2.5'>
          <div className='text-center text-white text-xl font-bold'>Subscribe</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
