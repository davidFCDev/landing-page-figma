const Services = () => {
  return (
    <div className="w-full flex">
      <img
        src="/texture-bg.png"
        alt="bg-texture"
        className="w-full bg-green z-0 rounded-b-[200px] relative"
      />

      <div className="z-30 absolute flex flex-col w-full justify-center items-center gap-20">
        <div className="text-center flex flex-col gap-4">
          <h4 className="font-rubik text-gray2 uppercase font-semibold tracking-[.3em]">
            OUR SERVICES
          </h4>
          <h1 className="font-averia font-bold text-8xl text-white">
            What we offer
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="flex items-start gap-4 w-[400px] p-4">
            <img src="/Icons/info-icon.png" alt="info-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-4xl font-averia font-semibold tracking-wider">Information</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[400px]">
            <img src="/Icons/hand-icon.png" alt="hand-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-4xl font-averia font-semibold tracking-wider">Support</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[400px]">
            <img src="/Icons/book-icon.png" alt="book-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-4xl font-averia font-semibold tracking-wider">Guidance</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 w-[400px]">
            <img src="/Icons/question-icon.png" alt="question-icon" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-4xl font-averia font-semibold tracking-wider">Education</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
