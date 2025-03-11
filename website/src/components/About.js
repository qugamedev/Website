//import React, { useRef, useState, useEffect,  useMemo  } from 'react';
import React, { useRef} from 'react';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
//import * as THREE from 'three';
//import discord_logo from "../assets/images/logos/discord_logo.svg";

import { MeshBasicMaterial } from 'three';

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import qgdc_model from '../assets/qgdc.obj'

// Headshots
//website
import Chris from "../assets/images/headshots/Chris_Gil.JPG";
import Isaiah from "../assets/images/headshots/Isaiah.PNG";
import Abdullah from "../assets/images/headshots/Abdullah.jpg";
import Techmeng from "../assets/images/headshots/Techmeng.png";
import Renee from "../assets/images/headshots/Renee_Kim.webp";
import Lillie from "../assets/images/headshots/lillie.JPG";
//finance
import Sarah from "../assets/images/headshots/Sarah.png";
import Mitch from "../assets/images/headshots/Mitch.png";
//marketing
import Mehr from "../assets/images/headshots/Mehr.jpg";
import Gabriel from "../assets/images/headshots/Gabriel.jpg";
import Basma from "../assets/images/headshots/Basma.JPG";
import Phoebe from "../assets/images/headshots/Phoebe.jpg";
import Ananya from "../assets/images/headshots/Ananya.jpg";
import Alyssa from "../assets/images/headshots/alyssa.JPG";
//events
import Tracy from "../assets/images/headshots/Tracy.jpg";
import Rounika from "../assets/images/headshots/Rounika.jpg";
import Vivian from "../assets/images/headshots/Vivian.jpg";
import Arlen from "../assets/images/headshots/Arlen.jpg";

//placeholder
import temp from "../assets/images/headshots/temp_person.webp";

import Person from "./Person";


import * as THREE from 'three';
import right_arc from "../assets/images/right arc.svg";
import right_arc2 from "../assets/images/right arc 2.svg";

//import right_arc from "../assets/images/right arc.svg";
//import right_arc2 from "../assets/images/right arc 2.svg";
/*
function SpinningCube() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
   // cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="orange" />
    </mesh>
  );
}

function Torus() {
  const torusRef = useRef();

  useFrame(() => {
    // Rotate the torus for some basic animation
    torusRef.current.rotation.x += 0.01;
   // torusRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshBasicMaterial color="#B66cff" wireframe />
    </mesh>
  );
}
*/

function Model() {
  const obj = useLoader(OBJLoader, qgdc_model);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // A subtle, slow rotation for a modern vibe
      ref.current.rotation.y += 0.005;
    }
  });

  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({
        color: '#B66cff',
        wireframe: true,
      });
    }
  });

  return <primitive object={obj} ref={ref} />;
}

