import React, { useEffect, useState } from "react";
import client, { urlFor } from "./sanityClient";
import CommunityForm from "./CommunityForm";
import $ from "jquery"; // Connecting the database to the website

export default function Projects() {

  //Game Project Form opening logic
  const [isOpen, setIsOpen] = useState(false);
  //Game Description visiblity logic
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    if (visible == false) {
      setVisible(true);
    } else if (visible == true) {
      setVisible(false)
    }
  }

  return (
    <div className="bg-[#0f0f10] min-h-screen text-white font-sans pt-24">

      {/* Community projects header and description*/}
      <div className="text-center p-10">
        <div data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-delay="300">
          <h1 className="brick-sans text-8xl sm:text-9xl pb-6 mt-4 font-extrabold leading-tight">Community Projects</h1>
        </div>
        <div data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-delay="600">
          <p className="mt-5 mb-10 text-lg sm:text-2xl archivo-black-regular leading-relaxed max-w-4xl mx-auto text-center">
            Check out some amazing projects made by students here at Queen's! These were built with love, pixels,
            and way too many cups of coffee.
          </p>
        </div>
      </div>

      {/* Game project grid list*/}
      <div className="pb-6">
        <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center">
          {/* Project 1*/}
          <div role="button" onClick={handleClick} className=" relative px-5 pb-5 mx-auto duration-300 ease-out hover:scale-110">
            <div className="relative inset-0 z-30 bg-gray-800 md:size-64 size-40 rounded-sm">
              <img src="Website\website\src\assets\qgdc_requestForm_logo.png"></img>
            </div>
            <div className="absolute inset-0 translate-y-2 z-10 -translate-x-2 mx-auto bg-fuchsia-500 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 -translate-y-2 translate-x-2 z-20 mx-auto bg-cyan-500 md:size-64 size-40 rounded-sm"></div>
            {/* Project Title */}
            <div className="py-4 text-center md:text-3xl text-2xl font-bold text-white opacity-70">[Game Name]</div>
          </div>




          {/* example project 2*/}
          <div className="relative px-5 pb-5 mx-auto duration-300 ease-out hover:scale-110">
            <div className="relative inset-0 z-30 bg-gray-800 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 translate-y-2 z-10 -translate-x-2 mx-auto bg-fuchsia-500 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 -translate-y-2 translate-x-2 z-20 mx-auto bg-cyan-500 md:size-64 size-40 rounded-sm"></div>
            {/* project title */}
            <p className="py-4 text-center md:text-3xl text-2xl font-bold text-white opacity-70">[Game Name]</p>
          </div>
          {/* example project 3*/}
          <div className="relative px-5 pb-5 mx-auto duration-300 ease-out hover:scale-110">
            <div className="relative inset-0 z-30 bg-gray-800 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 translate-y-2 z-10 -translate-x-2 mx-auto bg-fuchsia-500 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 -translate-y-2 translate-x-2 z-20 mx-auto bg-cyan-500 md:size-64 size-40 rounded-sm"></div>
            {/* project title */}
            <p className="py-4 text-center md:text-3xl text-2xl font-bold text-white opacity-70">[Game Name]</p>
          </div>
          {/* example project 4*/}
          {/* use col-start to adjust centering for uneven game number in row */}
          <div className="relative md:col-start-2 px-5 pb-5 mx-auto duration-300 ease-out hover:scale-110">
            <div className="relative inset-0 z-30 bg-gray-800 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 translate-y-2 z-10 -translate-x-2 mx-auto bg-fuchsia-500 md:size-64 size-40 rounded-sm"></div>
            <div className="absolute inset-0 -translate-y-2 translate-x-2 z-20 mx-auto bg-cyan-500 md:size-64 size-40 rounded-sm"></div>
            {/* project title */}
            <p className="py-4 text-center md:text-3xl text-2xl font-bold text-white opacity-70">[Game Name]</p>
          </div>
        </div>
      </div>

      {/*Game project description pop-up */}
      {visible &&
        <div className="sticky bottom-0 pb-4 z-40">
          <div className="sticky relative flex flex-col mx-auto w-5/6">
            <div className="relative z-30 mx-5 w-1/3 md:w-1/4 px-1 bg-purple-600 rounded-t-md">
              <div className="flex justify-between text-md font-bold items-center justify-center px-1">
                <span className=" md:text-[12pt] text-[9pt]">₍^ {'>'}⩊{'<'} ^₎Ⳋ</span>
                <div role="button" onClick={handleClick} className=" duration-300 ease-out hover:scale-150 font-bold text-[16pt]">×</div></div>
            </div>
            <div className="absolute mx-5 -translate-y-1 inset-0 w-1/3 md:w-1/4 rounded-t-md bg-cyan-500"></div>
            <div className="relative z-30 mx-auto h-64 rounded-xl bg-gray-800 border-8 border-purple-600">
              {/*text title/desc game*/}
              <div className="text-purple-200 p-5 ">
                <span className="underline text-cyan-200 hover:text-cyan-500 ease-out duration-300 underline-offset-4 font-bold md:text-xl text-2xl"><a href="https://eelslap.com/" target="_blank">
                  [Game Name]</a></span>
                <div className="pt-1 italic text-[12pt]">
                  [ Credited Creators ]</div>
                <p className="text-[12pt]">
                  -------</p>
                <div className="overflow-y-scroll h-32 text-[12pt]">
                  [ (Slogan/Bit of information about the game) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nam iaculis ac libero non facilisis. Sed accumsan dictum arcu, et commodo quam lacinia et. Aenean elementum gravida lectus, vel convallis est venenatis at. Donec imperdiet id mauris sit amet malesuada. Sed auctor elit vel enim pulvinar cursus. Sed molestie porta mauris vitae malesuada. Nam feugiat ante vitae mi tincidunt, tempor egestas nisi molestie.] ‎
                  <span className="animate-[blink_1s_ease-out_infinite] text-[12pt]">
                    _
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute z-20 translate-y-7 inset-0 mx-auto h-64 rounded-xl bg-cyan-500"></div>
          </div>
        </div>}

      {/*Game request form */}
      <div data-aos="fade-down"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-delay="0">
        <h1 className="text-center brick-sans text-6xl sm:text-8xl pb-6 font-extrabold leading-tight">
          Want to see your <span className="text-purple-600">game</span> here?
        </h1>
        <p className="text-center mt-2 text-lg sm:text-2xl archivo-black-regular leading-relaxed pb-5">
          Fill out the form below for a chance to have your game be displayed on this page! Only requirement is to be affiliated with Queen's University.
        </p>
        <div className="flex justify-center align-items-center pb-8 pt-3">
          {/* Game request button */}
          <button id="accessForm" onClick={() => setIsOpen(!isOpen)} className="bg-fuchsia-500 px-10 py-4 rounded-lg text-xl font-bold">GAME REQUEST FORM</button>
          <CommunityForm isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>

  );
}