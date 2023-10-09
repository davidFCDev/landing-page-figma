const CarrouselTeamOne = () => {
  return (
    <div className="flex items-center justify-center gap-5 relative -left-20 font-averia">
      <div className="bg-palid2 w-[21.1rem] h-[9.25rem] flex gap-4 justify-center items-center rounded-xl">
        <img src="/avatar.png" alt="avatar" className="" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Esther</h3>
          <p className="text-lg text-gray3">Medical Assistant</p>
        </div>
      </div>
      <div className="bg-palid2 w-[21.1rem] h-[9.25rem] flex justify-center items-center rounded-xl">
        <img src="/Logos/logo1.png" alt="logo1" className="" />
      </div>
      <div className="bg-palid2 w-[21.1rem] h-[9.25rem] flex justify-center items-center rounded-xl">
        <img src="/Logos/logo2.png" alt="logo2" className="" />
      </div>
      <div className="bg-palid2 w-[21.1rem] h-[9.25rem] flex justify-center items-center rounded-xl">
        <img src="/Logos/logo3.png" alt="logo3" className="" />
      </div>
    </div>
  );
};

export default CarrouselTeamOne;
