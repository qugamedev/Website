import React from "react";
import "../CSS/Gamejam.css"; // Import CSS file

// Assets
import mario from "../assets/images/gamejam/mario.png";

const winners = [
  { title: "Project Alpha", img: mario, place: "1st" },
  { title: "Project Beta", img: mario, place: "2nd" },
  { title: "Project Gamma", img: mario, place: "3rd" },
];

const honorableMentions = [
  { title: "Project Delta", img: mario },
  { title: "Project Epsilon", img: mario },
  { title: "Project Zeta", img: mario },
];

const placeColors = {
  "1st": "bg-yellow-500", // Gold
  "2nd": "bg-gray-400",   // Silver
  "3rd": "bg-orange-500", // Bronze
};

function Gamejam() {
  return (
    <div className="bg-[#0f0f10] text-white min-h-screen flex flex-col items-center">

      {/* Top Container */}
      <section className="w-full max-w-5xl px-6 sm:px-12 text-center min-h-[90vh] flex flex-col items-center justify-center mt-20 sm:mt-0">


        <h1 className="text-3xl sm:text-5xl font-bold archivo-black-regular animate-fade-in">
          QGDC Presents...
        </h1>
        <h1 className="brick-sans text-8xl sm:text-9xl pb-6 mt-4 font-extrabold leading-tight">
          GAME JAM <span className="text-purple-600">2025</span>
        </h1>

        <h2 className="brick-sans text-purple-600 text-6xl sm:text-7xl mt-2">
          What is QGDC'S GAME JAM?
        </h2>
        <p className="mt-5 mb-10 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
          QGDC’s Game Jam is a Lorem ipsum odor amet, consectetuer adipiscing elit.
          Mus dui sollicitudin nisl himenaeos sed cursus rhoncus.
          Pellentesque per suscipit ultricies maximus class viverra.
          Ante vitae consequat ex duis dictum porttitor.
        </p>

        <h2 className="brick-sans text-purple-600 text-6xl sm:text-7xl">
          What should I know about Game Jam 2025?
        </h2>
        <p className="mt-5 mb-1 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
          QGDC's Game Jam 2025 will occur at <span className="text-purple-600">XXX</span> on the <span className="text-purple-600">XXX</span> of <span className="text-purple-600">XXX</span>, <span className="text-purple-600">2025</span>!!
          <br/>Other details, highlight important stuff with <span className="text-purple-600">XXX</span>.
        </p>
      </section>

      <div className="w-3/4 mx-auto border-t border-gray-600 opacity-50 my-16"></div>

      {/* Previous Projects Section */}
      <section className="w-full px-6 sm:px-12 text-center py-16">
        <h1 className="text-4xl sm:text-6xl font-bold brick-sans">
          PREVIOUS PROJECTS
        </h1>

        <p className="mt-7 mb-5 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
          QGDC's Game Jam 2025 will occur at <span className="text-purple-600">XXX</span> on the <span className="text-purple-600">XXX</span> of <span className="text-purple-600">XXX</span>, <span className="text-purple-600">2025</span>!!
          <br/>Other details, highlight important stuff with <span className="text-purple-600">XXX</span>.
        </p>

        {/* Triple Winners (Stacked) */}
        <div className="flex flex-col items-center gap-8 mt-10 w-full">
          {winners.map((project, index) => (
            <div 
              key={index} 
              className="relative w-full sm:w-3/4 md:w-2/3 lg:w-3/4 h-[250px] rounded-3xl shadow-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              {/* Place Indicator (Top Left) */}
              <div className={`absolute top-4 left-4 px-4 py-2 text-lg font-bold text-black ${placeColors[project.place]} rounded-lg shadow-md`}>
                {project.place} Place
              </div>

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6">
                <h3 className="text-3xl font-bold brick-sans">{project.title}</h3>
                <button className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition rounded-lg">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Honorable Mentions (Grid) */}
        <h2 className="text-3xl sm:text-5xl font-bold brick-sans mt-16">
          Honorable Mentions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
          {honorableMentions.map((project, index) => (
            <div 
              key={index} 
              className="relative w-full h-[200px] rounded-3xl shadow-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${project.img})` }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
                <h3 className="text-2xl font-bold brick-sans">{project.title}</h3>
                <button className="mt-3 px-5 py-2 text-md font-semibold text-white bg-black hover:bg-gray-800 transition rounded-lg">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default Gamejam;
