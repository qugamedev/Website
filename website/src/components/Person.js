import React from "react";

const Person = ({ name, title }) => {
  return (
    <div className='w-72 h-96 flex flex-col items-center gap-0.5'>
      <div className='w-72 h-72 relative'>
        {/* The order of these divs is reversed to match the stacking context of your design */}
        <div className='w-72 h-72 absolute bottom-2 left-2 bg-sky-500' />
        <div className='w-72 h-72 absolute top-2 right-2 bg-rose-500' />
        <div className='w-72 h-72 absolute bg-neutral-500' />
      </div>
      <div className='pt-2 text-white text-3xl font-bold'>{name}</div>
      <div className='text-white text-3xl font-normal'>{title}</div>
    </div>
  );
};

export default Person;
