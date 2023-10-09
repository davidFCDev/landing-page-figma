import HeroVector from "./HeroVector";

const Hero = () => {
  return (
    <main>
      <div className="flex flex-column justify-center items-end text-center pt-36">
        <div className="w-[52%] flex flex-col gap-10 z-20 relative top-8">
          <h1 className="text-6xl font-bold font-averia leading-[1.3em]">
            Navigating Tomorrow's Education
          </h1>
          <h3 className="text-lg font-semibold font-averiaSans text-gray px-12 leading-6">
            Edufy simplifies the educational journey from high school to
            university. Offering data-driven insights, scholarship options, and
            academic pathways, we're your ultimate guide—crafted by Revise
            Online.
          </h3>
          <div className="z-40 relative">
            <button className="bg-yellow inline-flex px-6 py-4 justify-center items-center border-3 border-black rounded-full text-black text-4xl font-bold shadow-[-6px_7px_0_0_black] hover:shadow-none transition-all hover:-translate-x-1 hover:translate-y-1">
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
