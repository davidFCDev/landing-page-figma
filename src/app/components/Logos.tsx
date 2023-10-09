import { logos } from "../constants";
import CarrouselLogoOne from "./CarrouselLogoOne";
import CarrouselLogoTwo from "./CarrouselLogoTwo";

const Logos = () => {
  return (
    <div className="flex w-full z-0 relative justify-start items-center">
      <img
        src="/logos-texture.png"
        alt="logos-texture"
        className="z-10 relative bg-green rounded-[100px] w-full"
      />

      <div className="z-20 absolute flex flex-col gap-32">
        <div className="text-white px-20 flex items-start w-full gap-20">
          <div className="flex flex-col gap-10 w-[600px]">
            <h4 className="text-xl uppercase font-rubik font-semibold tracking-[0.3em]">
              Partners
            </h4>
            <h2 className="text-6xl font-semibold font-averia leading-[1.4em]">
              Trusted by students at over 100 schools
            </h2>
          </div>
          <img
            src="/arrow.png"
            alt="arrow"
            className="z-40 -bottom-28 relative"
          />
        </div>

        <div className="flex flex-col gap-5">
          <CarrouselLogoOne />
          <CarrouselLogoTwo />
        </div>
      </div>
    </div>
  );
};

export default Logos;
