import React, { useRef, useState, useEffect, useMemo } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import discord_logo from "../assets/images/logos/discord_logo.svg";

import { MeshBasicMaterial } from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import qgdc_model from "../assets/qgdc.obj";

import right_arc from "../assets/images/right arc.svg";
import right_arc2 from "../assets/images/right arc 2.svg";

function SpinningCube() {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    // cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attach='material' color='orange' />
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
      <meshBasicMaterial color='#B66cff' wireframe />
    </mesh>
  );
}

function Model() {
  const obj = useLoader(OBJLoader, qgdc_model);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  const material = new MeshBasicMaterial({
    color: "#B66cff",
    wireframe: true,
  });

  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return <primitive object={obj} ref={ref} />;
}

function About() {
  return (
    <div className='About' style={{ width: "100%", position: "relative", background: "#212121" }}>
      {/* BEGIN BACKGROUND ELEMENTS */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        {/* Three.js Canvas */}
        <Canvas id='logo_canvas' style={{ position: "absolute", left: 0, zIndex: 0, width: "100%", height: 802 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model />
        </Canvas>
      </div>
      {/* END BACKGROUND ELEMENTS */}
      {/* 

Titles:
lg:text-7xl 
sm:text-5xl 
xs:text-4xl
Default: text-3xl

Text: 
lg:text-4xl
sm:text-3xl 
xs:text-2xl
Default: text-xl 


*/}

      {/* BEGIN PAGE TEXT */}
      {/* BEGIN PAGE TEXT */}
      <div
        className='about_content pl-3 pr-3 sm:pl-10 sm:pr-10'
        style={{ display: "flex", flexDirection: "column", gap: 30, zIndex: 1, position: "relative" }}
      >
        <div className='sm:pt-10 text-center sm:text-left max-w-[1200px]'>
          <div className='WhatIsQgdc text-white font-brick xs:leading-normal sm:leading-normal md:leading-normal lg:leading-normal  lg:text-7xl sm:text-5xl xs:text-4xl text-3xl'>
            What is the QGDC?
          </div>
          <div className='mt-2 pt-5 text-white  lg:text-4xl sm:text-3xl xs:text-2xl text-xl'>
            Officially recognized by the AMS at Queen’s University, the Queen’s Game Development Club is a hub for passionate game devs in Kingston.
          </div>
        </div>

        <div className='flex relative  text-center sm:text-right  justify-end '>
          <div className=' pt-20 sm:pt-32 max-w-[1200px]'>
            <div className='WhatSOurGoal text-white font-brick xs:leading-normal sm:leading-normal md:leading-normal lg:leading-normal  lg:text-7xl sm:text-5xl xs:text-4xl text-3xl'>
              What’s our Goal?
            </div>
            <div className='mt-2 pt-5 text-white lg:text-4xl sm:text-3xl xs:text-2xl text-xl'>
              We aim to empower, connect, and mentor game development enthusiasts.
            </div>
          </div>
        </div>

        <div className=' pt-20 sm:pt-32 text-center sm:text-left max-w-[1200px]'>
          <div className='WhyYouShouldJoinUs font-brick xs:leading-normal sm:leading-normal md:leading-normal lg:leading-normal text-white  lg:text-7xl sm:text-5xl xs:text-4xl text-3xl'>
            Why you should{" "}
            <a href='https://forms.gle/HWqW5cS3cbxraV2u5' target='_blank' className='text-[#B66cff] whitespace-nowrap'>
              &nbsp;join us.
            </a>
          </div>
          <div className='mt-2 pt-5 text-white lg:text-4xl  sm:text-3xl xs:text-2xl text-xl'>
            If you enjoy building games, we invite you to come out to our regular club meetups for speaker presentations and hands-on game
            development. And if you’re super ambitious, we’re here to inspire and prepare you in joining one of our gamedev teams, offering experience
            shipping a complete game.
          </div>
        </div>
      </div>

      {/* END PAGE TEXT */}
    </div>
  );
}



export default About;
