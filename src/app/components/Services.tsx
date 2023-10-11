import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Services = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div className="w-full flex">
      <img
        src="/texture-bg.png"
        alt="bg-texture"
        className="w-full bg-green z-0 rounded-b-[40px] sm:rounded-b-[100px] lg:rounded-b-[200px] relative h-[1080px] sm:h-[840px] lg:h-[1000px]"
      />
      <img
        src="/horizontal-arrow.png"
        alt="arrow"
        className="absolute z-70 left-8 sm:left-32 lg:left-48 pt-40 sm:pt-44 lg:pt-28 w-[80px] sm:w-[150px] lg:w-[300px]"
      />

      <div className="z-30 absolute flex flex-col w-full justify-center items-center gap-16 sm:gap-24 pt-44 sm:pt-52">
        <div className="text-center flex flex-col gap-1 sm:gap-4">
          <h4 className="font-rubik text-gray2 uppercase font-semibold tracking-[.3em] text-sm lg:text-xl">
            OUR SERVICES
          </h4>
          <h1 className="font-averia font-bold text-5xl lg:text-8xl text-white">
            What we offer
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? animationOptions : {}}
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-10 font-averia"
        >
          <div className="flex items-start gap-3 sm:gap-4 w-[350px] lg:w-[500px] py-5 lg:py-8 px-8 sm:px-5 lg:px-10 bg-green2 rounded-2xl">
            <img
              src="/Icons/info-icon.png"
              alt="info-icon"
              className="w-12 lg:w-20"
            />
            <div className="flex flex-col gap-1 lg:gap-4">
              <h2 className="text-white text-2xl lg:text-3xl font-averia font-semibold tracking-wider">
                Information
              </h2>
              <p className="text-[14px] lg:text-[16px] text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 w-[350px] lg:w-[500px] py-5 lg:py-8 px-8 sm:px-5 lg:px-10 bg-green2 rounded-2xl">
            <img
              src="/Icons/hand-icon.png"
              alt="hand-icon"
              className="w-12 lg:w-20"
            />
            <div className="flex flex-col gap-1 lg:gap-4">
              <h2 className="text-white text-2xl lg:text-3xl font-averia font-semibold tracking-wider">
                Support
              </h2>
              <p className="text-[14px] lg:text-[16px] text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 w-[350px] lg:w-[500px] py-5 lg:py-8 px-8 sm:px-5 lg:px-10 bg-green2 rounded-2xl">
            <img
              src="/Icons/book-icon.png"
              alt="book-icon"
              className="w-12 lg:w-20"
            />
            <div className="flex flex-col gap-1 lg:gap-4">
              <h2 className="text-white text-2xl lg:text-3xl font-averia font-semibold tracking-wider">
                Guidance
              </h2>
              <p className="text-[14px] lg:text-[16px] text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4 w-[350px] lg:w-[500px] py-5 lg:py-8 px-8 sm:px-5 lg:px-10 bg-green2 rounded-2xl">
            <img
              src="/Icons/question-icon.png"
              alt="question-icon"
              className="w-12 lg:w-20"
            />
            <div className="flex flex-col gap-1 lg:gap-4">
              <h2 className="text-white text-2xl lg:text-3xl font-averia font-semibold tracking-wider">
                Education
              </h2>
              <p className="text-[14px] lg:text-[16px] text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
