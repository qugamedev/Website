import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import qgdc_model from '../assets/qgdc.obj';
import right_arc from "../assets/images/right arc.svg";
import right_arc2 from "../assets/images/right arc 2.svg";

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
          <a
            href="https://forms.gle/HWqW5cS3cbxraV2u5"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '15px 30px',
              background: 'linear-gradient(45deg, #B66cff, #FF555D)',
              color: '#fff',
              fontSize: '1.5rem',
              fontFamily: 'NT Brick Sans, sans-serif',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Join Us Now
          </a>
        </div>
      </div>

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
