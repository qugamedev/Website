import React from "react";
import temp_person from "../assets/images/headshots/temp_person.webp";

const Person = ({ name, title, image = temp_person }) => {
  return (
    <div className='lg:w-64 sm:w-48 w-40 h-auto m-4 flex flex-col items-center gap-0.5'>
      <div className='relative w-40 h-40 xl:w-64 sm:w-48 xl:h-64 sm:h-48'>
        {/* The order of these divs is reversed to match the stacking context of your design */}
        <div className='absolute w-full h-full bottom-2 left-2 bg-sky-500' />
        <div className='absolute w-full h-full top-2 right-2 bg-rose-500' />
        <div style={{ backgroundImage: `url(${image})` }} className=' absolute w-full h-full bg-cover bg-center bg-no-repeat' />
      </div>
      <div className='pt-2 font-bold text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl'>{name}</div>
      <div className='font-normal text-center sm:text-lg lg:text-xl '>{title}</div>
    </div>
  );
};

export default Person;
