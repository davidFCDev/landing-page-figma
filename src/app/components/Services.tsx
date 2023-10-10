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
    <div className="w-full h-[950px] flex">
      <img
        src="/texture-bg.png"
        alt="bg-texture"
        className="w-full bg-green z-0 rounded-b-[200px] relative"
      />
      <img
        src="/horizontal-arrow.png"
        alt="arrow"
        className="absolute z-70 left-44 pt-28"
      />

      <div className="z-30 absolute flex flex-col w-full justify-center items-center gap-24 pt-52">
        <div className="text-center flex flex-col gap-4">
          <h4 className="font-rubik text-gray2 uppercase font-semibold tracking-[.3em]">
            OUR SERVICES
          </h4>
          <h1 className="font-averia font-bold text-8xl text-white">
            What we offer
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? animationOptions : {}}
          ref={ref}
          className="grid grid-cols-2 gap-10 font-averia"
        >
          <div className="flex items-start gap-4 w-[500px] py-8 px-10 bg-green2 rounded-2xl">
            <img src="/Icons/info-icon.png" alt="info-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl font-semibold tracking-wider">
                Information
              </h2>
              <p className="text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[500px] py-8 px-10 bg-green2 rounded-2xl">
            <img src="/Icons/hand-icon.png" alt="hand-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl font-averia font-semibold tracking-wider">
                Support
              </h2>
              <p className="text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[500px] py-8 px-10 bg-green2 rounded-2xl">
            <img src="/Icons/book-icon.png" alt="book-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl font-averia font-semibold tracking-wider">
                Guidance
              </h2>
              <p className="text-gray2 tracking-wide">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[500px] py-8 px-10 bg-green2 rounded-2xl">
            <img src="/Icons/question-icon.png" alt="question-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl font-averia font-semibold tracking-wider">
                Education
              </h2>
              <p className="text-gray2 tracking-wide">
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
