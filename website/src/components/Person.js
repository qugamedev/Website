import React from "react";
import temp_person from "../assets/images/headshots/temp_person.webp";

const Person = ({ name, title, image = temp_person }) => {
  return (
    <div className='lg:w-64 sm:w-48  h-auto m-4 flex flex-col items-center'>
      <div className='relative w-32 h-32 xl:w-64 sm:w-48 xl:h-64 sm:h-48'>
        <div className='absolute w-full h-full bottom-2 left-2 bg-sky-500' />
        <div className='absolute w-full h-full top-2 right-2 bg-rose-500' />
        <div
          style={{ backgroundImage: `url(${image})`, backgroundPosition: "top center" }}
          className=' absolute w-full h-full bg-cover bg-center bg-no-repeat'
        />
      </div>
      <div className='pt-2 font-bold text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl'>{name}</div>
      <div className='font-normal text-center sm:text-lg lg:text-xl '>{title}</div>
    </div>
  );
};

export default Person;
