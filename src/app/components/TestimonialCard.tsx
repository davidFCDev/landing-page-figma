import { useState } from "react";
import { cardUsers } from "../mocks/cardUsers";
import { motion } from "framer-motion";

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardUsers.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardUsers.length - 1 : prevIndex - 1
    );
  };

  const currentUser = cardUsers[currentIndex];

  return (
    <div className="flex z-0 h-full relative flex-col items-center mr-10 sm:mr-0">
      <img
        src="/card-texture.png"
        alt="card texture"
        className="bg-orange rounded-[40px] lg:rounded-[80px] w-[17rem] lg:w-[34rem] h-[28rem] sm:h-[25rem] lg:h-[44rem] z-10 relative"
      />

      <div className="bg-[#006b6028] rounded-[80px] w-[15rem] lg:w-[30rem] h-[26rem] sm:h-[23rem] lg:h-[40rem] -z-10 absolute rotate-[8.5deg] -right-7 lg:-right-10 bottom-0" />

      <div className="bg-[#006b601d] rounded-[80px] w-[15rem] lg:w-[30rem] h-[23rem] sm:h-[21rem] lg:h-[37rem] -z-20 absolute rotate-[15deg] -right-10 lg:-right-14 -bottom-1" />

      <div className="flex flex-col z-20 absolute text-white h-full justify-around items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          key={currentUser.id}
          className="flex flex-col gap-10 sm:gap-8 lg:gap-14"
        >
          <h2 className="text-2xl lg:text-4xl font-averiaLibre font-semibold text-center tracking-[1px] leading-[35px] sm:leading-[30px] lg:leading-[60px] px-8 lg:px-20">
            {currentUser.text}
          </h2>

          <div className="flex gap-4 justify-center items-center">
            <img
              src={currentUser.avatar}
              alt="avatar"
              className="rounded-full w-12 lg:w-16"
            />
            <div className="flex flex-col">
              <h4 className="font-semibold text-sm lg:text-xl">
                {currentUser.name}
              </h4>
              <h5 className="text-xs lg:text-lg">{currentUser.description}</h5>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-3 items-center">
          <button
            onClick={handlePrevious}
            className="text-lg lg:text-xl hover:text-black"
          >
            Previous
          </button>
          <img
            src="/long-arrow.png"
            alt="long arrow"
            className="w-24 lg:w-72"
          />
          <button
            onClick={handleNext}
            className="text-lg lg:text-xl hover:text-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
