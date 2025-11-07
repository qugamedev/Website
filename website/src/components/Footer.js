import React from "react";
import discord_logo from "../assets/images/logos/discord_logo.svg";
import instagram_logo from "../assets/images/logos/instagram_logo.svg";
import youtube_logo from "../assets/images/logos/youtube_logo.svg";
import linkedin_logo from "../assets/images/logos/linkedin_logo.svg";
import {useEffect} from "react"; // for importing aos
import AOS from 'aos'; // importing aos
import 'aos/dist/aos.css'; // importing aos

function Footer() {
  return (
    <footer className="w-full relative z-10 bg-[#121212] border-t border-gray-800">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-2">
          <a
            href="mailto:qugamedev@clubs.queensu.ca"
            className="text-white text-lg font-archivo text-center"
          >
            qugamedev@clubs.queensu.ca
          </a>
          <div className="flex items-center justify-center gap-6">
            {/* Discord */}
            <a
              href="https://discord.gg/ZR5ux7yzwt"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={discord_logo}
                alt="Discord"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/qugamedev/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={instagram_logo}
                alt="Instagram"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@qugamedev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={youtube_logo}
                alt="Youtube"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
            {/* LinkedIn */}
            <a
              href="https://ca.linkedin.com/company/qgdc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={linkedin_logo}
                alt="Linkedin"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>
        <p className="text-white text-xs lg:text-sm font-bold text-center">
          © 2025 Queen's University Game Development Club
        </p>
      </div>
    </footer>
  );
}

export default Footer;
          /*
          <div className='Frame7' style={{ ustifyContent: "center", alignItems: "center", gap: 15, display: "flex" }}>
            <div
              className='Frame5'
              style={{
                padding: 20,
                borderRadius: 10,
                overflow: "hidden",
                border: "5px black solid",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className='TypeYourEmail'
                style={{ textAlign: "center", color: "#C1C1C1", fontSize: 20, fontFamily: "Lexend Deca", fontWeight: "700", wordWrap: "break-word" }}
              >
                <input style={{width: 173, background: "inherit"}}  placeholder='Type your email...'></input>
              </div>
            </div>
            <div
              className='Frame4'
              style={{
                padding: 25,
                background: "black",
                borderRadius: 10,
                overflow: "hidden",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className='Subscribe'
                style={{ textAlign: "center", color: "white", fontSize: 20, fontFamily: "Lexend Deca", fontWeight: "700", wordWrap: "break-word" }}
              >
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          */
