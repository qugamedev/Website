import React, { useEffect, useState } from "react";
import uploadImg from "../assets/upload.png"
import qgdcLogo from "../assets/qgdc_requestForm_logo.png"
import Xmark from "../assets/X.png"       
import { useForm } from "react-hook-form"
import { createPortal } from "react-dom" //Used to allow transformations on the form.

export default function CommunityForm({ isOpen, onClose }) {

  const handleTransmission = (data) => { 
    // e.preventDefault(); //Prevents page reload.
    console.log(data);
    reset()
    onClose()
    // Insert Additional Submission Logic Here
  };

  //Used to prevent the screen from scrolling when the form pop-up is open.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean-up in case the component unmounts while open.
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen])

  const {register, handleSubmit, reset, watch, formState: { errors }} = useForm({
    mode: "onSubmit", //Validate only when submit button is pressed.
    reValidateMode: "onChange" //Validate every time an input changes after the first submit.
  })

  //Used for the "No File Chosen" text.
  const imageFile = watch("image")
  const fileName = imageFile?.[0]?.name ?? "No File Chosen"

  return createPortal(
      <div className={`${isOpen ? 'flex' : 'hidden'} z-50 fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm`} onClick={() => onClose()}>
        <form 
          action="#" 
          method="get" 
          className="w-4/5 h-3/4 lg:w-1/2 md:h-2/3 overflow-y-auto [scrollbar-width:none] rounded-2xl" //w-152 h-80
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit(handleTransmission)}
        >

          <div className="grid grid-flow-row grid-rows-5  items-center justify-items-center  w-full h-66 bg-purple-600 pt-10 relative">

            <button className="absolute right-3 top-3 bg-[#FF4DAF] w-10 h-10 rounded-lg" onClick={() => onClose()}>
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
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm pt-5">
              1) What is your Queen's email?<span className="text-fuchsia-500 ml-auto">*</span>  <br />
            </label>
            <input
              {...register("email", {
                required: "The email address is required",
                pattern: {value: /^\S+@queensu.ca$/, message: "The email address must be a (@queensu.ca) address."}
              })}
              placeholder=" Enter Queen's email"
              className={`w-full h-6 py-2 bg-indigo-50 text-black ${errors.email ? 'border-fuchsia-500 border-2 bg-fuchsia-100' : ''}`} //#EBEFFF
            /> 
            <label className="flex text-left text-gray-300 sm:text-sm text-xs pt-1">
              • This will be our main point of contact with you. (Ex: word@queensu.ca)
            </label>
            {errors.email &&(
              <p className="mt-1 sm:text-sm text-xs text-fuchsia-500">{errors.email.message}</p>
            )}         
            <br />  <br />
            
            
            
            {/* Developers */}
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm">
              2) What are the name(s) or alias(es) of the developer(s)?<span className="text-fuchsia-500 ml-auto">*</span>  <br />
            </label>
            <input
              {...register("developer", {
                required: "The name(s) of the developer(s) is required.",
              })}
              placeholder=" Enter developer name(s)"
              className={`w-full h-6 bg-indigo-50 text-black ${errors.developer ? 'border-fuchsia-500 border-2 bg-fuchsia-100' : ''}`} //#EBEFFF
            /> 
            <label className="flex text-left text-gray-300 sm:text-sm text-xs pt-1">
              • Use commas ( , ) to separate developers. <br/>
              • Use the vertical bar ( | ) to separate any aliases of the same developer.
            </label> 
            {errors.developer &&(
              <p className="mt-1 sm:text-sm text-xs text-fuchsia-500">{errors.developer.message}</p>
            )}
            <br /> <br />



            {/* Game Title */}
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm">
              3) What is the title of your game?<span className="text-fuchsia-500 ml-auto">*</span>  <br />
            </label>
            <input
              {...register("title", {
                required: "The game's title is required.",
              })}
              placeholder=" Enter game title"
              className={`w-full h-6 bg-indigo-50 text-black ${errors.title ? 'border-fuchsia-500 border-2 bg-fuchsia-100' : ''}`} //#EBEFFF
            />
            {errors.title &&(
              <p className="mt-1 sm:text-sm text-xs text-fuchsia-500">{errors.title.message}</p>
            )}
            <br /> <br />



            {/* Description */}
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm">
              4) Give a short description of your game.<span className="text-fuchsia-500 ml-auto">*</span>  <br />
            </label>
            <input
              {...register("desc", {
                required: "The game's description is required.",
                maxLength: {value: 75, message: "Too many characters."}
              })}
              placeholder=" Enter short description"
              className={`w-full h-6 bg-indigo-50 text-black ${errors.desc ? 'border-fuchsia-500 border-2 bg-fuchsia-100' : ''}`}
            />
            <label className="flex text-left text-gray-300 sm:text-sm text-xs pt-1">
              • Please limit it to 1-2 sentences, with a maximum of 75 words. <br />
              • The wording submitted will be displayed exactly.
            </label> 
            {errors.desc &&(
              <p className="mt-1 sm:text-sm text-xs text-fuchsia-500">{errors.desc.message}</p>
            )}
            <br /> <br />



            {/* Game URL Link */}
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm">
              5) Provide the URL to your game's itch.io page.<span className="text-fuchsia-500 ml-auto">*</span>  <br />
            </label>
            <input
              {...register("url", {
                required: "The game's itch.io page URL is required.",
                minLength: 1,
                pattern: {value: /^(https?:\/\/)?([a-z0-9-]+\.itch\.io)(\/.*)?$/i, message: "The provided URL was not an itch.io link."}
              })}
              placeholder=" Enter url"
              className={`w-full h-6 bg-indigo-50 text-black ${errors.url ? 'border-fuchsia-500 border-2 bg-fuchsia-100' : ''}`}
            />  
            {errors.url &&(
              <p className="mt-1 sm:text-sm text-xs text-fuchsia-500">{errors.url.message}</p>
            )}
            <br /> <br />



            {/* Trigger Warnings */}
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm">
              6) Does your game contain any trigger warnings? If so, please list all of them.  <br />
            </label>
            <input
              {...register("triggers")}
              placeholder=" Enter warnings"
              className="w-full h-6 bg-indigo-50 text-black"
            />  
            
            <label className="flex text-left text-gray-300 sm:text-sm text-xs pt-1">
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
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm pb-2">
              7) Upload an image of your game.<span className="text-fuchsia-500 ml-auto">*</span>  <br />
            </label>
            <div className="flex items-center justify-center bg-indigo-600 h-48 rounded-3xl md:w-1/2 w-2/3 px-2 m-auto">
              <div className="flex justify-center items-center bg-indigo-600 flex-col w-95/100 min-h-44 border-4 border-dashed border-white rounded-2xl">
                  <img src={uploadImg} className="md:w-1/5 md:h-1/5 w-2/5 h-2/5 flex"></img>
                  
                  <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 md:gap-x-3 w-full">
                    <label className="flex justify-center md:justify-end items-center underline md:text-lg text-sm text-white">
                        Choose File
                        <input
                          {...register("image", {
                            required: "An image of the game is required.",
                          })}
                          type="file"
                          placeholder=" Enter upload file"
                          className="hidden"
                        />  
                    </label>

                    <span className="md:m-0 m-auto md:text-left text-center md:text-lg text-sm text-white">
                      {fileName}
                    </span>
                  </div>

              </div>
            </div>
            
            <label className="flex text-left text-gray-300 sm:text-sm text-xs pt-1">
              • This will be the image used on the Community Projects page.
            </label>
            {errors.image &&(
              <p className="mt-1 sm:text-sm text-xs text-fuchsia-500">{errors.image.message}</p>
            )} 
            <br /> <br />



            {/* Additional comments */}
            <label className="flex text-white text-left archivo-black-regular md:text-lg text-sm">
              8) Any additional comments about your request?    <br />             </label>
            <textarea
              {...register("comments")}
              cols="40"
              rows="5"
              placeholder=" Enter additional comments"
              className="w-full h-6 bg-indigo-50 pb-5 text-black"
            ></textarea> 
            <br /> <br /> <br />

            </div>


            {/* Reset Button */}
            <div className="md:h-24 h-20 bg-purple-600 relative">

            <button
              type="reset"
              value="reset"
              onClick={() => reset()}
              className="bg-red-400 md:rounded-2xl rounded-lg font-bold md:px-20 px-7 md:py-4 py-2 md:text-2xl text-lg text-white drop-shadow-md absolute left-10 top-4"
            >
              Reset
            </button>


            <button
              type="submit"
              value="Submit"
              className="bg-lime-500 md:rounded-2xl rounded-lg font-bold md:px-20 px-7 md:py-4 py-2 md:text-2xl text-lg text-white drop-shadow-md absolute right-10 top-4"
            >
              {/* Submit Button */}
              Submit
            </button>

          </div>
        </form>
      </div>,
    document.body
  ) 
}