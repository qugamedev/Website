import React from "react";

// Assests
//import right_triangle from "../assets/images/right_triangle.svg";
//import left_triangle from "../assets/images/left_triangle.svg";
import discord_logo from "../assets/images/logos/discord_logo.svg";
import home_graphics from "../assets/images/home_graphics.svg";
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";
//import home_arcs from "../assets/images/home_arcs.svg";

// Headshots
import Chris from "../assets/images/headshots/Chris_Gil.JPG";
import Isaiah from "../assets/images/headshots/Isaiah.PNG";
import Abdullah from "../assets/images/headshots/Abdullah.jpg";
import Techmeng from "../assets/images/headshots/Techmeng.png";
import Renee from "../assets/images/headshots/Renee_Kim.webp";
import Lillie from "../assets/images/headshots/Lillie.jpg";
//finance
import Sarah from "../assets/images/headshots/Sarah.png";
import Mitch from "../assets/images/headshots/Mitch.png";
//marketing
import Mehr from "../assets/images/headshots/Mehr.jpg";
import Gabriel from "../assets/images/headshots/Gabriel.jpg";
import Basma from "../assets/images/headshots/Basma.JPG";
import Phoebe from "../assets/images/headshots/Phoebe.jpg";
import Ananya from "../assets/images/headshots/Ananya.jpg";
import Alyssa from "../assets/images/headshots/Alyssa.jpg";
//events
import Tracy from "../assets/images/headshots/Tracy.jpg";
import Rounika from "../assets/images/headshots/Rounika.jpg";
import Vivian from "../assets/images/headshots/Vivian.jpg";
import Arlen from "../assets/images/headshots/Arlen.jpg";

//placeholder
import temp from "../assets/images/headshots/temp_person.webp";

import Person from "./Person";

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

      {/* { Leader Ship} */}
      <section className='w-full bg-custom-purple'>
        <div className='mx-auto sm:p-10 max-w-8xl '>
          <h2 className='pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>Executives</h2>
          <div className='md:flex md:justify-center'>
            <div className='grid grid-cols-1 justify-items-center'>
              {/* CHAIR */}
              <Person name='Lillie Amos' title='Chair' image={Lillie} />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
            {/* WEBSITE TEAM */}
            <Person name='Isaiah Wuthrich' title='Website Director' image={Isaiah} />
            <Person name='Christopher Gil' title='Frontend Developer' image={Chris} />
            <Person name='Kevin Valencia' title='Frontend Developer' image={temp} />
            <Person name='Techmeng Aing' title='Backend Developer' image={Techmeng} />
            <Person name='Abdullah Mohsin' title='Backend Developer' image={Abdullah} />
            <Person name='Renee Kim' title='UI/UX Designer' image={Renee} />
            {/* MARKETING */}
            <Person name='Mehr Chelani' title='Marketing Director' image={Mehr} />
            <Person name='Gabriel Dimovski' title='Videographer' image={Gabriel} />
            <Person name='Basma Azeem' title='Social Media Manager' image={Basma} />
            <Person name='Phoebe Chan' title='Graphic Designer' image={Phoebe} />
            <Person name='Ananya Kollipara' title='Graphic Designer' image={Ananya} />
            <Person name='Alyssa Zhao' title='Graphic Designer' image={Alyssa} />
            {/* EVENTS */}
            <Person name='Tracy Chan' title='Events Director' image={Tracy} />
            <Person name='Rounika Saxena' title='Events Organizer' image={Rounika} />
            <Person name='Vivian Webster' title='Events Coordinator' image={Vivian} />
            <Person name='Arlen Smith' title='Events Coordinator' image={Arlen} />
            {/* FINANCE */}
            <Person name='Sarah Mohammad' title='Finance Director' image={Sarah} />
            <Person name='Mitch Turner' title='Budget Manager' image={Mitch} />
          </div>
        </div>
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
