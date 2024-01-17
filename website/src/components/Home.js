import * as React from "react";

// Assests
import right_triangle from "../assets/images/right_triangle.svg";
import left_triangle from "../assets/images/left_triangle.svg";
import discord_logo from "../assets/images/logos/discord_logo.svg";
import home_graphics from "../assets/images/home_graphics.svg";
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";
import home_arcs from "../assets/images/home_arcs.svg";

import Person from "./Person";

function Home() {
  // ********************** BACKEND **********************
  const [execs, setExecs] = React.useState([]);
  const [cochairs, setCochairs] = React.useState([]);

  React.useEffect(() => {
      const handleBlogs = async () => {
          fetch('http://localhost:3002/api/execs/get'
          ,{
              headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              }
          }
          )
          .then(function(response){
              return response.json();
          })

          .then(function(myJson) {
              setExecs(myJson);
          });
          }
          handleBlogs();
  })

  React.useEffect(() => {
    const handleBlogs = async () => {
        fetch('http://localhost:3002/api/cochairs/get'
        ,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            return response.json();
        })

        .then(function(myJson) {
            setCochairs(myJson);
        });
        }
        handleBlogs();
})

  // ******************** END BACKEND ********************

  // Background image at the top
  const topContainerStyle = {
    backgroundImage: `url(${top_graphic_items})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "100%, auto",
  };

  //Background image at the bottom
  const bottomContainerStyle = {
    backgroundImage: `url(${home_graphics})`,
    backgroundRepeat: "no-repeat", // Do not repeat the image
    backgroundPosition: "bottom",
    backgroundSize: "100%, 100%",
  };

  if (execs.length != 0 && cochairs.length != 0) {
    return (
      <div className='text-white bg-dark-colour font-archivo min-w-[375px] '>
        {/* { WELCOME PAGE} */}
        <section style={topContainerStyle} className='relative pb-20'>
          <div className='container pl-3 sm:pl-10 pt-72 md:pt-64 '>
            <h1 className='max-w-5xl text-4xl font-brick md:leading-normal md:text-7xl sm:text-5xl'>Queen’s Game Development Club</h1>
            <p className='max-w-6xl pr-3 mt-20 text-2xl sm:text-3xl'>
              Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development
            </p>
          </div>
          <img src={right_triangle} className='absolute bottom-0 left-0' alt='Bottom Left Image' />
          <img src={left_triangle} className='absolute bottom-0 right-0 scale-y-[-1]' alt='Bottom Right Image' />
        </section>
  
        {/* { Leader Ship } */}
        <section className='w-full   bg-custom-purple'>
          <div className='p-10 mx-auto  max-w-8xl '>
            <h2 className='mb-10 text-3xl font-bold text-center text-white sm:text-6xl font-brick'>Executives</h2>
            <div className='md:flex md:justify-center'>
              <div className='grid grid-cols-2 justify-items-center'>
                {cochairs.map((props) => {
                  return (
                    <Person name={props.name} title={props.title} image={require(`../assets/images/headshots/${props.image}`)}/>
                  );
                })}
              </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
              {execs.map((props) => {
                return (
                  <Person name={props.name} title={props.title} image={require(`../assets/images/headshots/${props.image}`)}/>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* { Community =) } */}
        <section style={bottomContainerStyle} className='relative text-center pb-20 md:pb-32 lg:pb-60 pt-20 md:pt-32 lg:pt-60 '>
          <div className='flex flex-col items-center justify-center text-3xl md:text-5xl font-bold'>
            <p className='mb-4 '>Join Our Community</p>
            <a href='https://discord.gg/uGTPhR3a' target='_blank' rel='noopener noreferrer'>
              <img src={discord_logo} alt='Discord' className='mb-4  w-36 sm:w-56 md:w-80' />
            </a>
            <p className='mb-4 '>on Discord</p>
          </div>
          <img src={right_triangle} className='absolute top-0 left-0 z-10' style={{ transform: "scaleY(-1)" }} alt='Bottom Left Image' />
          <img src={left_triangle} className='absolute top-0 right-0' alt='Bottom Right Image' />
        </section>
      </div>
    );
  }else { // This is here for the sake of database errors.
    return (
      <div className='text-white bg-dark-colour font-archivo min-w-[375px] '>
        {/* { WELCOME PAGE} */}
        <section style={topContainerStyle} className='relative pb-20'>
          <div className='container pl-3 sm:pl-10 pt-72 md:pt-64 '>
            <h1 className='max-w-5xl text-4xl font-brick md:leading-normal md:text-7xl sm:text-5xl'>Queen’s Game Development Club</h1>
            <p className='max-w-6xl pr-3 mt-20 text-2xl sm:text-3xl'>
              Queen’s Game Development Club is dedicated to enriching students’ experience in all areas of game development
            </p>
          </div>
          <img src={right_triangle} className='absolute bottom-0 left-0' alt='Bottom Left Image' />
          <img src={left_triangle} className='absolute bottom-0 right-0 scale-y-[-1]' alt='Bottom Right Image' />
        </section>
  
        {/* { Leader Ship } */}
        <section className='w-full   bg-custom-purple'>
          <div className='p-10 mx-auto  max-w-8xl '>
            <h2 className='mb-10 text-3xl font-bold text-center text-white sm:text-6xl font-brick'>Executives</h2>
            <div className='md:flex md:justify-center'>
              <div className='grid grid-cols-2 justify-items-center'>
                <p className='mb-4 '>There seems to be nothing to display here...</p>
              </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
              <p className='mb-4 '>If you believe this to be an error, contact an administrator.</p>
            </div>
          </div>
        </section>
  
        {/* { Community =) } */}
        <section style={bottomContainerStyle} className='relative text-center pb-20 md:pb-32 lg:pb-60 pt-20 md:pt-32 lg:pt-60 '>
          <div className='flex flex-col items-center justify-center text-3xl md:text-5xl font-bold'>
            <p className='mb-4 '>Join Our Community</p>
            <a href='https://discord.gg/uGTPhR3a' target='_blank' rel='noopener noreferrer'>
              <img src={discord_logo} alt='Discord' className='mb-4  w-36 sm:w-56 md:w-80' />
            </a>
            <p className='mb-4 '>on Discord</p>
          </div>
          <img src={right_triangle} className='absolute top-0 left-0 z-10' style={{ transform: "scaleY(-1)" }} alt='Bottom Left Image' />
          <img src={left_triangle} className='absolute top-0 right-0' alt='Bottom Right Image' />
        </section>
      </div>
    )
  }

  
}

export default Home;
