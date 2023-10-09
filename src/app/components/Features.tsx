const Features = () => {
  return (
    <div className="flex flex-col py-48 gap-48 items-center w-full text-center">
      <h2 className="text-7xl font-averia font-bold tracking-wide">
        How it works?
      </h2>

      <div className="flex justify-around w-full">
        <div>
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
          <div>
            <h3 className="font-averia text-xl">Browse</h3>
            <p className="font-averiaSans text-dark">
              Feel free to look around, explore the platform, and decide if you
              like what you see.
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Features;
