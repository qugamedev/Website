import bg404 from "../assets/404_bg.png";
import mascot404 from "../assets/beta_404.png";

const PageNotFound = () => {
  return (
    <div
      className="min-h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${bg404})` }}
    >
        <div className="flex flex-col items-center text-center select-none">

        {/* Mascot */}
        <img
            src={mascot404}
            alt="404 Mascot"
            className="
            w-[180px] sm:w-[220px] md:w-[260px]
            h-auto
            drop-shadow-[0_10px_0_rgba(0,0,0,0.25)]
            sm:-mb-12
            relative z-10
            "
        />

        {/* 404 */}
        <h1
            className="
            text-white font-extrabold leading-none tracking-tight
            text-[90px] sm:text-[120px] md:text-[150px]
            drop-shadow-[0_10px_0_rgba(0,0,0,0.25)]
            translate-y-[-45px]
            "
        >
            404
        </h1>

        {/* Subtitle */}
        <p
            className="
            -mt-2
            text-white/95 uppercase tracking-[0.2em]
            text-sm sm:text-base md:text-lg
            drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]
            translate-y-[-30px]
            "
        >
            Page Not Found
        </p>

        {/* Button */}
        <a
            href="/home"
            className="
            mt-6
            inline-flex items-center justify-center
            rounded-2xl bg-[#1f1f1f]
            px-10 py-4 sm:px-14 sm:py-5
            shadow-[0_10px_0_rgba(0,0,0,0.35)]
            hover:brightness-110
            active:translate-y-[2px]
            active:shadow-[0_8px_0_rgba(0,0,0,0.35)]
            transition
            "
        >
            <span className="uppercase tracking-[0.12em] text-white text-sm sm:text-base">
            Respawn to{" "}
            <span className="text-[#b56dff] font-semibold">Homepage</span>
            </span>
        </a>
        </div>

    </div>
  );
};

export default PageNotFound;
