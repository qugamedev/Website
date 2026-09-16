import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

// Assets
import discord_logo from "../assets/images/logos/discord_logo.svg";
import youtube_logo from "../assets/images/logos/youtube_logo.svg";
import qgdc_logo from "../assets/images/logos/qgdc_logo.png";
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";
import qgdc_model from "../assets/qgdc.obj";
import right_arc from "../assets/images/right arc.svg";
import right_arc2 from "../assets/images/right arc 2.svg";

// Event Photos
import event_computing_showcase from "../assets/images/events/Computing-Showcase-W2026.jpg";
import event_game_jam           from "../assets/images/events/GameJam-F2025.jpg";
import event_general_meeting    from "../assets/images/events/General-Meeting-F2025.jpg";
import event_jeopardy           from "../assets/images/events/Jeopardy-W2025.jpg";
import event_qhacks_collab      from "../assets/images/events/QHacks-Collab-F2025.jpg";

// Headshots
import img_lillie    from "../assets/images/headshots/lillie.JPG";
import img_arlen     from "../assets/images/headshots/Arlen.jpg";
import img_christian from "../assets/images/headshots/Christian.jpg";
import img_cayla     from "../assets/images/headshots/Cayla.jpg";
import img_alex      from "../assets/images/headshots/Alex.jpg";
import img_ananya    from "../assets/images/headshots/Ananya.jpg";
import img_phoebe    from "../assets/images/headshots/Phoebe.jpg";
import img_evelyn    from "../assets/images/headshots/Evelyn.jpg";
import img_duncan    from "../assets/images/headshots/Duncan.jpg";
import img_lauren    from "../assets/images/headshots/Lauren.jpg";
import img_cade      from "../assets/images/headshots/Cade.jpg";
import img_maia      from "../assets/images/headshots/Maia.jpg";
import img_vivian    from "../assets/images/headshots/Vivian.jpg";
import img_ethan     from "../assets/images/headshots/Ethan.jpg";
import img_josh      from "../assets/images/headshots/Josh.jpg";

/* ─── Team Data ────────────────────────────────────────────────────── */
const CHAIRS = [
  { name: "Lillie Amos",  role: "Co-Chair", img: img_lillie },
  { name: "Arlen Smith",  role: "Co-Chair", img: img_arlen  },
];

const DEPARTMENTS = [
  {
    label: "Website Team",
    rows: [
      [
        { name: "Christian Fiorino", role: "Website Director",    img: img_christian },
        { name: "Cayla Wong",        role: "Front-End Developer", img: img_cayla     },
        { name: "Alex Georgiyev",    role: "Back-End Developer",  img: img_alex      },
      ],
    ],
  },
  {
    label: "Marketing Team",
    rows: [
      [
        { name: "Ananya Kollipara", role: "Marketing Director",   img: img_ananya },
      ],
      [
        { name: "Phoebe Chan",      role: "Graphic Designer",     img: img_phoebe },
        { name: "Evelyn Siewert",   role: "Graphic Designer",     img: img_evelyn },
        { name: "Duncan Mahar",     role: "Social Media Manager", img: img_duncan },
      ],
      [
        { name: "Lauren McQuat",    role: "Videographer",         img: img_lauren },
        { name: "Cade Menezes",     role: "Videographer",         img: img_cade   },
        { name: "Maia Turner",      role: "Finance Manager",      img: img_maia   },
      ],
    ],
  },
  {
    label: "Events Team",
    rows: [
      [
        { name: "Vivian Webster",  role: "Events Director",    img: img_vivian },
        { name: "Ethan Xu",        role: "Events Coordinator", img: img_ethan  },
        { name: "Josh Puusaari",   role: "Events Coordinator", img: img_josh   },
      ],
    ],
  },
];

/* ─── 3D wireframe model (moved from About.jsx) ─────────────────────── */
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

