import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full">
      <div className="flex justify-end w-full relative px-8">
        <img
          src="/green-eclipse.png"
          alt="green-eclipse"
          className="z-0 absolute"
        />
        <img
          src="/orange-eclipse.png"
          alt="orange-eclipse"
          className="z-10 absolute top-[3.7rem] right-[6rem]"
        />
        <img
          src="/parachute.png"
          alt="parachute"
          className="z-40 absolute top-[6rem] right-[8.5rem]"
        />
      </div>

      <main className="z-30 absolute w-full pt-60 flex flex-col justify-center items-center">
        <img src="/bg-footer.png" alt="bg-footer" className="w-full relative" />

        <h3 className="text-green py-5 font-semibold">
          © 2023 Edufy by Revise Online All Rights Reserved.{" "}
        </h3>

        <div className="z-40 absolute flex flex-col w-full px-44 py-36 gap-28">
          <div className="flex flex-col items-start gap-24">
            <h1 className="text-6xl font-averia font-semibold text-white">
              Ready for a surprise?
            </h1>
            <button className="bg-yellow font-averia inline-flex px-5 py-3 justify-center items-center border-3 border-black rounded-full text-black text-4xl font-bold shadow-[0px_3px_0_0_black] active:shadow-none transition-all active:translate-y-1 ">
              Let's do it!
            </button>
          </div>

          <div className="flex justify-between items-center">
            <img src="/white-logo.png" alt="white logo" />
            <div className="flex gap-3">
              <Link href="#">
                <img
                  src="/icons/facebook-icon.png"
                  alt="icon-facebook"
                  className="w-10 opacity-75 hover:opacity-100 transition-all"
                />
              </Link>
              <Link href="#">
                <img
                  src="/icons/linkedin-icon.png"
                  alt="icon-linkedin"
                  className="w-10 opacity-75 hover:opacity-100 transition-all"
                />
              </Link>
              <Link href="#">
                <img
                  src="/icons/twitter-icon.png"
                  alt="icon-twitter"
                  className="w-10 opacity-75 hover:opacity-100 transition-all"
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
