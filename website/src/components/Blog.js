import React from "react";
import graphics from "../assets/images/middle_graphics.svg";
import gamejamIMG from "../assets/images/gamejam.png";

function Blog() {
  const ContainerStyle = {
    backgroundImage: `url(${graphics})`,
    backgroundSize: "cover", // Cover the entire size of the container
    backgroundPosition: "top center", // Align the top of the image with the top of the container
    minHeight: "2000px", // Adjust as needed to fit the SVG height or as required by your design
    backgroundRepeat: "no-repeat", // Prevent the SVG from tiling
    width: "100%", // Ensure the container spans the full width// Ensure the container spans the full width
  };
  return (
    <section style={ContainerStyle} className='flex justify-center bg-dark-colour text-white'>
      <div className='pt-96 mr-10 ml-10 max-w-7xl m-auto flex-col justify-start items-start  inline-flex'>
        <div className='flex-col bg-custom-purple rounded-lg p-10 m-10 justify-start items-center gap-10 flex'>
          <div className=" text-center text-white text-3xl font-normal font-['Inter']">November 22, 2023</div>
          <div className=" text-center text-white text-5xl font-bold font-['Inter'] underline">News: Godot Wild Jam</div>
          <div className=" text-white text-3xl font-normal font-['Inter']">
            Hello Queen’s gamedev community! In roughly 6 days, Wild Jam, LLC is hosting the Godot Wild Jam. It challenges the contestants to build a
            game using the Godot engine in just 9 days. This is a monthly game jam, so don’t worry if you didn’t read this post in time! Link to sign
            up here:…
          </div>
        </div>
        <div className='flex-col bg-custom-purple rounded-lg p-10 m-10 justify-start items-center gap-10 flex'>
          <div className=" text-center text-white text-3xl font-normal font-['Inter']">October 10, 2022</div>
          <div className=" text-center text-white text-5xl font-bold font-['Inter'] underline">News: Berklee College of Music Game/Music Jam</div>
          <img className=' h-96' src={gamejamIMG} alt='this is an image' />
          <div className=" text-white text-3xl font-normal font-['Inter']">
            Game Audio Workshop from the Berklee College of Music is inviting North American college students to participate in the fourth annual game
            development and audio event, Game/Music Jam ’23! Their game jam is unique in that they connect game developers with game composers from
            Berklee College of Music and other colleges to create games and…
          </div>
        </div>
        <div className='flex-col  bg-custom-purple rounded-lg p-10 m-10 justify-start items-center  gap-10 flex'>
          <div className=" text-center text-white text-3xl font-normal font-['Inter']">July 22, 2022</div>
          <div className=" text-center text-white text-5xl font-bold font-['Inter'] underline">Our first game jam</div>
          <div className=" text-white text-3xl font-normal font-['Inter']">
            The first game jam was held by QGDC a month ago, where students from Queen’s University were challenged to design, develop, and release a
            game in no more than 48 hours! The contributions were outstanding, and we want to commend the following students for their hard work: 🥇
            First place – Hamstar by Schuyler Good, Dylan Walker, Oscar…
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
