const Features = () => {
  return (
    <div className="flex flex-col py-48 gap-28 items-center w-full text-center">
      <h2 className="text-7xl font-averia font-bold tracking-wide pb-16">
        How it works?
      </h2>
      
      <div className="flex w-full items-start justify-around z-0 relative">
        <div className="flex flex-col gap-16">
          <div className="flex justify-center items-center">
            <img
              src="/irregular-circle.png"
              alt="irregular circle"
              className="z-0 relative"
            />
            <h2 className="z-10 absolute text-6xl font-semibold font-averia text-white">
              01
            </h2>
          </div>
          <div className="w-[255px] flex flex-col gap-2">
            <h3 className="font-averia text-2xl font-semibold tracking-wider">
              Browse
            </h3>
            <p className="font-averiaSans font-semibold text-dark">
              Feel free to look around, explore the platform, and decide if you
              like what you see.
            </p>
          </div>
        </div>

        <img
          src="/up-lines.png"
          alt="up lines"
          className="z-10 absolute left-72 top-[-50px]"
        />

        <div className="flex flex-col gap-16">
          <div className="flex justify-center items-center">
            <img
              src="/irregular-circle.png"
              alt="irregular circle"
              className="z-0 relative"
            />
            <h2 className="z-10 absolute text-6xl font-semibold font-averia text-white">
              02
            </h2>
          </div>
          <div className="w-[255px] flex flex-col gap-2">
            <h3 className="font-averia text-2xl font-semibold tracking-wider">
              Sign Up
            </h3>
            <p className="font-averiaSans font-semibold text-dark">
              Just a very simple sign-up, nothing out of the ordinary: an email
              and a password, that's it!
            </p>
          </div>
        </div>

        <img
          src="/down-lines.png"
          alt="down lines"
          className="z-10 absolute right-72 bottom-32"
        />

        <div className="flex flex-col gap-16">
          <div className="flex justify-center items-center">
            <img
              src="/irregular-circle.png"
              alt="irregular circle"
              className="z-0 relative"
            />
            <h2 className="z-10 absolute text-6xl font-semibold font-averia text-white">
              03
            </h2>
          </div>
          <div className="w-[255px] flex flex-col gap-2">
            <h3 className="font-averia text-2xl font-semibold tracking-wider">
              Enjoy
            </h3>
            <p className="font-averiaSans font-semibold text-dark">
              Now you’ll have full access to our entire platform and we hope you
              benefit from it!
            </p>
          </div>
        </div>
      </div>

      <button className="border px-4 py-4 text-xl font-semibold font-averia rounded-full hover:shadow-lg shadow-black">
        🥳 Sign me Up Already!
      </button>
    </div>
  );
};

export default Features;
