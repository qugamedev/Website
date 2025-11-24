import React, { useState } from "react";
import "../CSS/Gamejam.css"; // Import CSS file
import {useEffect} from "react"; // for importing aos
import AOS from 'aos'; // importing aos
import 'aos/dist/aos.css'; // importing aos

// Assets
import fivefallfirst from "../assets/images/gamejam/fivefallfirst.png";
import fivefallsecond from "../assets/images/gamejam/fivefallsecond.png";
import fivefallthird from "../assets/images/gamejam/fivefallthird.png";

import fivefirst from "../assets/images/gamejam/fivefirst.png";
import fivesecond from "../assets/images/gamejam/fivesecond.png";
import fivethird from "../assets/images/gamejam/fivethird.png";

import fourfirst from "../assets/images/gamejam/fourfirst.png";
import foursecond from "../assets/images/gamejam/foursecond.png";
import fourthird from "../assets/images/gamejam/fourthird.png";

import threefirst from "../assets/images/gamejam/threefirst.png";
import threesecond from "../assets/images/gamejam/threesecond.png";
import threethird from "../assets/images/gamejam/threethird.png";

import twofirst from "../assets/images/gamejam/twofirst.png";
import twosecond from "../assets/images/gamejam/twosecond.png";
import twothird from "../assets/images/gamejam/twothird.png";

const winnersByYear = {
  2025.5: [
    { title: "No--", developer: "@compsup, @Zo-We", img: fivefallfirst, place: "1st", link: "https://compsup.itch.io/noem"  },
    { title: "Unchair Canny Valley", developer: "@Applepielord", img: fivefallsecond, place: "2nd", link: "https://applepielord291.itch.io/unchair-canny-valley"  },
    { title: "Nightmare Town?", developer: "@Vivian Webster", img: fivefallthird, place: "3rd", link: "https://viviannnnnn.itch.io/nightmare-town"  },
  ],
  2025: [
    { title: "Lobotany", developer: "@Vivian Webster", img: fivefirst, place: "1st", link: "https://viviannnnnn.itch.io/lobotany"  },
    { title: "RPG SIMULATOR", developer: "@ziggy964", img: fivesecond, place: "2nd", link: "https://ziggy964.itch.io/rpg-simulator"  },
    { title: "Apodi-Lydia", developer: "@SY64I", img: fivethird, place: "3rd", link: "https://sy64i.itch.io/apodi-lydia"  },
  ],
  2024: [
    { title: "Soul-louS", developer: "@SY64I", img: fourfirst, place: "1st", link: "https://sy64i.itch.io/soul-lous"  },
    { title: "Mirror Madness", developer: "@dylanwalker1320 (Multiple Devs)", img: foursecond, place: "2nd", link: "https://dylanwalker1320.itch.io/mirror-madness"  },
    { title: "Model Student", developer: "@AKATA_RYUUKO", img: fourthird, place: "3rd", link: "https://akata-ryuuko.itch.io/model-student"  },
  ],
  2023: [
    { title: "Companion", developer: "@random-one-guy (Multiple Devs)", img: threefirst, place: "1st", link: "https://random-one-guy.itch.io/companion"  },
    { title: "Balloon Quest", developer: "@AKATA_RYUUKO", img: threesecond, place: "2nd", link: "https://akata-ryuuko.itch.io/balloon-quest"  },
    { title: "Chonky Cat", developer: "@mkdomingues", img: threethird, place: "3rd", link: "https://mkdomingues.itch.io/chonky-cat-game-jam"  },
  ],
  2022: [  
    { title: "Hamstar", developer: "@oscoSan (Multiple Devs)", img: twofirst, place: "1st", link: "https://oscosan.itch.io/hamstar"  },
    { title: "Sisyphus", developer: "@rusticolus", img: twosecond, place: "2nd", link: "https://rusticolus.itch.io/sisyphusgame"  },
    { title: "Getting Under It", developer: "@Ensaurus (Multiple Devs)", img: twothird, place: "3rd", link: "https://ensaurus.itch.io/getting-under-it"  },
  ],
};

const placeColors = {
  "1st": "bg-yellow-500",
  "2nd": "bg-gray-400",
  "3rd": "bg-orange-500",
}; 

const displayNames = {
  "2025.5": "Fall 2025",
  "2025": "Winter 2025",
};

