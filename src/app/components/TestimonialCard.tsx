import { useState } from "react";
import { cardUsers } from "../mocks/cardUsers";

const TestimonialCard = () => {
  const [user, setUser] = useState(cardUsers[0]);

  const handleNext = () => {
    const index = cardUsers.indexOf(user);
    if (index === cardUsers.length - 1) {
      setUser(cardUsers[0]);
    } else {
      setUser(cardUsers[index + 1]);
    }
  }

  const handlePrevious = () => {
    const index = cardUsers.indexOf(user);
    if (index === 0) {
      setUser(cardUsers[cardUsers.length - 1]);
    } else {
      setUser(cardUsers[index - 1]);
    }
  }

  return (
    <div className="flex z-0 h-full relative flex-col items-center">
      <img
        src="/card-texture.png"
        alt="card texture"
        className="bg-orange rounded-[100px] w-[34rem] h-[44rem] z-10 relative"
      />

      <div className="bg-[#006b6028] rounded-[100px] w-[30rem] h-[40rem] -z-10 absolute rotate-[8.5deg] -right-10 bottom-0" />

      <div className="bg-[#006b601d] rounded-[100px] w-[30rem] h-[37rem] -z-20 absolute rotate-[15deg] -right-14 bottom-0" />

      <div className="flex flex-col gap-16 z-20 absolute text-white h-full justify-center items-center">
        <h2 className="text-4xl font-averia font-semibold text-center tracking-[0.05em] leading-[1.6em] px-20">
          "Edufy Helped me a lot in deciding where I want to send my kids to
          school. It's worth a try!"
        </h2>

        <div className="flex gap-4 justify-center items-center">
          <img src="/avatar-card.png" alt="avatar" className="rounded-full" />
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl">Ameila Brown</h4>
            <h5>Single Mother</h5>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <button onClick={handlePrevious} className="text-xl hover:text-black">Previous</button>
          <img src="/long-arrow.png" alt="long arrow" />
          <button onClick={handleNext} className="text-xl hover:text-black">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
