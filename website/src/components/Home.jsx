
// Assest(s)
import top_graphic_items from "../assets/images/home_top_graphic_items.svg";

function Home() {
  // Establish background style
  const commonBackgroundStyle = {
    backgroundImage: `url(${top_graphic_items})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backdropFilter: "blur(10px)",
  };

  return (
    <div className="text-white bg-dark-colour">
      <section
        style={commonBackgroundStyle}
        className="relative flex items-center justify-center h-screen px-4 pt-15 sm:pt-20"
      >
        <div className="container mx-auto text-center sm:text-left">
        <div data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="0"
        data-aos-offset="0">
        <h1 className="max-w-5xl text-3xl sm:text-7xl md:text-8xl lg:text-9xl brick-sans font-extrabold leading-tight flex flex-col items-start">
          <span className="mb-3">Queen’s Game</span>
          <span>Development Club</span>
        </h1>
        </div>
        <div data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="0">
          <p className="max-w-6xl mt-8 sm:mt-10 text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-archivo">
            Queen’s Game Development Club is dedicated to enriching students’
            experience in all areas of game development.
          </p>
        </div>
        </div>
        
      </section>
    </div>
  );
}

export default Home;