/* ─── Reusable member card ──────────────────────────────────────────── */
function MemberCard({ name, role, img, large = false }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative ${
          large ? "w-48 h-48 sm:w-56 sm:h-56" : "w-36 h-36 sm:w-40 sm:h-40"
        } mb-3`}
      >
        {/* Cyan offset (top-left) */}
        <div className="absolute inset-0 -translate-x-1 translate-y-1 bg-cyan-400 rounded-sm" />
        {/* Red offset (bottom-right) */}
        <div className="absolute inset-0 translate-x-1 -translate-y-1 bg-red-500 rounded-sm" />
        {/* Photo */}
        <img
          src={img}
          alt={name}
          className="relative w-full h-full object-cover rounded-sm"
        />
      </div>
      <p className="font-bold text-sm sm:text-base text-white text-center">{name}</p>
      <p className="text-xs sm:text-sm text-neutral-300 text-center">{role}</p>
    </div>
  );
}

/* ─── Flat department section ───────────────────────────────────────── */
function DepartmentGroup({ label, rows }) {
  return (
    <div className="mb-16">
      {/* Department label */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-white/20" />
        <span className="brick-sans text-2xl sm:text-3xl font-extrabold text-white/70 uppercase tracking-widest">
          {label}
        </span>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      {/* Explicit rows */}
      <div className="flex flex-col gap-12">
        {rows.map((row, i) => (
          <div key={i} className="flex justify-center gap-x-10 flex-wrap gap-y-10">
            {row.map((m) => (
              <MemberCard key={m.name} name={m.name} role={m.role} img={m.img} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const EVENTS = [
  { src: event_computing_showcase, name: "Computing Showcase (Winter 2026)", alt: "Computing Showcase, Winter 2026" },
  { src: event_game_jam,           name: "Game Jam (Fall 2025)",             alt: "Game Jam, Fall 2025" },
  { src: event_general_meeting,    name: "General Meeting (Fall 2025)",      alt: "General Meeting, Fall 2025" },
  { src: event_jeopardy,           name: "Jeopardy Night (Winter 2025)",     alt: "Jeopardy Night, Winter 2025" },
  { src: event_qhacks_collab,      name: "QHacks Collab (Fall 2025)",        alt: "QHacks Collab, Fall 2025" },
];
const EVENT_CARD_WIDTH = 320; // px, keep in sync with the inline style below
const EVENT_CARD_GAP = 24; // px, keep in sync with the gap-6 class below
const EVENT_SCROLL_SECONDS = 30; // higher = slower drift

function EventCarousel() {
  // Track is duplicated once so the loop can reset seamlessly at -50%.
  const trackWidth = EVENTS.length * (EVENT_CARD_WIDTH + EVENT_CARD_GAP);

  return (
    <div className="relative w-full max-w-6xl mx-auto select-none overflow-hidden">
      {/* Fade edges so images drift in/out smoothly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#111111] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#111111] to-transparent z-10" />

      <div
        className="flex gap-6 w-max"
        style={{
          animation: `event-marquee ${EVENT_SCROLL_SECONDS}s linear infinite`,
        }}
      >
        {/* Render the strip twice back-to-back for a seamless loop */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-6 shrink-0">
            {EVENTS.map((event, i) => (
              <div
                key={`${copy}-${i}`}
                className="group relative h-64 sm:h-80 rounded-lg overflow-hidden shrink-0"
                style={{ width: EVENT_CARD_WIDTH }}
              >
                <img
                  src={event.src}
                  alt={event.alt}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay with event name */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 bg-black/0 group-hover:bg-black/60 transition-colors duration-200">
                  <span className="font-archivo font-bold text-white text-base sm:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {event.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes event-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-${trackWidth}px); }
        }
      `}</style>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────── */
