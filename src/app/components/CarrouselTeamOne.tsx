import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CarrouselTeamOne = () => {
  const animationOptions = {
    opacity: 1,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 relative font-averia sm:-left-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView1 ? animationOptions : {}}
        ref={ref1}
        className="bg-palid2 w-[22rem] sm:w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]"
      >
        <img src="/avatar.png" alt="avatar" className="w-20 sm:w-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Esther</h3>
          <p className=" text-gray3">Medical Assistant</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView2 ? animationOptions : {}}
        ref={ref2}
        className="bg-palid2 w-[22rem] sm:w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]"
      >
        <img src="/avatar.png" alt="avatar" className="w-20 sm:w-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Aubrey</h3>
          <p className="text-gray3">Mater Dei Student</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView3 ? animationOptions : {}}
        ref={ref3}
        className="bg-palid2 w-[22rem] sm:w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]"
      >
        <img src="/avatar.png" alt="avatar" className="w-20 sm:w-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Ann</h3>
          <p className="text-gray3">Methodist College Student</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView4 ? animationOptions : {}}
        ref={ref4}
        className="bg-palid2 w-[22rem] sm:w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]"
      >
        <img src="/avatar.png" alt="avatar" className="w-20 sm:w-24" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Philip</h3>
          <p className="text-gray3">Australian College Student</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CarrouselTeamOne;
