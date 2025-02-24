import React from "react";

// Assests
//import right_triangle from "../assets/images/right_triangle.svg";
//import left_triangle from "../assets/images/left_triangle.svg";
import discord_logo from "../assets/images/logos/discord_logo.svg";
import home_graphics from "../assets/images/home_graphics.svg";
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";
//import home_arcs from "../assets/images/home_arcs.svg";



/* 

Titles:
lg:text-7xl 
sm:text-5xl 
xs:text-4xl
text-3xl

Text: 
lg:text-4xl
sm:text-3xl 
xs:text-2xl
text-xl 


*/

function Home() {
  // Background image at the top
  const topContainerStyle = {
    backgroundImage: `url(${top_graphic_items})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100%, auto",
  };

  //Background image at the bottom
  const bottomContainerStyle = {
    backgroundImage: `url(${home_graphics})`,
    backgroundRepeat: "no-repeat", // Do not repeat the image
    backgroundPosition: "bottom",
    backgroundSize: "100%, 100%",
  };
  return (
    <div className='text-white bg-dark-colour '>
      {/* { WELCOME PAGE} */}
      <section style={topContainerStyle} className=' h-[777px] text-center   sm:text-left  pb-20'>
        <div className='pl-3 sm:container sm:pl-10 pt-72 md:pt-64'>
          <h1 className='max-w-5xl text-3xl font-brick lg:text-7xl sm:text-5xl xs:text-4xl xs:leading-normal sm:leading-normal md:leading-normal lg:leading-normal'>
            Queen’s Game Development Club
          </h1>
          <p className='max-w-6xl pr-3 mt-20 text-xl font-archivo xs:text-2xl sm:text-3xl lg:text-4xl'>
            Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development.
          </p>
        </div>
      </section>
      {/*HEADSHOTS PLACEHOLDER. IDK WHAT WILL BE HERE SO REMOVE ME IF NEEDED*/}
      <section className='w-full bg-custom-purple'>
        <h2 className='pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>Headshots used to be here. This will be for game jam or events probably.</h2>
      </section>

      {/* { Community =) } */}
      <section style={bottomContainerStyle} className='relative pt-20 pb-20 text-center md:pb-32 lg:pb-60 md:pt-32 lg:pt-60 '>
        <div className='flex flex-col items-center justify-center text-2xl font-bold xs:text-3xl md:text-5xl'>
          <p className='mb-4 '>
            Join Our <br></br>Discord Community
          </p>
          <a href='https://discord.gg/uGTPhR3a' target='_blank' rel='noopener noreferrer'>
            <img src={discord_logo} alt='Discord' className=' w-36 sm:w-56 md:w-80' />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