const About = () => {
  return (
    <div
      className="about-container"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#121212',
        overflow: 'hidden',
      }}
    >
      {/* 3D Background Canvas */}
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>

      {/* Left Arc Illustration */}
      <div
        className="left-arc"
        style={{
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: 0,
          justifyContent: 'flex-end',
          flexDirection: 'row',
          zIndex: 0,
        }}
      >
        <div
          className="LeftArc"
          style={{ width: 396, height: 1201, position: 'relative', transformOrigin: '0 0' }}
        >
          <div
            className="Rectangle3"
            style={{ height: 1196, left: 1, top: 0, position: 'absolute', transformOrigin: '0 0' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="395"
              height="817"
              viewBox="0 0 395 817"
              fill="none"
              transform="rotate(157.74deg)"
            >
              <path
                d="M735.437 788.519L666.95 816.547C666.95 816.547 149.25 726.441 28.6054 431.65C-92.0388 136.86 213.951 -290.344 213.951 -290.344L282.437 -318.372C282.437 -318.372 -41.5866 118.889 78.1194 411.387C197.825 703.885 735.437 788.519 735.437 788.519Z"
                fill="#15AEFF"
              />
            </svg>
          </div>
          <div
            className="Rectangle4"
            style={{ height: 1201, left: -22, top: 0, position: 'absolute', transformOrigin: '0 0' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="418"
              height="826"
              viewBox="0 0 418 826"
              fill="none"
              transform="rotate(157.74deg)"
            >
              <path
                d="M736.225 797.609L667.738 825.637C667.738 825.637 149.595 734.45 28.4466 438.427C-92.702 142.404 212.845 -285.881 212.845 -285.881L281.332 -313.91C281.332 -313.91 -42.2458 124.442 77.9606 418.163C198.167 711.884 736.225 797.609 736.225 797.609Z"
                fill="#FF555D"
              />
            </svg>
          </div>
          <div
            className="Rectangle2"
            style={{ height: 1196, left: -11.03, top: 0, position: 'absolute', transformOrigin: '0 0' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="407"
              height="822"
              viewBox="0 0 407 822"
              fill="none"
              transform="rotate(157.74deg)"
            >
              <path
                d="M735.405 793.442L666.919 821.471C666.919 821.471 149.218 731.365 28.5742 436.574C-92.0701 141.783 213.919 -285.42 213.919 -285.42L282.406 -313.449C282.406 -313.449 -41.6178 123.812 78.0881 416.311C197.794 708.809 735.405 793.442 735.405 793.442Z"
                fill="#B66CFF"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Arc Illustrations */}
      <div
        className="right-arc"
        style={{
          width: '734.692px',
          height: '587.586px',
          position: 'absolute',
          top: 800,
          flexShrink: 0,
          zIndex: 0,
        }}
      >
        <img src={right_arc} alt="Right Arc" style={{ width: '100%', height: '100%' }} />
      </div>
      <div
        className="right-arc2"
        style={{
          width: '977.167px',
          position: 'absolute',
          bottom: -100,
          right: 0,
          flexShrink: 0,
          zIndex: 0,
        }}
      >
        <img src={right_arc2} alt="Right Arc 2" style={{ width: '100%' }} />
      </div>

      {/* Full-Screen Blur Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(20, 20, 20, 0.7)',
          backdropFilter: 'blur(10px)',
          zIndex: 1,
        }}
      />

      {/* Foreground Text Content */}
      <div
        className="text-content"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px 20px',
          marginTop: '100px', // push content below the navigation bar
          minHeight: 'calc(100vh - 100px)', // center within remaining viewport
        }}
      >
        <div style={{ maxWidth: '900px', color: '#fff', textAlign: 'center' }}>
          {/* Header */}
          <h1
            style={{
              fontFamily: 'NT Brick Sans, sans-serif',
              fontSize: '3rem',
              marginBottom: '40px',
            }}
          >
            Queen's Game Development Club (QGDC)
          </h1>
          <p
            style={{
              fontFamily: 'Archivo Black, sans-serif',
              fontSize: '1.25rem',
              marginBottom: '40px',
              lineHeight: 1.5,
            }}
          >
            Officially recognized by the AMS at Queen’s University, the Queen’s Game Development Club is a hub for passionate game devs in Kingston.
          </p>

          {/* Our Mission */}
          <h2
            style={{
              fontFamily: 'NT Brick Sans, sans-serif',
              fontSize: '2.5rem',
              marginBottom: '20px',
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontFamily: 'Archivo Black, sans-serif',
              fontSize: '1.25rem',
              marginBottom: '40px',
              lineHeight: 1.5,
            }}
          >
            We empower, connect, and mentor aspiring game developers through hands-on projects,
            dynamic community meetups, and innovative learning experiences.
          </p>

          {/* Join Our Community */}
          <h2
            style={{
              fontFamily: 'NT Brick Sans, sans-serif',
              fontSize: '2.5rem',
              marginBottom: '20px',
            }}
          >
            Join Our Community
          </h2>
          <p
            style={{
              fontFamily: 'Archivo Black, sans-serif',
              fontSize: '1.25rem',
              marginBottom: '40px',
              lineHeight: 1.5,
            }}
          >
            Passionate about game development? Be a part of our vibrant community where creativity and innovation thrive.
          </p>
        </div>

        <div> {/** vertical container. */}
        <div className="WhyYouShouldJoinUs"
          style={{ color: 'white', fontSize: 40, fontFamily: 'NT Brick Sans', fontWeight: '700', wordWrap: 'break-word'}}>
        </div>
        
        <div 
          style={{maxWidth: 819, marginTop: 0}}>  
        </div>
        <div style={{maxWidth: '100%', marginTop: 0, marginBottom: 100,
          color: 'white', fontSize: 24, fontFamily: 'NT Brick Sans', 
          fontWeight: '400', wordWrap: 'break-word', display: 'flex',
          justifyContent: 'center' }}
            className="flex items-center justify-center">
              <a 
            href='https://forms.gle/HWqW5cS3cbxraV2u5' target="_blank" rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}    // Removes default link styling
          >
          <button className="mt-6 px-6 py-3 border-2 border-purple-600 text-white font-bold rounded-md bg-purple-600 hover:bg-purple-700 transition">
        Join Us Now
      </button>
      </a>
        </div>
      </div>

       {/* { Leader Ship} */}
       <section className='w-full bg-custom-purple'>
        <div className='mx-auto sm:p-10 max-w-8xl '>
          <h2 className='pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>Our Team</h2>
          <div className='md:flex md:justify-center'>
            <div className='grid grid-cols-1 justify-items-center'>
              {/* CHAIR */}
              <Person name='Lillie Amos' title='Chair' image={Lillie} />
            </div>
          </div>
          {/* Website Section */}
          <div className="w-full">
            <h2 className='w-full pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>
              Website
            </h2>
          </div>

          {/* WEBSITE TEAM HEADSHOTS*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit justify-items-center gap-x-1 gap-y-4'>

            <Person name='Isaiah Wuthrich' title='Website Director' image={Isaiah} />
            <Person name='Christopher Gil' title='Frontend Developer' image={Chris} />
            <Person name='Kevin Valencia' title='Frontend Developer' image={temp} />
            <Person name='Techmeng Aing' title='Backend Developer' image={Techmeng} />
            <Person name='Abdullah Mohsin' title='Backend Developer' image={Abdullah} />
            <Person name='Renee Kim' title='UI/UX Designer' image={Renee} />
          </div>

          {/* Marketing Section txt*/}
          <div className="w-full">
            <h2 className='w-full pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>
              Marketing
            </h2>
          </div>

          {/* MARKETING TEAM HEADSHOTS*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit justify-items-center gap-8'>
            <Person name='Mehr Chelani' title='Marketing Director' image={Mehr} />
            <Person name='Gabriel Dimovski' title='Videographer' image={Gabriel} />
            <Person name='Basma Azeem' title='Social Media Manager' image={Basma} />
            <Person name='Phoebe Chan' title='Graphic Designer' image={Phoebe} />
            <Person name='Ananya Kollipara' title='Graphic Designer' image={Ananya} />
            <Person name='Alyssa Zhao' title='Graphic Designer' image={Alyssa} />
          </div>
          {/* Events Section txt*/}
          <div className="w-full">
            <h2 className='w-full pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>
              Events
            </h2>
          </div>

          {/* EVENTS TEAM HEADSHOTS */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center'>
            <Person name='Tracy Chan' title='Events Director' image={Tracy} />
            <Person name='Rounika Saxena' title='Events Organizer' image={Rounika} />
            <Person name='Vivian Webster' title='Events Coordinator' image={Vivian} />
            <Person name='Arlen Smith' title='Events Coordinator' image={Arlen} />
          </div>
          {/* Finance Section txt*/}
          <div className="w-full">
            <h2 className='w-full pt-10 mb-10 text-3xl font-bold text-center text-white lg:text-7xl sm:text-5xl xs:text-4xl font-brick'>
              Finance
            </h2>
          </div>

          {/* Finance TEAM HEADSHOTS*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 justify-items-center whitespace-nowrap '>
          <Person name='Sarah Mohammad' title='Finance Director' image={Sarah} />
          <Person name='Mitch Turner' title='Budget Manager' image={Mitch} />
          </div>
        </div>
      </section>
      </div>

      {/*
      <div style={{display: 'flex', position: 'relative', justifyContent: "flex-end",flexDirection: 'row' }}>
        <div>
          <div className="WhatSOurGoal"
            style={{ textAlign: 'right', color: 'white', fontSize: 60, fontFamily: 'NT Brick Sans', fontWeight: '700', wordWrap: 'break-word'}}>
              Community Track
          </div>
          <div className="lorem2" 
            style={{maxWidth: 776,  textAlign: 'right', color: 'white', fontSize: 32, fontFamily: 'Archivo Black', fontWeight: '400', wordWrap: 'break-word'}}>
            The Community Track is the core experience and programming of the QGDC, open to all club participants.
            We foster a community through weekly, in-person club meetups, where the QGDC hosts speaker series, Dev Hubs, and educational workshops. 
The QGDC nurtures those in this track through regular, in-person club meetups,
where the QGDC hosts speaker series, educational workshops, and Dev Hubs.

You will get the opportunity to embark on the Sorcerer's Quest, together with your fellow game devs.
We manage an active list of Community Projects on this website and in our Discord server.
Did we mention that we have a vibrant Discord server?
          </div>
        </div>
      </div>

      <div>
        <div className="WhatIsQgdc" style={{color: 'white', fontSize: 60, fontFamily: 'NT Brick Sans', fontWeight: '700', wordWrap: 'break-word'}}>
        Professional Track
        </div>
        <div className="lorem1" 
        style={{maxWidth: 865, color: 'white', fontSize: 32, fontFamily: 'Archivo Black', fontWeight: '400', wordWrap: 'break-word'}}>
          We incubate Gamedev Teams each year towards the creation of a complete, shipping game.
          
          We provide networking opportunities via the year end "Tradeshow", where the Gamedev Teams will present the fruit of their labour.
        </div>
      </div>
      */}


      {/* Mobile Friendly Styles */}
      <style>{`
        @media (max-width: 768px) {
          .text-content {
            padding: 30px 10px !important;
            margin-top: 80px !important;
            min-height: calc(100vh - 80px) !important;
          }
          .text-content h1 {
            font-size: 2.5rem !important;
          }
          .text-content h2 {
            font-size: 2rem !important;
          }
          .text-content p {
            font-size: 1rem !important;
          }
          .left-arc, .right-arc, .right-arc2 {
            display: none !important;
          }
        }
      `}</style>
    </div>

    
  );

  
};

export default About;
