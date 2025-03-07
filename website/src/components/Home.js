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
  // Use the same background style for both sections
  const commonBackgroundStyle = {
    backgroundImage: `url(${top_graphic_items})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backdropFilter: "blur(10px)",
  };

  return (
    <div className="text-white bg-dark-colour">
      {/* HERO SECTION */}
      <section
        style={commonBackgroundStyle}
        className="relative flex items-center justify-center h-screen px-4"
      >
        <div className="container mx-auto text-center sm:text-left">
          <h1 className="max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-brick font-bold">
            Queen’s Game Development Club
          </h1>
          <p className="max-w-6xl mt-8 sm:mt-10 text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-archivo">
            Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development.
          </p>
        </div>
      </section>
      {/*HEADSHOTS PLACEHOLDER. IDK WHAT WILL BE HERE SO REMOVE ME IF NEEDED*/}
      <section className='w-full bg-custom-purple'>
        <h2 className='pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>Headshots used to be here. This will be for game jam or events probably.</h2>
      </section>

    </div>
  );
}

export default Home;





      {/* COMMUNITY SECTION -- NOT NEEDED, WE CAN USE OTHER PAGES*/}
      {/* <section
        style={bottomContainerStyle}
        className="relative flex items-center justify-center pt-20 pb-20 md:pt-32 md:pb-32 lg:pt-60 lg:pb-60"
      >
        <div className="absolute inset-0 bg-dark-colour opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="mb-4 text-2xl xs:text-3xl md:text-5xl font-bold">
            Join Our <br />Discord Community
          </p>
          <a href="https://discord.gg/uGTPhR3a" target="_blank" rel="noopener noreferrer">
            <img src={discord_logo} alt="Discord" className="w-36 sm:w-56 md:w-80" />
          </a>
        </div>
      </section> */}
