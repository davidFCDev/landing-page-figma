import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full">
      <div className="flex justify-end w-full relative px-8">
        <img
          src="/green-eclipse.png"
          alt="green-eclipse"
          className="z-0 absolute w-[200px] sm:w-[670px]"
        />
        <img
          src="/orange-eclipse.png"
          alt="orange-eclipse"
          className="z-10 absolute top-[1.3rem] sm:top-[4.2rem] right-[3.3rem] sm:right-[6rem] w-[155px] sm:w-[540px]"
        />
        <img
          src="/parachute.png"
          alt="parachute"
          className="z-40 absolute top-[2.1rem] sm:top-[6rem] right-[4.2rem] sm:right-[8.5rem] w-[120px] sm:w-[420px]"
        />
      </div>

      <main className="z-30 absolute w-full pt-20 sm:pt-60 flex flex-col justify-center items-center">
        <img src="/bg-footer.png" alt="bg-footer" className="w-full relative h-[260px] sm:h-[600px]" />

        <h3 className="text-green py-5 font-semibold text-xs sm:text-xl text-center">
          © 2023 Edufy by Revise Online All Rights Reserved.{" "}
        </h3>

        <div className="z-40 absolute flex flex-col justify-around sm:justify-center h-[180px] sm:h-[600px] w-full px-10 sm:px-44 gap-6 sm:gap-28">
          <div className="flex flex-col items-start gap-5 sm:gap-24 w-[200px] sm:w-full">
            <h1 className="text-2xl sm:text-6xl font-averia font-semibold text-white">
              Ready for a surprise?
            </h1>
            <button className="bg-yellow font-averia inline-flex px-3 sm:px-5 py-1 sm:py-3 justify-center items-center border-3 border-black rounded-full text-black text-xs sm:text-4xl font-bold shadow-[0px_3px_0_0_black] active:shadow-none transition-all active:translate-y-1 ">
              Let's do it!
            </button>
          </div>

          <div className="flex justify-between items-center">
            <img src="/white-logo.png" alt="white logo" className="w-20 sm:w-44"/>
            <div className="flex gap-1 sm:gap-3">
              <Link href="#">
                <img
                  src="/icons/facebook-icon.png"
                  alt="icon-facebook"
                  className="w-6 sm:w-10 opacity-75 hover:opacity-100 transition-all"
                />
              </Link>
              <Link href="#">
                <img
                  src="/icons/linkedin-icon.png"
                  alt="icon-linkedin"
                  className="w-6 sm:w-10 opacity-75 hover:opacity-100 transition-all"
                />
              </Link>
              <Link href="#">
                <img
                  src="/icons/twitter-icon.png"
                  alt="icon-twitter"
                  className="w-6 sm:w-10 opacity-75 hover:opacity-100 transition-all"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
