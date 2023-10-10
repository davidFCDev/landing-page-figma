import HeroVector from "./HeroVector";

const Hero = () => {
  return (
    <main>
      <div className="flex flex-column justify-center items-end text-center pt-36 sm:pt-24">
        <div className="w-full sm:w-[52%] flex flex-col gap-12 z-20 relative top-8 px-10">
          <h1 className="text-[3rem] sm:text-[4.1rem] font-bold font-averia leading-[1.2em] sm:leading-[1.3em]">
            Navigating Tomorrow's Education
          </h1>
          <h3 className="text-lg sm:text-xl font-semibold font-averiaSans text-gray leading-5">
            Edufy simplifies the educational journey from high school to
            university. Offering data-driven insights, scholarship options, and
            academic pathways, we're your ultimate guide—crafted by Revise
            Online.
          </h3>
          <div className="z-50 relative">
            <button className="bg-yellow font-averia inline-flex px-6 py-2 sm:py-4 justify-center items-center border-3 border-black rounded-full text-black text-2xl sm:text-4xl font-bold shadow-[-6px_7px_0_0_black] active:shadow-none transition-all active:-translate-x-1 active:translate-y-1">
              Explore
            </button>
          </div>
        </div>
      </div>

      <HeroVector />
    </main>
  );
};

export default Hero;