function Gamejam() {
  const [showProjects, setShowProjects] = useState({
    2025.5: true,
    2025: false,
    2024: false,
    2023: false,
    2022: false,
  });

  const toggleProjects = (year) => {
    setShowProjects((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-[#0f0f10] text-white min-h-screen flex flex-col items-center">
      
      {/* Top Container */}
      <section className="w-full max-w-5xl px-6 sm:px-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-180px)] pt-[180px]">
      <h1 className="text-3xl sm:text-5xl font-bold archivo-black-regular animate-fade-in">
          Loading...
        </h1>
        <h1 className="brick-sans text-8xl sm:text-9xl pb-6 mt-4 font-extrabold leading-tight">
          QGDC GAME JAM <span className="text-purple-600">2026</span>
        </h1>

        <h2 className="brick-sans text-purple-600 text-6xl sm:text-7xl mt-2">
          What is the QGDC GAME JAM?
        </h2>
        <p className=" data-aos-fade-down mt-5 mb-10 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
        QGDC Game Jam is an annual game development competition held both online and in-person in Kingston. With fresh themes each year,
        developers of all skill levels can unleash their creativity and compete against peers across Canada.
        Ready to level up your game? Join now!
        </p>
        
        {/* Next Game Jam */}
        <p className="mt-7 mb-6 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
        Thank you for participating in the QGDC Fall Game Jam 2025! We can't wait to see the incredible games you'll create for the 
         <br /><p className="mt-5 py-3 text-2xl sm:text-4xl bg-gradient-to-r from-purple-600 to-indigo-500">Game Jam 2026!</p><br /> 
        Check out the official QGDC itch.io page for updates!
        </p>
        
        {/* Redirect Button */}
      <a href="https://itch.io/jam/qugamedev-game-jam-fall25" className="px-8 py-4 text-lg sm:text-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg shadow-lg">
        QGDC Fall 2025 Page
      </a>
        
      </section>

      <div className="w-3/4 mx-auto border-t border-gray-600 opacity-50 my-16"></div>

      {/* Previous Projects Section */}
      <section className="w-full text-center py-16">
        <h1 className="text-4xl sm:text-6xl font-bold brick-sans">
          PREVIOUS PROJECTS
        </h1>

      {/* Buttons and Projects for Each Year (Sorted by Latest First) */}
      {Object.keys(winnersByYear)
        .sort((a, b) => b - a) // Sort years in descending order
        .map((year) => (
          <div key={year} className="w-full flex flex-col items-center my-6">
            
            {/* Dropdown Button */}
            <button 
              onClick={() => toggleProjects(year)}
              className="w-full sm:w-3/4 md:w-1/2 px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 
              hover:from-purple-700 hover:to-indigo-600 transition flex items-center justify-center gap-4 shadow-lg text-lg sm:text-xl"
    
            >
              <span>
                {showProjects[year] 
                  ? `Hide ${displayNames[year] || year} Projects`
                  : `Show ${displayNames[year] || year} Projects`
                }
              </span>

              <span className="text-2xl transition-transform duration-300 transform"
                    style={{ transform: showProjects[year] ? "rotate(180deg)" : "rotate(0deg)" }}>
                ▼
              </span>
            </button>

            {/* Projects Section (Appears Below Button) */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showProjects[year] ? "max-h-[1000px] opacity-100 mt-6" : "max-h-0 opacity-0"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold brick-sans">{(displayNames[year] || year) + " Winners 🎉"} </h2>

              {/* Project Boxes */}
              <div className="flex flex-col items-center gap-8 mt-10 w-full">
                {winnersByYear[year].map((project, index) => (
                  <div 
                    key={index} 
                    className="relative w-[50vw] h-[250px] rounded-3xl shadow-xl overflow-hidden bg-cover bg-center flex justify-center items-center"
                    style={{
                      backgroundImage: `url(${project.img})`,
                      minWidth: "50vw", // Forces the width to be exactly half the viewport
                    }}
                  >
                    {/* Place Indicator */}
                    <div className={`absolute top-4 left-4 px-4 py-2 text-lg font-bold text-black ${placeColors[project.place]} rounded-lg shadow-md z-20`}>
                      {project.place} Place
                    </div>
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                    {/* Project Title */}
                    <h3 className="text-5xl font-bold brick-sans text-white drop-shadow-lg">
                      {project.title}
                    </h3>

                    {/* Developer Name */}
                    <p className="text-xl sm:text-1xl mt-2 archivo-black-regular text-white drop-shadow-lg">
                      <span className="font-semibold">{project.developer}</span>
                    </p>

                    {/* View Project Button */}
                    <button className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition rounded-lg">
                      {/* View Project Button with Link */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition rounded-lg"
                    >
                      View Project
                    </a>
                    </button>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      ))}

      </section>

      <div className="w-3/4 mx-auto border-t border-gray-600 opacity-50 my-16"></div>

    {/* VIEW ALL PROJECTS!! Section (Redirect to new Page) */}
    <section className="w-full max-w-5xl px-6 sm:px-12 text-center flex flex-col items-center mt-1 mb-20">
      <h1 className="brick-sans text-6xl sm:text-8xl pb-6 font-extrabold leading-tight">
        Congratulations to all <span className="text-purple-600">Winners!</span>
      </h1>

      <p className="mt-2 mb-6 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
        We are incredibly proud of all the amazing projects showcased at the QGDC Fall Game Jam 2025! 
        A huge thank you to every participant, and a special shoutout to our winners for their outstanding creativity and hard work.
      </p>

      {/* Redirect Button */}
      <a href="https://qugamedev.itch.io/" className="px-8 py-4 text-lg sm:text-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg shadow-lg">
        View All Submissions
      </a>
    </section>



    </div>
  );
}

export default Gamejam;