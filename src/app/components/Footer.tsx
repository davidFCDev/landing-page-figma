const Footer = () => {
  return (
    <div className="flex relative w-full">
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

      <div className="z-30 absolute w-full pt-60 flex">
        <img src="/bg-footer.png" alt="bg-footer" className="w-full" />

        <div className="z-40 absolute flex flex-col w-full px-36 h-full ">

          <div className="flex flex-col items-start gap-16">
            <h1 className="text-6xl font-averia font-semibold">
              Ready for a surprise?
            </h1>
            <button className="bg-yellow inline-flex px-5 py-3 justify-center items-center border-3 border-black rounded-full text-black text-4xl font-bold shadow-[-4px_4px_0_0_black] focus:shadow-none transition-all focus:-translate-x-1 focus:translate-y-1">
              Let's do it!
            </button>
          </div>

          <div>
            <img src="/public/logo.png" alt="logo" />
            <div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
