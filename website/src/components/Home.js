import React from "react";
import topGraphics from "../assets/images/top_graphics.svg";
import bottomGraphics from "../assets/images/bottom_graphics.svg";
import right_triangle from "../assets/images/right_triangle.svg";
import left_triangle from "../assets/images/left_triangle.svg";
import discord_logo from "../assets/images/discord_logo.svg";

import Header from "./Header.js";

import Person from "./Person";

// Assuming the Header component is already created as per your previous messages.

function Home() {
  const topContainerStyle = {
    backgroundImage: `url(${topGraphics})`,
    backgroundSize: "cover", // Cover the entire size of the container
    backgroundRepeat: "no-repeat", // Do not repeat the image
    backgroundPosition: "center center", // Center the image in the container both vertically and horizontally
    minHeight: "100vh", // Minimum height of 100% of the viewport height
  };

  const bottomContainerStyle = {
    backgroundImage: `url(${bottomGraphics})`,
    backgroundSize: "100% auto", // Set the width to 100% and scale the height automatically
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom", // Center horizontally and align to the bottom
  };
  return (
    <div className='bg-dark-colour text-white '>
      {/* { WELCOME PAGE} */}
      <section style={topContainerStyle} className='relative '>
        <Header />
        <div className='container pl-20 pt-36 '>
          <div className=''>
            <h1 className='text-8xl font-bold'>
              Queen’s Game <br /> Development Club
            </h1>
            <p className='text-3xl mt-20 max-w-6xl'>
              Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development
            </p>
          </div>
        </div>
        <img src={right_triangle} className='absolute bottom-0 left-0' alt='Bottom Left Image' />
        <img src={left_triangle} className='absolute bottom-0 right-0' alt='Bottom Right Image' />
      </section>

      {/* { Leader Ship} */}
      <section className='container mx-auto p-10'>
        <h2 className='text-white text-6xl font-bold text-center mb-10'>Leadership</h2>
        <div className='flex justify-center'>
          <div className='grid grid-cols-2 gap-8'>
            <Person name='Noah Cabral' title='Co-Chair' />
            <Person name='Jaysall Bedi' title='Co-Chair' />
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center'>
          <Person name='Matthew Susko' title='Web Designer' />
          <Person name='Daniel Dousek' title='Frontend Developer' />
          <Person name='Huy Minh Truong' title='Backend Developer' />
          <Person name='Connor Borneman' title='Events Director' />
          <Person name='Lillie Amos' title='Videographer' />
          <Person name='Alyssa Zhao' title='Graphic Designer' />
          <Person name='Eric Schwar' title='Marketing Director' />
          <Person name='Annika Tran' title='Finance Director' />
        </div>
      </section>
      {/* { Community =) } */}

      <section style={bottomContainerStyle} className='relative h- text-center py-20'>
        {/* Community text and Discord logo */}
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-5xl text-pink-500 font-bold mb-4'>Come Join Our Community</h2>
          <img src={discord_logo} alt='Discord' className='w-44 h-44 mb-4' />
          <p className='text-2xl text-white mb-4'>on Discord</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
