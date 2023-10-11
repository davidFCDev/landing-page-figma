const Features = () => {
  return (
    <div className="flex flex-col py-32 lg:py-48 gap-12 sm:gap-16 lg:gap-28 items-center w-full text-center">
      <h2 className="text-5xl lg:text-7xl font-averia font-bold tracking-wide pb-16">
        How it works?
      </h2>

      <div className="flex w-full items-start justify-around z-0 relative">
        <div className="flex flex-col gap-10 sm:gap-16">
          <div className="flex justify-center items-center">
            <img
              src="/irregular-circle.png"
              alt="irregular circle"
              className="z-0 relative w-16 sm:w-28 lg:w-36"
            />
            <h2 className="z-10 absolute text-3xl sm:text-4xl lg:text-6xl font-semibold font-averia text-white">
              01
            </h2>
          </div>
          <div className="w-[110px] sm:w-[200px] lg:w-[255px] flex flex-col gap-2">
            <h3 className="font-averia text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wider">
              Browse
            </h3>
            <p className="font-averia text-[10px] sm:text-[14px] lg:text-[17px] font-semibold text-dark">
              Feel free to look around, explore the platform, and decide if you
              like what you see.
            </p>
          </div>
        </div>

        <img
          src="/up-lines.png"
          alt="up lines"
          className="z-10 absolute left-20 sm:left-36 lg:left-72 -top-[24px] sm:-top-[65px] lg:top-[-50px] w-[100px] sm:w-[240px] lg:w-[380px]"
        />

        <div className="flex flex-col gap-10 sm:gap-16">
          <div className="flex justify-center items-center">
            <img
              src="/irregular-circle.png"
              alt="irregular circle"
              className="z-0 relative w-16 sm:w-28 lg:w-36"
            />
            <h2 className="z-10 absolute text-3xl sm:text-4xl lg:text-6xl font-semibold font-averia text-white">
              02
            </h2>
          </div>
          <div className="w-[110px] sm:w-[200px] lg:w-[255px] flex flex-col gap-2">
            <h3 className="font-averia text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wider">
              Sign Up
            </h3>
            <p className="font-averia text-[10px] sm:text-[14px] lg:text-[17px] font-semibold text-dark">
              Just a very simple sign-up, nothing out of the ordinary: an email
              and a password, that's it!
            </p>
          </div>
        </div>

        <img
          src="/down-lines.png"
          alt="down lines"
          className="z-10 absolute right-20 sm:right-36 lg:right-72 bottom-28 lg:bottom-32 w-[100px] sm:w-[240px] lg:w-[380px]"
        />

        <div className="flex flex-col gap-10 sm:gap-16">
          <div className="flex justify-center items-center">
            <img
              src="/irregular-circle.png"
              alt="irregular circle"
              className="z-0 relative w-16 sm:w-28 lg:w-36"
            />
            <h2 className="z-10 absolute text-3xl sm:text-4xl lg:text-6xl font-semibold font-averia text-white">
              03
            </h2>
          </div>
          <div className="w-[110px] sm:w-[200px] lg:w-[255px] flex flex-col gap-2">
            <h3 className="font-averia text-lg sm:text-2xl lg:text-3xl font-semibold tracking-wider">
              Enjoy
            </h3>
            <p className="font-averia text-[10px] sm:text-[14px] lg:text-[17px] font-semibold text-dark">
              Now you’ll have full access to our entire platform and we hope you
              benefit from it!
            </p>
          </div>
        </div>
      </div>

      <button className="border px-4 py-2 lg:py-4 text-lg lg:text-xl font-semibold font-averia rounded-full hover:shadow-lg shadow-black">
        🥳 Sign me Up Already!
      </button>
    </div>
  );
};

export default Features;
