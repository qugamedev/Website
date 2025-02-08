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

      {/* LEADERSHIP SECTION */}
      <section
  className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32 pb-20 bg-[#3b0a57] overflow-hidden"
>
  {/* Blurred Background Overlay */}
  <div className="absolute inset-0 bg-[#3b0a57]/70 backdrop-blur-xl" style={{ zIndex: -1 }}></div>

  <div className="container mx-auto">
    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-brick font-bold text-center mb-16">
      Executives
    </h2>
    {/* Co-Chairs Row */}
    <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-20 justify-center items-center mb-14">
  <Person name="Noah Cabral" title="Co-Chair" image={Noah} />
  <Person name="Jaysall Bedi" title="Co-Chair" image={Jaysall} />
</div>


    {/* Other Executives Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
      <Person name="Matthew Susko" title="Web Designer" image={Matthew} />
      <Person name="Daniel Dousek" title="Frontend Developer" image={Daniel} />
      <Person is_huy={true} name="Huy Minh Truong" title="Backend Developer" image={Huy} />
      <Person name="Connor Borneman" title="Events Director" image={Conner} />
      <Person name="Lillie Amos" title="Videographer" image={Lillie} />
      <Person name="Alyssa Zhao" title="Graphic Designer" image={Alyssa} />
      <Person name="Eric Schwar" title="Marketing Director" image={Eric} />
      <Person name="Annika Tran" title="Finance Director" image={Annika} />
    </div>
  </div>
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