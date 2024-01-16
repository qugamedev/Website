import React from "react";
import discord_logo from "../assets/images/logos/discord_logo.svg";
import instagram_logo from "../assets/images/logos/instagram_logo.svg";
import youtube_logo from "../assets/images/logos/youtube_logo.svg";
import linkedin_logo from "../assets/images/logos/linkedin_logo.svg";

function Footer() {
  return (
    <div className='w-full relative z-1'>
      <div className='flex flex-col items-center bg-dark-colour px-4 lg:px-8'>
        <div className='flex  items-center justify-center gap-5 p-5 '>
          <div className='flex flex-col  md:flex-row items-center justify-center md:gap-5'>
            <div className='text-center  text-white text-lg md:text-2xl font-bold break-words mb-2 md:mb-0'>
              <a href='mailto:qugamedev@clubs.queensu.ca'>qugamedev@clubs.queensu.ca</a>
            </div>

            {/* BEGIN SOCIALS FRAME */}
            <div className='flex items-center justify-center gap-5'>
              {/* Discord */}
              <a href='https://discord.gg/uGTPhR3a' target='_blank' rel='noopener noreferrer'>
                <div className='w-10 h-10 sm:w-12 sm:h-12'>
                  <img src={discord_logo} alt='Discord' />
                </div>
              </a>

              {/* Instagram */}
              <a href='https://www.instagram.com/qugamedev/' target='_blank' rel='noopener noreferrer'>
                <div className='w-10 h-10 sm:w-12 sm:h-12'>
                  <img src={instagram_logo} alt='Instagram' />
                </div>
              </a>

              {/* YouTube */}
              <a href='https://www.youtube.com/@queensgamedevelopmentclub' target='_blank' rel='noopener noreferrer'>
                <div className='w-[54px] h-[40px]   sm:w-[62px] sm:h-[48px]'>
                  <img src={youtube_logo} alt='Youtube' />
                </div>
              </a>

              {/* LinkedIn */}
              <a href='https://ca.linkedin.com/company/qgdc' target='_blank' rel='noopener noreferrer'>
                <div className='w-10 h-10 sm:w-12 sm:h-12'>
                  <img src={linkedin_logo} alt='Linkedin' />
                </div>
              </a>
            </div>
            {/* END SOCIALS FRAME */}
          </div>

          {/* EMAIL SUBSCRIBE STUFF */}
          {/*
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
          */}
          {/* EMAIL SUBSCRIBE STUFF */}
        </div>

        <p className='text-white text-center text-xs lg:text-sm font-bold break-words pb-5'>© 2024 Queen's University Game Development Club</p>
      </div>
    </div>
  );
}

export default Footer;
