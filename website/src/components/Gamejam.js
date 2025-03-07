import React from "react";
import "../CSS/Gamejam.css";  // Import the CSS file

// Assets
import discord_logo from "../assets/images/logos/discord_logo.svg";

function Gamejam() {
  return (
    <div className="bg-[#212121] text-white min-h-screen flex flex-col pt-72">
      {/* Top Container */}
      <section className="h-[40vh] flex flex-col justify-center items-start text-left px-8">
        <h1 className="text-2xl sm:text-3xl mb-12">
          <span className="archivo-black-regular">QGDC Presents...</span>
          <br /><br />
          <span className="brick-sans text-9xl pb-6"> 
            GAME JAM <span className="text-purple-600">2025</span>
          </span>
        </h1>
        <h2 className="brick-sans text-purple-600 text-7xl">
          What is QGDC'S GAME JAM?
        </h2>
        <p className="mt-5 mb-6 text-xl sm:text-2xl archivo-black-regular">
          QGDC’s game Jam is a Lorem ipsum odor amet, consectetuer adipiscing elit. 
          Mus dui sollicitudin nisl himenaeos sed cursus rhoncus. 
          Pellentesque per suscipit ultricies maximus class viverra; nunc sociosqu. 
          Suscipit pretium montes maecenas dignissim, pulvinar inceptos dignissim. 
          Ante vitae consequat ex duis dictum porttitor. 
          Morbi nascetur hac porttitor odio libero proin nulla ex porta. 
          Erat aliquet eros consequat vel cubilia posuere ullamcorper libero laoreet.  
        </p>
        <h2 className="brick-sans text-purple-600 text-7xl">
          What should I know about game jam 2025?
        </h2>
        <p className="mt-5 mb-6 text-xl sm:text-2xl archivo-black-regular">
          QGDC's game jam 2025 will occur at <span className="text-purple-600">XXX</span> on the <span className="text-purple-600">XXX</span> of <span className="text-purple-600">XXX</span>, <span className="text-purple-600">2025</span>!!
          <br/>Other details, highlight important stuff with <span className="text-purple-600">XXX</span>.
        </p>
      </section>

      {/* Bottom Container */}
      <section className="flex-1 flex flex-col justify-center items-start text-left px-8 pt-24">
        <h1 className="text-2xl sm:text-7xl brick-sans mt-10">PREVIOUS PROJECTS</h1>
      </section>
    </div>
  );
}

export default Gamejam;
