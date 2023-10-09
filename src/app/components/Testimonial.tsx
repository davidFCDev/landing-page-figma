import { url } from "inspector";

const Testimonial = () => {
  return (
    <div className="flex gap-10 px-20 py-48 justify-center items-center">
      <div className="flex flex-col gap-4 w-[40%]">
        <h3 className="text-green font-bold text-2xl tracking-[0.3em]">
          TESTIMONIALS
        </h3>
        <h1 className="text-6xl font-bold leading-[1.3em] tracking-wide">
          Our community loves Edufy
        </h1>
        <p className="text-xl text-dark font-semibold">
          In recent times, there has been a notable shift as people increasingly
          embrace and prioritize education of their children.
        </p>
        <div className="flex gap-1 items-center">
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <p className="font-bold">4.9/5</p>
          <p>(4500+ Reviews)</p>
        </div>
      </div>

      <div className="flex z-0 h-full relative flex-col items-center">
        <img
          src="/card-texture.png"
          alt="card texture"
          className="bg-orange rounded-[100px] w-[34rem] h-[44rem] z-10 relative"
        />

        <div className="bg-[#006b6028] rounded-[100px] w-[30rem] h-[40rem] -z-10 absolute rotate-[8.5deg] -right-10 bottom-0"/>

        <div className="bg-[#006b601d] rounded-[100px] w-[30rem] h-[37rem] -z-20 absolute rotate-[15deg] -right-14 bottom-0"/>


        <div className="flex flex-col gap-16 z-20 absolute text-white h-full justify-center items-center">
          <h2 className="text-3xl font-averiaLibre font-semibold text-center tracking-[0.16em] leading-[2em] px-24">
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
            <p className="text-xl">Previous</p>
            <img src="/long-arrow.png" alt="long arrow" />
            <p className="text-xl">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
