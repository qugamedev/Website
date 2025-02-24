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
      ref.current.rotation.y += 0.01;
    }
  });

  const material = new MeshBasicMaterial({
    color: '#B66cff',
    wireframe: true
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
  <div className="About" style={{width: "100%", position: "relative", background: '#212121'}}>
    
    {/* BEGIN BACKGROUND ELEMENTS */}
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0
    }}>
      
      { /* Three.js Canvas */ }
      <Canvas 
      id="logo_canvas"
      style={{ position: 'absolute', left: 0, zIndex: 0, width: '100%', height:  802}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>

       
      {/* BEGIN LEFT ARC */}
      {/*
      <div style={{display: 'flex', position: 'absolute', top:0, right: 0, justifyContent: "flex-end",flexDirection: 'row' }}>
        <div className="LeftArc" style={{width: 396, height: 1201, position: 'relative',   transformOrigin: '0 0'}}>
          <div className="Rectangle3" style={{height: 1196, left: 1, top: 0, position: 'absolute',  transformOrigin: '0 0',  }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="395" height="817" viewBox="0 0 395 817" fill="none" transform='rotate(157.74deg)'>
              <path d="M735.437 788.519L666.95 816.547C666.95 816.547 149.25 726.441 28.6054 431.65C-92.0388 136.86 213.951 -290.344 213.951 -290.344L282.437 -318.372C282.437 -318.372 -41.5866 118.889 78.1194 411.387C197.825 703.885 735.437 788.519 735.437 788.519Z" fill="#15AEFF"/>
            </svg>
          </div>
          <div className="Rectangle4" 
          style={{ height: 1201,   left: -22, top: 0, position: 'absolute', transformOrigin: '0 0',  }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="418" height="826" viewBox="0 0 418 826" fill="none" transform='rotate(157.74deg)'>
              <path d="M736.225 797.609L667.738 825.637C667.738 825.637 149.595 734.45 28.4466 438.427C-92.702 142.404 212.845 -285.881 212.845 -285.881L281.332 -313.91C281.332 -313.91 -42.2458 124.442 77.9606 418.163C198.167 711.884 736.225 797.609 736.225 797.609Z" fill="#FF555D"/>
            </svg>
          </div>
          <div className="Rectangle2"
          style={{ height: 1196, left: -11.03, top: 0, position: 'absolute', transformOrigin: '0 0', }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="407" height="822" viewBox="0 0 407 822" fill="none" transform='rotate(157.74deg)'>
              <path d="M735.405 793.442L666.919 821.471C666.919 821.471 149.218 731.365 28.5742 436.574C-92.0701 141.783 213.919 -285.42 213.919 -285.42L282.406 -313.449C282.406 -313.449 -41.6178 123.812 78.0881 416.311C197.794 708.809 735.405 793.442 735.405 793.442Z" fill="#B66CFF"/>
            </svg>
          </div>
        </div>
      </div>
      */}
      {/* END LEFT ARC */}

      {/*
      <div style={{width: "734.692px",
        height: "587.586px",
        position: 'absolute',
        top: 800,
        flexShrink: 0
        }}>
        <img src={right_arc}   />
      </div>
       
      <div style={{width: "977.167",
          position: "absolute",
          bottom: -100,
          right: 0,
          flexShrink: 0}}>
        <img src={right_arc2}/>
      </div>
      */}
      
      {/*
      <div className="Dpad" style={{width: 228.21, height: 227.33, }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="229" height="228" viewBox="0 0 229 228" fill="none">
          <path d="M32.0692 103.844L64.7159 92.9574L54.2188 59.0986C52.8267 54.6086 53.2115 49.729 55.2884 45.5333C57.3654 41.3376 60.9643 38.1694 65.2935 36.7257L97.9403 25.8388C102.27 24.3951 106.974 24.7942 111.02 26.9482C115.065 29.1022 118.12 32.8348 119.512 37.3248L130.009 71.1836L162.656 60.2966C166.986 58.853 171.69 59.252 175.736 61.4061C179.781 63.5601 182.836 67.2926 184.228 71.7826L194.725 105.641C196.117 110.131 195.733 115.011 193.656 119.207C191.579 123.402 187.98 126.571 183.651 128.014L151.004 138.901L161.501 172.76C162.893 177.25 162.508 182.129 160.431 186.325C158.354 190.521 154.756 193.689 150.426 195.133L117.78 206.02C113.45 207.463 108.745 207.064 104.7 204.91C100.654 202.756 97.5995 199.024 96.2075 194.534L85.7103 160.675L53.0636 171.562C48.7343 173.006 44.0294 172.606 39.9839 170.452C35.9384 168.298 32.8836 164.566 31.4916 160.076L20.9944 126.217C19.6024 121.727 19.9872 116.848 22.0641 112.652C24.141 108.456 27.7399 105.288 32.0692 103.844Z" fill="#15AEFF"/>
          <path d="M44.5626 100.242L77.2094 89.3548L66.7122 55.496C65.3201 51.0061 65.7049 46.1265 67.7819 41.9308C69.8588 37.7351 73.4577 34.5669 77.787 33.1232L110.434 22.2363C114.763 20.7926 119.468 21.1916 123.513 23.3457C127.559 25.4997 130.614 29.2323 132.006 33.7222L142.503 67.581L175.15 56.6941C179.479 55.2504 184.184 55.6495 188.229 57.8035C192.275 59.9575 195.33 63.6901 196.722 68.1801L207.219 102.039C208.611 106.529 208.226 111.408 206.149 115.604C204.072 119.8 200.473 122.968 196.144 124.412L163.497 135.299L173.994 169.157C175.386 173.647 175.002 178.527 172.925 182.723C170.848 186.918 167.249 190.087 162.92 191.53L130.273 202.417C125.944 203.861 121.239 203.462 117.193 201.308C113.148 199.154 110.093 195.421 108.701 190.931L98.2037 157.072L65.557 167.959C61.2277 169.403 56.5228 169.004 52.4773 166.85C48.4318 164.696 45.377 160.963 43.985 156.473L33.4878 122.615C32.0958 118.125 32.4806 113.245 34.5575 109.049C36.6344 104.854 40.2334 101.685 44.5626 100.242Z" fill="#FF555D"/>
          <path d="M39.3348 102.043L71.9816 91.1561L61.4844 57.2973C60.0924 52.8073 60.4771 47.9278 62.5541 43.732C64.631 39.5363 68.2299 36.3681 72.5592 34.9244L105.206 24.0375C109.535 22.5938 114.24 22.9929 118.286 25.1469C122.331 27.301 125.386 31.0335 126.778 35.5235L137.275 69.3823L169.922 58.4954C174.251 57.0517 178.956 57.4508 183.002 59.6048C187.047 61.7588 190.102 65.4914 191.494 69.9813L201.991 103.84C203.383 108.33 202.998 113.21 200.921 117.405C198.844 121.601 195.246 124.769 190.916 126.213L158.269 137.1L168.767 170.959C170.159 175.449 169.774 180.328 167.697 184.524C165.62 188.72 162.021 191.888 157.692 193.332L125.045 204.218C120.716 205.662 116.011 205.263 111.965 203.109C107.92 200.955 104.865 197.222 103.473 192.732L92.976 158.874L60.3292 169.761C56 171.204 51.2951 170.805 47.2495 168.651C43.204 166.497 40.1492 162.765 38.7572 158.275L28.26 124.416C26.868 119.926 27.2528 115.046 29.3297 110.851C31.4066 106.655 35.0056 103.487 39.3348 102.043Z" fill="#B66CFF"/>
        </svg>
      </div>
    
      <div className="Controller" style={{width: 218.51, height: 193.50, position: 'absolute', top: 1100, right: 300  }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="219" height="194" viewBox="0 0 219 194" fill="none">
          <path d="M65.0173 52.7275C59.8392 52.9976 55.2295 55.1207 51.6252 58.088L44.0822 64.3026C41.1953 66.6812 38.9172 69.6572 37.4221 73.0031C35.9269 76.3491 35.2543 79.9765 35.4556 83.6081C36.8686 108.68 38.685 128.761 43.8083 143.887C49.0721 159.412 57.9866 170.19 73.5375 175.945C83.9293 179.789 93.6592 172.534 95.5415 163.523C97.0063 156.472 98.4309 149.413 99.8153 142.348C100.365 139.534 101.547 136.866 103.281 134.529C105.014 132.191 107.257 130.238 109.857 128.804L145.434 109.231C150.687 106.341 157.018 105.787 162.767 107.715C169.88 110.106 177.006 112.46 184.145 114.777C193.274 117.726 204.738 113.326 206.437 102.83C208.982 87.1201 203.643 74.3742 192.168 62.2718C180.98 50.4771 163.638 38.9375 141.56 25.2393C138.36 23.2574 134.727 21.9988 130.939 21.5596C127.15 21.1205 123.307 21.5124 119.701 22.7055L110.286 25.8208C105.784 27.3079 101.546 30.0525 98.7118 34.1905C98.1498 35.0101 97.5989 35.8367 97.0593 36.6698C95.0127 39.8126 92.3387 42.4026 89.1791 44.1409L78.8307 49.834C75.6673 51.5744 71.9786 52.4896 68.1006 52.6015C67.0723 52.6318 66.0445 52.6738 65.0173 52.7275ZM103.629 79.4089C101.624 80.5118 99.2415 80.8107 97.0055 80.2398C94.7694 79.6689 92.863 78.2749 91.7055 76.3646C90.548 74.4543 90.2344 72.184 90.8335 70.0533C91.4327 67.9226 92.8955 66.106 94.9003 65.0031C96.9051 63.9001 99.2876 63.6012 101.524 64.1722C103.76 64.7431 105.666 66.137 106.824 68.0474C107.981 69.9577 108.295 72.2279 107.696 74.3586C107.096 76.4893 105.634 78.306 103.629 79.4089Z" fill="#FF555D"/>
          <path d="M59.8776 60.4233C54.6996 60.6934 50.0898 62.8165 46.4855 65.7838L38.9426 71.9984C36.0556 74.377 33.7776 77.353 32.2824 80.6989C30.7873 84.0449 30.1146 87.6723 30.3159 91.3039C31.729 116.375 33.5453 136.457 38.6687 151.583C43.9325 167.107 52.847 177.886 68.3978 183.641C78.7896 187.484 88.5195 180.23 90.4018 171.218C91.8666 164.167 93.2913 157.109 94.6757 150.043C95.2257 147.23 96.4078 144.562 98.1411 142.225C99.8743 139.887 102.118 137.934 104.717 136.5L140.294 116.927C145.547 114.037 151.879 113.483 157.627 115.41C164.74 117.802 171.866 120.156 179.005 122.473C188.134 125.422 199.598 121.021 201.297 110.526C203.843 94.8159 198.504 82.07 187.029 69.9676C175.841 58.1729 158.498 46.6333 136.421 32.9351C133.221 30.9532 129.588 29.6946 125.799 29.2554C122.011 28.8163 118.167 29.2082 114.562 30.4013L105.146 33.5166C100.645 35.0037 96.4066 37.7483 93.5721 41.8863C93.0101 42.7059 92.4593 43.5325 91.9197 44.3656C89.873 47.5084 87.1991 50.0984 84.0394 51.8367L73.6911 57.5298C70.5276 59.2702 66.839 60.1854 62.961 60.2973C61.9327 60.3276 60.9048 60.3696 59.8776 60.4233ZM98.4891 87.1047C96.4843 88.2076 94.1019 88.5065 91.8658 87.9356C89.6298 87.3647 87.7233 85.9707 86.5658 84.0604C85.4084 82.1501 85.0947 79.8798 85.6939 77.7491C86.293 75.6184 87.7559 73.8018 89.7607 72.6989C91.7655 71.5959 94.1479 71.2971 96.384 71.868C98.62 72.4389 100.526 73.8328 101.684 75.7432C102.841 77.6535 103.155 79.9237 102.556 82.0544C101.957 84.1851 100.494 86.0018 98.4891 87.1047Z" fill="#15AEFF"/>
          <path d="M61.6447 56.2256C56.4666 56.4957 51.8569 58.6187 48.2526 61.586L40.7097 67.8006C37.8227 70.1792 35.5447 73.1552 34.0495 76.5012C32.5544 79.8471 31.8817 83.4745 32.083 87.1061C33.4961 112.178 35.3124 132.259 40.4358 147.385C45.6996 162.91 54.614 173.688 70.1649 179.443C80.5567 183.287 90.2866 176.032 92.1689 167.021C93.6337 159.97 95.0584 152.911 96.4428 145.846C96.9927 143.032 98.1749 140.364 99.9081 138.027C101.641 135.689 103.885 133.736 106.484 132.302L142.061 112.73C147.315 109.839 153.646 109.285 159.395 111.213C166.507 113.604 173.633 115.958 180.772 118.275C189.901 121.224 201.365 116.824 203.064 106.328C205.61 90.6181 200.271 77.8722 188.796 65.7698C177.608 53.9751 160.265 42.4356 138.188 28.7373C134.988 26.7554 131.355 25.4968 127.566 25.0577C123.778 24.6185 119.934 25.0105 116.329 26.2036L106.913 29.3188C102.412 30.8059 98.1737 33.5505 95.3392 37.6886C94.7772 38.5082 94.2263 39.3347 93.6868 40.1679C91.6401 43.3107 88.9662 45.9006 85.8065 47.6389L75.4582 53.332C72.2947 55.0724 68.6061 55.9877 64.7281 56.0995C63.6998 56.1298 62.6719 56.1718 61.6447 56.2256ZM100.256 82.907C98.2514 84.0099 95.8689 84.3088 93.6329 83.7379C91.3968 83.1669 89.4904 81.773 88.3329 79.8626C87.1755 77.9523 86.8618 75.6821 87.461 73.5514C88.0601 71.4207 89.523 69.604 91.5278 68.5011C93.5325 67.3982 95.915 67.0993 98.1511 67.6702C100.387 68.2411 102.294 69.6351 103.451 71.5454C104.608 73.4558 104.922 75.726 104.323 77.8567C103.724 79.9874 102.261 81.804 100.256 82.907Z" fill="#ADFFE3"/>
        </svg>
      </div>

      <div className="Vector10" 
      style={{width: 35, height: 150,   transformOrigin: '0 0' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="116" height="136" viewBox="0 0 116 136" fill="none" transform='rotate(30deg)'>
          <path d="M5 122.904C5 122.904 35.56 139.972 45.2567 123.177C54.9535 106.382 22.8066 92.0619 32.5033 75.2666C42.2001 58.4714 70.675 79.1514 80.3718 62.3561C90.0685 45.5608 57.9216 31.2409 67.6184 14.4456C77.3151 -2.34967 110.311 10.5 110.311 10.5" stroke="#D0C9FF" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      */
      }

    </div>
    {/* END BACKGROUND ELEMENTS */}

    {/* BEGIN PAGE TEXT */}
    <div
    className="about_content pl-3 pr-3 sm:pl-10 sm:pr-10"
      style={{ display: 'flex', flexDirection: 'column', gap: 30, zIndex: 1, position: "relative",
      }}>

      <div> {/** vertical container. */}
        <div className="WhatIsQgdc" style={{ marginTop: 20, color: 'white', fontSize: 40, fontFamily: 'NT Brick Sans', fontWeight: '700', wordWrap: 'break-word'}}>
          What is the QGDC?
        </div>
        <div 
        /*className="lorem1 ml-[0px] sm:ml-[8px]" */
        style={{
          maxWidth: 865, marginTop: 10, color: 'white', fontSize: 24, fontFamily: 'Archivo Black', fontWeight: '400', wordWrap: 'break-word'}}>
          Officially recognized by the AMS at Queen’s University,
          the Queen’s Game Development Club is a hub for passionate game devs in Kingston.
          
          {/** We are a club .
          Our club was active from 2010 to 2013 and was recently re-ratified in 2021. */}
          
        
        </div>
      </div>

      <div style={{display: 'flex', position: 'relative', justifyContent: "flex-end",flexDirection: 'row' }}>
        <div> {/** vertical container. */}
          <div className="WhatSOurGoal"
            style={{ textAlign: 'right', color: 'white', fontSize: 40, fontFamily: 'NT Brick Sans', fontWeight: '700', wordWrap: 'break-word'}}>
              What’s our Goal?
          </div>
          <div 
          /*className="lorem2 mr-[0px] sm:mr-[8px]" */
            style={{maxWidth: 776,   marginTop: 10,
            
            textAlign: 'right', color: 'white', fontSize: 24, fontFamily: 'Archivo Black', fontWeight: '400', wordWrap: 'break-word'}}>
            We aim to empower, connect, and mentor game development enthusiasts.
          </div>
        </div>
      </div>

      <div> {/** vertical container. */}
        <div className="WhyYouShouldJoinUs"
          style={{ color: 'white', fontSize: 40, fontFamily: 'NT Brick Sans', fontWeight: '700', wordWrap: 'break-word'}}>
            Why you should join us!
        </div>
        <div 
     /*   className="lorem3 ml-[0px] sm:ml-[8px]" */
          style={{maxWidth: 819, marginTop: 10, 
          color: 'white', fontSize: 24, fontFamily: 'Archivo Black', fontWeight: '400', wordWrap: 'break-word'}}>  

          If you enjoy building games, we invite you to come out to our regular
          club meetups for speaker presentations and hands-on game development!
          And if you’re super ambitious, we’re here to inspire and prepare you
          in joining one of our gamedev teams, offering experience in shipping a
          complete game.
          <br />
          <br />
          <br />
          
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
        Join Us
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
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit justify-items-center gap-8'>
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


    </div>
    {/* END PAGE TEXT */}

  </div>
)
}

export default About;