function Home() {
  const heroStyle = {
    backgroundImage: `url(${top_graphic_items})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="text-white bg-[#1a1a1a]">

      {/* ══════════════════════════════════════════════════
          EDGE DECORATION: magenta/purple halftone dot pattern
          Pinned to the outer left/right edges of the page,
          fading inward. Adapted from the designer's index.html.
         ══════════════════════════════════════════════════ */}
      <div className="hidden sm:block fixed top-0 left-0 h-screen w-20 md:w-24 z-40 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 halftone-dots-l" />
        <div className="absolute inset-0 halftone-dots-l2" style={{ left: '3px', top: '2px' }} />
      </div>
      <div className="hidden sm:block fixed top-0 right-0 h-screen w-20 md:w-24 z-40 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 halftone-dots-r" />
        <div className="absolute inset-0 halftone-dots-r2" style={{ right: '3px', top: '2px' }} />
      </div>

      <style>{`
        .halftone-dots-l {
          background-image: radial-gradient(circle, #ff00d4cc 4px, transparent 2px);
          background-size: 16px 16px;
          -webkit-mask-image: linear-gradient(to right, rgb(0, 0, 0) 0%, transparent 100%);
          mask-image: linear-gradient(to right, black 0%, transparent 100%);
        }
        .halftone-dots-l2 {
          background-image: radial-gradient(circle, #991cffcc 4px, transparent 2px);
          background-size: 16px 16px;
          -webkit-mask-image: linear-gradient(to right, rgb(0, 0, 0) 0%, transparent 100%);
          mask-image: linear-gradient(to right, black 0%, transparent 100%);
        }
        .halftone-dots-r {
          background-image: radial-gradient(circle, #ff00d4cc 4px, transparent 2px);
          background-size: 16px 16px;
          -webkit-mask-image: linear-gradient(to left, rgb(0, 0, 0) 0%, transparent 100%);
          mask-image: linear-gradient(to left, black 0%, transparent 100%);
        }
        .halftone-dots-r2 {
          background-image: radial-gradient(circle, #991cffcc 4px, transparent 2px);
          background-size: 16px 16px;
          -webkit-mask-image: linear-gradient(to left, rgb(0, 0, 0) 0%, transparent 100%);
          mask-image: linear-gradient(to left, black 0%, transparent 100%);
        }
      `}</style>

      {/* ══════════════════════════════════════════════════
          1. HERO / START SCREEN 
         ══════════════════════════════════════════════════ */}
      <section
        style={heroStyle}
        className="relative flex items-center h-screen px-6 sm:px-12 pt-16 sm:pt-20"
      >
        <div className="container mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="0"
            data-aos-offset="0"
          >
            <h1 className="max-w-5xl text-4xl sm:text-7xl md:text-8xl lg:text-9xl brick-sans font-extrabold leading-tight">
              <span className="block mb-2">Queen's Game</span>
              <span className="block">Development Club</span>
            </h1>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <p className="max-w-2xl mt-8 text-lg sm:text-xl lg:text-2xl font-archivo text-neutral-200">
              Queen's Game Development Club is dedicated to enriching students'
              experience in all areas of game development.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. ABOUT US DESCRIPTION
         ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 px-6 sm:px-12" style={{ background: '#121212' }}>

        {/* 3D Background Canvas */}
        <Canvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
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
        <div className="relative container mx-auto max-w-3xl text-center" style={{ zIndex: 2 }}>
          <p className="text-base sm:text-lg text-neutral-200 mb-10 leading-relaxed font-archivo">
            Officially recognized by the AMS at Queen's University, the Queen's
            Game Development Club is a hub for passionate game devs in Kingston.
          </p>

          {/* OUR MISSION */}
          <h2 className="brick-sans text-4xl sm:text-5xl font-extrabold mb-6 uppercase">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 mb-16 leading-relaxed font-archivo">
            We empower, connect, and mentor aspiring game developers through
            hands-on projects, dynamic community meetups, and innovative
            learning experiences.
          </p>

          {/* JOIN OUR COMMUNITY */}
          <h2 className="brick-sans text-4xl sm:text-5xl font-extrabold mb-6 uppercase">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 mb-10 leading-relaxed font-archivo">
            Passionate about game development? Be a part of our vibrant
            community where creativity and innovation thrive.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfIM6bP599fRlN6ebaKe1h_lR5QGIu50TTjzRcSiRMhtoW6zQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-500 transition text-white font-bold font-archivo px-8 py-3 rounded-md text-base sm:text-lg"
          >
            Official Club Member Application Form
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2.5 JOIN OUR DISCORD
         ══════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] py-20 px-6 sm:px-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="brick-sans text-4xl sm:text-5xl font-extrabold mb-6 uppercase">
            Our Discord Server
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 mb-10 leading-relaxed font-archivo">
            Join our Discord server for the latest updates on
            events, weekly meeting times, and everything QGDC related. With channels
            built for every kind of game developer, there's a spot for everyone. Come hang out and meet the
            community!
          </p>

          <a
            href="https://discord.gg/PDGjGTJR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1ECCFC] hover:bg-[#18A3CA] transition text-white font-bold font-archivo px-8 py-3 rounded-md text-base sm:text-lg"
          >
            Join Us Now
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. EVENT DISPLAY  (auto-advancing carousel)
         ══════════════════════════════════════════════════ */}
      <section className="bg-[#111111] py-20 px-6 sm:px-12">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-archivo text-center mb-10">
            Check Out Our Events
          </h2>
          <EventCarousel />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. SPEAKER SERIES
         ══════════════════════════════════════════════════ */}
      <section className="bg-purple-600 py-20 px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl">

          {/* Title */}
          <h2 className="brick-sans text-4xl sm:text-6xl font-extrabold mb-14 sm:mb-16 uppercase text-center text-white">
            Speaker Series
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-14 md:gap-16">

            {/* Clickable YouTube thumbnail with chromatic-aberration border */}
            <div className="relative w-full md:w-1/2 shrink-0 mt-2 mb-2">
              {/* Cyan offset (top-right) */}
              <div className="absolute inset-0 translate-x-4 -translate-y-4 bg-[#1ECCFC] rounded-sm" />
              {/* Magenta offset (bottom-left) */}
              <div className="absolute inset-0 -translate-x-4 translate-y-4 bg-[#FE48EC] rounded-sm" />

              <a
                href="https://www.youtube.com/watch?v=4qppaBHFzzw"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video rounded-sm overflow-hidden group block"
              >
                <img
                  src="https://i.ytimg.com/vi/4qppaBHFzzw/maxresdefault.jpg"
                  alt="Q&A with Daniel Mullins"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fall back to hqdefault if maxresdefault isn't available
                    e.currentTarget.src = "https://i.ytimg.com/vi/4qppaBHFzzw/hqdefault.jpg";
                  }}
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Rounded purple info card */}
            <div className="w-full md:w-1/2 bg-purple-500/70 rounded-2xl p-8 sm:p-10 text-white">
              <p className="font-archivo font-bold text-sm sm:text-base leading-relaxed mb-8">
                Watch exclusive interviews and QA sessions of leading speakers,
                game developers and creators within the video game development
                industry.
              </p>

              <div className="h-px bg-white/40 mb-8" />

              <p className="font-archivo font-bold text-sm sm:text-base mb-4">
                Check out our Youtube channel
              </p>

              <a
                href="https://www.youtube.com/@qugamedev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white rounded-full pl-2 pr-6 py-2 shadow-lg shadow-black/40 hover:bg-purple-100 hover:shadow-xl transition w-fit max-w-full"
              >
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                  <img
                    src={qgdc_logo}
                    alt=""
                    className="absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={youtube_logo}
                    alt=""
                    className="absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <span className="font-archivo font-bold text-purple-900 text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                  Queen's Game Development Club
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. OUR TEAM
         ══════════════════════════════════════════════════ */}
      <section className="bg-purple-500 py-20 px-6 sm:px-12">
        <div className="container mx-auto">
          {/* Leadership header, styled consistently with department headers below */}
          <div className="flex items-center gap-4 mb-14">
            <div className="flex-1 h-px bg-white/20" />
            <span className="brick-sans text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-widest text-center">
              Leadership
            </span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Co-Chairs row (2, centred) */}
          <div className="flex justify-center gap-16 mb-16 flex-wrap">
            {CHAIRS.map((m) => (
              <MemberCard key={m.name} name={m.name} role={m.role} img={m.img} large />
            ))}
          </div>

          {/* Flat department grids with labels */}
          <div>
            {DEPARTMENTS.map((dept) => (
              <DepartmentGroup
                key={dept.label}
                label={dept.label}
                rows={dept.rows}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
