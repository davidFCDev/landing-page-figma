const HeroVector = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        src="/semicircle-texture.png"
        alt="semicircle-texture"
        className="w-full bg-green rounded-t-full relative z-0 border-t"
      />
      <img src="/lightbulb.png" alt="lightbulb" className="z-30 absolute pt-20 sm:pl-8 w-[200px] sm:w-[540px]" />
    </div>
  );
};

export default HeroVector;
