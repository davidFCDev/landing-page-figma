import CarrouselLogoOne from "./CarrouselLogoOne";
import CarrouselLogoTwo from "./CarrouselLogoTwo";

const Logos = () => {
  return (
    <div className="flex w-full z-0 relative justify-start items-center py-5 ">
      <img
        src="/logos-texture.png"
        alt="logos-texture"
        className="z-10 relative bg-green rounded-[20px] lg:rounded-[150px] w-full h-[380px] sm:h-[500px] lg:h-[950px]"
      />

      <div className="z-20 absolute flex flex-col gap-16 sm:gap-24 lg:gap-32">
        <div className="text-white px-8 sm:px-20 flex items-start w-full relative">
          <div className="flex flex-col gap-2 sm:gap-5 w-[300px] sm:w-[350px] lg:w-[700px]">
            <h4 className="text-xs lg:text-xl uppercase font-rubik font-semibold tracking-[0.3em]">
              Partners
            </h4>
            <h2 className="text-2xl lg:text-7xl font-semibold font-averia leading-[1.2em]">
              Trusted by students at over 100 schools
            </h2>
          </div>
          <img
            src="/arrow.png"
            alt="arrow"
            className="z-50 left-[65%] sm:left-[55%] lg:left-[45%] -bottom-[30%] sm:-bottom-[40%] absolute w-[70px] sm:w-[150px] lg:w-[300px]"
          />
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5 ">
          <CarrouselLogoOne />
          <CarrouselLogoTwo />
        </div>
      </div>
    </div>
  );
};

export default Logos;
