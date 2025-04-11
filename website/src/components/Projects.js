import React from "react";
import project1 from "../assets/images/project1.jpg";
export default function Projects() {
  const projects = [
    {
      title: "Super Platformer",
      slogan: "Jump into the action!",
      madeBy: "Made by Alex",
      img: project1,
      alignRight: false,
    },
    {
      title: "Mystery Dungeon",
      slogan: "Solve puzzles, uncover secrets",
      madeBy: "Made by Sam & Chris",
      img: project1,
      alignRight: true,
    },
    {
      title: "Racing Rush",
      slogan: "Fast tracks, faster fun",
      madeBy: "Made by Jamie",
      img: project1,
      alignRight: false,
    },
  ];

  return (
    <div className="bg-[#0f0f10] min-h-screen text-white font-sans pt-24">
      <div className="text-center p-10">
        <h1 className="brick-sans text-8xl sm:text-9xl pb-6 mt-4 font-extrabold leading-tight">PROJECT SHOWCASE</h1>
        <p className="mt-5 mb-10 text-lg sm:text-2xl archivo-black-regular leading-relaxed max-w-4xl mx-auto text-center">
          Check out some amazing retro-style game projects! These were built with love, pixels,
          and way too many cups of coffee.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 pb-10">
        {projects.map((project, index) => (
          <div
          key={index}
          className="relative w-11/12 md:w-3/4 h-72 bg-cover bg-center flex items-center px-10"
          style={{ backgroundImage: `url(${project.img})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />
        
          {/* Text content */}
          <div
            className={`text-white z-10 ${project.alignRight ? "ml-auto text-right" : ""}`}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="italic text-lg">{project.slogan}</p>
            <p className="text-sm mt-1">{project.madeBy}</p>
            <a
              href="https://www.google.com"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 text-lg font-bold bg-[#0f0f10] text-white border border-white hover:bg-white hover:text-black transition-all duration-300 w-48 text-center"
            >
              SEE PROJECT
            </a>

          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
