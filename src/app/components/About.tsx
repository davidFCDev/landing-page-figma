const About = () => {
  return (
    <div className="flex bg-palid text-white font-averia w-full justify-center items-center z-0 relative py-20 rounded-[200px]">
      <img src="/map.png" alt="map" className="z-40 absolute left-10 top-10"/>

      <div className="flex flex-col gap-6 items-center justify-center text-center bg-orange rounded-full w-[700px] p-28 tracking-wide">
        <h1 className="text-6xl font-semibold">About</h1>
        <p className="text-xl leading-9">
          Edufy is a comprehensive digital platform designed to guide parents,
          students, and educators through Australia's educational landscape.
          Starting in WA as a proof-of-concept, we aim to scale nationally.
          Offering data-driven insights, school ratings, scholarship info, and
          more, Edufy is built by Revise Online to empower your educational
          journey.
        </p>
        <button className="border border-white text-xl px-5 py-3 rounded-full hover:border-palid">See our Story</button>
      </div>

      <img src="/down-arrow.png" alt="down arrow" className="z-40 absolute right-52 top-32"/>
      <img src="/kangoo.png" alt="kangoo" className="z-40 absolute right-10 bottom-10"/>
    </div>
  );
};

export default About;
