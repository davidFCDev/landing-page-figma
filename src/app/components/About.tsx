const About = () => {
  return (
    <div className="flex bg-palid text-white font-averia w-full justify-center items-center z-0 relative py-20 rounded-[40px] sm:rounded-[100px] lg:rounded-[200px]">
      <img
        src="/map.png"
        alt="map"
        className="z-40 absolute left-4 lg:left-10 top-4 lg:top-10 w-[100px] sm:w-[210px] lg:w-[380px]"
      />

      <div className="flex flex-col gap-3 sm:gap-6 items-center justify-center text-center bg-orange rounded-full w-[340px] sm:w-[420px] lg:w-[680px] p-10 sm:p-16 lg:p-28 tracking-wide">
        <h1 className="text-3xl lg:text-6xl font-semibold">About</h1>
        <p className="text-xs lg:text-xl leading-5 sm:leading-6 lg:leading-9">
          Edufy is a comprehensive digital platform designed to guide parents,
          students, and educators through Australia's educational landscape.
          Starting in WA as a proof-of-concept, we aim to scale nationally.
          Offering data-driven insights, school ratings, scholarship info, and
          more, Edufy is built by Revise Online to empower your educational
          journey.
        </p>
        <button className="border border-white text-sm lg:text-xl px-2 lg:px-5 py-1 lg:py-3 rounded-full hover:border-palid">
          See our Story
        </button>
      </div>

      <img
        src="/down-arrow.png"
        alt="down arrow"
        className="z-40 absolute right-10 sm:right-16 lg:right-52 top-10 sm:top-28 lg:top-32 w-10 sm:w-28 lg:w-40"
      />
      <img
        src="/kangoo.png"
        alt="kangoo"
        className="z-50 absolute right-1 lg:right-5 -bottom-1 lg:bottom-5 w-[150px] sm:w-[280px] lg:w-[420px]"
      />
    </div>
  );
};

export default About;
