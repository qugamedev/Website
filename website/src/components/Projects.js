import React, { useEffect, useState } from "react";
import client, {urlFor} from "./sanityClient";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "projectCard"]{
        title,
        slogan,
        madeBy,
        website,
        alignRight,
        img
      }`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
  return (
    <div className="bg-[#0f0f10] min-h-screen text-white font-sans pt-24">
      <div className="text-center p-10">
        <h1 className="brick-sans text-8xl sm:text-9xl pb-6 mt-4 font-extrabold leading-tight">Community Projects</h1>
        <p className="mt-5 mb-10 text-lg sm:text-2xl archivo-black-regular leading-relaxed max-w-4xl mx-auto text-center">
          Check out some amazing projects made by students here at Queens! These were built with love, pixels,
          and way too many cups of coffee.
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 pb-10">
        {projects.map((project, index) => (
          <div
          key={index}
          className="relative w-11/12 md:w-3/4 h-72 bg-cover bg-center flex items-center px-10"
          style={{ backgroundImage: `url(${urlFor(project.img).width(1200).height(500).fit('crop').auto('format')})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 z-0" />
        
          {/* Text content */}
          <div
            className={`text-white z-10 ${project.alignRight ? "ml-auto text-right" : ""}`}
          >
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="italic text-lg">{project.slogan}</p>
            <p className="text-sm mt-1">Made by: {project.madeBy}</p>
            {project.website ? (//disable button if no link is provided for the game card
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 text-lg font-bold bg-[#0f0f10] text-white border border-white hover:bg-white hover:text-black transition-all duration-300 w-48 text-center"
              >
                SEE PROJECT
              </a>
            ) : (
              <span
                className="inline-block mt-4 px-6 py-3 text-lg font-bold bg-gray-700 text-gray-400 border border-gray-500 cursor-not-allowed w-48 text-center"
                title="Link coming soon!"
              >
                SEE PROJECT
              </span>
            )}

          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
