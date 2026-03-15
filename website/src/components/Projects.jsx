import React, { useEffect, useState } from "react";
import client, { urlFor } from "./sanityClient";

export default function Projects() {
  {/* HTML Game Request Form Scripts */ }
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [devs, setDevs] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState();
  const [trigg, setTrigg] = useState("");
  const [create, setCreate] = useState("course");
  const [add, setAdd] = useState("");

  const handleSubmit = (e) => {
    // Form submit
    console.log(
      email,
      title,
      devs,
      desc,
      image,
      link,
      trigg,
      create,
      add,
    );
  };

  const handleReset = () => {
    // Reset all state variables here
    setEmail("");
    setTitle("");
    setDevs("");
    setDesc("");
    setImage("");
    setLink("");
    setTrigg("");
    setCreate("course");
    setAdd("");
  };

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    client
      .fetch(`*[_type == "projectCard"]{
        title,
        slogan,
        madeBy,
        website,
        alignRight,
        img
      }`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
  return (
    <div className="bg-[#0f0f10] min-h-screen text-white font-sans pt-24">
      <div className="text-center p-10">
        <div data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-delay="300">
          <h1 className="brick-sans text-8xl sm:text-9xl pb-6 mt-4 font-extrabold leading-tight">Community Projects</h1>
        </div>
        <div data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-delay="600">
          <p className="mt-5 mb-10 text-lg sm:text-2xl archivo-black-regular leading-relaxed max-w-4xl mx-auto text-center">
            Check out some amazing projects made by students here at Queen's! These were built with love, pixels,
            and way too many cups of coffee.
          </p>
        </div>
      </div>

      {/* Project List */}
      <div data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="0"
        data-aos-delay="600">
        <div className="flex flex-col items-center gap-10 pb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative w-11/12 md:w-3/4 h-72 bg-cover bg-center flex items-center px-10"
              style={{ backgroundImage: `url(${urlFor(project.img).width(1200).height(500).fit('crop').auto('format')})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 z-0" />

              {/* Text content */}
              <div
                className={`text-white z-10 ${project.alignRight ? "ml-auto text-right" : ""}`}
              >
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="italic text-lg">{project.slogan}</p>
                <p className="text-sm mt-1">Made by: {project.madeBy}</p>
                {project.website ? (//disable button if no link is provided for the game card
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 text-lg font-bold bg-[#0f0f10] text-white border border-white hover:bg-white hover:text-black transition-all duration-300 w-48 text-center"
                  >
                    SEE PROJECT
                  </a>
                ) : (
                  <span
                    className="inline-block mt-4 px-6 py-3 text-lg font-bold bg-gray-700 text-gray-400 border border-gray-500 cursor-not-allowed w-48 text-center"
                    title="Link coming soon!"
                  >
                    SEE PROJECT
                  </span>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="text-center p-10">


        {/* TEMP Game Request Form */}
        <div data-aos="fade-down"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="0">
          <h1 className="brick-sans text-6xl sm:text-8xl pb-6 font-extrabold leading-tight">
            Want to see your <span className="text-purple-600">game</span> here?
          </h1>
          <p className="mt-2 text-lg sm:text-2xl archivo-black-regular leading-relaxed">
            Fill out the form below for a chance to have your game be displayed on this page! Only requirement is to be affiliated with Queen's University.
          </p>
        </div>
        <div data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="0"
          className="mt-5">
          {/* TEMP Redirect Google Form Button */}
          <a href="https://forms.gle/TVkcrApeS1meoax98" className="px-8 py-4 text-lg sm:text-2xl font-bold text-white bg-purple-600 hover:bg-purple-700 transition rounded-lg shadow-lg">
            Game Request Form
          </a>

          {/* HTML Game Request Form */}
          <fieldset>
            {/* Warning / conditions */}
            <p className="mt-6"> Before requesting your game, please thoroughly review the following content guidelines on what we will allow to be featured on the QGDC website. Only continue to request your game if doesn't break any of these guidelines. <br />
              CONTENT GUIDELINES: <br /> <br />
              No hate speech or harassment. <br />
              The game should not perform illegal activities (such as installing a virus or doxxing people) <br />
              The responses provided are accurate and include truthful information about the game. ALL developers must be credited. <br />
              No infringement on IP or other relevant copyrights. <br />
              The game follows the itch.io Guidelines <br /> <br />
              Additionally, a game MUST include a Trigger Warning(s) if it contains one or more of the following topics: <br />
              Flashing lights <br />
              Gore/blood<br />
              Loud audio (i.e., explosives, gunfire, jumpscares)<br />
              Nudity<br />
              Sexual content<br />
              Extreme violence<br />
              Content depicting any forms of abuse (i.e., substance abuse)<br />
              Psychological distress<br /><br />
              If the QGDC team find that your game is in any violation of these guidelines, we reserve the right to remove the game from the page without notice.<br /> </p>
            <p>
              To request a game, a valid Queen's email is required when filling out this form for verification. Please contact the team at qugamedev@clubs.queensu.ca if there are any issues or if you have any questions. <br />
              QUESTIONS: <br /><br /></p>

            {/* Form start */}
            <form action="https://formspree.io/f/xykndawq"
              method="POST"
              enctype="multipart/form-data">
              {/* Queen's email */}
              <label for="email">
                1. What is your Queen's email?*  <br />
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter Queen's email"
                required
              /> <br />  <br />
              {/* Game title */}
              <label for="title">
                2. What is the title of your game?*  <br />
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
                required
              />  <br /> <br />
              {/* Developers */}
              <label for="devs">
                3. Credit all the developers of your game.*  <br />
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
                required
              />  <br /> <br />
              {/* Description */}
              <label for="desc">
                4. Give a short description of your game. (1-2 sentences)*  <br />
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
                required
              />  <br /> <br />
              {/* Image */}
              <label for="desc">
                5. Upload an image of your game. (This will be the image used on our website.)*  <br />
              </label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={(e) =>
                  setDesc(e.target.files[0])
                }
                placeholder="Enter upload file"
                required
              />  <br /> <br />
              {/* URL link */}
              <label for="link">
                6. Give a link to the game's page. (Only itch.io)*  <br />
              </label>
              <input
                type="url"
                name="link"
                id="link"
                onChange={(e) =>
                  setLink(e.target.value)
                }
                placeholder="Enter url"
                required
              />  <br /> <br />
              {/* Trigger warnings */}
              <label for="trigg">
                7. Does your game contain any trigger warnings? If yes, please list all of them.  <br />
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
              />  <br /> <br />
              {/* Game creation reason */}
              <label for="create">
                8. Why was your game created?*  <br />
              </label>
              <input
                type="radio"
                name="create"
                value="course"
                id="course"
                checked={create === "course"}
                onChange={(e) =>
                  setCreate(e.target.value)
                }
              />
              Course project (ex. CISC 226, CISC 320, etc.)<br />
              <input
                type="radio"
                name="create"
                value="gameJam"
                id="gameJam"
                checked={create === "gameJam"}
                onChange={(e) =>
                  setCreate(e.target.value)
                }
              />
              Game jam<br />
              <input
                type="radio"
                name="create"
                value="fun"
                id="fun"
                checked={create === "fun"}
                onChange={(e) =>
                  setCreate(e.target.value)
                }
              />
              Fun<br />
              <input
                type="radio"
                name="create"
                value=""
                id="other"
                checked={create === "other"}
                onChange={(e) =>
                  setCreate(e.target.value)
                }
              />
              Other <input type="text" name="otherReason" />  <br /> <br />
              {/* Additional comments */}
              <label for="add">
                9. Any additional comments about your request?    <br />             </label>
              <textarea
                name="add"
                id="add"
                cols="40"
                rows="5"
                onChange={(e) =>
                  setAdd(e.target.value)
                }
                placeholder="Enter additional comments"
              ></textarea> <br />
              {/* Reset button */}
              <button
                type="reset"
                value="reset"
                onClick={() => handleReset()}
              >
                Reset
              </button>
              <button
                type="submit"
                value="Submit"
                onClick={(e) => handleSubmit(e)}
              >
                {/* Submit button */}
                Submit
              </button>
            </form>
          </fieldset>

        </div>
      </div>
    </div>
  );
}
