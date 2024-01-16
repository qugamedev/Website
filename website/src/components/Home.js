import React from "react";
import right_triangle from "../assets/images/right_triangle.svg";
import left_triangle from "../assets/images/left_triangle.svg";
import discord_logo from "../assets/images/discord_logo.svg";
import home_graphics from "../assets/images/home_graphics.svg";
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";
import home_arcs from "../assets/images/home_arcs.svg";

import Header from "./Header.js";

import Person from "./Person";

function Home() {
  const topContainerStyle = {
    backgroundImage: `url(${top_graphic_items})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", // Center the background image
  };

  const bottomContainerStyle = {
    backgroundImage: `url(${home_graphics})`,
    backgroundRepeat: "no-repeat", // Do not repeat the image
    backgroundPosition: "bottom",
    backgroundSize: "100%, 100%",
  };
  return (
    <div className='text-white bg-dark-colour font-archivo '>
      {/* { WELCOME PAGE} */}
      <section style={topContainerStyle} className='relative pb-20'>
        <div className='container pl-3 sm:pl-10 pt-72 md:pt-64 '>
          <h1 className='max-w-5xl text-4xl font-brick md:leading-normal md:text-7xl sm:text-5xl'>Queen’s Game Development Club</h1>
          <p className='max-w-6xl pr-3 mt-20 text-2xl sm:text-3xl'>
            Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development
          </p>
        </div>
        <img src={right_triangle} className='absolute bottom-0 left-0' alt='Bottom Left Image' />
        <img src={left_triangle} className='absolute bottom-0 right-0' alt='Bottom Right Image' />
      </section>

      {/* { Leader Ship} */}
      <section className='w-full   bg-custom-purple'>
        <div className='p-10 mx-auto  max-w-8xl '>
          <h2 className='mb-10 text-3xl font-bold text-center text-white sm:text-6xl font-brick'>Leadership</h2>
          <div className='flex justify-center'>
            <div className='grid grid-cols-2 justify-items-center'>
              <Person name='Noah Cabral' title='Co-Chair' />
              <Person name='Jaysall Bedi' title='Co-Chair' />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
            <Person name='Matthew Susko' title='Web Designer' />
            <Person name='Daniel Dousek' title='Frontend Developer' />
            <Person name='Huy Minh Truong' title='Backend Developer' />
            <Person name='Connor Borneman' title='Events Director' />
            <Person name='Lillie Amos' title='Videographer' />
            <Person name='Alyssa Zhao' title='Graphic Designer' />
            <Person name='Eric Schwar' title='Marketing Director' />
            <Person name='Annika Tran' title='Finance Director' />
          </div>
        </div>
      </section>

      {/* { Community =) } */}
      <section style={bottomContainerStyle} className='relative text-center pb-20 md:pb-32 lg:pb-60 pt-20 md:pt-32 lg:pt-60 '>
        <div className='flex flex-col items-center justify-center text-3xl md:text-5xl font-bold'>
          <p className='mb-4 '>Join Our Community</p>
          <img src={discord_logo} alt='Discord' className='mb-4  w-36 sm:w-56 md:w-80' />
          <p className='mb-4 '>on Discord</p>
        </div>
        <img src={right_triangle} className='absolute top-0 left-0' style={{ transform: "scaleY(-1)" }} alt='Bottom Left Image' />
        <img src={left_triangle} className='absolute top-0 right-0' style={{ transform: "scaleY(-1)" }} alt='Bottom Right Image' />
      </section>
    </div>
  );
}

export default Home;
