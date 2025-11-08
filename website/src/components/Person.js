import React from "react";
import temp_person from "../assets/images/headshots/temp_person.webp";
import {useEffect} from "react"; // for importing aos
import AOS from 'aos'; // importing aos
import 'aos/dist/aos.css'; // importing aos

const Person = ({ name, title, image = temp_person, is_huy=false }) => {
  return (
    <div className='lg:w-64 sm:w-48  h-auto m-4 flex flex-col items-center'>
      <div className='relative h-28 w-28 xs:w-32 xs:h-32 xl:w-64 sm:w-48 xl:h-64 sm:h-48'>
        <div className='absolute w-full h-full bottom-2 left-2 bg-sky-500' />
        <div className='absolute w-full h-full top-2 right-2 bg-rose-500' />
        <div
          style={{ backgroundImage: `url(${image})`, backgroundPosition: "top center" }}
          className=' absolute w-full h-full bg-cover bg-center bg-no-repeat'
        />
      </div>
      <div className='pt-2 font-bold text-center  xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl'>{ 
        is_huy ? (<div>Huy<br/>Min Truong</div>) : name}</div>
      <div className='font-normal text-center text-[10px] xs:text-xs sm:text-lg lg:text-xl '>{title}</div>
    </div>
  );
};

export default Person;
