import React from "react";

const Person = ({ name, title }) => {
  return (
    <div className='lg:w-64 sm:w-48 w-40 h-auto m-4 flex flex-col items-center gap-0.5'>
      <div className='lg:w-64  sm:w-48 w-40 lg:h-64 sm:h-48 h-40 relative'>
        {/* The order of these divs is reversed to match the stacking context of your design */}
        <div className='w-full h-full absolute bottom-2 left-2 bg-sky-500' />
        <div className='w-full h-full absolute top-2 right-2 bg-rose-500' />
        <div className='w-full h-full absolute bg-neutral-500' />
      </div>
      <div className='pt-2 text-white lg:text-3xl font-bold'>{name}</div>
      <div className='text-white lg:text-3xl font-normal'>{title}</div>
    </div>
  );
};

export default Person;
