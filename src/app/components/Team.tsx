import CarrouselTeamOne from "./CarrouselTeamOne";
import CarrouselTeamTwo from "./CarrouselTeamTwo";

const Team = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-28 py-40">
      <h1 className="text-6xl font-averiaLibre font-semibold w-[500px] text-center leading-[1.3em] tracli">
        You'll be in good company!
      </h1>

      <div className="flex flex-col items-center justify-center gap-20 w-full px-12">
        <div className="flex justify-around w-full">
          <div className="flex gap-6 justify-start items-center">
            <img src="/users/user1.png" alt="user1" className="rounded-full" />
            <div className="flex flex-col gap-2 justify-start w-[250px]">
              <h3 className="font-averiaLibre text-3xl font-semibold">
                David Hankin
              </h3>
              <p className="font-averiaSans">
                PE Studies Senior Lecturer with over 13 years of experience
              </p>
              <img
                src="/Signature/signature1.png"
                alt="signature1"
                className="w-24"
              />
            </div>
          </div>
          <div className="flex gap-6 justify-start items-center">
            <img src="/users/user2.png" alt="user2" className="rounded-full" />
            <div className="flex flex-col gap-2 justify-start w-[250px]">
              <h3 className="font-averiaLibre text-3xl font-semibold">
                David Hankin
              </h3>
              <p className="font-averiaSans">
                Chemistry teacher with a 16 years of teaching experience
              </p>
              <img
                src="/Signature/signature1.png"
                alt="signature1"
                className="w-24"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-start items-center">
          <img src="/users/user3.png" alt="user3" className="rounded-full" />
          <div className="flex flex-col gap-2 justify-start w-[250px]">
            <h3 className="font-averiaLibre text-3xl font-semibold">
              David Hankin
            </h3>
            <p className="font-averiaSans">
              Psychology Senior Lecturer with over 10 years of experience
            </p>
            <img
              src="/Signature/signature1.png"
              alt="signature1"
              className="w-24"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <CarrouselTeamOne />

          <CarrouselTeamTwo />
        </div>
      </div>
    </div>
  );
};

export default Team;
