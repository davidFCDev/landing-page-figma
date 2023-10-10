import CarrouselTeamOne from "./CarrouselTeamOne";
import CarrouselTeamTwo from "./CarrouselTeamTwo";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Team = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div className="flex flex-col w-full justify-center items-center gap-24 py-40">
      <h1 className="text-6xl font-averiaLibre font-semibold w-[500px] text-center leading-[1.3em] tracli">
        You'll be in good company!
      </h1>

      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <div className="flex flex-col items-center justify-center gap-12 w-full px-32">
          <div className="flex justify-around w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? animationOptions : {}}
              ref={ref1}
              className="flex gap-6 justify-start items-center"
            >
              <img
                src="/users/user1.png"
                alt="user1"
                className="rounded-full"
              />
              <div className="flex flex-col gap-2 justify-start w-[250px]">
                <h3 className="font-averiaLibre text-3xl font-semibold">
                  David Hankin
                </h3>
                <p className="font-averiaSans">
                  PE Studies Senior Lecturer with over 13 years of experience
                </p>
                <img
                  src="/Signature/signature1.png"
                  alt="signature1"
                  className="w-24"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? animationOptions : {}}
              ref={ref2}
              className="flex gap-6 justify-start items-center"
            >
              <img
                src="/users/user2.png"
                alt="user2"
                className="rounded-full"
              />
              <div className="flex flex-col gap-2 justify-start w-[250px]">
                <h3 className="font-averiaLibre text-3xl font-semibold">
                  Emily Chater
                </h3>
                <p className="font-averiaSans">
                  Chemistry teacher with a 16 years of teaching experience
                </p>
                <img
                  src="/Signature/signature1.png"
                  alt="signature1"
                  className="w-24"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView3 ? animationOptions : {}}
            ref={ref3}
            className="flex gap-6 justify-start items-center"
          >
            <img src="/users/user3.png" alt="user3" className="rounded-full" />
            <div className="flex flex-col gap-2 justify-start w-[250px]">
              <h3 className="font-averiaLibre text-3xl font-semibold">
                Sarah Langley
              </h3>
              <p className="font-averiaSans">
                Psychology Senior Lecturer with over 10 years of experience
              </p>
              <img
                src="/Signature/signature1.png"
                alt="signature1"
                className="w-24"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <CarrouselTeamOne />

          <CarrouselTeamTwo />
        </div>
      </div>
    </div>
  );
};

export default Team;
