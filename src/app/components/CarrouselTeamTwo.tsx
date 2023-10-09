const CarrouselTeamTwo = () => {
  return (
    <div className="flex items-center justify-center gap-8 relative left-20 font-averia">
      <div className="bg-palid2 w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]">
        <img src="/avatar.png" alt="avatar" className="" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Debra</h3>
          <p className=" text-gray3">Methodist College Student</p>
        </div>
      </div>
      <div className="bg-palid2 w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]">
        <img src="/avatar.png" alt="avatar" className="" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Leslie</h3>
          <p className="text-gray3">Medical Assistant</p>
        </div>
      </div>
      <div className="bg-palid2 w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]">
        <img src="/avatar.png" alt="avatar" className="" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Mitchell</h3>
          <p className="text-gray3">Australian Islamic Student</p>
        </div>
      </div>
      <div className="bg-palid2 w-[26rem] h-[9.25rem] flex gap-4 px-5 justify-start items-center rounded-[2em]">
        <img src="/avatar.png" alt="avatar" className="" />
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-semibold">Khurram</h3>
          <p className="text-gray3">Australian College Student</p>
        </div>
      </div>
    </div>
  );
};

export default CarrouselTeamTwo;