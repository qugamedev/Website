import React from "react";

// Assests
import right_triangle from "../assets/images/right_triangle.svg";
import left_triangle from "../assets/images/left_triangle.svg";
import discord_logo from "../assets/images/logos/discord_logo.svg";
import home_graphics from "../assets/images/home_graphics.svg";
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";
import home_arcs from "../assets/images/home_arcs.svg";

// Headshots
import Noah from "../assets/images/headshots/noah.JPG";
import Jaysall from "../assets/images/headshots/jaysall.png";
import Daniel from "../assets/images/headshots/daniel.png";
import Lillie from "../assets/images/headshots/lillie.JPG";
import Eric from "../assets/images/headshots/eric.JPG";
import Alyssa from "../assets/images/headshots/alyssa.JPG";
import Annika from "../assets/images/headshots/annika.JPG";
import Huy from "../assets/images/headshots/huy.JPG";
import Matthew from "../assets/images/headshots/matthew.png";
import Conner from "../assets/images/headshots/conner.JPG";

import Person from "./Person";

/* 

Titles:
lg:text-7xl 
sm:text-5xl 
text-4xl

Text: 
text-2xl 
sm:text-3xl 
lg:text-4xl


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
      <section style={topContainerStyle} className=' text-center sm:text-left relative pb-20'>
        <div className='container   pl-3 sm:pl-10 pt-72 md:pt-64 '>
          <h1 className='max-w-5xl  font-brick lg:text-7xl sm:text-5xl text-4xl leading-normal sm:leading-normal md:leading-normal lg:leading-normal'>
            Queen’s Game Development Club
          </h1>
          <p className='max-w-6xl  font-archivo   pr-3 mt-20 text-2xl sm:text-3xl lg:text-4xl'>
            Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development.
          </p>
        </div>
        <img src={right_triangle} className='absolute bottom-0 left-0' alt='Bottom Left Image' />
        <img src={left_triangle} className='absolute bottom-0 right-0 scale-y-[-1]' alt='Bottom Right Image' />
      </section>

      {/* { Leader Ship} */}
      <section className='w-full   bg-custom-purple'>
        <div className='p-10 mx-auto  max-w-8xl '>
          <h2 className='mb-10  font-bold text-center text-white lg:text-7xl sm:text-5xl text-4xl font-brick'>Executives</h2>
          <div className='md:flex md:justify-center'>
            <div className='grid grid-cols-2 justify-items-center'>
              <Person name='Noah Cabral' title='Co-Chair' image={Noah} />
              <Person name='Jaysall Bedi' title='Co-Chair' image={Jaysall} />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
            <Person name='Matthew Susko' title='Web Designer' image={Matthew} />
            <Person name='Daniel Dousek' title='Frontend Developer' image={Daniel} />
            <Person name='Huy Minh Truong' title='Backend Developer' image={Huy} />
            <Person name='Connor Borneman' title='Events Director' image={Conner} />
            <Person name='Lillie Amos' title='Videographer' image={Lillie} />
            <Person name='Alyssa Zhao' title='Graphic Designer' image={Alyssa} />
            <Person name='Eric Schwar' title='Marketing Director' image={Eric} />
            <Person name='Annika Tran' title='Finance Director' image={Annika} />
          </div>
        </div>
      </section>

      {/* { Community =) } */}
      <section style={bottomContainerStyle} className='relative text-center pb-20 md:pb-32 lg:pb-60 pt-20 md:pt-32 lg:pt-60 '>
        <div className='flex flex-col items-center justify-center text-3xl md:text-5xl font-bold'>
          <p className='mb-4 '>
            Join Our <br></br>Discord Community
          </p>
          <a href='https://discord.gg/uGTPhR3a' target='_blank' rel='noopener noreferrer'>
            <img src={discord_logo} alt='Discord' className='  w-36 sm:w-56 md:w-80' />
          </a>
        </div>
        <img src={right_triangle} className='absolute top-0 left-0 z-10' style={{ transform: "scaleY(-1)" }} alt='Bottom Left Image' />
        <img src={left_triangle} className='absolute top-0 right-0' alt='Bottom Right Image' />
      </section>
    </div>
  );
}

export default Home;
