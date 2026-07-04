import React, { useEffect, useState } from "react";
import uploadImg from "../assets/upload.png"
import qgdcLogo from "../assets/qgdc_requestForm_logo.png"
import Xmark from "../assets/X.png"       

export default function CommunityForm() {
  {/* HTML Game Request Form Scripts */ }
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [devs, setDevs] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState();
  const [trigg, setTrigg] = useState("");
  const [add, setAdd] = useState("");

  //Pop-Up Opening Logic
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    // Submit form variables.  
    e.preventDefault(); //Prevents page reload.
    console.log(
      "hello |",
      email,
      title,
      devs,
      desc,
      image,
      link,
      trigg,
      add,
    );
    handleReset()
    // Insert Additional Submission Logic Here
  };

  const handleReset = () => {
    // Reset all form variables.
    setEmail("");
    setTitle("");
    setDevs("");
    setDesc("");
    setImage("");
    setLink("");
    setTrigg("");
    setAdd("");
  };

  //Used to prevent the screen from scrolling when the form pop-up is open.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup in case the component unmounts while open
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen])

  return (
    <div 
    // data-aos="zoom-in"
    // data-aos-offset="0"
    // data-aos-duration="1000"
    // data-aos-delay="0"
    className="mt-5">
      {/* The above transforms are temporarily commented-out as otherwise the pop-up isn't centered on the screen. */}

      <button id="accessForm" onClick={() => setIsOpen(!isOpen)} className="bg-fuchsia-500 px-10 py-4 rounded-lg text-xl font-bold">GAME REQUEST FORM</button>

      {/* HTML Game Request Form */}
      <div className={`${isOpen ? 'flex' : 'hidden'} z-50 fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm`} onClick={() => setIsOpen(!isOpen)}>
        <form action="#" method="get" className="w-152 h-80 overflow-y-auto [scrollbar-width:none] rounded-2xl" onClick={(e) => e.stopPropagation()}>

          <div className="grid grid-flow-row grid-rows-5  items-center justify-items-center  w-full h-4/5 bg-purple-600 pt-10 relative">

            <button className="absolute right-3 top-3 bg-[#FF4DAF] w-10 h-10 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
              <img src={Xmark} className="w-7 h-7 m-auto"></img>
            </button> 

            <div className="flex items-center row-span-3 w-32 h-32 bg-purple-950 rounded-full">
              <img src={qgdcLogo} className="w-3/4 h-3/4 m-auto"></img>                 
            </div>

            <p className="text-center archivo-black-regular text-white text-xl"> Game Request Form </p>

            <div className="flex justify-items-start w-4/5 h-1 bg-purple-300"></div>

          </div>

          <div className="bg-zinc-700 px-7">
            

            {/* Queen's email */}
            <label className="flex text-white text-left archivo-black-regular text-lg pt-5">
              1) What is your Queen's email?<span className="text-fuchsia-500">*</span>  <br />
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter Queen's email"
              className="w-full h-6 py-2 bg-indigo-50 text-black invalid:border-fuchsia-500 invalid:border-2 invalid:bg-fuchsia-100" //#EBEFFF

              required
              minLength={1}
            /> 
            <label className="flex text-left text-gray-300 text-sm pt-1">
              • This will be our main point of contact with you. (Ex: word@queensu.ca)
            </label>              
            <br />  <br />
            
            
            
            {/* Game Title */}
            <label className="flex text-white text-left archivo-black-regular text-md">
              2) What are the name(s) or alias(es) of the developer(s)?<span className="text-fuchsia-500">*</span>  <br />
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Enter game title"
              className="w-full h-6 bg-indigo-50 text-black invalid:border-fuchsia-500 invalid:border-2 invalid:bg-fuchsia-100" //#EBEFFF

              required
              minLength={1}
            /> 
            <label className="flex text-left text-gray-300 text-sm pt-1">
              • Use commas ( , ) to separate developers. <br/>
              • Use the vertical bar ( | ) to separate any aliases of the same developer.
            </label> 
            <br /> <br />



            {/* Developers */}
            <label className="flex text-white text-left archivo-black-regular text-lg">
              3) What is the title of your game?<span className="text-fuchsia-500">*</span>  <br />
            </label>
            <input
              type="text"
              name="devs"
              id="devs"
              value={devs}
              onChange={(e) =>
                setDevs(e.target.value)
              }
              placeholder="Enter developer names"
              className="w-full h-6 bg-indigo-50 text-black invalid:border-fuchsia-500 invalid:border-2 invalid:bg-fuchsia-100" //#EBEFFF

              required
              minLength={1}
            />
            <br /> <br />



            {/* Description */}
            <label className="flex text-white text-left archivo-black-regular text-lg">
              4) Give a short description of your game.<span className="text-fuchsia-500">*</span>  <br />
            </label>
            <input
              type="text"
              name="desc"
              id="desc"
              value={desc}
              onChange={(e) =>
                setDesc(e.target.value)
              }
              placeholder="Enter short description"
              className="w-full h-6 bg-indigo-50 text-black invalid:border-fuchsia-500 invalid:border-2 invalid:bg-fuchsia-100"

              required
              minLength={1}
              maxLength={75}
            /> 
            <label className="flex text-left text-gray-300 text-sm pt-1">
              • Please limit it to 1-2 sentences, with a maximum of 75 words. <br />
              • The wording submitted will be displayed exactly.
            </label> 
            <br /> <br />



            {/* Game URL Link */}
            <label className="flex text-white text-left archivo-black-regular text-lg">
              5) Provide the URL to your game's itch.io page.<span className="text-fuchsia-500">*</span>  <br />
            </label>
            <input
              type="url"
              name="link"
              id="link"
              onChange={(e) =>
                setLink(e.target.value)
              }
              placeholder="Enter url"
              className="w-full h-6 bg-indigo-50 text-black invalid:border-fuchsia-500 invalid:border-2 invalid:bg-fuchsia-100"

              required
              minLength={1}
            />  
            <br /> <br />



            {/* Trigger Warnings */}
            <label className="flex text-white text-left archivo-black-regular text-lg">
              6) Does your game contain any trigger warnings? If so, please list all of them.  <br />
            </label>
            <input
              type="text"
              name="trigg"
              id="trigg"
              value={trigg}
              onChange={(e) =>
                setTrigg(e.target.value)
              }
              placeholder="Enter warnings"
              className="w-full h-6 bg-indigo-50 text-black"
            />  
            
            <label className="flex text-left text-gray-300 text-sm pt-1">
              You must answer the above question if your game contains any of the following: <br/>
              • Flashing Lights <br/>
              • Gore/Blood <br/>
              • Loud Audio (I.e., explosives, jumpscares, etc.) <br/>
              • Nudity <br/>
              • Sexual Content <br/>
              • Extreme Violence <br/>
              • Depictions of Abuse (I.e., Substance Abuse, Domestic Abuse, etc.) <br/>
              • Psychological Distress <br/>
              Failure to do so may leave your game to be not be included on the Community Projects page.
            </label> 
            <br /> <br />



            {/* Image */}
            <label className="flex text-white text-left archivo-black-regular text-lg">
              7) Upload an image of your game.<span className="text-fuchsia-500">*</span>  <br />
            </label>
            <div className="flex items-center justify-center bg-indigo-600 h-48 rounded-3xl">
              <div className="flex justify-center items-center bg-indigo-600 flex-col w-95/100 min-h-44 border-4 border-dashed border-white rounded-2xl">
                  <img src={uploadImg} className="w-1/5 h-1/5 flex"></img>
                  
                  <div className="grid grid-cols-2 gap-x-3 w-full">
                    <label className="flex justify-end underline text-lg">
                        Choose File
                    </label>

                    <input
                      type="file"
                      name="image"
                      id="file-upload"
                      onChange={(e) =>
                        setDesc(e.target.files[0])
                      }
                      placeholder="Enter upload file"
                      className="text-lg file:hidden w-44"

                      required
                    />  
                  </div>

              </div>
            </div>
            
            <label className="flex text-left text-gray-300 text-sm pt-1">
              • This will be the image used on the Community Projects page.
            </label> 
            <br /> <br />



            {/* Additional comments */}
            <label className="flex text-white text-left archivo-black-regular text-lg">
              8) Any additional comments about your request?    <br />             </label>
            <textarea
              name="add"
              id="add"
              cols="40"
              rows="5"
              onChange={(e) =>
                setAdd(e.target.value)
              }
              placeholder="Enter additional comments"
              className="w-full h-6 bg-indigo-50 pb-5 text-black"
            ></textarea> 
            <br /> <br /> <br />

            </div>


            {/* Reset Button */}
            <div className="h-2/5 bg-purple-600 relative">

            <button
              type="reset"
              value="reset"
              onClick={() => handleReset()}
              className="bg-red-400 rounded-2xl font-bold px-20 py-4 text-2xl drop-shadow-md absolute left-10 top-4"
            >
              Reset
            </button>


            <button
              type="submit"
              value="Submit"
              onClick={(e) => handleSubmit(e)}
              className="bg-lime-500 rounded-2xl font-bold px-20 py-4 text-2xl drop-shadow-md absolute right-10 top-4"
            >
              {/* Submit Button */}
              Submit
            </button>

          </div>
        </form>
      </div>
    </div>
  ) 
}